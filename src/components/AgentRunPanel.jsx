import React, { useReducer } from 'react';
import { agentReducer, initialState } from '../store/agentReducer';
import { useEmitter } from '../mock/useEmitter';
import runSuccess from '../mock/fixtures/run_success.json';

const StatusBadge = ({ status, reason }) => {
  const styles = {
    running: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    complete: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    failed: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    cancelled: "bg-purple-500/10 text-purple-400 border-purple-200/20",
    queued: "bg-slate-500/10 text-slate-400 border-slate-500/20"
  };
  return (
    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${styles[status]}`}>
      {reason === "sufficient_data" ? "Sufficient Data" : status}
    </span>
  );
};

export default function AgentRunPanel() {
  const [state, dispatch] = useReducer(agentReducer, initialState);
  const { startRun, isRunning } = useEmitter(runSuccess, dispatch);

  // Grouping tasks by their parallel group
  const tasks = Object.values(state.tasks);
  
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      {/* Header Section */}
      <section className="bg-[#161922] border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Active Query</h2>
            <p className="text-xl font-medium text-white">{state.query || "System Idle"}</p>
          </div>
          <button onClick={startRun} disabled={isRunning} className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
            {isRunning ? "Simulating Run..." : "Run Analysis"}
          </button>
        </div>
      </section>

      {/* Final Synthesis Output (Highest Priority) */}
      {state.globalStatus === 'complete' && (
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-xl shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 p-2 rounded-lg">✨</div>
            <h2 className="text-2xl font-bold text-white">Final Research Synthesis</h2>
          </div>
          <p className="text-blue-50 leading-relaxed text-lg">{state.finalOutput.summary}</p>
        </section>
      )}

      {/* Live Task Feed */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.task_id} className={`bg-[#161922] border rounded-xl p-5 transition-all duration-500 ${task.status === 'cancelled' ? 'border-purple-500/30' : 'border-slate-800'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${task.status === 'complete' ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`} />
                <span className="text-xs font-mono text-slate-500">Agent: {task.agent}</span>
              </div>
              <StatusBadge status={task.status} reason={task.reason} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{task.label}</h3>
            {task.content && (
              <div className="bg-black/20 rounded-lg p-4 border border-slate-700/50">
                <p className="text-sm text-slate-300 italic">"{task.content}"</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}