import { useSelector } from "react-redux"

export default function SingleItem () {
    const itemReducer = useSelector(store => store.equipment.equipmentUrl)
    console.log('item reducer', itemReducer);

    // ! This is all that's needed to display for mounts
    if (itemReducer.equipment_category?.index === 'mounts-and-vehicles')
    return (
        <>
        <>This is a Mount</>
        <p><b>Name</b></p>
        <p>{itemReducer.name}</p>
        <p><b>Capacity</b></p>
        <p>{itemReducer.capacity}</p>
        <p><b>Speed</b></p>
        <p>{itemReducer.speed?.quantity} {itemReducer.speed?.unit}</p>
        <p><b>Cost</b></p>
        <p>{itemReducer.cost.quantity}{itemReducer.cost.unit}</p>
        <p><b>Description</b></p>
        <p>{itemReducer.desc}</p>
    </>
    )

    // ! this is all that's needed to display for regular weapons
    if (itemReducer.equipment_category?.index === 'weapon')
        return (
            <>
                <>This is a weapon</>
                <p><b>Name</b></p>
                <p>{itemReducer.name}</p>
                <p><b>Damage</b></p>
                <p>{itemReducer.damage.damage_dice} {itemReducer.damage.damage_type.name}</p>
                <p><b>Range Category</b></p>
                <p>{itemReducer.category_range}</p>
                <p><b>Range</b></p>
                <p>Normal:{itemReducer.range.normal} Long:{itemReducer.range.long}</p>
                <p><b>Cost</b></p>
                <p>{itemReducer.cost.quantity}{itemReducer.cost.unit}</p>
            </>
    )
    // ! This is all that's needed to display for adventuring gear
    if (itemReducer.equipment_category?.index === 'adventuring-gear')
    return (
        <>
        <>Adventuring gear</>
        <p><b>Name</b></p>
        <p>{itemReducer.name}</p>
        <p><b>Description</b></p>
        <p>{itemReducer.desc}</p>
   
        <p><b>Cost</b></p>
        <p>{itemReducer.cost.quantity}{itemReducer.cost.unit}</p>
    </>
)
if (itemReducer.equipment_category?.index === 'scroll')
return (
    <>
    <>Scrollr</>
    <p><b>Name</b></p>
    <p>{itemReducer.name}</p>
    <p><b>Description</b></p>
    <p>{itemReducer.desc}</p>
</>
)
    else return(
        <>
        <>What is this?</>
        <p> <b>Equipment Category</b> </p>
        <p>{itemReducer.equipment_category?.index}</p>
        </>
    )
}