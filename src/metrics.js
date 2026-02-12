const _ = require('lodash');

/**
 * Metric calculations module
 * Computes analytics metrics from raw data points.
 */

function getMetricValues(dataPoints) {
  return _.pluck(dataPoints, 'value');
}

function getTopMetric(dataPoints) {
  const sorted = _.sortBy(dataPoints, 'value').reverse();
  return _.first(sorted);
}

function metricEntries(metricObj) {
  return _.pairs(metricObj);
}

function getMetricNames(dataPoints) {
  return _.pluck(dataPoints, 'name');
}

function firstMetricEntry(metricObj) {
  return _.first(_.pairs(metricObj));
}

module.exports = { getMetricValues, getTopMetric, metricEntries, getMetricNames, firstMetricEntry };
