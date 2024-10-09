import { Investor } from "./Investor.model";

export interface Investors{
responseData : Investor[],
totalRecords : number,
successTypeCode: string,
messageCode: string,
messageDescription: string
}
