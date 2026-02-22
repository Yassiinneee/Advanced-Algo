// Lightweight Task Scheduler//

// Task List
let tasks = [
  { name: "Task A", start: 9, end: 11, priority: "High" },
  { name: "Task B", start: 10, end: 12, priority: "Medium" },
  { name: "Task C", start: 13, end: 14, priority: "Low" },
  { name: "Task D", start: 11, end: 13, priority: "High" }
];

// 1. Sort tasks by start time
function sortTasks(tasks) {
  return tasks.sort((a, b) => a.start - b.start);
}

// 2. Group tasks by priority
function groupByPriority(tasks) {
  let groups = {};

  for (let task of tasks) {
    if (!groups[task.priority]) {
      groups[task.priority] = [];
    }
    groups[task.priority].push(task);
  }

  return groups;
}

// 3. Detect overlapping tasks
function detectOverlaps(tasks) {
  let sorted = sortTasks([...tasks]); // copy to avoid modifying original
  let overlaps = [];

  for (let i = 1; i < sorted.length; i++) {
    let prev = sorted[i - 1];
    let curr = sorted[i];

    if (curr.start < prev.end) {
      overlaps.push({
        task1: prev.name,
        task2: curr.name
      });
    }
  }

  return overlaps;
}
//4. (Optional) Estimate memory usage

function estimateMemory(n) {
  let bytesPerTask = 80; // simple approximation
  return n * bytesPerTask + " bytes (approx)";
}

// exexution
console.log("Original Tasks:");
console.log(tasks);

console.log("\nSorted Tasks:");
console.log(sortTasks([...tasks]));

console.log("\nGrouped by Priority:");
console.log(groupByPriority(tasks));

console.log("\nOverlapping Tasks:");             //depend on time and space complexity
console.log(detectOverlaps(tasks));

console.log("\nEstimated Memory Usage:");        //memory usage of the 4 tasks
console.log(estimateMemory(tasks.length));


// Complexity Summary (Important)

/*
Sorting:
Time → O(n log n)
Because JavaScript uses efficient sorting algorithm

Grouping:
Time → O(n)
Because we loop once through tasks

Overlap Detection:
Time → O(n log n)
Because we sort first, then loop once

Memory Estimate:
Time → O(1)
Just one calculation

Space Complexity:
Grouping → O(n)
Overlap → O(n)
Sorting → O(1) if in-place
*/