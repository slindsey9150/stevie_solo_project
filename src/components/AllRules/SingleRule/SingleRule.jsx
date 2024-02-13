import { useDispatch, useSelector } from 'react-redux';
import SingleItem from '../../AllEquipment/SingleItem/SingleItem';

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
        firstValueLable = 'class name: '
        firstValue = rule.name;
        secondValue = `Hit Die: ${rule.hit_die}`
        thirdValue = rule.proficiencies?.map((proficiency) => {
            return (
                <>
                    <>{proficiency.name}, </>
                </>
            )
        }
        )
        thirdValueLable = 'proficiencies:'
        fourthValue = rule.starting_equipment?.map((equipment) => {
            return (
                <> {equipment.equipment.name}|</>
            )
        })
        fourthValueLable = 'starting equipment:'



        fifthValue = <>
            {rule.starting_equipment_options?.map((choice) => {
                return (
                    <div>
                        <p>
                            choose: {choice.choose}
                            {choice.desc} {choice?.from?.options?.map((object) => {
                                if (object.of) {
                                    return (
                                        <><button onClick={getItem} id={object?.of?.url} >{object?.of?.name}</button></>
                                    )
                                }
                                else if (object.choice) {
                                    return (
                                        <><button onClick={getItem} id={object?.choice?.from?.equipment_category?.url} >{object?.choice?.from?.equipment_category?.name}</button></>
                                    )
                                }
                                else if (object.items) {
                                    return (
                                        <> {object?.items?.map((item) => {
                                            if (item.choice) {
                                                return (
                                                    <><button onClick={getItem} id={item.choice.from.equipment_category.url} >{item.choice.from.equipment_category.name}</button></>
                                                )
                                            }
                                            else if (item.of) {
                                                return (
                                                    <><button onClick={getItem} id={item.of.url} >{item.of.name}</button></>
                                                )
                                            }
                                        })}</>
                                    )
                                }


                            })}
                        </p>
                    </div>

                )
            })}
            <SingleItem />
        </>
        fifthValueLable = 'starting equipment options: '



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
        <div key={ruleKey}>
            <>{firstValueLable}</>
            <>{firstValue}</>
            <br />
            <> {secondValueLable}</>
            <>{secondValue}</>
            <br />
            <>{thirdValueLable}</>
            <br />
            <>{thirdValue}</>
            <br />
            <>{fourthValueLable}</>
            <br />
            <>{fourthValue}</>
            <br />
            <>{fifthValueLable}</>
            <>{fifthValue}</>

            <br />
            <>{sixthValueLable}</>
            <>{sixthValue}</>
            <br />
            <>{seventhValue}</>
            <br />
            <>{eigthValue}</>
            <br />
            <>{ninthValue}</>
        </div>
    )

}

export default SingleRule