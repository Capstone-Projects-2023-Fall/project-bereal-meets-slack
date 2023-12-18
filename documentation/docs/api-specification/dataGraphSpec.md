---
sidebar_position: 6
---
Data Graph Utility Module Spec
=============================
**Methods**

### `fetchDataForGraph(guildId)`

#### `fetchDataForGraph(guildId) → {Promise.<Array<Object>>}`

Fetches data for generating a graph based on reactions in a guild.

##### Parameters:

| Name      | Type   | Description                              |
|-----------|--------|------------------------------------------|
| `guildId` | string | The ID of the Discord guild.              |

##### Returns:

- A promise that resolves to an array of objects containing `prompt_text` and `num_reactions`.

  **Type:** `Promise.<Array<Object>>`


### `generateGraph(data)`

#### `generateGraph(data) → {Promise.<Buffer>}`

Generates a bar chart graph using Chart.js based on the provided data.

##### Parameters:

| Name  | Type   | Description                                |
|-------|--------|--------------------------------------------|
| `data`| Array  | An array of objects with `prompt_text` and `num_reactions`. |

##### Returns:

- A Promise that resolves to a Buffer containing the rendered graph image.

  **Type:** `Promise.<Buffer>`