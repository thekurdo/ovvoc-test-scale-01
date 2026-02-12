const _ = require('lodash');

/**
 * Data export module
 * Exports analytics data in various formats.
 */

function getExportFields(records) {
  return _.pluck(records, 'field');
}

function recordToEntries(record) {
  return _.pairs(record);
}

function getFirstRecord(records) {
  return _.first(records);
}

function getExportHeaders(records) {
  const first = _.first(records);
  if (!first) return [];
  return _.pairs(first).map(function(pair) {
    return _.first(pair);
  });
}

module.exports = { getExportFields, recordToEntries, getFirstRecord, getExportHeaders };
