const _ = require('lodash');

/**
 * Session tracking module
 * Manages browser sessions and activity states.
 */

function getCurrentSession(sessions) {
  return _.first(sessions);
}

function getPastSessions(sessions) {
  return _.rest(sessions);
}

function hasActiveSession(sessions) {
  const statuses = _.pluck(sessions, 'status');
  return _.contains(statuses, 'active');
}

function getSessionAfterCurrent(sessions) {
  const remaining = _.rest(sessions);
  return _.first(remaining);
}

module.exports = { getCurrentSession, getPastSessions, hasActiveSession, getSessionAfterCurrent };
