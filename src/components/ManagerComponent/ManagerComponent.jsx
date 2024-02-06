import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export default function ManagerComponent(props) {
const dispatch = useDispatch()
useEffect(() => {
    getData()
  }, [])
const getData = () => {
    dispatch({type:`${props.dispatchType}`})
}
    return (
        <div> This is where the manager component will be
            <p> for {props.name}</p>

            <table>
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
                </tbody>
            </table>
        </div>
    )
}