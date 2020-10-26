import React from 'react';
import Button from './button';
import LayoutButton from './layoutButton';
import Toggle from "./toggle";

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
      <div className="flex flex-wrap pt-2 px-4 justify-center  text-xs uppercase font-bold"><Toggle/></div>
      <LayoutButton theme={2}>
        <Menu />
      </LayoutButton>

    </>


  )
}
