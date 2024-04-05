import { gql } from "@apollo/client";



export const CREATE_STUDENT = gql`

mutation StudentMutation( $title: String!, $photo: String!){
  createStudent(title: $title, photo: $photo) {
    id,
    title,
    photo
  }
}

`


export const UPDATE_STUDENT = gql`
mutation updateStudent($updatedStudentId: ID!, $title: String!, $photo: String!){
  updatedStudent(id: $updatedStudentId, title: $title, photo: $photo) {
    id,
    title,
    photo
  }
}

`