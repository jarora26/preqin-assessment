import { BaseResponse } from "./BaseResponse.model";

export interface Investor {
  investorId: number;
  name: string;
  investorCountry: string;
  investorDateAdded: string;
  investorLastUpdated: string;
  investorName: string;
  investorType: string;
  totalCommitments: number;
}

export type GetInvestorsResponse = BaseResponse<Investor[]>;
