import { getJobs, getJobById} from "./controllers/jobs.js";
import { getCompanyById } from "./controllers/company.js";

export const resolvers = {
    Query: {
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        },
        job: async (root, {id})=> {
            const job = await getJobById(id);
            return job;
        },
        company: async (root, {id}) => {
            const company = await getCompanyById(id);
            return company;
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