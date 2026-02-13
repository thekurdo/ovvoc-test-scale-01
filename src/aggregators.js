const _ = require('lodash');

/**
 * Aggregation module
 * Performs sum, average, count aggregations on data.
 */

function sumField(records, field) {
  const values = _.map(records, field);
  return _.reduce(values, function(sum, v) { return sum + v; }, 0);
}

function getFirstRecord(records) {
  return _.head(records);
}

function hasCategory(records, category) {
  const categories = _.map(records, 'category');
  return _.includes(categories, category);
}

function averageField(records, field) {
  const values = _.map(records, field);
  const sum = _.reduce(values, function(s, v) { return s + v; }, 0);
  return values.length > 0 ? sum / values.length : 0;
}

function countByField(records, field) {
  const values = _.map(records, field);
  return _.countBy(values);
}

module.exports = { sumField, getFirstRecord, hasCategory, averageField, countByField };
