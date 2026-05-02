🚀 Agentic Research Panel | JcurveIQ
Live Demo: https://agent-panel-woad.vercel.app/

Author: Abhishek Singh Mahar

A high-performance, real-time dashboard designed for financial analysts to monitor complex, multi-agent research pipelines. This project focuses on state-driven UI orchestration, managing parallel agent workflows, and maintaining a clear audit trail of AI "thoughts" and data synthesis.

🛠 Tech Stack & Architecture
React (Vite): Leveraging a lightweight, fast-loading frontend architecture.

Tailwind CSS v4: Using the latest PostCSS engine for a modern, high-contrast "Dark Mode" financial interface.

State Machine (useReducer): Centralized logic to handle complex agent lifecycles, including retries, parallel groupings, and strategic stops.

Event Emitter Hooks: A custom simulation engine that replays backend event streams with realistic latency.

🌟 Key Features
Parallel Task Grouping: Intuitively groups agents working concurrently on the same research pod.

Strategic Stop Handling: Real-time UI updates for tasks cancelled due to "Sufficient Data" (a key financial efficiency metric).

Live Thought Trace: A dedicated console for monitoring agent reasoning without cluttering the primary task feed.

Responsive Analysis: Dynamic grid layouts that adapt to the number of active agents in the pipeline.

🧪 Simulation Scenarios
The panel is pre-configured with two primary testing fixtures:

Standard Success Path: Demonstrates task spawning, tool calls, failure-recovery (retries), and final synthesis.

Early Termination Path: Showcases how the UI handles agents being stopped early when the coordinator determines enough data has been gathered.

📂 Project Navigation
src/store/agentReducer.js: The "brain" of the app; handles the complex logic of task transitions.

src/components/AgentRunPanel.jsx: The primary UI orchestrator.

DECISIONS.md: A detailed breakdown of the architectural choices made to handle under-specified requirements.

🚀 How to Run Locally
Clone & Enter:

Bash
git clone https://github.com/ThIsIsMaHaR/agent-panel.git
cd agent-panel
Install & Start:

Bash
npm install
npm run dev
Developed as part of the JcurveIQ Frontend Engineering assessment.