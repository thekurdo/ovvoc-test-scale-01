const _ = require('lodash');

/**
 * Data transformation module
 * Transforms data between different structures.
 */

function extractColumn(rows, column) {
  return _.pluck(rows, column);
}

function rowToMap(keys, values) {
  return _.object(keys, values);
}

function flattenToEntries(obj) {
  return _.pairs(obj);
}

function pivotData(rows, keyField, valueField) {
  const keys = _.pluck(rows, keyField);
  const values = _.pluck(rows, valueField);
  return _.object(keys, values);
}

function entriesToMap(entries) {
  const keys = _.pluck(entries, 0);
  const values = _.pluck(entries, 1);
  return _.object(keys, values);
}

module.exports = { extractColumn, rowToMap, flattenToEntries, pivotData, entriesToMap };
