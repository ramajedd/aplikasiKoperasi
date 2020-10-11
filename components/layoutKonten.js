import React, { Fragment } from "react";

export default function LayoutKonten(props) {
  //console.log(props);
  return (
    <div className="w-full px-4">
      <div className="shadow p-4 bg-white">
        <div className="text-left">
          {props.type !== 'home' &&
            <Fragment>
              <div className="flex justify-center bg-gray-200">
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
              </div>
              
            </Fragment>

          }

            <div className={props.type==='konten'?"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 pt-5 pb-8":'undefined'}>
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