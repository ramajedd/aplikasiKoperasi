import React from "react";
import Link from 'next/link'

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (

    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <Link href="/">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              >
                Akun Satu
                </a>
               </Link>
              <button
                className="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white visible sm:inline-flex md:inline-flex lg:hidden xl:hidden"

                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu
                </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">

                  <Link href="/pg/transaksi/pembayaran">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      Transaksi
                    </a>
                  </Link>


                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Pelanggan
                    </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Laporan
                    </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Pengaturan
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

  );
}