export default function formatDate(date: Date) {
  const eventDate = new Date(date);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [{ value: month }, , { value: day }, , { value: year }] =
    dateFormatter.formatToParts(eventDate);
  return `${month} ${+day + 1}, ${year}`;
}
