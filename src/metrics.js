const _ = require('lodash');

/**
 * Metric calculations module
 * Computes analytics metrics from raw data points.
 */

function getMetricValues(dataPoints) {
  return _.map(dataPoints, 'value');
}

function getTopMetric(dataPoints) {
  const sorted = _.sortBy(dataPoints, 'value').reverse();
  return _.head(sorted);
}

function metricEntries(metricObj) {
  return _.toPairs(metricObj);
}

function getMetricNames(dataPoints) {
  return _.map(dataPoints, 'name');
}

function firstMetricEntry(metricObj) {
  return _.head(_.toPairs(metricObj));
}

module.exports = { getMetricValues, getTopMetric, metricEntries, getMetricNames, firstMetricEntry };
