import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../investor.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { GetInvestorsResponse, Investor } from '../Models/Investor.model';
import { CommitmentsComponent } from '../commitments/commitments.component';
import { FormatCurrencyPipe } from '../shared/pipes/format-currency.pipe';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, CommitmentsComponent, FormatCurrencyPipe],
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {
  responseModel:GetInvestorsResponse | undefined;
  investorList: Investor[] = [];
  loading = true;
  error: string | null = null;
  selectedInvestorId: number | null = null;

  constructor(private investorService: InvestorService) {}

  ngOnInit(): void {
    this.investorService.getInvestors().subscribe({
      next: (response) => {
        this.responseModel = response;
        this.investorList = response.responseData;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }

  selectInvestor(investorId: number): void {
    this.selectedInvestorId = investorId;
  }
}
