import React, { Fragment} from "react";
import Link from "next/link";
import {menuData} from "../libs/menuConfig";

export default function LayoutKonten(props) {
  return (
    <div className="w-full px-4">
      <div className="shadow p-4 bg-red">
        <div className="text-left">
          {props.type !== 'home' &&
            <Fragment>
              <ul className="flex justify-center bg-white flex-col lg:flex-row list-none lg:ml-auto">
                { 
                  menuData.map((button, index) => {
                    return (
                      <li 
                        className={`nav-item rounded-full shadow ${props.page===button.name?"bg-blue-200":"bg-gray-200"} mt-1 mb-1 border-2 border-blue-500 hover:shadow-lg hover:bg-blue-200`}
                        key ={index}
                        //onClick={(val) => buttonActive(val)}
                      >
                        <Link href={button.link}>
                          <a
                            className="px-4 py-3 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                            name={button.name}
                          >
                            {button.name}
                          </a>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </Fragment>
          }

          <div className={props.type === 'konten' ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 pt-5 pb-8" : 'undefined'}>
            {props.children}
          </div>
        </div>

        <div className="mt-4">
          <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 1</a>
          <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 2</a>
        </div>
      </div>
    </div>

  );
}