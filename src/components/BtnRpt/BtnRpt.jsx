import "../CharacterCreation/CharacterCreationTabs/CSS FOLDER/CharacterClass.css"

let allScores = [{charisma:{yourCha}},{constitution:{yourConst}},{dexterity:{yourDex}},
    {intelligence:{yourInt}},{strength:{yourStr}},{wisdom:{yourWis}}]
    
let BtnRpt = (props) => {
    const handleClick = (event) => {
        console.log('all Scores');
        console.table( allScores);
        console.log('number entered', event.target.closest('InpRpt'));
        console.log('State Name', props.stateName);
        // {props.stateName}(event.target.closest('input').textContent)
        
     }
    return (
        <button className="classLinkBtn" onClick ={handleClick}>{props.name}</button>
    )
}

export default BtnRpt