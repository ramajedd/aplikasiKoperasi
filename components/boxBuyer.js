import React from "react";
import DatePicker from "./datePickerModal"
import Modal from "./modal"
import LayoutButton from "./layoutButton";


export default function BoxBuyer(props) {
    return (
        <LayoutButton theme={1}>
            <DatePicker />
            {props.menuName !== "Anon" &&
                <Modal name={props.menuName} title="Pelanggan">
                    hi how are you
                </Modal>
            }
        </LayoutButton>
    )
}
