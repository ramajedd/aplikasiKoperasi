import React from "react";

export default function Card(props) {
//console.log(props);
  return (
    <div className="w-full px-4">
    <div className="shadow p-4 bg-white">
    <div className="text-left">
        
        <div className="text-grey-600 text-sm">
            {props.data}
            {props.deskripsi}
        </div>
    </div>
​
    <div className="mt-4">
        <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 1</a>
        <a href="#" className="no-underline mr-4 text-blue-500 hover:text-blue-400">Link 2</a>
    </div>
    </div>
    </div>

  );
}