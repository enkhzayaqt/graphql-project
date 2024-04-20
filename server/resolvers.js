import { getJobs } from "./controllers/jobs";

export const resolvers = {
    Query: {
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        }
    }
}