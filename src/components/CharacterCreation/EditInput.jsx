const EditInput = (props) => {
    if (props.editCriteria == undefined) {
        console.log('editCriteria is undefined');
        return (
            <></>
        )
    }
    else {
        console.log('editCriteria is defined', props.editCriteria);
        return (
            <form onSubmit = {props.onSubmit}>
            <label>
            {props.compLabel}
        <input type={props.type}onChange = {props.onChange}
        defaultValue = {props.compDefValue}>
        </input>
        </label>
        <button>Submit Changes</button>
        </form>
        )
    }


}

export default EditInput