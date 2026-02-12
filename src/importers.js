const _ = require('lodash');

/**
 * Data import module
 * Imports and normalizes external data sources.
 */

function buildRecord(keys, values) {
  return _.object(keys, values);
}

function getFirstRow(rows) {
  return _.first(rows);
}

function getDataRows(rows) {
  return _.rest(rows);
}

function importCSVRow(headers, values) {
  return _.object(headers, values);
}

function getHeaderRow(rows) {
  const header = _.first(rows);
  const data = _.rest(rows);
  return { header: header, data: data };
}

module.exports = { buildRecord, getFirstRow, getDataRows, importCSVRow, getHeaderRow };
