import React from "react";
import FormMulti from "../element/formMulti";
import NumberFormat from "react-number-format";
import Button from "../element/button";

export default function FormPenjualan (props) {
    const [showModal, setShowModal] = React.useState(false);
    const [input, setInput] = React.useState([]);

    const hargaJualArray = input.filter(x => x.name === "harga jual");
    const hargaJual = hargaJualArray.length == 1 ? hargaJualArray[0].value : 0;

    const jumlahDibeliArray = input.filter(x => x.name === "jumlah");
    const jumlahDibeli = jumlahDibeliArray.length == 1 ? jumlahDibeliArray[0].value : 1;

    const handleInput = val => {
        const arr = input;
        const shouldUpdate = arr.some(d => d.name === val.name);
        if (shouldUpdate) {
            const array = arr.map(x => x.name === val.name ? { name: val.name, value: val.value } : x);
            setInput(array);
        } else {
            setInput([...arr, val]);
        }

    }

    const handleSave = () => {
        setShowModal(false);
        props.handleInput(input);
        setInput([]);
    }



    return (
        <div className="p-4 py-1">
            <div className="flex flex-row mx-auto flex flex-wrap items-center justify-between">
                <Button theme ={1} onClick={() => setShowModal(true)}>
                    +
                </Button>
                <Button theme ={1}>
                    {"->"}
                </Button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-white-100 rounded p-4 " autoComplete="off">
                                        <FormMulti
                                            suggestions={props.suggestions}
                                            handleInput={(val) => handleInput(val)}
                                        />

                                        <div className="mb-4">
                                            <div
                                                className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="Total"
                                                type="text"
                                            >

                                                <NumberFormat
                                                    //className="bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    thousandSeparator={"."}
                                                    displayType={'text'}
                                                    decimalSeparator={","}
                                                    value={hargaJual * jumlahDibeli}
                                                />

                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => handleSave()}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}