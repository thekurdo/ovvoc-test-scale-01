const _ = require('lodash');

/**
 * Formatting module
 * Formats data for display and output.
 */

function getFirstLabel(items) {
  return _.first(items);
}

function objectToLabelPairs(obj) {
  return _.pairs(obj).map(function(pair) {
    return pair[0] + ': ' + pair[1];
  });
}

function truncateText(text, length) {
  return _.trunc(text, { length: length });
}

function formatEntry(obj) {
  return _.pairs(obj).map(function(pair) {
    return { key: _.first(pair), value: pair[1] };
  });
}

function truncateAll(texts, length) {
  return texts.map(function(text) {
    return _.trunc(text, { length: length });
  });
}

module.exports = { getFirstLabel, objectToLabelPairs, truncateText, formatEntry, truncateAll };
