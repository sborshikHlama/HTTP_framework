//This file creates app object wich uses metods from framework
const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter()
        this.server = this._createServer()
        this.middlewares = []
    }

    //Method for using fuctions from middleware
    use(middleware) {
        this.middlewares.push(middleware)
    }

    //Method for listenining port
    listen(port, callback) {
        this.server.listen(port, callback)
    }

    
    //Add endpoint from router and call handler

    // endpoint = {
    //     `/users`: {
    //         'GET': hadler
    //     }
    // }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach(method => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method]
                    handler(req, res)
                })
            })
        })       
    }

    //Create sever
    _createServer() {
        return http.createServer((req, res) => {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk
            })

            req.on('end', () => {
                if(body) {
                    req.body = JSON.parse(body)
                }
            })
            //Loop for all functions from middleware and call them
            this.middlewares.forEach(middleware => middleware(req, res))
            const emitted = this.emitter.emit(
                this._getRouteMask(req.pathname, req.method), req, res)
            if(!emitted) {
                res.end()
            }
        })      
    }

    //Get path and method from router
    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`    
    }
}