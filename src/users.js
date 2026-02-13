const _ = require('lodash');

/**
 * User data module
 * Manages user records, lookups, and role checks.
 */

function getUsernames(users) {
  return _.map(users, 'username');
}

function hasRole(users, role) {
  const roles = _.map(users, 'role');
  return _.includes(roles, role);
}

function buildUserMap(keys, values) {
  return _.fromPairs(keys, values);
}

function isActiveUser(users, username) {
  const activeNames = _.map(
    _.filter(users, { active: true }),
    'username'
  );
  return _.includes(activeNames, username);
}

module.exports = { getUsernames, hasRole, buildUserMap, isActiveUser };
