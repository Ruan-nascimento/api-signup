import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'


// CommonJS => require - Padrão
// ESmodule => import/export



const server = http.createServer(async (request, response) => {
    const { method, url} = request


    await json(request, response)
    
    const route = routes.find(routes => {
        return routes.method=== method && routes.path.test(url)
    })

    if (route){
        const routeParams = req.url.match(rout.path )

       req.params = {...routeParams.groups}

        return route.handler(request, response)
    }
    
    return response.writeHead(404).end("Error 404 Not Found")

})

server.listen(3333)