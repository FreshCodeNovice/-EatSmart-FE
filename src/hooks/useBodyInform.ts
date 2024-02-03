import { useState, ChangeEvent, ChangeEventHandler } from 'react';

function useBodyInform(initialState: IBodyInform) {
    const [bodyInformData, setBodyInformData] =
        useState<IBodyInform>(initialState);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
        event: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setBodyInformData({
            ...bodyInformData,
            [event.target.name]: event.target.value,
        });
    };

    return [bodyInformData, handleInputChange, setBodyInformData];
}

export default useBodyInform;
