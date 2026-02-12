var assert = require("assert");
var engine = require("../src/index");
var passed = 0;
var failed = 0;
function test(name, fn) { try { fn(); passed++; console.log("  PASS: " + name); } catch (e) { failed++; console.log("  FAIL: " + name + " -- " + e.message); } }
console.log("");
console.log("=== Analytics Engine Test Suite ===");
console.log("");
console.log("[events]");
var sampleEvents = [
  { type: "click", name: "btn_submit", priority: "high", timestamp: 3 },
  { type: "view", name: "page_home", priority: "low", timestamp: 1 },
  { type: "scroll", name: "section_top", priority: "medium", timestamp: 2 }
];
test("hasEventType finds existing type", function() { assert.strictEqual(engine.events.hasEventType(sampleEvents, "click"), true); });
test("hasEventType returns false for missing", function() { assert.strictEqual(engine.events.hasEventType(sampleEvents, "hover"), false); });
test("getLatestEvent returns highest timestamp", function() { assert.strictEqual(engine.events.getLatestEvent(sampleEvents).name, "btn_submit"); });
test("getEventNames extracts all names", function() { assert.deepStrictEqual(engine.events.getEventNames(sampleEvents), ["btn_submit", "page_home", "section_top"]); });
test("hasHighPriority detects high priority", function() { assert.strictEqual(engine.events.hasHighPriority(sampleEvents), true); });

console.log("[users]");
var sampleUsers = [
  { username: "alice", role: "admin", active: true },
  { username: "bob", role: "viewer", active: false },
  { username: "carol", role: "editor", active: true }
];
test("getUsernames extracts usernames", function() { assert.deepStrictEqual(engine.users.getUsernames(sampleUsers), ["alice", "bob", "carol"]); });
test("hasRole finds admin", function() { assert.strictEqual(engine.users.hasRole(sampleUsers, "admin"), true); });
test("buildUserMap creates key-value map", function() { assert.deepStrictEqual(engine.users.buildUserMap(["a", "b"], [1, 2]), { a: 1, b: 2 }); });

console.log("[sessions]");
var sampleSessions = [
  { id: "s1", status: "active" },
  { id: "s2", status: "expired" },
  { id: "s3", status: "expired" }
];
test("getCurrentSession returns first", function() { assert.strictEqual(engine.sessions.getCurrentSession(sampleSessions).id, "s1"); });
test("getPastSessions returns rest", function() { assert.strictEqual(engine.sessions.getPastSessions(sampleSessions).length, 2); });
test("hasActiveSession detects active", function() { assert.strictEqual(engine.sessions.hasActiveSession(sampleSessions), true); });

console.log("[metrics]");
var sampleMetrics = [
  { name: "cpu", value: 80 },
  { name: "mem", value: 65 },
  { name: "disk", value: 90 }
];
test("getMetricValues extracts values", function() { assert.deepStrictEqual(engine.metrics.getMetricValues(sampleMetrics), [80, 65, 90]); });
test("getTopMetric returns highest value", function() { assert.strictEqual(engine.metrics.getTopMetric(sampleMetrics).name, "disk"); });
test("metricEntries converts object to pairs", function() { var e = engine.metrics.metricEntries({ a: 1, b: 2 }); assert.strictEqual(e.length, 2); assert.deepStrictEqual(e[0], ["a", 1]); });

console.log("[reports]");
var sampleReports = [{ id: "r1", title: "Weekly" }, { id: "r2", title: "Monthly" }];
test("getReportTitles extracts titles", function() { assert.deepStrictEqual(engine.reports.getReportTitles(sampleReports), ["Weekly", "Monthly"]); });
test("reportToEntries converts to entries", function() { assert.strictEqual(engine.reports.reportToEntries({ x: 1 }).length, 1); });
test("buildReport creates object from keys/values", function() { assert.deepStrictEqual(engine.reports.buildReport(["a", "b"], [10, 20]), { a: 10, b: 20 }); });

console.log("[filters]");
var sampleItems = [
  { category: "web", field: "url", value: "example.com" },
  { category: "api", field: "endpoint", value: "/users" },
  { category: "web", field: "url", value: "test.com" }
];
test("filterByCategory returns matching items", function() { assert.strictEqual(engine.filters.filterByCategory(sampleItems, "web").length, 2); });
test("filterByCategory returns empty for missing", function() { assert.strictEqual(engine.filters.filterByCategory(sampleItems, "db").length, 0); });
test("getFirstMatch finds first match", function() { assert.strictEqual(engine.filters.getFirstMatch(sampleItems, { category: "api" }).field, "endpoint"); });

