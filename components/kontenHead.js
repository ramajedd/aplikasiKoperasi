import React from 'react';

export default function Transaksi() {
  
  
  return (
    <>
    <div className="flex flex-wrap pt-2 px-4 justify-center  text-xs uppercase font-bold">Penjualan</div>
    <div className="pt-2">
      <div className="flex flex-wrap py-2 justify-center">
        <div className="w-full px-4">
          <div className="flex justify-center bg-blue-200 rounded">
            <ul className="items-center flex">
              <li >
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                  href="#pablo"
                >
                  Plg
                    </a>
              </li>
              <li >
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                  href="#pablo"
                >
                  Mem
                    </a>
              </li>
              <li >
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green hover:opacity-75"
                  href="#pablo"
                >
                  Anon
                    </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    </>


  )
}
