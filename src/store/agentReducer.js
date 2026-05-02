export const initialState = {
  runId: null,
  query: "",
  globalStatus: "idle", // idle, running, complete, error
  tasks: {}, // Keyed by task_id for efficient updates
  thoughts: [], // System/Coordinator level thoughts
  finalOutput: null,
  elapsedTime: 0,
};

export function agentReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'run_started':
      return { ...initialState, runId: payload.run_id, query: payload.query, globalStatus: 'running' };

    case 'agent_thought':
      // If task_id is null/coordinator, it's a global thought
      return { ...state, thoughts: [...state.thoughts, payload.thought] };

    case 'task_spawned':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [payload.task_id]: { 
            ...payload, 
            status: 'queued', 
            toolCalls: [], 
            partialOutputs: [],
            isFinal: false 
          }
        }
      };

    case 'task_update':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [payload.task_id]: { ...state.tasks[payload.task_id], ...payload }
        }
      };

    case 'tool_call':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [payload.task_id]: {
            ...state.tasks[payload.task_id],
            toolCalls: [...state.tasks[payload.task_id].toolCalls, payload]
          }
        }
      };

    case 'run_complete':
      return { ...state, globalStatus: 'complete', finalOutput: payload.output };

    default:
      return state;
  }
}