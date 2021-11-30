# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @donthephan/lotide`

**Require it:**

`const _ = require('@donthephan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: returns object with letter count from string
* `countOnly(array, object)`: cross references the keys in object who's value is true with values in array and returns object with count
* `eqArrays()`: compares 2 arrays, returns boolean
* `eqObjects()`: compares 2 objects, returns boolean
* `findKey(object, callback)`: finds & returns key in object based on callback
<!-- * `findKeyByValue()`:  -->
<!-- * `flatten(,` -->
* `head(array)`: returns first element in array
<!-- * `letterPositions()` -->
<!-- * `map()` -->
* `middle(array)`: returns middle array with middle element from array input. If array length is even, it will return the middle 2 elements in the array as an array
<!-- * `pigLatin()` -->
<!-- * `reverse()` -->
* `tail(array)`: returns last element in array
<!-- * `takeUntil()` -->
<!-- * `without()` -->