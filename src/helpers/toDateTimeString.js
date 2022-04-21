function toDateTimeString(dateTime, addHours) {
    return (
        dateTime.getFullYear() +
        "-" +
        (dateTime.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        dateTime.getDate().toString().padStart(2, "0") +
        "T" +
        (dateTime.getHours() + addHours) +
        ":00:00"
    );
}

export default toDateTimeString;
