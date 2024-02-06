import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function RuleBookRouter () {
    const history = useHistory()
    const dispatch = useDispatch()
    const ruleBook = useSelector( store => store.rulebook )
    const routeProperties = Object.entries(ruleBook.RuleBookReducer)
    // console.log('Route Links', routeProperties);
    
    const handleClick = (aLink) => {
        // console.log('this is the link we\'ll be going to:', aLink);
        dispatch({type:'RULEBOOK_FILTER', payload:aLink})
        history.push(`/rulebook/filtered`)

    }
            
    

    useEffect(() => {
        fetchRuleBook()
      }, [])

    //   console.log('ruleBook', ruleBook);
    const fetchRuleBook = () => {
        dispatch({type:'FETCH_ROUTER'})
    }
    return (
        <>
        {routeProperties.map((property) => { return (
            <button
            onClick ={() => {handleClick(property[1])}}
            key={property[1]}>
            {property[0]}
            </button>
        )})} 
       </>
    )
    
    }