---
title: AutoFlow
summary: An MCP server and Figma plugin that let Claude draw clean, automatically laid-out flowcharts straight onto a Figma canvas.
category: AI & Apps
period: Oct 2026
date: 2026-10-28
status: Completed
tech: [TypeScript, MCP, Figma Plugin API, WebSockets, dagre]
metrics:
  - value: "4"
    label: MCP tools
  - value: Auto
    label: layout, no coordinates needed
  - value: Local
    label: nothing leaves your machine
cover: ../../assets/projects/autoflow/screenshot.png
coverAlt: A flowchart drawn by AutoFlow in Figma
demo: /projects/autoflow/demo.gif
demoAlt: Claude drawing a flowchart in Figma with AutoFlow
links:
  repo: https://github.com/Sanil-Gokarn/figma-flow-mcp
---

## Overview

Process mapping is a core part of business analysis, but drawing flowcharts by hand is slow. With AutoFlow, you describe a process to Claude and get a finished flowchart in Figma.

## How it works

1. Claude calls `create_flowchart` with only the chart's structure: nodes, edges and labels, no coordinates.
2. The MCP server validates it, then asks the plugin to measure every label in Figma so each shape fits its text.
3. The server lays the chart out top to bottom with dagre.
4. The plugin draws the shapes, arrows and labels in a new frame.

## Features

- **Plain-language charts.** Describe a process and Claude picks the steps, decisions and branches.
- **Standard flowchart shapes,** each sized to fit its label: pills for start and end, rectangles for steps, diamonds for decisions, parallelograms for input and output.
- **Labelled arrows,** such as "Yes" and "No" on decision branches.
- **Clear errors.** Invalid input names the bad node or edge.
- **Safe cleanup.** `clear_canvas` removes only what AutoFlow drew.
- **Local only.** The WebSocket bridge listens on 127.0.0.1.
