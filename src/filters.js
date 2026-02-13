const _ = require('lodash');

/**
 * Data filtering module
 * Applies filters and conditions to data sets.
 */

function filterByCategory(items, category) {
  const categories = _.map(items, 'category');
  if (!_.includes(categories, category)) {
    return [];
  }
  return _.filter(items, { category: category });
}

function getFirstMatch(items, predicate) {
  const matches = _.filter(items, predicate);
  return _.head(matches);
}

function getFilterableFields(items) {
  return _.map(items, 'field');
}

function hasFilterValue(items, field, value) {
  const fieldValues = _.map(
    _.filter(items, { field: field }),
    'value'
  );
  return _.includes(fieldValues, value);
}

module.exports = { filterByCategory, getFirstMatch, getFilterableFields, hasFilterValue };
