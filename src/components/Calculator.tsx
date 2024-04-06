
interface Props {
  year: string;
  month: string;
  day: string;
}

function calculatorAge(props: Props) {
  const { year, month, day } = props;
  const yearNum = Number(year);
  const monthNum = Number(month);
  const dayNum = Number(day);

  const birthday = new Date(yearNum, monthNum - 1, dayNum);
  const today = new Date();
  console.log("date:", birthday)
  let age = today.getFullYear() - birthday.getFullYear();
  let mth = today.getMonth() - birthday.getMonth();
  let d = today.getDate() - birthday.getDate();

  if (mth < 0 || (mth === 0 && d < 0)) {
    age--;
  }
  if (mth < 0) {
    mth += 12;
  }
  if (d < 0) {
    let lastDayMonthPrevious = new Date(
      birthday.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    d += lastDayMonthPrevious;
    mth--;
  }
  return {
    year: age,
    month: mth,
    day: d,
  };
}

function Calculator(props: Props) {
    const age = calculatorAge(props)

    return (
      <div>
        <p>
           {age.year} años
        </p>
        <p>
        {age.month} meses
        </p>
        <p>
        {age.day} días
        </p>
      </div>
    );
}

export default Calculator;
