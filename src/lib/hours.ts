export type OpenStatus = { todayDow: number; isOpen: boolean };

// Sun=0, Mon=1, ..., Sat=6 (matches Date.getDay())
// Wasabi: Mondays closed; Tue–Sun 08:00 – 22:00
export function computeStatus(now: Date = new Date()): OpenStatus {
  const dow = now.getDay();
  const minutesOfDay = now.getHours() * 60 + now.getMinutes();
  const isOpen = dow !== 1 && minutesOfDay >= 8 * 60 && minutesOfDay < 22 * 60;
  return { todayDow: dow, isOpen };
}
