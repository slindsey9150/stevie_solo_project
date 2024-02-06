import { useDispatch, useSelector } from 'react-redux';



let firstValue = ' '
let secondValue = []
console.log('second value', secondValue);
function SingleRule () {
    const rule = useSelector( store => store.rulebook.ruleUrl)
    console.log('single rule', rule);
    console.log('url:', rule.url?.substr(0,18));
    let proficienciesUrl = rule?.url?.substr(0,18)
if (proficienciesUrl = '/api/proficiencies') {
        firstValue = rule.name;
        secondValue = [...rule.races]
        console.log('second value', secondValue);
    
}
return (
    <div>
    <>{firstValue}</>
    <>{secondValue}</>
    </div>
)
  
}

export default SingleRule