const _ = require('lodash');

/**
 * Formatting module
 * Formats data for display and output.
 */

function getFirstLabel(items) {
  return _.head(items);
}

function objectToLabelPairs(obj) {
  return _.toPairs(obj).map(function(pair) {
    return pair[0] + ': ' + pair[1];
  });
}

function truncateText(text, length) {
  return _.truncate(text, { length: length });
}

function formatEntry(obj) {
  return _.toPairs(obj).map(function(pair) {
    return { key: _.head(pair), value: pair[1] };
  });
}

function truncateAll(texts, length) {
  return texts.map(function(text) {
    return _.truncate(text, { length: length });
  });
}

module.exports = { getFirstLabel, objectToLabelPairs, truncateText, formatEntry, truncateAll };
