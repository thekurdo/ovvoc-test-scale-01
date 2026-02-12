const _ = require('lodash');

/**
 * Sorting utilities module
 * Provides various sorting strategies for analytics data.
 */

function sortByField(items, field) {
  return _.sortBy(items, field);
}

function getTopItem(items, field) {
  const sorted = _.sortBy(items, field).reverse();
  return _.first(sorted);
}

function getSortKeys(items) {
  return _.pluck(items, 'sortKey');
}

function getBottomItem(items, field) {
  const sorted = _.sortBy(items, field);
  return _.first(sorted);
}

module.exports = { sortByField, getTopItem, getSortKeys, getBottomItem };
