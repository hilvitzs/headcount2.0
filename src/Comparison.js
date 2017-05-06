import React from 'react';

export const Comparison = ({ selectedCards, compareSchools }) => {
  if(selectedCards[0]) {
    return (
      <div>
        {selectedCards.map( (card, index) => {
          return (
            <div className='selected' key={index}>
              <p>
                {card.location}
              </p>
              <div>
                {Object.keys(card.data).map((key, index) => {
                  return(
                    <p key={index}>
                      {key}: {card.data[key]}
                    </p>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}
