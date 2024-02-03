import { useState } from 'react';

function useSelectImage(init: any) {
    // initialState: Id array
    const [selectImage, setSelectData] = useState(init);

    const handleSelectImage = (event: any) => {
        if (event.target.tagName === 'DIV') {
            return;
        }
        setSelectData(event.target.alt);
    };

    return { selectImage, handleSelectImage };
}

export default useSelectImage;
