import { BaseResponse } from "./BaseResponse.model";

export interface Commitment {
  commitmentAmount: number;
  commitmentAssetClass: string;
  commitmentCurrency: string;
  commitmentId: number;
  investorId: number;
}
export type GetInvestorCommitmentsResponse = BaseResponse<Commitment[]>;
