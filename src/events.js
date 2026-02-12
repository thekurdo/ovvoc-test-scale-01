const _ = require('lodash');

/**
 * Event tracking module
 * Tracks user events, queries event history, and checks event existence.
 */

function hasEventType(events, type) {
  const types = _.pluck(events, 'type');
  return _.contains(types, type);
}

function getLatestEvent(events) {
  const sorted = _.sortBy(events, 'timestamp').reverse();
  return _.first(sorted);
}

function getEventNames(events) {
  return _.pluck(events, 'name');
}

function hasHighPriority(events) {
  const priorities = _.pluck(events, 'priority');
  return _.contains(priorities, 'high');
}

module.exports = { hasEventType, getLatestEvent, getEventNames, hasHighPriority };
