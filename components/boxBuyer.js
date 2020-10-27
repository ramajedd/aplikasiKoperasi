import React from "react";
import DatePicker from "./datePickerModal"
import Modal from "./modal"
import LayoutButton from "./layoutButton";


export default function BoxBuyer(props) {
    return (
        <LayoutButton theme={1}>
            <DatePicker />
            {props.mode !== "Anon" &&
                <Modal name={props.mode} title="Pelanggan">
                    hi how are you
                </Modal>
            }
        </LayoutButton>
    )
}
