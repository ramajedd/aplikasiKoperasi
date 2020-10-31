import React, { Fragment } from "react";
import DatePicker from "./datePickerModal";
import Modal from "./modal";
import LayoutButton from "./layoutButton";
import Button from './button';


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
                    <div className=" pt-1 pb-2 px-4 ">
                        <div className="flex flex-wrap bg-green-100 items-stretch w-full mb-4 relative">
                            <div className="flex -mr-px">
                                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                    Penyetor
                                </span>
                            </div>
                            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative" />
                        </div>
                    </div>
            }
        </Fragment>
    )
}
