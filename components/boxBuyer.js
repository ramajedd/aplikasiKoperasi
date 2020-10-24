import React from "react";
import DatePicker from "./datePickerModal"
import Modal from "./modal"
import ButtonLayout from "./layoutButton";


export default function BoxBuyer(props) {
    //const [showButton, setShowBUtton] = React.useState(true);
    return (
        <ButtonLayout>
            <DatePicker />
            {props.mode !== "Anon" &&
                <Modal name={props.mode} title="Pelanggan">
                    hi how are you
                </Modal>
            }

            <Modal name="Kas" title="Akun Kas">
                pilih akun kas
            </Modal>
        </ButtonLayout>
    )
}
