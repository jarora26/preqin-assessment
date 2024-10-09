import { gql } from 'apollo-angular';

export const GET_INVESTORS = gql`
 query {
 investors {
    totalRecords
    successTypeCode
    messageCode
    messageDescription
     responseData {
      investorCountry
      investorDateAdded
      investorId
      investorName
      investorType
      totalCommitments
    }
  }
}
`;

export const GET_COMMITMENTS = gql`
  query GetInvestorCommitments($investorId: Int!) {
    investorCommitments(investorId: $investorId) {
      messageCode
      messageDescription
      successTypeCode
      totalRecords
      responseData {
        commitmentAmount
        commitmentAssetClass
        commitmentCurrency
        commitmentId
        investorId
      }
    }
  }
`;
