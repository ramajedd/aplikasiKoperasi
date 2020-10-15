import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
    
    

    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: process.env.GRAPH_URI, 
            credentials: 'same-origin', 
            headers: {
                authorization: "3cbab6ed12ec365ab502940bbe69ac747228224ec589f17b722adbf2e0fa841b",
              },
            fetch,
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}
