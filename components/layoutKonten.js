import React from "react";

export default function LayoutKonten(props) {
  //console.log(props);
  return (
    <div className="w-full px-4">
      <div className="shadow p-4 bg-white">
        <div className="text-left">
          {props.type!=='home'&&
            <div className="flex justify-center bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
          </div>
          }
          
          
            {props.children}
          
        </div>

        <div className="mt-4">
          <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 1</a>
          <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 2</a>
        </div>
      </div>
    </div>

  );
}