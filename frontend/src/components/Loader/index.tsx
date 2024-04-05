import React, { useEffect, useState } from 'react';
import { Spinner, SpinnerInner } from './style';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); 
    }, []); 

    return isLoading ? (
        <Spinner>
            <SpinnerInner />
        </Spinner>
    ) : null;
}

export default Loading;
