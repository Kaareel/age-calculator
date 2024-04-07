
export const calculatorAge = (year: string, month: string, day: string) => {
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
        mth += (mth < 0) ? 11 : 12;
    }
    if (d < 0) {
        const lastDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        d += lastDayOfPrevMonth; 
        mth--; 

        if (mth < 0) {
            mth += 12; 
            age--;
        }
    }
    return {
      year: `${age}`,
      month: `${mth}`,
      day: `${d}`,
    };
  };

  export const validate = (year: string, month: string, day: string) =>{
    const newError: { [key: string]: string } = {};
    if (!day) {
      newError.day = "This field is required"; 
    } else if (Number(day) < 1 || Number(day) > 31) {
      newError.day = "Must be a valid day";
    }else if (Number(day) >= 30 && Number(month) === 2){
        newError.day = "Must be a valid day"
    }
    else if (Number(day) >= 31 && Number(month) === 2 || Number(month) === 4 || Number(month) === 6 || Number(month) === 9 || Number(month) === 11){
        newError.day = "Must be a valid day"
    }
    if (!month) {
      newError.month = "This field is required";
    } else if (Number(month) < 1 || Number(month) > 12) {
      newError.month = "Must be a valid month";
    }
    if (!year) {
      newError.year = "This field is required";
    } else if (Number(year) > new Date().getFullYear()) {
      newError.year = "Must be in past";
    }

    return newError;
  }