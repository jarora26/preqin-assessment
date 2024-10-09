import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetInvestorCommitmentsResponse } from './Models/Commitment.model';
import { Apollo } from 'apollo-angular';
import { GET_COMMITMENTS, GET_INVESTORS } from './graphql/queries';
import { ApolloQueryResult } from '@apollo/client/core';
import { Investors } from './Models/Response.model';
import { map } from 'rxjs/operators';
import { GetInvestorsResponse } from './Models/Investor.model';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {
  constructor(private apollo: Apollo) {}

  getInvestors(): Observable<GetInvestorsResponse> {
    return this.apollo.query<{ investors: GetInvestorsResponse }>({
      query: GET_INVESTORS,
    }).pipe(map(result=> result.data.investors)
  );
  }

  getInvestorCommitments(investorId: number): Observable<GetInvestorCommitmentsResponse> {
    return this.apollo.query<{ investorCommitments: GetInvestorCommitmentsResponse }>({
      query: GET_COMMITMENTS,
      variables: { investorId },
    }).pipe(
      map(result => result.data.investorCommitments)
    );
  }
}
