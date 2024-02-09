import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


const FilterButton = () => {

    const dispatch = useDispatch()
    const filteredStore = useSelector( store => store.spells.filterSpells)
    console.log('filtered store', filteredStore);

    



    const handleChange = (event) => {

        let filteringValue = event.target.value
        
        dispatch({type:'SPELL_SCHOOL_FILTER', payload: filteringValue})

      

        console.log('filter changed', filteringValue);
    }

    return (
        <div>
            <label>
                Filter Spells By School
                <select  onChange={(event) => { handleChange(event) }}>

                    <option value="">No Filter</option>


                    <option value="?school=illusion">illusion</option>

                    <option value="?school=transmutation">transmutation</option>

                    <option value="?school=necromancy">necromancy</option>

                    <option value="?school=evocation">evocation</option>

                    <option value="?school=abjuration">abjuration</option>

                    <option value="?school=divination">divination</option>

                    <option value="?school=enchantment">enchantment</option>

                    <option value="?school=conjuration">conjuration</option>


                </select>
            </label>

        </div>
    )
}

export default FilterButton