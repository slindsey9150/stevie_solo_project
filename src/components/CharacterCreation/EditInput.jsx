import ChooseLevel from "./CharacterCreationTabs/ChooseLevel";
import EditAlignment from "./EditAlignment";
import EditClass from "./EditClass";
import EditRace from "./EditRace";
import { useDispatch } from "react-redux";

const EditInput = (props) => {
    const dispatch = useDispatch()

    if (props.editCriteria == undefined) {
        console.log('editCriteria is undefined');
        return (
            <></>
        )
    }
    else if (props.editCriteria == 'class_id') {
        console.log('editCriteria is Class');
        return (
            <>
            <EditClass
            criteria={props.editCriteria}/>
            Class: <button onClick={props.onSubmit}className="submit-edit">Submit Class</button>
            <br/>
            </>
        )
    }
    else if (props.editCriteria == 'race_id'){
        console.log('edit criteria is race');
        return (
            <>
           
            <EditRace/>
            <button onClick = {props.onSubmit}className="submit-edit">Submit Race</button>
            <br/>
            </>
        )
    }
    else if (props.editCriteria == 'backstory'){
        console.log('clicking backstory');
        return (

            <form  onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <textarea className="edit-textarea" type='text' onChange = {props.textOnChange}
        defaultValue = {props.compDefValue}>
        </textarea>
        </label>
        <button className="submit-edit">Submit Changes</button>
        </form>

        )
    }
    else if (props.editCriteria == 'notes'){
        console.log('clicking notes');
        return (

            <form  onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <textarea className="edit-textarea" type='text' onChange = {props.textOnChange}
        defaultValue = {props.compDefValue}>
        </textarea>
        </label>
        <button className="submit-edit">Submit Changes</button>
        </form>

        )
    }
    else if (props.editCriteria == 'name'){
        console.log('clicking name');
        return (

            <form className="edit-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input type='text' onChange = {props.textOnChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="submit-edit">Submit Changes</button>
        </form>

        )
    }
    else if (props.editCriteria == 'alignment'){
        console.log('edit criteria is alignment');
        return (
            <>
            <EditAlignment/>
            <button className="submit-edit">Submit Alignment</button>
            <br/>
            </>
        )
    }
    else if (props.editCriteria == 'level'){
        console.log('edit criteria is level');
        return (
            <>
            <ChooseLevel/>
            Level: <button className="submit-edit">Submit Level</button>
            <br/>
            </>
        )
    }
    else if (props.editCriteria == 'charisma'){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/cha'})

        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }
    else if (props.editCriteria == 'constitution'){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/con'})

        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }
    else if (props.editCriteria == 'dexterity' ){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/dex'})

        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }
    else if (props.editCriteria ==  'intelligence' ){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/int'})


        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }
    else if (props.editCriteria =='strength'){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/str'})

        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }
    else if (props.editCriteria == 'wisdom'){
        dispatch({type:'RULE_URL', payload:'/api/ability-scores/wis'})

        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form className="ability-score-input" onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input className="as-input"type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button className="BtnRpt">Submit {props.editCriteria}</button>
        </form>
        )
    }



}

export default EditInput