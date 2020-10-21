import React, { useState } from "react";
import Autocomplete from "./autocomplete";
import NumberFormat from "react-number-format"

export default function FormTransaksi(props) {

    function handleInput(e) {
        return props.handleInput({ name: e.target.id, value: e.target.value })
    };

    function handleInputX(obj) {
        return props.handleInput(obj)
    }

    return (
        <form className="bg-white-100 rounded p-4">
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="title">
                    Item dijual
                </label>
                <Autocomplete
                    suggestions={props.suggestions}
                    id="item dijual"
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onSelect={handleInputX}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Harga beli
                </label>
                <NumberFormat
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="harga beli"
                    type="text"
                    placeholder="protect the pilot"
                    decimalSeparator={","}
                    thousandSeparator={"."}
                    onChange={handleInput}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="username"
                >
                    Harga jual
                </label>
                <NumberFormat
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="harga jual"
                    type="text"
                    placeholder="protect the pilot"
                    decimalSeparator={","}
                    thousandSeparator={"."}
                    onChange={handleInput}
                />

            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="jumlah"
                >
                    Jumlah
                </label>
                <NumberFormat
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Jumlah"
                    type="text"
                    placeholder="protect the pilot"
                    decimalSeparator={","}
                    thousandSeparator={"."}
                    onChange={handleInput}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="username"
                >
                    Total
                </label>
                <NumberFormat
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Total"
                    type="text"
                    disabled={true}
                    placeholder="protect the pilot"
                    decimalSeparator={","}
                    thousandSeparator={"."}

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
                    onChange={handleInput}
                >
                </textarea>
            </div>

        </form>


    );
}