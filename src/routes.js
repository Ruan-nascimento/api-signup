import { request } from 'node:http'
import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutPath } from './utils/build-route.js'

const Database_ = new Database()

export const routes = [
    {

    method: 'GET',
    path: buildRoutPath('/users'),
    handler: (request, response) => {
        const users = Database_.select('users')

        return response.end(JSON.stringify(users))
    }
},
{
    method: 'POST',
    path: buildRoutPath('/users'),
    handler: (request, response) => {
        
        const {nome, email} = request.body

        const users = {
            id: randomUUID(),
            nome,
            email,
        }

        Database_.insert("users", users)

        return response.writeHead(201).end()
    }
    
},
{
    method: "DELETE",
    path: buildRoutPath("/users/:id"),
    handler: (request, response) =>{
        console.log(request.params)
    }
}]