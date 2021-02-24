import { MyDatePicker } from "./datePicker";
import { useState } from 'react';
import DateButton from './datePickerModal';
import Autocomplete from "./autocomplete";
import NumberFormat from "react-number-format";


export default function Input(props) {
    const [selectedDay, setSelectedDay] = useState(null);
    const handleAutoComplete = (obj) => {
        props.handleAutoComplete(obj)
    }
    function handleInputFormatNumber(obj) {
        return props.handleInput({ name: obj.id, value: obj.value })
    };

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
                props.inputType === 'dateButton' &&
                <DateButton />
            }
            {
                props.inputType === 'autocomplete' &&
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        {props.name}
                    </label>
                    <Autocomplete
                        suggestions={props.suggestions}
                        id={props.name}
                        type={"text"}
                        placeholder={props.placeholder}
                        autoComplete={'' + Math.random()}
                        className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onSelect={handleAutoComplete}
                    />
                </div>
            }
            {
                props.inputType === 'formatNumber' &&
                <div className="mb-4">
                    <label
                        className="block text-gray-600 text-sm font-semibold mb-2"
                        htmlFor="username"
                    >
                        {props.name}
                    </label>
                    <NumberFormat
                        className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={props.name}
                        type="text"
                        placeholder={props.placeholder}
                        decimalSeparator={","}
                        thousandSeparator={"."}
                        onValueChange={(values) => {
                            const { formattedValue, value } = values;
                            handleInputFormatNumber({ id: props.name, value, formattedValue });
                        }}
                    />

                </div>
            }
            {
                props.inputType === 'formatNumberStatic' &&
                <div className="mb-4">
                    <div
                        className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={props.name}
                        type="text"
                    >

                        <NumberFormat
                            thousandSeparator={"."}
                            displayType={'text'}
                            decimalSeparator={","}
                            value={props.value}
                        />

                    </div>
                </div>
            }
        </div>



    )
}

