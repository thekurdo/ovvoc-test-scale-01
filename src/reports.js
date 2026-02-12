const _ = require('lodash');

/**
 * Report generation module
 * Builds reports from analytics data sets.
 */

function getReportTitles(reports) {
  return _.pluck(reports, 'title');
}

function reportToEntries(report) {
  return _.pairs(report);
}

function buildReport(keys, values) {
  return _.object(keys, values);
}

function getReportIds(reports) {
  return _.pluck(reports, 'id');
}

module.exports = { getReportTitles, reportToEntries, buildReport, getReportIds };
