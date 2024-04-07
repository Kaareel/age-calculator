import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import Input from "./components/Input";
import Icon from "./components/Icon";

const calculatorAge = (year: string, month: string, day: string) => {
  const yearNum = Number(year);
  const monthNum = Number(month);
  const dayNum = Number(day);

  const birthday = new Date(yearNum, monthNum - 1, dayNum);
  const today = new Date();

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
    year: `${age}`,
    month: `${mth}`,
    day: `${d}`,
  };
};

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [age, setAge] = useState({year: '--', month: '--', day: '--'})

  const handleChangeDay = (e: any) => {
    const value = e.target.value;
    setDay(value);
  };
  const handleChangeMonth = (e: any) => {
    const value = e.target.value;
    setMonth(value);
  };
  const handleChangeYear = (e: any) => {
    const value = e.target.value;
    setYear(value);
  };

  function validate(year: string, month: string, day: string) {
    const newError: { [key: string]: string } = {};
    if (!day) {
      newError.day = "This field is required";
    } else if (Number(day) < 1 || Number(day) > 31) {
      newError.day = "Must be a valid day";
    } else {
      newError.day = "";
    }
    if (!month) {
      newError.month = "This field is required";
    } else if (Number(month) < 1 || Number(month) > 12) {
      newError.month = "Must be a valid month";
    } else {
      newError.month = "";
    }
    if (!year) {
      newError.year = "This field is required";
    } else if (Number(year) > new Date().getFullYear()) {
      newError.year = "Must be in past";
    } else {
      newError.year = "";
    }

    return newError;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate(year, month, day);
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
    const result = calculatorAge(year, month, day)
    console.log("año", year);
    console.log("mes", month);
    console.log("dia", day);
    console.log("result ", result);
    setAge(result)
    console.log("valores", age)
  };
  return (
    <div className="bg-slate-200 h-screen place-content-center flex items-center">
      <div className="bg-white grid p-[50px] max-w-[750] rounded-br-[50%]">
        <form onSubmit={handleSubmit} className="grid justify-center relative">
          <div className="flex justify-center mr-9">
            <Input
              title="DAY"
              placeholder="DD"
              onChange={handleChangeDay}
              error={error.day}
            />
            <Input
              title="MONTH"
              placeholder="MM"
              onChange={handleChangeMonth}
              error={error.month}
            />
            <Input
              title="YEAR"
              placeholder="YYYY"
              onChange={handleChangeYear}
              error={error.year}
            />
          </div>
          <div>
            <button className="bg-bgButton rounded-[50%] absolute right-0 hover:bg-black w-14 h-14 p-1">
              <Icon />
            </button>
          </div>
        </form>
        <hr className="border-0 h-px bg-gray-200 mt-6"/>
        <Calculator year={age.year} month={age.month} day={age.day} />
      </div>
    </div>
  );
}

export default App;
