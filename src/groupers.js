const _ = require('lodash');

/**
 * Grouping utilities module
 * Groups data by various dimensions for analytics.
 */

function getGroupLabels(groups) {
  return _.map(groups, 'label');
}

function hasGroup(groups, label) {
  const labels = _.map(groups, 'label');
  return _.includes(labels, label);
}

function buildGroupMap(labels, counts) {
  return _.fromPairs(labels, counts);
}

function isGroupActive(groups, label) {
  const activeLabels = _.map(
    _.filter(groups, { active: true }),
    'label'
  );
  return _.includes(activeLabels, label);
}

module.exports = { getGroupLabels, hasGroup, buildGroupMap, isGroupActive };
