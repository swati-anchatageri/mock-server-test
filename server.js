const JsonServer=require("json-server"); // Importing son server library
const server= JsonServer.create()
const router= JsonServer.router("db.json")
const middlewares=JsonServer.defaults()
const port = process.env.PORT || 3001 // you can use any port nater I chose to whe

server.use(middlewares)
server.use(router)
server.listen(port)