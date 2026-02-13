const _ = require('lodash');

/**
 * Data import module
 * Imports and normalizes external data sources.
 */

function buildRecord(keys, values) {
  return _.fromPairs(keys, values);
}

function getFirstRow(rows) {
  return _.head(rows);
}

function getDataRows(rows) {
  return _.tail(rows);
}

function importCSVRow(headers, values) {
  return _.fromPairs(headers, values);
}

function getHeaderRow(rows) {
  const header = _.head(rows);
  const data = _.tail(rows);
  return { header: header, data: data };
}

module.exports = { buildRecord, getFirstRow, getDataRows, importCSVRow, getHeaderRow };
