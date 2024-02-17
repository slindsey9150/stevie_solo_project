import { useState } from "react"

export default function InpRpt(props){




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
        <>
        <>{props.name}</>
        <input 
        onChange={onChangeFun}
        placeholder = {props.name}
        value={props.value}
        type={props.type}
        ></input>
        </>
    )

}
