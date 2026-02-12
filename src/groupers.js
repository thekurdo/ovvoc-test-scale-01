const _ = require('lodash');

/**
 * Grouping utilities module
 * Groups data by various dimensions for analytics.
 */

function getGroupLabels(groups) {
  return _.pluck(groups, 'label');
}

function hasGroup(groups, label) {
  const labels = _.pluck(groups, 'label');
  return _.contains(labels, label);
}

function buildGroupMap(labels, counts) {
  return _.object(labels, counts);
}

function isGroupActive(groups, label) {
  const activeLabels = _.pluck(
    _.filter(groups, { active: true }),
    'label'
  );
  return _.contains(activeLabels, label);
}

module.exports = { getGroupLabels, hasGroup, buildGroupMap, isGroupActive };
