import { useEffect, useState } from 'react';

const useInputValue = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value) => {
        setInputValue((prevValue) => prevValue + value);
    };
  
    const handleDeleteClick = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    };

    const handleCancelClick = () => {
        setInputValue('');
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = event => {
        const { key } = event;
        if (key >= '0' && key <= '9') {
            setInputValue(prevValue => prevValue + key);
        } else if (key === 'Backspace') {
            setInputValue(prevValue => prevValue.slice(0, -1));
        }
    };

    return {
        inputValue,
        handleButtonClick,
        handleDeleteClick,
        handleCancelClick
    };
};

export default useInputValue;
