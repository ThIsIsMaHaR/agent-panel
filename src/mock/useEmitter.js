import { useEffect, useState } from 'react';

export function useEmitter(events, dispatch) {
  const [isRunning, setIsRunning] = useState(false);

  const startRun = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning || !events) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < events.length) {
        dispatch({ type: events[index].type, payload: events[index] });
        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000); // 1 second between events for legibility

    return () => clearInterval(interval);
  }, [isRunning, events, dispatch]);

  return { startRun, isRunning };
}