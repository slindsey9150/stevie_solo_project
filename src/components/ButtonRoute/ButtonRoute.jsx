import { useHistory } from 'react-router-dom';



export default function ButtonRoute (props) {
    const history = useHistory();

    const handleClick = () => {
        history.push(props.route)
    }
    return(
    <button onClick={handleClick}>{props.name}</button>
    )
}