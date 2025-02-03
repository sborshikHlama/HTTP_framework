# HTTP Framework

Just a simple framework for working with HTTP in Node.js

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction

HTTP Framework is a lightweight and easy-to-use framework for handling HTTP requests and responses in Node.js. It simplifies the process of building web servers and APIs, allowing developers to focus on writing business logic.

## Features

- Easy-to-use API
- Lightweight and fast
- Supports middleware
- Built-in routing
- Error handling

## Installation

To install HTTP Framework, use npm:

```bash
npm install http-framework
```

Usage
Here's a basic example of how to use the HTTP Framework:
```
const httpFramework = require('http-framework');

const app = httpFramework();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Public code references from 1 repository
API Reference
app.use(middleware)
Adds a middleware function to the application.

middleware (Function): The middleware function to add.
app.get(path, handler)
Defines a route handler for GET requests.

path (String): The path for the route.
handler (Function): The function to handle the request.
app.post(path, handler)
Defines a route handler for POST requests.

path (String): The path for the route.
handler (Function): The function to handle the request.
app.listen(port, callback)
Starts the server and listens on the specified port.

port (Number): The port to listen on.
callback (Function): A function to execute when the server starts.
Contributing
We welcome contributions! Please read our contributing guidelines for more details.

License
This project is licensed under the MIT License - see the LICENSE file for details.

