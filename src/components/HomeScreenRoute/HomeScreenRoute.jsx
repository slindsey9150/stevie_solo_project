import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function HomeScreenRoute (props) {
    const history = useHistory()

    const handleClick = () => {
        history.push(props.route)
    }
    return (
        <div>This will be a route on the home screen
            <button onClick={handleClick}>{props.text}</button>
        </div>
    )
}