
const B=(props) => {
    const obj = props.obj 

    return ( 
        <ul>
            {obj.map((item) => (
                <li key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>username: {item.username}</p>
                </li>
            ))}
        </ul>
    )

}

// const B = ({obj}) => {
//     const [{id,name,username}] = obj;
//     return (
//         <ul>
//             <li>    
//             <p>ID: {id}</p>
//             <p>Name: {name}</p>                
//             <p>username: {username}</p>
//             </li>
//         </ul>
//     )
    
// }

export default B;

