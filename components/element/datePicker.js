import DatePicker,{Calendar} from "react-modern-calendar-datepicker";
import CalenderStyle from "./datePickerStyle";

const MyDatePicker = (props) => {
    //const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <CalenderStyle />
            <DatePicker
                value={props.value}
                onChange={props.onChange}
                shouldHighlightWeekends
            />
        </>
    );
        
  }

  const Kalender = (props) => {
    //const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <CalenderStyle />
            <Calendar
                value={props.value}
                onChange={props.onChange}
                shouldHighlightWeekends
            />
        </>
    );
        
  }

  export {MyDatePicker, Kalender};