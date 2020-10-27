import React from 'react';
import Button from './button';
import LayoutButton from './layoutButton';
import Toggle from "./toggle";
import Modal from "./modal"

export default function Transaksi(props) {
  const menuName = props.menu
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
    <>
      <div className="flex flex-row pt-4 px-4 text-m font-bold mx-auto flex flex-wrap items-center justify-between">
        <Toggle />
        <Modal name={'kas'} title={'woi'}>HOw are you</Modal>
      </div>
      <LayoutButton theme={2}>
        <Menu />
      </LayoutButton>

    </>


  )
}
