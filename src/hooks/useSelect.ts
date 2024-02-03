import react, { useState, useEffect } from 'react';

function useSelect(arr: any, initItem: any, setter: any, name: string) {
    // let init = {};
    // for (let i of arr) {
    //     init[i] = false;
    // }
    const init = arr.reduce((acc: any, cur: any) => {
        acc[cur] = false;
        return acc;
    }, {});
    const [stateObject, setStateObject] = useState(init); // 전체 상태 객체
    const [selectedItem, setSelectedItem] = useState(initItem); // 선택된 요소
    useEffect(() => {
        // 컴포넌트가 마운트될 때 초기 상태를 설정
        setStateObject({ ...stateObject, [initItem]: true });
    }, [initItem]);

    const selectItem = (item: any) => {
        console.log('item', item);
        setStateObject({ ...init, [selectedItem]: false }); // 나머지 flase로
        setSelectedItem(item);
        setStateObject({ ...init, [item]: true }); // 선택된 요소만 true로

        setter((cur: any) => ({ ...cur, [name]: item }));
    };

    return { selectedItem, stateObject, selectItem }; // 선택된 요소의 이름, 모든 요소의 상태
}

export default useSelect;
