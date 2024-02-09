import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleSpell from '../SingleSpell/SingleSpell';
import FilterLevel from '../FilterByLevel/FilterByLevel';
import FilterSchool from '../FilterBySchool/FilterBySchool'
import logger from 'redux-logger';
import BackButton from '../../BackButton/BackButton';

function SpellsPage () {
    const dispatch = useDispatch()
    const spells = useSelector(store => store.spells)
    const filterSpells = useSelector( store => store.spells.filterSpells)
    const filterSchool = useSelector( store => store.spells.filterSpellsBySchool)
    // console.log('filtered spells', filterSpells);
    console.log('filtered by school', filterSchool);

    

    const handleClick = (event) => {
        const spellUrl = event.target.closest('button').id
        // console.log('here is the button that i\'m clicking', spellUrl.substr(11, 100));
        dispatch({type:'SPELL_URL', payload:spellUrl})

       
    }

    useEffect(() => {
        getSpells()
      }, [])

    const getSpells = () => {
        dispatch({type:'FETCH_SPELLS'})
      }
    return (
        <>
        <BackButton/>
        <h1> Find the spells you need below 👇🏽</h1>
        <FilterLevel
        />
      
        <div>
        {filterSpells.results?.map((spell, i) => {
            return (
            <button id={spell.url}
            onClick={(event) => {handleClick(event)}}
            >{spell.name}</button>
            )
        })}
        </div>
        

        <FilterSchool/> 
        <div>
        {filterSchool.results?.map((spell, i) => {
            return (
            <button id={spell.url}
            onClick={(event) => {handleClick(event)}}
            >{spell.name}</button>
            )
        })}
        </div>
       

        <SingleSpell/>
        </>

    )

}

export default SpellsPage