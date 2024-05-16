import { gql, GraphQLClient } from 'graphql-request'

export async function getJobs(){
    const query = gql`
    query getJobs {
        jobs{
            id
            title
            description
            company{
                id
                name
            }
        }
    }
`

    const client = new GraphQLClient('http://localhost:9000/graphql')
    const data = await client.request(query);
    return data.jobs;
}

