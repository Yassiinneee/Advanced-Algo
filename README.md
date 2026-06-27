# 📋 Advanced Algorithms Checkpoint – Lightweight Task Scheduler

> A JavaScript implementation demonstrating the practical application of fundamental algorithms for task scheduling, including sorting, grouping, overlap detection, and basic memory estimation with complexity analysis.

---

# 📖 Table of Contents

- [Overview](#-overview)
- [Objectives](#-objectives)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Algorithm Design](#-algorithm-design)
- [Complexity Analysis](#-complexity-analysis)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Example Output](#-example-output)
- [Learning Outcomes](#-learning-outcomes)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

# 📖 Overview

This project presents a lightweight task scheduling system developed in **JavaScript** as part of an **Advanced Algorithms** checkpoint.

The application demonstrates how classical algorithmic techniques can efficiently organize and analyze task data. It focuses on:

- Sorting tasks chronologically
- Grouping tasks by priority
- Detecting scheduling conflicts
- Estimating memory consumption
- Evaluating algorithmic complexity

The implementation emphasizes clean code, readability, and algorithm efficiency while providing practical examples of common scheduling operations.

---

# 🎯 Objectives

The main goals of this project are to:

- Practice algorithmic thinking.
- Apply sorting algorithms to real-world data.
- Organize datasets efficiently.
- Detect interval conflicts.
- Analyze time and space complexity.
- Understand memory usage estimation.
- Write maintainable and modular JavaScript code.

---

# 📁 Project Structure

```
Advanced-Algo-main/
│
├── Taskmanagment.js        # Main JavaScript implementation
├── Code execution.png      # Program execution screenshot
└── README.md               # Project documentation
```

---

# ✨ Features

## 1️⃣ Task Sorting

Tasks are sorted according to their start time.

This allows:

- chronological scheduling
- easier timeline visualization
- conflict detection

Example:

```javascript
sortTasks(tasks);
```

---

## 2️⃣ Priority Grouping

Tasks are categorized into priority levels.

Supported priorities:

- High
- Medium
- Low

Example output:

```text
High
 ├── Task A
 └── Task D

Medium
 └── Task B

Low
 └── Task C
```

---

## 3️⃣ Overlap Detection

The scheduler automatically detects scheduling conflicts by comparing adjacent tasks after sorting.

Example:

```
Task A (9 - 11)
Task B (10 - 12)

→ Overlap detected
```

Output:

```javascript
[
  {
    task1: "Task A",
    task2: "Task B"
  }
]
```

---

## 4️⃣ Memory Usage Estimation

A simple approximation estimates memory usage based on the number of stored tasks.

Formula:

```
Estimated Memory
=
Number of Tasks × 80 bytes
```

Example:

```
4 Tasks

Estimated Memory:
320 bytes (approx)
```

---

# 🧠 Algorithm Design

## Sorting

The project uses JavaScript's built-in sorting mechanism.

```javascript
tasks.sort((a, b) => a.start - b.start);
```

Purpose:

- chronological ordering
- preprocessing for overlap detection

---

## Grouping

A single traversal creates groups based on task priority.

```javascript
groups[task.priority].push(task);
```

Advantages:

- simple implementation
- efficient lookup
- scalable

---

## Conflict Detection

Algorithm steps:

1. Sort tasks.
2. Compare each task with the previous one.
3. Record overlaps.

Pseudo-process:

```
Sort Tasks

↓

Compare Adjacent Tasks

↓

Overlap?

Yes → Save Conflict
No → Continue
```

---

# 📊 Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|------------|----------------|-----------------|
| Sort Tasks | **O(n log n)** | O(1)* |
| Group Tasks | **O(n)** | O(n) |
| Detect Overlaps | **O(n log n)** | O(n) |
| Memory Estimation | **O(1)** | O(1) |

> *JavaScript's internal sort implementation may require additional memory depending on the engine.

---

# 💻 Technologies Used

- JavaScript (ES6)
- Node.js
- Console-based execution

No external libraries or dependencies are required.

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/Advanced-Algo.git
```

Navigate into the project:

```bash
cd Advanced-Algo-main
```

---

# ▶️ Running the Project

Execute the program using Node.js:

```bash
node Taskmanagment.js
```

---

# 🖥️ Example Output

```text
Original Tasks:

[
  { name: 'Task A', start: 9, end: 11, priority: 'High' },
  { name: 'Task B', start: 10, end: 12, priority: 'Medium' },
  { name: 'Task C', start: 13, end: 14, priority: 'Low' },
  { name: 'Task D', start: 11, end: 13, priority: 'High' }
]

Sorted Tasks:
[...]

Grouped by Priority:
{
  High: [...],
  Medium: [...],
  Low: [...]
}

Overlapping Tasks:
[
  { task1: 'Task A', task2: 'Task B' }
]

Estimated Memory Usage:
320 bytes (approx)
```

---

# 🎓 Learning Outcomes

By completing this checkpoint, the following concepts are demonstrated:

- Algorithm design
- Data organization
- Sorting techniques
- Hash-based grouping
- Interval conflict detection
- Complexity analysis
- Memory estimation
- Modular JavaScript programming

---

# 🚀 Future Improvements

Potential enhancements include:

- Dynamic task input from users
- Graphical User Interface (GUI)
- Task editing and deletion
- Persistent storage using JSON or a database
- Advanced scheduling algorithms
- Calendar integration
- Multiple overlap detection strategies
- Priority-based scheduling optimization
- Unit testing with Jest
- TypeScript migration

---

# 👨‍💻 Author
*Yassine kalthoum *

**Advanced Algorithms Checkpoint**

Developed as part of an academic checkpoint to demonstrate practical applications of algorithmic problem-solving in JavaScript.

---

# 📄 License

This project is intended for educational purposes.

Feel free to modify, extend, and experiment with the code for learning and personal development.

---

## ⭐ Project Highlights

- Clean and modular JavaScript implementation
- Efficient algorithmic solutions
- Practical scheduling use case
- Time and space complexity analysis
- Beginner-friendly and easy to extend
- Well-documented for learning and maintenance

---
