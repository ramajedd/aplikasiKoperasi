import React, { useState } from "react";
import Autocomplete from "./autocomplete";
import NumberFormat from "react-number-format"

export default function FormTransaksi(props) {

    function handleInput(e) {
        return props.handleInput({ name: e.target.id, value: e.target.value })
    };

    function handleInputFormatNumber(obj) {
        //console.log(obj)
        return props.handleInput({ name: obj.id, value: obj.value })
    };

    function handleAutoComplete(obj) {
        return props.handleInput(obj)
    }

    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="title">
                    Item dijual
                </label>
                <Autocomplete
                    suggestions={props.suggestions}
                    id="item dijual"
                    autoComplete={'' + Math.random()}
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onSelect={handleAutoComplete}
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
                    onValueChange={(values) => {
                        const {formattedValue, value} = values;
                        handleInputFormatNumber({id:"harga beli", value, formattedValue});
                      }}
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
                    onValueChange={(values) => {
                        const {formattedValue, value} = values;
                        handleInputFormatNumber({id:"harga jual", value, formattedValue});
                      }}
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
                    onValueChange={(values) => {
                        const {formattedValue, value} = values;
                        handleInputFormatNumber({id:"jumlah", value, formattedValue});
                      }}
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

        </>


    );
}