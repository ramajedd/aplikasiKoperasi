import { MyDatePicker } from "./datePicker";
import { useState } from 'react';
import DateButton from './datePickerModal';

export default function Input(props) {
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <div className=" pt-2 pb-1 px-4 ">
            {props.inputType === 'text' &&
                <div className="flex flex-wrap bg-green-100 items-stretch w-full relative">
                    <div className="flex -mr-px">
                        <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                            {props.name}
                        </span>
                    </div>
                    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative" />
                </div>

            }
            {
                props.inputType === 'kalender' &&

                <div className="flex flex-wrap bg-green-100 items-stretch w-full relative">
                    <MyDatePicker
                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends
                    />
                </div>


            }
            {
                props.inputType === 'dateButton'&&
                <DateButton/>
            }
        </div>



    )
}

