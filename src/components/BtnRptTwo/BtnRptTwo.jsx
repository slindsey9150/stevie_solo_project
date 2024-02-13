

let BtnRptTwo = (props) => {
    return (
        <button id ={props.url}className = 'BtnRpt'onClick = {(event) => {props.btnEvent(event)}}>{props.name}</button>
    )
}

export default BtnRptTwo