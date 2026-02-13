/**
 * Analytics Engine
 * Main entry point — re-exports all modules.
 */

const events = require('./events');
const users = require('./users');
const sessions = require('./sessions');
const metrics = require('./metrics');
const reports = require('./reports');
const filters = require('./filters');
const sorters = require('./sorters');
const groupers = require('./groupers');
const exporters = require('./exporters');
const importers = require('./importers');
const validators = require('./validators');
const transformers = require('./transformers');
const aggregators = require('./aggregators');
const formatters = require('./formatters');

module.exports = {
  events,
  users,
  sessions,
  metrics,
  reports,
  filters,
  sorters,
  groupers,
  exporters,
  importers,
  validators,
  transformers,
  aggregators,
  formatters,
};
