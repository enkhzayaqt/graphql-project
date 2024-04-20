import knex from "../lib/db.js";

export async function getJobs(){
    return await knex.table('job')
}