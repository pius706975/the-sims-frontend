const DEFAULT_LOCALE = "id-ID";

export const formatDate = (
  date?: string | Date | null,
  options?: Intl.DateTimeFormatOptions
): string => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return "-";

  return parsedDate.toLocaleDateString(DEFAULT_LOCALE, options);
};

export const formatDateOnly = (date?: string | Date | null): string => {
  return formatDate(date, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const formatDateTime = (date?: string | Date | null): string => {
  return formatDate(date, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
