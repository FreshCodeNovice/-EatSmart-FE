import React from 'react';
import Image from 'next/image';

interface IRadioImageButton {
    state: boolean;
    selectedSrc: string;
    alt: string;
    unselectedSrc: string;
    onClickFn: any;
}

function RadioImageButton({
    state,
    selectedSrc,
    alt,
    unselectedSrc,
    onClickFn,
}: IRadioImageButton) {
    if (state) {
        return <Image src={selectedSrc} alt={alt} />;
    } else return <Image src={unselectedSrc} alt={alt} onClick={onClickFn} />;
}

export default RadioImageButton;
