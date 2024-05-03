import { getJobs } from "./controllers/jobs.js";
import { getCompanyById } from "./controllers/company.js";

export const resolvers = {
    Query: {
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        }
    },

    Job: {
        date: (root) =>{
            return root.createdAt.slice(0,10);
        } ,
        company: async (root)=>{
            return await getCompanyById(root.companyId)
        }
    }
}