import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Commitment } from '../Models/Commitment.model';
import { InvestorService } from '../investor.service';
import { CommonModule } from '@angular/common';
import { FormatCurrencyPipe } from '../shared/pipes/format-currency.pipe';

@Component({
  selector: 'app-commitments',
  standalone: true,
  imports: [CommonModule, FormatCurrencyPipe],
  templateUrl: './commitments.component.html',
  styleUrls: ['./commitments.component.scss']
})
export class CommitmentsComponent implements OnChanges {
  @Input() investorId: number | null = null; // Input property to receive investor ID
  commitments: Commitment[] = [];
  filteredCommitments: Commitment[] = [];
  loading = true;
  error: string | null = null;
  selectedAssetClass: string = '';

  constructor(private investorService: InvestorService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['investorId'] && this.investorId !== null) {
      this.fetchInvestorCommitments(this.investorId);
    }
  }

  private fetchInvestorCommitments(investorId: number): void {
    this.loading = true;
    this.investorService.getInvestorCommitments(investorId).subscribe({
      next: (response) => {
        this.commitments = response.responseData;
        this.filteredCommitments = this.commitments; // Initialize filteredCommitments
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }

  // Function to get unique asset classes from commitments
  getAssetClasses(): string[] {
    const assetClasses = new Set(this.commitments.map(c => c.commitmentAssetClass));
    return ['All', ...Array.from(assetClasses)];
  }

  // When Asset Class box is clicked
  onAssetClassClick(assetClass: string) {
    this.selectedAssetClass = assetClass === 'All' ? '' : assetClass;
    this.filterCommitments();
  }

  // Filter commitments based on the selected Asset Class
  private filterCommitments() {
    if (this.selectedAssetClass) {
      this.filteredCommitments = this.commitments.filter(c => c.commitmentAssetClass === this.selectedAssetClass);
    } else {
      this.filteredCommitments = this.commitments; // Reset to all if "All" is selected
    }
  }

  // Calculate total commitment for the filtered asset class
  get totalCommitment(): number {
    return this.filteredCommitments.reduce((sum, c) => sum + c.commitmentAmount, 0);
  }

  // Get total commitment amount for a specific asset class
  getTotalForAssetClass(assetClass: string): number {
    return this.commitments
      .filter(c => c.commitmentAssetClass === assetClass)
      .reduce((sum, c) => sum + c.commitmentAmount, 0);
  }
}
