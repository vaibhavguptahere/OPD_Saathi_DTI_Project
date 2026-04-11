import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  try {
    // Manually filter out any objects that are not arrays, strings, or plain objects
    // as clsx internally can fail if passed something like a native event or a Set.
    const sanitizedInputs = inputs.map(input => {
      if (input && typeof input === 'object' && !Array.isArray(input)) {
        // Only allow plain objects {} for conditional classes
        if (Object.getPrototypeOf(input) !== Object.prototype) return null;
      }
      return input;
    }).filter(Boolean);

    return clsx(...sanitizedInputs);
  } catch (e) {
    console.warn("CN suppressed a potential crash:", e);
    return "";
  }
}
