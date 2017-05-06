import React from 'react';
import PropTypes from 'prop-types';

export const Comparison = ({ selectedCards, compareSchools, findSchoolAverage }) => {
  const showComparison = () => {
    if (selectedCards.length === 2) {
      let school1 = selectedCards[0].location.toUpperCase();
      let school2 = selectedCards[1].location.toUpperCase();
      let averageData = compareSchools(school1, school2);
      return (
        <div className='selected comparison'>
          <p className='school-name'>
            {school1}: {averageData[school1]}
          </p>
          <p className='comparison-data'>
            &larr; {averageData.compared} &rarr;
          </p>
          <p className='school-name'>
            {school2}: {averageData[school2]}
          </p>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }

  if(selectedCards.length) {
    return (
      <div className='comparison-holder'>
        {selectedCards.map( (card, index) => {
          return (
            <div className={index === 0 ? 'selected first' : 'selected second'} key={index}>
              <p className='school-name'>
                {card.location}
              </p>
                {Object.keys(card.data).map((key, index) => {
                  return(
                    <p key={index}
                       className={card.data[key] > 0.5 ? 'over school-data' : 'under school-data'}>
                      {key}: {card.data[key]}
                    </p>
                  )
                })}
            </div>
          )
        })}
        {showComparison()}
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

Comparison.propTypes = {
  selectedCards: PropTypes.array,
  compareSchools: PropTypes.func,
  findSchoolAverage: PropTypes.func
}
