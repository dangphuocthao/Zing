
const B = (props) => {
    const [{id,name,username}] = props.obj;
    return(
        <ul>
           <li>    
           <p>ID: {id}</p>
           <p>Name: {name}</p>                
           <p>username: {username}</p>
           </li>
       </ul>
    ) 
}
export default B;