
const Baxios2 = (props)  => {
    const data = props.data;
    return (
        <div>
            <li>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            {data.address && (
                <p>{data.address.street}</p>
            )}
            <p>{data.phone}</p>
            <p>{data.website}</p>
            {data.company && ( 
                <p>{data.company.name}</p>
            )}
            {data.company && ( 
                <p>{data.company.catchPhrase}</p>
            )}
           
            </li>
        </div>
    )
}
export default Baxios2;