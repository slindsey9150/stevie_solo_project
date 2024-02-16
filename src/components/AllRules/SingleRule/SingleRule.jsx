import { useDispatch, useSelector } from 'react-redux';
import SingleItem from '../../AllEquipment/SingleItem/SingleItem';
import "./SingleRule.css"
let firstValueLable = ' '
let firstValue = ' '
let secondValueLable = ''
let secondValue = ''
let thirdValueLable = ''
let thirdValue = ''
let fourthValueLable = ''
let fourthValue = ''
let fifthValueLable = ''
let fifthValue = ''
let sixthValueLable = ''
let sixthValue = ''
let seventhValueLable = ''
let seventhValue = ''
let eigthValueLable = ''
let eigthValue = ''
let ninthValueLable = ''
let ninthValue = ''

console.log('second value', secondValue);
function SingleRule(props) {
    const rule = useSelector(store => store.rulebook.ruleUrl)
    const dispatch = useDispatch()
    console.log('single rule', rule);
    let proficienciesUrl = rule?.url?.substr(0, 18)
    let classUrl = rule?.url?.substr(0, 13)
    let raceUrl = rule?.url?.substr(0, 11)
    let asUrl = rule?.url?.substr(0, 20)
    let alignUrl = rule?.url?.substr(0, 16)
    let conditionUrl = rule?.url?.substr(0, 16)
    let dtUrl = rule?.url?.substr(0, 18)
    console.log('damage type url', dtUrl);
    let ruleKey = rule?.url

    const getItem = (event) => {
        const itemUrl = event.target.closest('button').id
        dispatch({ type: 'ITEM_URL', payload: itemUrl })

    }
    // console.log('as url', asUrl);
    if (proficienciesUrl === '/api/proficiencies') {
        firstValue = rule.name;
        firstValueLable = 'proficiency: '

        console.log('second value', secondValue);

    }
    if (classUrl === '/api/classes/') {
        firstValueLable = 'Class Name: '
        firstValue = rule.name;
        secondValue = rule.hit_die
        secondValueLable='Hit Die:'
        thirdValue = rule.proficiencies?.map((proficiency, i) => {
            return (
                <div key ={i}>
                    <>{proficiency.name}, </>
                </div>
            )
        }
        )
        thirdValueLable = 'proficiencies:'
        fourthValue = rule.starting_equipment?.map((equipment, i) => {
            return (
                <p key ={i}> {equipment.equipment.name}|</p>
            )
        })
        fourthValueLable = 'starting equipment:'



        fifthValue = <>
            {/* {rule.starting_equipment_options?.map((choice, i) => {
                return (
                    <div key ={i}>
                        <p>
                            choose: {choice.choose}
                            {choice.desc} {choice?.from?.options?.map((object, i) => {
                                if (object.of) {
                                    return (
                                        <button key ={i} onClick={getItem} id={object?.of?.url} >{object?.of?.name}</button>
                                    )
                                }
                                else if (object.choice) {
                                    return (
                                        <button key ={i} onClick={getItem} id={object?.choice?.from?.equipment_category?.url} >{object?.choice?.from?.equipment_category?.name}</button>
                                    )
                                }
                                else if (object.items) {
                                    return (
                                        <> {object?.items?.map((item, i) => {
                                            if (item.choice) {
                                                return (
                                                    <button key ={i} onClick={getItem} id={item.choice.from.equipment_category.url} >{item.choice.from.equipment_category.name}</button>
                                                )
                                            }
                                            else if (item.of) {
                                                return (
                                                    <button key ={i} onClick={getItem} id={item.of.url} >{item.of.name}</button>
                                                )
                                            }
                                        })}</>
                                    )
                                }


                            })}
                        </p>
                    </div>

                )
            })} */}
            
        </>
        // fifthValueLable = 'starting equipment options: '



        // sixthValue = rule?.proficiency_choices[0]?.desc
        sixthValue = ''
        sixthValueLable = ''
        if (rule?.hasOwnProperty('spellcasting')) {
            ninthValue = rule?.spellcasting?.info?.map((info) => {
                return (
                    <p>{info.desc}</p>
                )
            })
        }
        else {
            ninthValue = ''
        }
    }
    else if (raceUrl === '/api/races/') {
        firstValueLable = 'race name: '
        firstValue = rule.name;
        secondValueLable = 'age: '
        secondValue = rule.age
        thirdValueLable = 'alignment: '
        thirdValue = rule.alignment
        fourthValueLable = 'size: '
        fourthValue = rule.size_description
        fifthValueLable = 'traits: '
        fifthValue = rule?.traits?.map((trait) => {
            return (
                <> {trait.name}|</>
            )
        })
        sixthValueLable = 'Languages: '
        sixthValue = rule?.language_desc
        ninthValue = ' '
        ninthValueLable = ''
    }
    else if (asUrl === '/api/ability-scores/') {
        firstValueLable = 'ability score: '
        firstValue = rule.name;
        secondValueLable = 'Description: '
        secondValue = rule.desc
        thirdValue = ''
        fourthValueLable = ''
        fourthValue = ''
        fifthValueLable = ''
        fifthValue = ''
        sixthValueLable = ''
        sixthValue = ''
        seventhValueLable = ''
        seventhValue = ''
        eigthValueLable = ''
        eigthValue = ''
        ninthValueLable = ''
        ninthValue = ''
    }
    else if (alignUrl === '/api/alignments/') {
        firstValueLable = 'alignment:'
        firstValue = rule.name
        secondValueLable = 'Description: '
        secondValue = rule.desc
        thirdValue = ''
        fourthValueLable = ''
        fourthValue = ''
        fifthValueLable = ''
        fifthValue = ''
        sixthValueLable = ''
        sixthValue = ''
        seventhValueLable = ''
        seventhValue = ''
        eigthValueLable = ''
        eigthValue = ''
        ninthValueLable = ''
        ninthValue = ''
    }
    else if (conditionUrl === '/api/conditions/'){
        firstValueLable = 'Condition:'
        firstValue = rule.name
        secondValueLable = 'Description: '
        secondValue = rule.desc
        thirdValue = ''
        fourthValueLable = ''
        fourthValue = ''
        fifthValueLable = ''
        fifthValue = ''
        sixthValueLable = ''
        sixthValue = ''
        seventhValueLable = ''
        seventhValue = ''
        eigthValueLable = ''
        eigthValue = ''
        ninthValueLable = ''
        ninthValue = ''
    }
    else if (dtUrl === '/api/damage-types/'){
        firstValueLable = 'Damage Type:'
        firstValue = rule.name
        secondValueLable = 'Description: '
        secondValue = rule.desc
        thirdValue = ''
        fourthValueLable = ''
        fourthValue = ''
        fifthValueLable = ''
        fifthValue = ''
        sixthValueLable = ''
        sixthValue = ''
        seventhValueLable = ''
        seventhValue = ''
        eigthValueLable = ''
        eigthValue = ''
        ninthValueLable = ''
        ninthValue = ''
    }
    


    return (
        <div className ="SingleRuleDiv" key={ruleKey}>
            <p><b>{firstValueLable}</b><span>{firstValue}</span></p>
            <p> {secondValueLable} <span>{secondValue}</span></p>
            
            <p>{thirdValueLable} <span>{thirdValue}</span></p>
            
            <p>{fourthValueLable}</p>
            <p>{fourthValue}</p>
            <p>{fifthValueLable}</p>
            <p>{fifthValue}</p>

            <p>{sixthValueLable}</p>
            <p>{sixthValue}</p>
            <p>{seventhValue}</p>
            <p>{eigthValue}</p>
            <p>{ninthValue}</p>
        </div>
    )

}

export default SingleRule