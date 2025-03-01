import React from 'react';
import { useGlobalContext } from '../context/data';

const TimeAndLocation = () => {
  const { apiData } = useGlobalContext();

  // Function to format the date dynamically
  const getFormattedDate = () => {
    const date = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  };

  return (
    <>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          {getFormattedDate()}
        </p>
      </div>

      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-medium'>{`${apiData?.name}, ${apiData?.sys?.country}`}</p>
      </div>
    </>
  );
};

export default TimeAndLocation;