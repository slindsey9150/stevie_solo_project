import { useState } from "react"

let InpRpt = (props) => {


  let [yourCha, setyourCha] = useState('')
  let [yourDex, setyourDex] = useState()
  let [yourConst, setyourConst] = useState()
  let [yourStr, setyourStr] = useState()
  let [yourWis, setyourWis] = useState()
  let [yourInt, setyourInt] = useState()

    let onChangeFun;
    if (props.stateName === 'Cha'){
        onChangeFun= (
          (event) =>  {setyourCha( event.target.value)}
        )
    }
    if (props.stateName === 'Dex'){
        onChangeFun= (
          (event) =>  {setyourDex( event.target.value)}
        )
    }
    if (props.stateName === 'Const'){
        onChangeFun= (
          (event) =>  {setyourConst( event.target.value)}
        )
    }
    if (props.stateName === 'Int'){
        onChangeFun= (
          (event) =>  {setyourInt( event.target.value)}
        )
    }
    if (props.stateName === 'Str'){
        onChangeFun= (
          (event) =>  {setyourStr( event.target.value)}
        )
    }
    if (props.stateName === 'Wis'){
        onChangeFun= (
          (event) =>  {setyourWis( event.target.value)}
        )
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

export default InpRpt