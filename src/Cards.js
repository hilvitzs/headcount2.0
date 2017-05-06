import React from 'react';
import { CardData } from './CardData';

export const Cards = ({ data, selectedCards, onClick }) => {
  const checkIfSelected = (obj) => {
    let selectedClass = '';
    if (selectedCards.includes(obj)) {
      selectedClass = 'selected';
    } else {
      selectedClass = 'card';
    }
    return selectedClass;
  };

  return (
    <section className='card-holder'>
      {
      Object.keys(data)
      .map( (key, index) => {
        const selectedClass = checkIfSelected(data[key]);
        const location = data[key].location;
        return (
          <div key={index}
               className={selectedClass}
               onClick={() => {onClick(location)}}
          >
            <p className='school-district'>
                School District:
            </p>
            <p className='school-name'>
              {location}
            </p>
            <CardData data={data} schoolKey={key} />
          </div>
        )
      })
      }
    </section>
  )
}
