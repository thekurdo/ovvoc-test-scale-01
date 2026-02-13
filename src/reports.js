const _ = require('lodash');

/**
 * Report generation module
 * Builds reports from analytics data sets.
 */

function getReportTitles(reports) {
  return _.map(reports, 'title');
}

function reportToEntries(report) {
  return _.toPairs(report);
}

function buildReport(keys, values) {
  return _.fromPairs(keys, values);
}

function getReportIds(reports) {
  return _.map(reports, 'id');
}

module.exports = { getReportTitles, reportToEntries, buildReport, getReportIds };
