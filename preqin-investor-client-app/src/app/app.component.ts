import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestorsComponent } from "./investors/investors.component";
import { CommitmentsComponent } from './commitments/commitments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvestorsComponent, CommitmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'preqin-investor-client-app';
}
