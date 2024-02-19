import { useState } from 'react';

const useInputValue = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      const newInputValue = event.target.value;
  
      setInputValue(newInputValue);
  
      if (newInputValue > 0) {
        console.log('Input lebih besar dari 1');
      } else if (newInputValue < 0) {
        console.log('Input tidak lebih besar dari 1');
      }
    };

    return {
        inputValue,
        handleInputChange,
    };
};

export default useInputValue;
