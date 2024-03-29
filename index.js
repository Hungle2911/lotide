const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
const eqArrays = require('./eqArrays');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqObjects,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without, 
  eqArrays
};