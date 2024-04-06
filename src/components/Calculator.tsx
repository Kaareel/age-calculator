
interface Props {
  year: string;
  month: string;
  day: string;
}

function Calculator(props: Props) {

    return (
      <div>
        <p>
           {props.year} años
        </p>
        <p>
        {props.month} meses
        </p>
        <p>
        {props.day} días
        </p>
      </div>
    );
}

export default Calculator;
