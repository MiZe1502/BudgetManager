import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const options = {
	link: new HttpLink({
		uri: 'http://localhost:5050/graphql'
	}),
	cache: new InMemoryCache()
}
const client = new ApolloClient(options)

export default client
