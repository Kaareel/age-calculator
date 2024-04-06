import { useState } from "react";
import Calculator from "./components/Calculator";
import Input from "./components/Input";
import Icon from "./components/Icon";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState<{ [key: string]: string }>({});

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

  function validate() {
    const newError: { [key: string]: string } = {
      day: "",
      month: "",
      year: "",
    };
    if (!day) {
      console.log(day);
      newError.day = "This field is required";
    } else if (Number(day) >= 32) {
      newError.day = "Must be a valid day";
    } else {
      newError.day = "";
    }
    if (!month) {
      newError.month = "This field is required";
    } else if (Number(month) >= 13) {
      newError.month = "Must be a valid month";
    } else {
      newError.month = "";
    }
    if (!year) {
      newError.year = "This field is required";
    } else if (Number(year) >= 2024) {
      newError.year = "Must be in past";
    } else {
      newError.year = "";
    }

    return newError;
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
  };

  return (
    <div className="bg-slate-200 h-screen place-content-center flex items-center">
      <div className="bg-white grid p-[50px] max-w-[750]">
          <form onSubmit={handleSubmit} className="grid justify-center relative">
            <div className="flex justify-center">
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
              <button className="bg-bgButton rounded-full absolute right-0"><Icon/></button>
            </div>
          </form>
        <Calculator year={year} month={month} day={day} />
      </div>
    </div>
  );
}

export default App;
