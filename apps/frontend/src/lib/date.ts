type DateInput = string | number | Date;

/** ISO/Date를 받아서 Date 객체로 안전하게 변환 (실패 시 null) */
export function toDate(input: DateInput): Date | null {
  const d = input instanceof Date ? input : new Date(input);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** 카드 우상단용: "Feb 28" */
export function formatCardDate(input: DateInput, locale = "en-US"): string {
  const d = toDate(input);
  if (!d) return "";

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "2-digit",
  }).format(d);
}
