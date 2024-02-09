import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export default function ManagerComponent(props) {
const dispatch = useDispatch()
const reducer = useSelector(store => store[props.reducerType])
let modReducer= props.reducer
// console.log('modReducer', modReducer);
// console.log('reducer', reducer.CharactersReducer);
let useReducer = reducer[modReducer]
console.log('use reducer', useReducer);
// console.log('useReducer', useReducer);
// console.log('characters:', reducer);
useEffect(() => {
    getData()
  }, [])
const getData = () => {
    dispatch({type:`${props.dispatchType}`})
}
const data = useReducer
console.log('character name', useReducer[0]?.name);

useEffect(() => {
    populateTable(data)
  }, [])

function populateTable(data) {
    var tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    for (var i = 0; i < data.length; i++) {
        var row = tableBody.insertRow();
        for (var key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                var cell = row.insertCell();
                cell.textContent = data[i][key];
            }
        }
    }
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
                </tbody>
            </table>
        </div>
    )
}