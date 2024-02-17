const EditInput = (props) => {
    if (props.editCriteria == undefined) {
        console.log('editCriteria is undefined');
        return (
            <></>
        )
    }
    else if (props.editCriteria == 'class') {
        console.log('editCriteria is Class');
    }
    else if (props.editCriteria == 'race'){
        console.log('edit criteria is race');
    }
    else if (props.editCriteria == 'backstory'){
        console.log('clicking backstory');
    }
    else if (props.editCriteria == 'notes'){
        console.log('clicking notes');
        return (

            <form onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input type='text' onChange = {props.textOnChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button>Submit Changes</button>
        </form>

        )
    }
    else if (props.editCriteria == 'name'){
        console.log('clicking name');
    }
    else if (props.editCriteria == 'charisma' || 'constitution' || 'dexterity' || 'intelligence' || 'strength' || 'wisdom'){
        console.log('editCriteria is an AS', props.editCriteria);
        return (
            <form onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button>Submit {props.editCriteria}</button>
        </form>
        )
    }


}

export default EditInput