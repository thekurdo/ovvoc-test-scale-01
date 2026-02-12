const _ = require('lodash');

/**
 * Validation module
 * Validates data integrity and required fields.
 */

function hasRequiredField(records, field) {
  const values = _.pluck(records, field);
  const nonEmpty = _.compact(values);
  return nonEmpty.length === records.length;
}

function containsValue(collection, value) {
  return _.contains(collection, value);
}

function allFieldsPresent(records, fields) {
  return fields.every(function(field) {
    const values = _.pluck(records, field);
    return _.compact(values).length === records.length;
  });
}

function hasValidStatus(records) {
  const validStatuses = ['active', 'pending', 'completed'];
  const statuses = _.pluck(records, 'status');
  return statuses.every(function(status) {
    return _.contains(validStatuses, status);
  });
}

module.exports = { hasRequiredField, containsValue, allFieldsPresent, hasValidStatus };
