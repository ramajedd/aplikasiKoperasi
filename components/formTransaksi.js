import React, { Fragment } from "react";
import Autocomplete from "./autocomplete";
import ModalForm from "./modalForm";

export default function FormTransaksi(props) {
    //console.log(props);
    return (
        <form className="bg-gray-100 rounded p-8">
            <Autocomplete
                suggestions={props.suggestions}
            />
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="title">
                    Title
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
                    Subtitle
                </label>
                <input
                    className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subtitle"
                    type="text"
                    placeholder="protect the pilot"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-600 text-sm font-semibold mb-2"
                    htmlFor="username"
                >
                    Description
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

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Create post
                            </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    cancel
                            </a>
            </div>
        </form>


    );
}