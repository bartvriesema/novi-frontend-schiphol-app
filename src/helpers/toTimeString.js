function toTimeString(unixTime) {
  const date = new Date(unixTime * 1000);

  return (
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0")
  );
}
export default toTimeString;
