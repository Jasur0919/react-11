import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kindle from './assets/kindle-uz.png'
import { IoMdMenu } from "react-icons/io";
import { TbPencilSearch } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="header">
      <div className="container">
        <div className="header_box">
          <div className="header_brend">
            <img src={Kindle} alt="" />
            <button>{<IoMdMenu className='' />} Katalog</button>
            <div className="header_input">
              <TbPencilSearch className='header_input_img' />
              <input type="text"  placeholder='Kindledan harid qiling'/>
            </div>
          </div>
          <div className="header_links">
            <span><IoPersonSharp /> chiqish</span>
            <span><FaHeartbeat /> Sevimlilar</span>
            <span><FaCartPlus /> Savat</span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
