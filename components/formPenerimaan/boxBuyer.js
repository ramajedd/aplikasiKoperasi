import React, { Fragment } from "react";
import DatePicker from "../element/datePickerModal";
import Modal from "../element/modal";
import LayoutButton from "../layoutButton";
import Button from '../element/button';
import Input from '../element/input';


export default function BoxBuyer(props) {
    const menuName = props.menus
    const [status, setStatus] = React.useState(menuName[0]);
    const handleClick = (menuName) => {
        setStatus(menuName);
        props.onClickMenu(menuName);
    }
    function Menu() {
        return menuName.map((menu, index) => {
            return (
                <li className={status === menu ? "bg-red-100" : ""} key={index}>
                    <Button
                        theme={3}
                        name={menu}
                        onClick={(name) => handleClick(name)}
                    >
                        {menu}
                    </Button>

                </li>
            )
        })
    }
    return (
        <Fragment>
            {
                props.type === 1 ?
                    <Fragment>
                        <LayoutButton theme={2}>
                            <Menu />
                        </LayoutButton>
                        <LayoutButton theme={1}>
                            <DatePicker />
                            {props.menuName !== "Anon" &&
                                <Modal name={props.menuName} title="Pelanggan">
                                    hi how are you
                                </Modal>
                            }
                        </LayoutButton>
                    </Fragment>
                    :
                    <Fragment>
                        <Input
                            name="Tanggal"
                            inputType="dateButton"

                        />
                        <Input
                            name="Penyetor"
                            inputType="text"
                        />

                    </Fragment>
            }
        </Fragment>
    )
}
