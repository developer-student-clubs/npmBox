# Fastify

## What is Fastify ?
Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. 

## Install:
To install Fastify in an existing project as a dependency install with npm:
```
    npm i fastify
```

## Feature of Fastify:
* Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 76+ thousand requests per second.
* Extendible: Fastify is fully extensible via its hooks, plugins and decorators.
* Schema based: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function.
* Logging: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
* Developer friendly: the framework is built to be very expressive and help the developer in their daily use, without sacrificing performance and security.