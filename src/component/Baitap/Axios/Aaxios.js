import { useEffect, useState } from "react";
import B from "./Baxios"
import axios from "axios";
function Aaxios() {
    const [data, setData] = useState([])
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setData(res.data);
        })
        .catch(error => console.log(error))
       
    }, [])

    return(
       
        <>
         <B data = {data}/>
         <h1>sadjhsahdsakjdhskajhdksjah</h1>
        </>
    )
}
export default Aaxios;