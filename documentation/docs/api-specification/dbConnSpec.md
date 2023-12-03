---
sidebar_position: 4
description: Database Connection Utility Module Specification Document
---
Database Connecttion Utility Module Spec
=============================
## Methods



### `createConnectionPoolLocal()`

#### `createConnectionPoolLocal() → {Object}`

Creates a connection pool for local database calls during testing.

##### Returns:

- MySQL connection pool object.

  **Type:** `Object`





### `createConnectionPoolCloud()`

#### `createConnectionPoolCloud() → {Object}`

Creates a connection pool for cloud database calls.

##### Returns:

- An object representing a MySQL connection pool.

  **Type:** `Object`







### `createPromiseConnectionPool()`

#### `createPromiseConnectionPool() → {Object}`

Creates a promise-based connection pool based on the specified environment flag.

##### Returns:

- A Promise-based MySQL connection pool.

  **Type:** `Object`
