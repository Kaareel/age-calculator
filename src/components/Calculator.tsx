interface Props {
  year: string;
  month: string;
  day: string;
}
function Calculator(props: Props) {
  console.log("años", props.year)
  console.log("mes", props.month)
  console.log("dia", props.day)
  return (
    <div className="pt-10">
      <p className="italic font-bold text-6xl"><span className="text-textColorDate">{props.year}</span> años</p>
      <p className="italic font-bold text-6xl"><span className="text-textColorDate">{props.month}</span> meses</p>
      <p className="italic font-bold text-6xl"><span className="text-textColorDate">{props.day}</span> días</p>
    </div>
  );
}

export default Calculator;
