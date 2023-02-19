
function ErrorMessage (props){
    const err = props.err;
    const renderError= () => {
        if(Object.keys(err).length>0){
            return Object.keys(err).map((key, index) => {
                return (
                    <li key={index} > {err[key]}</li>
                )
            })
        }
    }
}
export default ErrorMessage;