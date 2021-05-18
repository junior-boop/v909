import {GraphQLClient} from 'graphql-request'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://api.npoint.io/36daa8aedbb827455eba'

export default new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
      }
})