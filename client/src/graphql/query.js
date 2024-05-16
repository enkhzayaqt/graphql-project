import { gql, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:9000/graphql')

// gor home-page
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
    const {jobs} = await client.request(query);
    return jobs;
}

// for job-page
export async function getJobById(id){
    const query = gql`
        query getJob($jobId: ID!){
            job(id: $jobId ) {
                id
                title
                description
                date
                company {
                    id
                    name
                }
            }
        }
    `
    const {job} = await client.request(query, {jobId:id});
    return job;
}

