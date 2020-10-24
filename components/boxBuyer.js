import React from "react";
import DatePicker from "./datePickerModal"
import Modal from "./modal"


export default function BoxBuyer(props) {

    return (
        <div className=" pt-1 pb-2 px-4 ">
            <div className="flex justify-center bg-gray-300 rounded">
                <div className="flex justify-center bg-gray-300 px-4 py-4 rounded">
                    <DatePicker />
                    <Modal title="Pengguna">
                        hi how are you
                    </Modal>
                    <Modal title="Akun kas">
                        pilih akun kas
                    </Modal>
                </div>
            </div>
        </div>


    )
}
