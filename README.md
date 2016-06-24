# Localoose
Localoose is a simple localStorage Object Data Mapping (ODM)

## Installation
### Install with npm
```
npm install <package>
```
### Install manually
```
<script src="path/to/localoose.js"></script>
```
# Overview

## Get started
```javascript
var localoose = new Localoose();
```

## Defining a Schema
We define schema like that `localoose.Schema();`

Example:

```javascript
var MySchema = localoose.Schema({
    name: String,
    lastName: String,
    age: {
        type: Number,
        required: true
    }
});
```

## Defining a Model
We define model like that `localoose.Model('ModelName', MySchema);`

Example

```javascript
var MyModel = localoose.Model('ModelName', MySchema);
```

### Accessing a Model
Once we have our model, we can then instantiate it passing to constructor the values:

```javascript
var instance = new MyModel({
    name: "John",
    lastName: "Lee",
    age: 22
});
```

## Schema Types
| Type  | Supported values  | Default value  |
|---|---|---|
| Required  | Boolean  | False  |
| Min  | Number  | Null  |
| Max  | Number  | Null  |
| Default | Not empty value  | Null  |

## Methods

### find();

### findById();

### update();

### findOne();

### delete();