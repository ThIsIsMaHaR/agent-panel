JcurveIQ Agent Run Panel
A real-time, "agentic" dashboard built for financial analysts to monitor multi-agent research pipelines. This project demonstrates complex state management, parallel task orchestration, and clear information hierarchy.

🚀 Quick Start
Prerequisites
Node.js (v18 or higher recommended)

npm or yarn

Installation
Clone the repository:

Bash
git clone <your-repo-url>
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
The application will be available at http://localhost:5173.

🛠 Features & Tech Stack
React (Vite): Optimized for fast development and small bundle sizes.

Tailwind CSS: Custom-built UI components without external UI libraries.

Mock Event Emitter: A custom hook that replays a JSON fixture sequence with realistic timing to simulate a live backend.

Complex State Modeling: Uses useReducer to manage interleaved task updates, tool calls, and status transitions (retries, cancellations, etc.).

🧪 Testing Fixtures
To verify the system's robustness, the app supports two primary scenarios:

Success Sequence: Covers task spawning, parallel grouping, task failures with successful retries, and strategic cancellations due to "sufficient data."

Error Sequence: Demonstrates how the UI handles unrecoverable coordinator errors and partial run states.

Note: Use the toggle buttons in the application header to switch between and trigger these sequences.

📂 Project Structure
/src/components: UI components including the AgentRunPanel and TaskCard.

/src/store: State machine logic using the agentReducer.

/src/mock: The event playback engine and JSON fixtures.

DECISIONS.md: Documentation of architectural choices regarding ambiguous requirements.

🔮 Future Improvements
Persistence: Integrating with a backend or LocalStorage to keep run history after a page refresh.

Enhanced Animations: Utilizing Framer Motion to make parallel task entries more fluid.

Accessibility: Adding full ARIA labels and keyboard navigation for professional analyst workflows.