import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kindle from './assets/kindle-uz.png'
import { IoMdMenu } from "react-icons/io";
import { TbPencilSearch } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import axios from '../src/api/index'
import {Link} from 'react-router-dom'



function App() {

  const [data, setData] = useState("")
  const [baza, setBaza] = useState("")
  
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("")
  const [vall, setVall] = useState("")

  console.log(vall);

  useEffect(() => {
        axios
            .get(`/products/search?q=${value}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
  }, [value])

  useEffect(() => {
    axios
        .get(`/products/category/${vall}`)
        .then(reses => console.log(reses))
        .catch(error => console.log(error))
}, [vall])

  return (
    <>
    <section className="header">
      <div className="container">
        <div className="header_box">
            <img src={Kindle} alt="" />
          <div className="header_brend">
            <button>{<IoMdMenu className='menu' />} Katalog</button>
            <div className="header_input">
              <TbPencilSearch className='header_input_img' />
              <input value={value} onChange={e => setValue(e.target.value)} type="text"  placeholder='Qidirish...'/>
              {
                value.trim()? 
                <div  className="header_input_content">

                  {
                    data && data.map((item, inx) =>
                    <div className="brend" value={vall} onClick={el => setVall(item.category)}>
                      <img src={item.images[0]} width={50} height={70} alt="" />
                      <h3>{item.title}</h3>

                    </div>

                      )
                  }
                </div>
                : <>  </>

              }

            </div>
          </div>
          <div className="header_links">
            <span className='header_span'><IoPersonSharp className='header_images'/> chiqish</span>
            <span className='header_span'><FaHeartbeat className='header_images'/> Sevimlilar</span>
            <span className='header_span'><FaCartPlus className='header_images'/> Savat</span>
          </div>
        <IoMdMenu className='menu-1' />
        </div>
      </div>
    </section>

    <div className="info">
      <div className="container">
        <div className="info_box">
          {
            data && data
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App
