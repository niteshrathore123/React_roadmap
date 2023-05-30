import { useEffect, useState } from "react";
import axios from "axios";
import { useErrorBoundary } from "react-error-boundary";

const Home=()=>{
    const [data,setData]=useState("");
    const {showBoundary } =useErrorBoundary();

    const fetchData=async()=>{
        try{
            const response=await axios.get("https://dummyjson.com/products/1/3");
            setData(response.data);
            console.log(response.data);
        }
        catch(err){
            showBoundary(err);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    
    return(
        <div>
            { data ?
                <div>
                    retreive
                    {/* <p>{data.name}</p>
                    <p>{data.bio}</p>
                    <p>{data.location}</p> */}
                </div>
                :
                <div>Loading ...</div>
            }
        </div>
    )
}
export default Home;