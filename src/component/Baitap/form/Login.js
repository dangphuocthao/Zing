import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
function Login (){
    let flag = true;
    let errorMessage = {};
    const xx = localStorage.getItem("inputs")
    if(xx){
        var inputsRegister = JSON.parse(xx)
    }
    const {email,pass} = inputsRegister;
    const [inputs, setInputs] = useState ({
        email: "",
        pass: "",
    })
    const [err,setErr] = useState({})
    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state,[nameInput]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.email == ""){
            errorMessage.email = "Vui lòng nhập email";
            flag = false;
        }
        if(inputs.pass == ""){
            errorMessage.pass = "Vui lòng nhập pass";
            flag = false;
    }
    if(!flag){
        setErr(errorMessage);
    }
    else{
         if(inputs.email === inputsRegister.email && inputs.pass === inputsRegister.pass){
            alert("login thanh cong")
         }
         else{
            alert("Sai email or pass")
         }
    }

}

    return (
        <>
        <ErrorMessage err = {err}/>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
            <p>{err.email}</p>
            <input type="password" name="pass" placeholder="Password" onChange={handleInput}/>
            <p>{err.pass}</p>
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login;