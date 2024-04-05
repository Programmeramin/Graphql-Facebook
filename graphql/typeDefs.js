export const typeDefs = `#graphql 

type Student {
    id : ID!,
    name : String!
    title : String!
    photo : String!
    status : Boolean
    trash : Boolean
    createdAt : String
    updatedAt : String

}

  type Query {
    students : [Student]
  },

  type Mutation {
      createStudent (title : String! photo : String!) : Student

      updatedStudent (id : ID!, title : String! photo : String!) : Student

  }  



`