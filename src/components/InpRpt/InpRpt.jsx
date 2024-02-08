let InpRpt = (props) => {
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