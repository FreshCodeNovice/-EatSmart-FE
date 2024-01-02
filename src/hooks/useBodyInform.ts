import { useState, ChangeEvent, ChangeEventHandler } from 'react';

interface IBodyInform {
    gender: string;
    height: number;
    weight: number;
    age: number;
    activityScore: number;
}

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

    return [bodyInformData, handleInputChange];
}

export default useBodyInform;
