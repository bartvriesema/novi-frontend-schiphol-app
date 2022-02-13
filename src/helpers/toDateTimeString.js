function toDateTimeString(dateTime, addHours) {
  let month;
  let day;

  if (dateTime.getMonth() + 1 < 10) {
    month = "0" + dateTime.getMonth();
  } else {
    month = dateTime.getMonth();
  }

  if (dateTime.getDate() < 10) {
    day = "0" + dateTime.getDate();
  } else {
    day = dateTime.getDate();
  }

  return (
    dateTime.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    "T" +
    (dateTime.getHours() + addHours) +
    ":00:00"
  );
}

export default toDateTimeString;
