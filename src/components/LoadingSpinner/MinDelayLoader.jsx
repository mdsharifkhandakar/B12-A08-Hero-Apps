import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Shows the spinner whenever `loading` is true, and ensures it remains
// visible for at least `minMs` milliseconds after loading starts.
const MinDelayLoader = ({ loading, minMs = 2000 }) => {
  const [visible, setVisible] = useState(false);
  const startRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // When loading begins, show immediately and record start time
    if (loading) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      startRef.current = Date.now();
      setVisible(true);
      return;
    }

    // When loading ends, ensure the spinner was visible for at least minMs
    if (!loading && startRef.current) {
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, minMs - elapsed);
      if (remaining > 0) {
        timerRef.current = setTimeout(() => {
          setVisible(false);
          startRef.current = null;
          timerRef.current = null;
        }, remaining);
      } else {
        setVisible(false);
        startRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [loading, minMs]);

  if (!visible) return null;
  return <LoadingSpinner />;
};

export default MinDelayLoader;
