import useBodyInform from '@/hooks/useBodyInform';
import React, { ChangeEvent, ChangeEventHandler, use, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import useSelect from '@/hooks/useSelect';
import Ymale from '@/assets/images/Ymale.png';
import Nmale from '@/assets/images/Nmale.png';
import Nfemale from '@/assets/images/Nfemale.png';
import Yfemale from '@/assets/images/Yfemale.png';
import useSelectImage from '@/hooks/useSelectImage';
import RadioImageButton from '@/components/Image/RadioImageButton';
import AppLayout from '@/components/layout/AppLayout';
import xhigh from '@/assets/images/xhigh.png';
import xmid from '@/assets/images/xmid.png';
import xlow from '@/assets/images/xlow.png';
import ohigh from '@/assets/images/ohigh.png';
import omid from '@/assets/images/omid.png';
import olow from '@/assets/images/olow.png';

function BodyInform() {
    const [bodyInformData, handleInputChange, setBodyInformData] =
        useBodyInform({
            gender: 'male',
            height: 0,
            weight: 0,
            age: 0,
            activityScore: 'low',
        });

    const {
        selectedItem: genderSelectedItem,
        stateObject: genderState,
        selectItem: genderSelect,
    } = useSelect(['male', 'female'], 'male', setBodyInformData, 'gender');

    const {
        selectedItem: activitySelectedItem,
        stateObject: activityState,
        selectItem: activitySelect,
    } = useSelect(
        ['low', 'mid', 'high'],
        'low',
        setBodyInformData,
        'activityScore'
    );

    return (
        <AppLayout>
            <StyledFormContainer>
                <StyledHeader>
                    <h2>신체 정보 입력</h2>
                    <div>인적 사항을 입력해주세요</div>
                </StyledHeader>
                <StyeldForm>
                    <div className="selectContainer">
                        <div className="title">성별</div>
                        <div className="selectElementContainerGender">
                            <RadioImageButton
                                state={genderState.male}
                                selectedSrc={Ymale}
                                alt="male"
                                onClickFn={() => genderSelect('male')}
                                unselectedSrc={Nmale}
                            />
                            <RadioImageButton
                                state={genderState.female}
                                selectedSrc={Yfemale}
                                alt="female"
                                onClickFn={() => genderSelect('female')}
                                unselectedSrc={Nfemale}
                            />
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="title">키</div>
                        <input
                            type="number"
                            className="inputText"
                            placeholder="cm"
                            onChange={
                                handleInputChange as ChangeEventHandler<HTMLInputElement>
                            }
                            name="height"
                        />
                    </div>
                    <div className="inputContainer">
                        <div className="title">체중</div>
                        <input
                            type="number"
                            className="inputText"
                            placeholder="kg"
                            onChange={
                                handleInputChange as ChangeEventHandler<HTMLInputElement>
                            }
                            name="weight"
                        />
                    </div>
                    <div className="inputContainer">
                        <div className="title">나이</div>
                        <input
                            type="number"
                            className="inputText"
                            placeholder="00"
                            onChange={
                                handleInputChange as ChangeEventHandler<HTMLInputElement>
                            }
                            name="age"
                        />
                    </div>
                    <div className="selectContainer">
                        <div className="title">평소 활동량</div>
                        <div className="selectElementContainer">
                            <RadioImageButton
                                state={activityState.low}
                                selectedSrc={olow}
                                alt="0"
                                onClickFn={() => activitySelect('low')}
                                unselectedSrc={xlow}
                            />
                            <RadioImageButton
                                state={activityState.mid}
                                selectedSrc={omid}
                                alt="1"
                                onClickFn={() => activitySelect('mid')}
                                unselectedSrc={xmid}
                            />
                            <RadioImageButton
                                state={activityState.high}
                                selectedSrc={ohigh}
                                alt="2"
                                onClickFn={() => activitySelect('high')}
                                unselectedSrc={xhigh}
                            />
                        </div>
                    </div>
                </StyeldForm>
                <StyledButton onClick={() => console.log(bodyInformData)}>
                    다음 단계
                </StyledButton>
            </StyledFormContainer>
        </AppLayout>
    );
}

export default BodyInform;

const StyledButton = styled.button`
    background-color: #6aa7ef;
    color: ${({ theme }) => theme.color.white};
    width: 85%;
    height: 3rem;
    border-radius: 50px;
`;

const StyeldForm = styled.div`
    width: 100%;
    height: 80%;

    select {
        all: unset;
        width: 100%;
        height: 2rem;
        border-bottom: 2px solid gray;
        font-size: 1.3rem;
        transition: border-bottom 1s ease-in-out;
        &::before {
            cursor: pointer;
            border-bottom: 2px solid black;
        }
    }

    .inputText {
        width: 100%;
        height: 2.2rem;
        font-size: 1.3rem;
        padding: 0.1rem 0.2rem;
        transition: border-bottom 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.color.lightgrey};
        border-radius: 10px;
        &:hover {
            cursor: pointer;
        }
    }
    .inputContainer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        margin-top: 2rem;
    }
    .selectContainer {
        margin-top: 1.4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .selectElementContainer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 1rem;
        }
        .selectElementContainerGender {
            display: flex;
            justify-content: center;
            gap: 3rem;
            align-items: center;
        }
    }
    div {
        width: 100%;
        height: 20%;
    }
    .title {
        font-weight: 600;
    }
    .radioContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

const StyledBodyInformContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;

    width: 100%;
    height: 100vh;
`;

const StyledFormContainer = styled.div`
    margin-top: 2rem;
    width: 20rem;

    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    display: flex;
`;
