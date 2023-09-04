import { gql } from "@apollo/client";

export const GET_BOARDS = gql`
  query getUser($owner: String!) {
    getAllBoardsFromUser(input: { owner: $owner }) {
      id
      title
      description
      tasks {
        id
        title
        description
        storyPoints
        acceptanceCriteria
        label
        dueDate
      }
    }
  }
`;
