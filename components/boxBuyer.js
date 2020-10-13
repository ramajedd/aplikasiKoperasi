import React, { useState } from "react";
import DatePicker from "react-modern-calendar-datepicker";

export default function BoxBuyer(props) {
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <div className=" pt-1 pb-2 px-4 ">
            <div className="flex bg-gray-300 rounded">
                <div className="bg-gray-300 px-4 py-4 rounded">
                    <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                        <DatePicker
                            value={selectedDay}
                            onChange={setSelectedDay}
                            inputPlaceholder="Select a day"
                            shouldHighlightWeekends
                        />
                    </div>
                    <div className="font-sans sm:font-serif md:font-mono lg:font-sans xl:font-serif">
                        Pengguna (ubah)
                </div>
                </div>
            </div>
        </div>


    )
}
