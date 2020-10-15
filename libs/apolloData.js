import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';


export default withApollo(
    
    ({ initialState, ctx }) => {
        return new ApolloClient({
           
            ssrMode: Boolean(ctx),
            link: ApolloLink.from([
                onError(({ graphQLErrors, networkError }) => {
                    if (graphQLErrors)
                        graphQLErrors.map(({ message, locations, path }) =>
                            console.log(
                                `[GraphQL error ]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                            ),
                        );
                    if (networkError) console.log(`[Network error]: ${networkError}`);
                }),
                new HttpLink({
                    uri: process.env.GRAPH_URI,
                    credentials: 'same-origin',
                    headers: {
                        authorization: "3cbab6ed12ec365ab502940bbe69ac747228224ec589f17b722adbf2e0fa841b",
                    },
                    fetch,
                })

            ]),

            cache: new InMemoryCache().restore(initialState || {})
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        }
    }
);


