import { useDispatch } from "react-redux";

export default function InpRpt(props){
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log('hi');
        dispatch({type:'RULE_URL', payload:props.url})
    }




    let onChangeFun;
    if (props.stateName === 'Cha'){
        onChangeFun= props.onChangeFun
    }
    if (props.stateName === 'Dex'){
        onChangeFun= props.onChangeFun
    }
    if (props.stateName === 'Const'){
        onChangeFun= props.onChangeFun
    }
    if (props.stateName === 'Int'){
        onChangeFun=props.onChangeFun
    }
    if (props.stateName === 'Str'){
        onChangeFun= props.onChangeFun
    }
    if (props.stateName === 'Wis'){
        onChangeFun= props.onChangeFun
    }
    return (
        <td onClick={handleClick}>
        <p><b>{props.name}</b></p>
        <input 
        className="medieval-input"
        onChange={onChangeFun}
        placeholder = {props.name}
        value={props.value}
        type={props.type}
        ></input>
        </td>
    )

}
