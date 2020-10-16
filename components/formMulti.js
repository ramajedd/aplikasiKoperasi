import React from "react";
import Autocomplete from "./autocomplete";

export default function FormTransaksi(props) {
    
    return (
        <form className="bg-white-100 rounded p-4">
            <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="title">
                    Item dijual
                </label>
            <Autocomplete
                suggestions={props.suggestions}
            />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="title">
                    Harga beli
                </label>
                <input
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Protocol 3"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="username"
                >
                    Harga jual
                </label>
                <input
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subtitle"
                    type="text"
                    placeholder="protect the pilot"
                />
            </div>
            <div>
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="username"
                >
                    Keterangan
                            </label>
                <textarea
                    rows="4"
                    cols="50"
                    className="bg-gray-100 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                >
                </textarea>
            </div>

        </form>


    );
}