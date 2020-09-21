# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chenpoyi/lotide`

**Require it:**

`const _ = require('@chenpoyi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: determines if two arrays are equal and outputs appropriate messages
* `assertEqual`: determines if two primitives are equal and outputs appropriate messages
* `assertObjectsEqual())`: determines if two objects are equal and outputs appropriate messages
* `countLetters()`: returns the number of appearances if each letter in a string
* `countOnly()`: returns the number of occurences of a specific item in an array
* `eqArrays()`: returns whether 2 arrays is equal
* `eqObjects()`: returns whether 2 objects are equal
* `findKey()`: finds key holding a given value
* `findKeyByValue()`: finds key holding a given value
* `flatten()`: returns a flattened array
* `head()`: returns first element of an array
* `letterPositions()`: returns positions of given letter in an array
* `map()`: maps an array with given callback function
* `middle()`: returns the middle element(s) of an array
* `tail()`: returns subarray holding the tail values of the array
* `takeUntil()`: cuts off array at the element satisfying the callback function
* `without()`: returns array without the given element