console.log("[sorters]");
var sortableItems = [{ sortKey: "c", score: 3 }, { sortKey: "a", score: 1 }, { sortKey: "b", score: 2 }];
test("getTopItem returns highest score", function() { assert.strictEqual(engine.sorters.getTopItem(sortableItems, "score").sortKey, "c"); });
test("getSortKeys extracts sort keys", function() { assert.deepStrictEqual(engine.sorters.getSortKeys(sortableItems), ["c", "a", "b"]); });
test("getBottomItem returns lowest score", function() { assert.strictEqual(engine.sorters.getBottomItem(sortableItems, "score").sortKey, "a"); });

console.log("[groupers]");
var sampleGroups = [{ label: "A", active: true }, { label: "B", active: false }, { label: "C", active: true }];
test("getGroupLabels extracts labels", function() { assert.deepStrictEqual(engine.groupers.getGroupLabels(sampleGroups), ["A", "B", "C"]); });
test("hasGroup detects existing group", function() { assert.strictEqual(engine.groupers.hasGroup(sampleGroups, "B"), true); });
test("buildGroupMap creates map", function() { assert.deepStrictEqual(engine.groupers.buildGroupMap(["x", "y"], [10, 20]), { x: 10, y: 20 }); });

console.log("[exporters]");
var exportRecords = [{ field: "name", value: "Alice" }, { field: "age", value: 30 }];
test("getExportFields extracts fields", function() { assert.deepStrictEqual(engine.exporters.getExportFields(exportRecords), ["name", "age"]); });
test("getFirstRecord returns first", function() { assert.strictEqual(engine.exporters.getFirstRecord(exportRecords).field, "name"); });
test("recordToEntries converts record", function() { assert.strictEqual(engine.exporters.recordToEntries({ a: 1 }).length, 1); });

console.log("[importers]");
test("buildRecord creates record from keys/values", function() { assert.deepStrictEqual(engine.importers.buildRecord(["a", "b"], [1, 2]), { a: 1, b: 2 }); });
test("getFirstRow returns first row", function() { assert.strictEqual(engine.importers.getFirstRow(["header", "row1"]), "header"); });
test("getDataRows returns remaining rows", function() { assert.deepStrictEqual(engine.importers.getDataRows(["header", "row1", "row2"]), ["row1", "row2"]); });

console.log("[validators]");
var validRecords = [{ name: "Alice", status: "active" }, { name: "Bob", status: "pending" }];
test("hasRequiredField checks presence", function() { assert.strictEqual(engine.validators.hasRequiredField(validRecords, "name"), true); });
test("containsValue checks value in array", function() { assert.strictEqual(engine.validators.containsValue([1, 2, 3], 2), true); });
test("hasValidStatus validates statuses", function() { assert.strictEqual(engine.validators.hasValidStatus(validRecords), true); });

console.log("[transformers]");
var tRows = [{ id: 1, name: "Alpha" }, { id: 2, name: "Beta" }];
test("extractColumn extracts column", function() { assert.deepStrictEqual(engine.transformers.extractColumn(tRows, "name"), ["Alpha", "Beta"]); });
test("rowToMap creates map", function() { assert.deepStrictEqual(engine.transformers.rowToMap(["x", "y"], [10, 20]), { x: 10, y: 20 }); });
test("pivotData creates pivot", function() { assert.deepStrictEqual(engine.transformers.pivotData(tRows, "id", "name"), { 1: "Alpha", 2: "Beta" }); });

console.log("[aggregators]");
var aggRecords = [{ category: "A", amount: 10 }, { category: "B", amount: 20 }, { category: "A", amount: 30 }];
test("sumField sums correctly", function() { assert.strictEqual(engine.aggregators.sumField(aggRecords, "amount"), 60); });
test("getFirstRecord returns first", function() { assert.strictEqual(engine.aggregators.getFirstRecord(aggRecords).category, "A"); });
test("hasCategory detects category", function() { assert.strictEqual(engine.aggregators.hasCategory(aggRecords, "B"), true); });

console.log("[formatters]");
test("getFirstLabel returns first item", function() { assert.strictEqual(engine.formatters.getFirstLabel(["hello", "world"]), "hello"); });
test("objectToLabelPairs formats entries", function() { var result = engine.formatters.objectToLabelPairs({ name: "Alice", age: 30 }); assert.strictEqual(result[0], "name: Alice"); });
test("truncateText truncates long text", function() { var result = engine.formatters.truncateText("This is a very long string that should be truncated", 20); assert.strictEqual(result.length <= 20, true); });

console.log("");
console.log("=== Results ===");
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("Total:  " + (passed + failed));
if (failed > 0) { process.exit(1); }
console.log("");
console.log("All tests passed!");
console.log("");