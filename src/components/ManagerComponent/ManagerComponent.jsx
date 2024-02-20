import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory
 } from 'react-router-dom/cjs/react-router-dom.min';

export default function ManagerComponent(props) {
    const characterstore = useSelector(store => store.characters.CharactersReducer)
    const singleStore = useSelector(store => store.characters.SingleCharacter)
    let storeIndex = characterstore?.findIndex(x => x.charid == singleStore)
    let singleCharacter= characterstore[storeIndex]

    // let singleCharacter = {}
    // console.log('single character', singleCharacter);

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


const RenderStores = (event) => {
    const rowDeets = event.target.closest('tr')
    // console.log('clicked a row', rowDeets.id);
    dispatch({type:'SET_SINGLE', payload:rowDeets.id})
    dispatch({type:'FETCH_INVENTORY', payload:rowDeets.id})
    // console.log('single character', singleCharacter);

}




    return (
        <div> 


            <table id="myTable">
                <thead>
                    <tr>
                        <th>{props.firstColumn}</th>
                        <th>{props.secondColumn}</th>
                        <th>{props.thirdColumn}</th>
                        <th>{props.fourthColumn}</th>
                        <th>{props.fifthColumn}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* this portion of the table will fill dynamically with character info */}
                    {data?.map((row, i) => {return (
                        <tr onClick={(event) => {RenderStores(event)}} id={row[props.keyProp]} key={row[props.keyProp]}>
                            <td>{row[props.firstRow]}</td>
                            <td>{row[props.secondRow]}</td>
                            <td>{row[props.thirdRow]}</td>
                            <td>{row[props.fourthRow]}</td>
                            <td >{row.level}</td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}