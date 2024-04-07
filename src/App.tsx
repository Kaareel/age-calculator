import { useState } from "react";
import Calculator from "./components/Calculator";
import Input from "./components/Input";
import Icon from "./components/Icon";
import {calculatorAge, validate } from "./utils/helpers";


function App() {
  const [dateData, setDateData] = useState({
    day: "",
    month: "",
    year: "",
  })
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [age, setAge] = useState({year: '--', month: '--', day: '--'})

  const handleChange = (e: any) => {
    console.log("name: ", e.target.name)
    const {value, name} = e.target;
    setDateData({
      ...dateData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate(dateData.year, dateData.month, dateData.day);
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
    const result = calculatorAge(dateData.year, dateData.month, dateData.day)
    setAge(result)
  };
  return (
    <div className="bg-slate-200 h-screen place-content-center flex items-center">
      <div className="bg-white grid p-[50px] max-w-[750] rounded-br-[50%]">
        <form onSubmit={handleSubmit} className="grid justify-center relative">
          <div className="flex justify-center mr-9">
            <Input
              title="DAY"
              name="day"
              placeholder="DD"
              onChange={handleChange}
              error={error.day}
            />
            <Input
              title="MONTH"
              name="month"
              placeholder="MM"
              onChange={handleChange}
              error={error.month}
            />
            <Input
              title="YEAR"
              name="year"
              placeholder="YYYY"
              onChange={handleChange}
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
