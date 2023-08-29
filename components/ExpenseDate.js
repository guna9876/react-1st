function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{Year}</div>
      <div>{day}</div>
    </div>
  );
}
export default ExpenseDate;
