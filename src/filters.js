const _ = require('lodash');

/**
 * Data filtering module
 * Applies filters and conditions to data sets.
 */

function filterByCategory(items, category) {
  const categories = _.pluck(items, 'category');
  if (!_.contains(categories, category)) {
    return [];
  }
  return _.filter(items, { category: category });
}

function getFirstMatch(items, predicate) {
  const matches = _.filter(items, predicate);
  return _.first(matches);
}

function getFilterableFields(items) {
  return _.pluck(items, 'field');
}

function hasFilterValue(items, field, value) {
  const fieldValues = _.pluck(
    _.filter(items, { field: field }),
    'value'
  );
  return _.contains(fieldValues, value);
}

module.exports = { filterByCategory, getFirstMatch, getFilterableFields, hasFilterValue };
