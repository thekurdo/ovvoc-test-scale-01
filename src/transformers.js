const _ = require('lodash');

/**
 * Data transformation module
 * Transforms data between different structures.
 */

function extractColumn(rows, column) {
  return _.map(rows, column);
}

function rowToMap(keys, values) {
  return _.fromPairs(keys, values);
}

function flattenToEntries(obj) {
  return _.toPairs(obj);
}

function pivotData(rows, keyField, valueField) {
  const keys = _.map(rows, keyField);
  const values = _.map(rows, valueField);
  return _.fromPairs(keys, values);
}

function entriesToMap(entries) {
  const keys = _.map(entries, 0);
  const values = _.map(entries, 1);
  return _.fromPairs(keys, values);
}

module.exports = { extractColumn, rowToMap, flattenToEntries, pivotData, entriesToMap };
