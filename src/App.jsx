import AgentRunPanel from './components/AgentRunPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-slate-200">
      <nav className="border-b border-slate-800 p-4 bg-[#161922]">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">J</div>
          <span className="font-bold tracking-tight text-white">JcurveIQ <span className="text-slate-500 font-medium">| Agent Monitor</span></span>
        </div>
      </nav>
      <main className="py-8">
        <AgentRunPanel />
      </main>
    </div>
  );
}

export default App;