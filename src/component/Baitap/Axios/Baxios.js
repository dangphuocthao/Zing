
const Baxios = (props) => {
    const data = props.data;
     return(
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <p>ID:{item.id}</p>
                    <p>Name:{item.name}</p>
                    <p>Stress:{item.address.street}</p>
                    <p>Phone{item.phone}</p>
                    <p>Company Name:{item.company.name}</p>
                </li>
            ))}
        </ul>
     )
}
export default Baxios;