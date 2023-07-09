const convertDate = (date, format) => {
  const newDate = new Date(date);
  let dateFormat;

  if (!format || format === "") {
    dateFormat =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate() +
      "\n" +
      newDate.getHours() +
      ":" +
      newDate.getMinutes() +
      ":" +
      newDate.getSeconds();
  } else if (format === "without-time") {
    dateFormat =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate();
  }

  return dateFormat;
};

export default convertDate;
