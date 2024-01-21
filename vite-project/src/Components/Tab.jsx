import React from 'react'

export default function Tab({Texnika, onChange, active}) {

  return (
    <div className='container'>
      <h2 className='tl'>Til va Imlo</h2>
      <ul className='ul'>
        {Texnika.map((tab) =>(
          <li key={tab.id} 
          className={tab.id ? "active" : ""}
          id='li'
          onClick={()=> onChange(tab.id)}
          >
            {tab.title}
          </li>
        ))}   

      </ul>
        <hr className='hr1'/>
    </div>
  )
}
