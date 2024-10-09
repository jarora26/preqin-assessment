export interface BaseResponse<T> {
  messageCode: string | null;
  messageDescription: string | null;
  successTypeCode: string;
  totalRecords: number | null;
  responseData: T;
}
