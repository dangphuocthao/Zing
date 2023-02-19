import axios from "axios";
import { useEffect, useState } from "react";
import Baxios2 from "./Baxios2"

function Axios2 (){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const random = Math.floor(Math.random() * res.data.length)
            setData(res.data[random])
        })  
        .catch(error => console.error(error));
    }, [])
   
    return (
            <Baxios2 data = {data}/>
    )
}
export default Axios2;