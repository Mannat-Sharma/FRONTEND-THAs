import {useEffect} from 'react';

function useCounter(count){
    useEffect(() => {
        console.log(count);
    }, [count])
}

export default useCounter;