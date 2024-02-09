import { useDispatch, useSelector } from 'react-redux';
import './SingleSpell.css'


function SingleSpell () {
    const spell = useSelector( store => store.spells.spellURL)
    console.log('spell', spell);

    return (
        <>
        <p>here's your spell!</p>
        <li className = "spell-card">
            <hgroup><h4>{spell.name}</h4> 
            <small>
            {spell.level > 0 && `Level ${spell.level} `}
            {spell.school?.name}
            {spell.level === 0 && " cantrip"}
            </small>
            </hgroup>
            <div className='stats'>
                <p>
                    <strong>casting time </strong>
                {spell.casting_time}
                </p>
                <p>
          <strong>Range </strong>
          {spell.range}
        </p>
        <p>
          <strong>Components</strong>
          {spell.components?.join(", ")}
        </p>
        <p>
          <strong>Duration </strong>
          {spell.duration}
        </p>
            </div>
            <div> <b>Description:</b> {spell.desc}</div>
   
        </li>
        </>
    )
}

export default SingleSpell