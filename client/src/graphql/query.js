import {gql} from "@apollo/client"

export const GET_ALL_STUDENT = gql`

query StudentQuery {
  students {
    id,
    title,
    photo
  }

}

` 