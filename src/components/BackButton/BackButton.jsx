import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./BackButton.css"
const BackButton = () => {
    const history = useHistory()
    
    return (
        <>
          <button className= "navLinkBack" onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default BackButton