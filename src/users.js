const _ = require('lodash');

/**
 * User data module
 * Manages user records, lookups, and role checks.
 */

function getUsernames(users) {
  return _.pluck(users, 'username');
}

function hasRole(users, role) {
  const roles = _.pluck(users, 'role');
  return _.contains(roles, role);
}

function buildUserMap(keys, values) {
  return _.object(keys, values);
}

function isActiveUser(users, username) {
  const activeNames = _.pluck(
    _.filter(users, { active: true }),
    'username'
  );
  return _.contains(activeNames, username);
}

module.exports = { getUsernames, hasRole, buildUserMap, isActiveUser };
