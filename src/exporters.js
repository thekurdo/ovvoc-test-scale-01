const _ = require('lodash');

/**
 * Data export module
 * Exports analytics data in various formats.
 */

function getExportFields(records) {
  return _.map(records, 'field');
}

function recordToEntries(record) {
  return _.toPairs(record);
}

function getFirstRecord(records) {
  return _.head(records);
}

function getExportHeaders(records) {
  const first = _.head(records);
  if (!first) return [];
  return _.toPairs(first).map(function(pair) {
    return _.head(pair);
  });
}

module.exports = { getExportFields, recordToEntries, getFirstRecord, getExportHeaders };
