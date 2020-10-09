import React from "react";
import Tabel from "../components/table"

export default function FormTransaksi(props) {
    //console.log(props);
    return (

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 pt-5 pb-8">
                    <form className="bg-gray-100 rounded p-8">
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2" for="title">
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
                                for="username"
                            >
                                Subtitle
                            </label>
                            <input
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="protect the pilot"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-600 text-sm font-semibold mb-2"
                                for="username"
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
            <div className="bg-gray-200 ">
                <Tabel/>
            </div>
        </div>

    );
}