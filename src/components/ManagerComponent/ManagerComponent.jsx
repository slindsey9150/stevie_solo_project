import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory
 } from 'react-router-dom/cjs/react-router-dom.min';

export default function ManagerComponent(props) {
const dispatch = useDispatch()
const history = useHistory()
const reducer = useSelector(store => store[props.reducerType])
let modReducer= props.reducer
let useReducer = reducer[modReducer]
// console.log('use reducer', useReducer);
useEffect(() => {
    getData()
  }, [])
const getData = () => {
    dispatch({type:`${props.dispatchType}`})
}
const data = useReducer
// console.log('character name', useReducer[0]?.name);
// console.log('dataa:', data);

const handleDetails = (event) => {
    const rowDeets = event.target.closest('tr')
    // console.log('clicked a row', rowDeets.id);
    dispatch({type:'SET_SINGLE', payload:rowDeets.id})
    dispatch({type:'FETCH_INVENTORY', payload:rowDeets.id})
}
const editCharacter = () => {
    console.log('editing character');
    history.push('/editcharacter')
}


    return (
        <div> This is where the manager component will be
            <p> for {props.name}</p>

            <table id="myTable">
                <thead>
                    <tr>
                        <th>{props.firstColumn}</th>
                        <th>{props.secondColumn}</th>
                        <th>{props.thirdColumn}</th>
                        <th>{props.fourthColumn}</th>
                        <th>{props.fifthColumn}</th>
                        <th>{props.sixthColumn}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* this portion of the table will fill dynamically with character info */}
                    {data?.map((row, i) => {return (
                        <tr id={row[props.keyProp]} key={row[props.keyProp]}>
                            <td onClick={(event) => {handleDetails(event)}}>{row[props.firstRow]}</td>
                            <td onClick={(event) => {handleDetails(event)}}>{row[props.secondRow]}</td>
                            <td onClick={(event) => {handleDetails(event)}}>{row[props.thirdRow]}</td>
                            <td onClick={(event) => {handleDetails(event)}}>{row[props.fourthRow]}</td>
                            <td onClick={(event) => {handleDetails(event)}}>{row.level}</td>
                            <td><button onClick={editCharacter}>EDIT ✏️</button></td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}