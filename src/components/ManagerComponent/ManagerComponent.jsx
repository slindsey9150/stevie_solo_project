import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export default function ManagerComponent(props) {
const dispatch = useDispatch()
const reducer = useSelector(store => store[props.reducerType])
let modReducer= props.reducer
let useReducer = reducer[modReducer]
console.log('use reducer', useReducer);
useEffect(() => {
    getData()
  }, [])
const getData = () => {
    dispatch({type:`${props.dispatchType}`})
}
const data = useReducer
console.log('character name', useReducer[0]?.name);
console.log('dataa:', data);



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
                    {data?.map((row) => {return (
                        <tr>
                            <td>{row[props.firstRow]}</td>
                            <td>{row[props.secondRow]}</td>
                            <td>{row[props.thirdRow]}</td>
                            <td>{row[props.fourthRow]}</td>
                            <td>{row.level}</td>
                            <td><button>EDIT ✏️</button></td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}