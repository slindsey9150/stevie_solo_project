import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./BackButton.css"
import { useDispatch } from "react-redux";

const BackButton = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const goBackOne = () => {
      dispatch({ type: 'EDIT_CLEAR' });
      dispatch({ type: 'SINGLE_CLEAR' });
      history.goBack()
    }
    
    return (
        <>
          <button className= "navLinkBack" onClick={goBackOne}>Back</button>
        </>
    );
};

export default BackButton