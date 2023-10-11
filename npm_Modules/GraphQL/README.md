# GraphQL

## What is GraphQL?

GraphQL is an open-source query language for APIs and a runtime for executing those queries with your existing data. It was developed by Facebook and has gained 
popularity in recent years due to its flexible and efficient nature.

## Installation:

Using npm:
  ```
    npm install --save graphql
  ```

## Features:

- **Declarative Data Fetching:** GraphQL allows you to specify exactly what data you need in your query. This enables more efficient data fetching, as you can
  retrieve only the required data, reducing network overhead and improving performance.
- **Hierarchical Structure:** GraphQL follows a hierarchical structure, allowing you to query related data in a single request. This eliminates the problem of
  over-fetching or under-fetching data that is common in traditional RESTful APIs, providing more flexibility and reducing the number of API calls.
- **Strong Typing System:** GraphQL has a strong typing system, which means you can define the shape and structure of your API's data using a schema. This provides
  clarity and ensures that clients receive predictable and validated responses, reducing the chances of errors and miscommunication between the server and client.
- **Real-time Capabilities:** GraphQL supports real-time updates through subscriptions. With subscriptions, clients can receive real-time data updates from the
  server, making it ideal for applications that require live data. This feature enables the development of interactive and real-time applications like chat, notifications,
  and collaborative tools.
