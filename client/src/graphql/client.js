import {ApolloClient, InMemoryCache} from "@apollo/client";


export const client = new ApolloClient({
    uri : "http://localhost:6060",
    cache : new InMemoryCache(),
})