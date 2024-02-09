import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SingleItem from '../SingleItem/SingleItem';
import BackButton from '../../BackButton/BackButton';
export default function EquipmentCategory () {



    const history = useHistory()
    const dispatch = useDispatch()
    const equipmentPage = useSelector( store => store.equipment.equipmentCategoryReducer )
    const equipmentMap = equipmentPage.equipment
      const handleClick = (aUrl) => {
            console.log('button clicked', aUrl);
            dispatch({type:'ITEM_URL', payload:aUrl})
    
        }
            


    return (
                <>
               <BackButton/>
                <br></br>
                {equipmentMap?.map((item, i) => { return <button onClick = {() => {handleClick(item.url)}}key={i}>{item.name}</button>})}
                <SingleItem/>
                </>
        
            )
        }
    
    


    
  
    
    //     return (
    //         <>
    //         {rulesMap?.map((rule) => { return <button onClick = {() => {handleClick(rule.url)}}key={rule.index}>{rule.name}</button>})}
    //         <SingleRule/>
    //         </>
    
    //     )
    // }