import React from "react";
import moment from 'moment';

export default function FormInPlace(props) {
    const date = moment().format('LL');
    return (
        <div className="flex justify-start">
            <form className="rounded">
                <div className="mb-4">
                    <input
                        className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder={date}
                    />

                </div>
            </form>
            <div className="rounded">
                <div className="px-2">
                    <div className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        ubah
                    </div>

                </div>
            </div>
        </div>
    )
}

