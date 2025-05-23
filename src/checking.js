import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Downnav from "./Downnav";
import Footer2 from "./footer2";

import About from "./About";
export default function Checking() {
    var uri = "https://sunshine-backend-e1zz.onrender.com/";;
    var navi = useNavigate();

    const [data2, setdata2] = useState([]);
    function getdata() {
        axios.get(uri + "getimg2").then((succ) => {
            // console.log(succ.data)
            setdata2(succ.data);
        })
    }

    useEffect(() => {
        getdata();
    }, [])

    function pro(x) {
        // console.log(x)
        navi("/product?id=" + x._id)
    }

    return (
        <>
            <Navbar />
            <Downnav />


            <div className=' '>
                {/* &nbsp; */}
                <div className="col-lg-12">
                    {/* <About /> */}

                    <div className="">
                        {data2.map((row) => (


                            <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6   box ' onClick={() => pro(row)} style={{ backgroundSize: 'cover', height: 260,paddingTop:0 }} key={row._id}>
                                <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12 text-center ">
                                    <img src={row.Image} className="img-responsive "  style={{ backgroundSize: 'contain', height: 160, padding:10}}/>
                                    <p>{row.Sname}</p>
                                    <p>Rs:{row.Price}</p>
 

                                </div>
                                <div className="text-center">

                                <button className=" btn btn-success">view detail</button>
                                </div>



                            </div>







                        ))}
                    </div>
                </div>
            </div>
            




            <Footer2 />

        </>
    )
}

