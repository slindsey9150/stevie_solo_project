import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BackButton = () => {
    const history = useHistory()
    
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default BackButton