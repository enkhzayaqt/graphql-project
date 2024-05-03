import knex from "../lib/db.js";

export async function getJobs(){
    return await knex.table('job')
}

export async function getJobById(id){
    return await knex.table('job').first().where({id})
}