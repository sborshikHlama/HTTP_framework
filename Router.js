module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    //Define request metod wich adds endpoints
    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path]

        // Check if endpoint is already exists
        if(endpoint[method]) {
            throw new Error(`[${method}] with path ${path} is already exists`)          
        }

        //Asign endpoint method to function wich respones on request
        endpoint[method] = handler
    }

    // Declare Rest API methods which use request method inside 
    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    } 
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }   
}


