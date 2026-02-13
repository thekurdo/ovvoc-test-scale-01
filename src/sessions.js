const _ = require('lodash');

/**
 * Session tracking module
 * Manages browser sessions and activity states.
 */

function getCurrentSession(sessions) {
  return _.head(sessions);
}

function getPastSessions(sessions) {
  return _.tail(sessions);
}

function hasActiveSession(sessions) {
  const statuses = _.map(sessions, 'status');
  return _.includes(statuses, 'active');
}

function getSessionAfterCurrent(sessions) {
  const remaining = _.tail(sessions);
  return _.head(remaining);
}

module.exports = { getCurrentSession, getPastSessions, hasActiveSession, getSessionAfterCurrent };
