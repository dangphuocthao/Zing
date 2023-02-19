import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
function Register() {
    let errorMessage = {}
    let flag = true;
    
    const data = [{
        "id": "",
        "name": "Sex",
    },
    {
        "id": 1,
        "name": "Male",
    },
    {
        "id": 2,
        "name": "Female",
    }
    ]
    const [files, setFiles] = useState ([])
    const [inputs, setInputs] = useState ({
        email: "",
        pass: "",
        sex:"",
    })
    const [err,setErr] = useState({})

    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state,[nameInput]:value}))
    }
    const handleChange = (e) =>{
        setFiles(e.target.files[0])
    }
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(inputs.email === ""){
            errorMessage.email = "Vui lòng nhập email";
            flag = false;
        }else{
            if (!validateEmail(inputs.email)){
                errorMessage.format = "Bạn cần nhập đúng định dạng email"
                flag =false;
            }
        }
        if(inputs.pass === ""){
            errorMessage.pass = "Vui lòng nhập pass";
            flag = false;
        }
        if(inputs.sex === "" || inputs.sex === "Sex"){
            errorMessage.sex = "Vui lòng chọn giới tính";
            flag = false;
        }
        if(files.length === 0){
            errorMessage.file = "Vui long upload"
            flag = false;
        }else{
            const extension = files.type.split('/')[1]
            if(files.size > 1024 *1024){
                errorMessage.size = "File bạn nhập lớn hơn 1mb"
                flag = false;
            }
            if(extension !== 'png' && extension !== 'jpg' && extension !== 'jpeg' && extension !== 'PNG' && extension !== 'JPG')
            {
                errorMessage.type = "Lỗi định dạng"
                flag = false;
            }
        }
        if(!flag){
            setErr(errorMessage);
        }
        if(flag){
            alert("Dang ky thanh cong")
            localStorage.setItem("inputs", JSON.stringify(inputs));
        }
    }

    return (     
        <>
        <ErrorMessage err = { err }/>
        <form  onSubmit={handleSubmit} encType="multipart/form-data">
            <input type='text' placeholder="Email" name="email" onChange={handleInput}/>
            <p>{err.email}</p>
            <p>{err.format}</p>
            <input type='password' placeholder="Password" name="pass" onChange={handleInput}/>
            <p>{err.pass}</p>
            <input  type="file" name = "file" onChange={handleChange}/>
            <p>{err.size}</p>
            <p>{err.type}</p>
            <p>{err.file}</p>
            <select name="sex" onChange={handleInput}>
                {data.map((item) =>
                    <option key={item.id}>{item.name}</option>
                )}
            </select>
            <p>{err.sex}</p>
            <button type="submit">Register</button>
        </form>
        </>
    )
                
}
export default Register;


