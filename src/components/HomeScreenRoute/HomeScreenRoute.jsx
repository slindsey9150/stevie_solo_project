import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function HomeScreenRoute (props) {
    const history = useHistory()

    const handleClick = () => {
        history.push(props.route)
    }
    return (
        <div>
            <button className={props.class} onClick={handleClick}>{props.text}</button>
        </div>
    )
}