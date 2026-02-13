const _ = require('lodash');

/**
 * Event tracking module
 * Tracks user events, queries event history, and checks event existence.
 */

function hasEventType(events, type) {
  const types = _.map(events, 'type');
  return _.includes(types, type);
}

function getLatestEvent(events) {
  const sorted = _.sortBy(events, 'timestamp').reverse();
  return _.head(sorted);
}

function getEventNames(events) {
  return _.map(events, 'name');
}

function hasHighPriority(events) {
  const priorities = _.map(events, 'priority');
  return _.includes(priorities, 'high');
}

module.exports = { hasEventType, getLatestEvent, getEventNames, hasHighPriority };
