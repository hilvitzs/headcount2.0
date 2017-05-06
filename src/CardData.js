import React from 'react';
import PropTypes from 'prop-types';


export const CardData = ({ data, schoolKey }) => {
  return (
    <div className='school-data'>
      {
      Object.keys(data[schoolKey].data)
        .map((key, index) => {
          return (
            <p className={data[schoolKey].data[key] > 0.5 ? 'over school-data' : 'under school-data'}
               key={index + Date.now()}>
              {key}: {data[schoolKey].data[key]}
            </p>
          )
        })
      }
    </div>
  )
}

CardData.propTypes = {
  data: PropTypes.object,
  schoolKey: PropTypes.string
}
