# Variables-Extra Nodes

Variables-Extra nodes are nodes that help more easier to manipulate variables.

- [Array Nodes](#1-array-nodes)
- [Object Nodes](#2-object-nodes)
- Working in Progress...

&nbsp;
&nbsp;

# 1. Array Nodes

## 🔲Range Node

---

Creates an array of numbers progressing from `min` to `max`.

```litegraph
{
  "title": "Range",
  "inputs": [
    { "label": "min" },
    { "label": "max" },
    { "label": "step" }
  ],
  "outputs": [{ "label": "array" }]
}
```

### ◽Location

`Variables` > `Array` > `Range`

### ◽Slots

#### Inputs

| Label    | Type     | Default Value | Description                            |
| -------- | -------- | ------------- | -------------------------------------- |
| **min**  | `number` | 0             | The start of the range                 |
| **max**  | `number` | 1             | The end of the range                   |
| **step** | `number` | 0.1           | The value to increment or decrement by |

#### Outputs

| Label     | Type    | Description                  |
| --------- | ------- | ---------------------------- |
| **array** | `array` | Returns the range of numbers |

#### Widgets

> Same as inputs

&nbsp;
&nbsp;

## 🔲Zip Node

---

Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

```litegraph
{
  "title": "Zip",
  "inputs": [
    { "label": "array" },
    { "label": "array" }
  ],
  "outputs": [{ "label": "array" }]
}
```

### ◽Location

`Variables` > `Array` > `Zip`

### ◽Slots

#### Inputs

| Label     | Type    | Default Value | Description               |
| --------- | ------- | ------------- | ------------------------- |
| **array** | `array` | -             | The Array to zip (first)  |
| **array** | `array` | -             | The Array to zip (second) |

#### Outputs

| Label     | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| **array** | `array` | Returns the new array of grouped elements |

### ◽Example

```js
// The first array
[1, 2, 3, 4]
// The second array
["a", "b", "c", "d"]

// Result array
[
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
]
```

&nbsp;
&nbsp;
&nbsp;

# 2. Object Nodes

## 🔲Merge Node

---

Merge two different objects. objects are applied from left to right. Subsequent sources overwrite property assignments of previous object.

```litegraph
{
  "title": "Merge",
  "inputs": [
    { "label": "object" },
    { "label": "object" }
  ],
  "outputs": [{ "label": "object" }]
}
```

### ◽Location

`Variables` > `Object` > `Merge`

### ◽Slots

#### Inputs

| Label      | Type     | Default Value | Description                  |
| ---------- | -------- | ------------- | ---------------------------- |
| **object** | `object` | -             | The object to merge (first)  |
| **object** | `object` | -             | The object to merge (second) |

#### Outputs

| Label      | Type     | Description                   |
| ---------- | -------- | ----------------------------- |
| **object** | `object` | Returns the new merged object |

### ◽Example

```js
// The first object
{ x: 1, y: 2 }
// The second object
{ y: 3, z: 4 }

// Result object
{ x: 1, y: 3, z: 4 }
```

## Source Code

Variables-Extra-Nodes is Open Source and You can see the code in [Github](https://github.com/DesingExpress/Variables-Extra-Nodes)

## License

Variables-Extra-Nodes is licensed under the [MIT License](https://opensource.org/licenses/MIT).
