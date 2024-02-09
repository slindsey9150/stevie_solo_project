import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SingleRule from '../SingleRule/SingleRule';
import BackButton from '../../BackButton/BackButton';
export default function RuleCategory () {

    const ruleBook = useSelector(store => store.rulebook)
    const dispatch = useDispatch()
    // console.log('ruleBook:', ruleBook.RuleBookReducer.results);
    const rulesMap = ruleBook.RuleBookReducer.results
    const handleClick = (aUrl) => {
        console.log('button clicked', aUrl);
        dispatch({type:'RULE_URL', payload:aUrl})

    }

    return (
        <>
        <BackButton/>
        <br/>
        {rulesMap?.map((rule) => { return <button onClick = {() => {handleClick(rule.url)}}key={rule.index}>{rule.name}</button>})}
        <SingleRule/>
        </>

    )
}