import { useSyncExternalStore } from "react";

const BREAKPOINT = 768;

function subscribe(onChange: () => void) {
  const query = window.matchMedia(`(max-width: ${BREAKPOINT}px)`);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(`(max-width: ${BREAKPOINT}px)`).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe mobile-viewport check (<= 768px).
 * Server and the first client render both return `false`, so markup always
 * matches; React re-renders with the real value right after hydration.
 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
