# Localoose
Localoose is a simple localStorage Object Data Mapping (ODM)
**-> Still under development**

## Installation
### Install with npm
```
npm install <package>
```
### Install manually
```javascript
<script src="path/to/localoose.js"></script>
```
# Overview

## Getting started
```javascript
var localoose = new Localoose();
```

## Defining a Schema
We define schema like this `localoose.Schema();`

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
We define model like this `localoose.Model('ModelName', MySchema);`

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
# Doc
## Schema Types
`String`, `Number`, `Date`, `Boolean` and `Array`

Example:

```javascript
localoose.Schema({
    field: String,
    field: Number,
    field: Date,
    field: {
        type: Boolean
    },
    field: {
        type: Array
    }
});
```

## Schema Validator Types
| Type  | Supported values  | Default value  | Description |
|---|---|---|----|
| Required  | Boolean  | False  | Validate field as required |
| Min  | Number or Array  | Null  | Validate a minimum value for the field |
| Max  | Number or Array  | Null  | Validate a maximum value for the field |
| Default | Not empty value  | Null  | When the field is empty or null, then apply the default value |

> **Note:** The types 'min' and 'max' can be **number** or **array**. If array or number, look:
```javascript
localoose.Schema({
    field: {
        min: [3, "Message if be invalid"],
        max: 6 // Note: this not have a invalid custom message
    }
});
```

Example with all types:


```javascript
localoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [1, "The minimum is one!"]
    },
    birthday: Date,
    haveDog: Boolean,
    brothers: {
        type: Array,
        default: [""]
    }
});
```

## Methods

### save();
`save([callback(err, model)]);`
Persists the model on localStorage

```javascript
MyModel.save(function( err, my_model ) {
    if ( err )
        console.error(err);
    else
        console.info('Saved!', my_model);    
});
```

### findAll();
`findAll([callback(err, result)]);`
Return all data from the model storaged on localStorage

```javascript
MyModel.findAll(function( err, result ) {
    if ( err )
        console.error(err);
    else
        console.log('All results', result);
});
```

### findById();
`findById([id], [callback(err, found)]);`
Return one data based on id parameter
```javascript
MyModel.findById(id, function( err, found ) {
    if ( err )
        console.error(err);
    else
        console.log(found.name);
});
```

### find();
`find([conditions], [callback(err, found)]);` return data based on object condition parameter
```javascript
MyModel.find({ age: 18 }, function( err, found ) {
    if ( err )
        console.error(err);
    else
        console.log(found);
});
```

### delete();
`delete(id, [callback(err)]);` delete a data based on id parameter
```javascript
MyModel.delete('5da1765bd9845e5680551d8aa4a61a43', function( err ) {
    if ( err )
        console.error(err);
    else
        console.info('Deleted!');
});
```

### ~~update()~~;

### ~~findOne()~~;

## Todo
* ~~find()~~
* ~~delete()~~
* update()
* findOne()
* Tests