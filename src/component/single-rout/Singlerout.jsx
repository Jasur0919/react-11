import axios from "axios";
import './SingleRout.css'
import React, {useEffect, useState} from "react";
import { useParams, useLocation } from "react-router-dom"
// import Image from '../../assets/blog-home.svg'



const SingleRout = () => {
    const {id} = useParams()

    const location = useLocation()
    console.log(location);


const [path, setPath] = useState(null)
    
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => {setPath(res.data), 
                console.log(res.data)})
            .catch(err => console.log(err))
    }, [])
    
    


  return (
    
    <div>
        
        <div className="mobile">

        <div className="container ">
            <div className="single_cards">

                <div className="single_image_appearances">

                    {
                        path?.images?.slice(0, 3).map((element, index) => (
                            <div key={index} className="s">
                                        <img  src={element} />
                            </div>
                        ))
                    }
                </div>

                {/* {link} */}
                {/* <div className="single_image_appearances">
                 
                </div> */}

                <div className="single_image">
                         <img src={path?.images[0]} alt="" />   

                 </div>

                <div className="single_text">
                    
                        <h1> {path?.title}</h1>
                        <p>{path?.description}</p>
                        <h2 className="price-h2">{`${path?.price} $`} <h3 className="h3">Arzon narxda olib qoling</h3></h2>
                        <h2 className="h2" >{path?.brand} <img className="brand-link" src={path?.images[0]} alt="" /></h2>
                        <h3>{path?.category}</h3>
                    
                </div>

        
            </div> 



        </div>
        </div>
        


        
       
    </div>
  )
}

export default SingleRout