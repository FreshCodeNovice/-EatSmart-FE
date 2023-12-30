import useBodyInform from '@/hooks/useBodyInform';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

function BodyInform() {
    const [bodyInformData, handleInputChange] = useBodyInform({
        gender: 'male',
        height: 0,
        weight: 0,
        age: 0,
        activityScore: 0,
    });
    //TODO: 다음 단계 버튼 클릭시 bodyInformData를 서버로 보내고, 서버에서 계산된 데이터를 받아와서 다음 페이지로 넘어가야함
    //TODO: 타입 단언 제거
    return (
        <StyledBodyInformContainer>
            <StyledFormContainer>
                <StyledHeader>
                    <h2>신체 정보 입력</h2>
                    <div>인적 사항을 입력해주세요</div>
                </StyledHeader>
                <StyeldForm>
                    <div className="inputContainer">
                        <div className="title">성별</div>
                        <div className="radioContainer">
                            <label>
                                남자{' '}
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={
                                        handleInputChange as ChangeEventHandler<HTMLInputElement>
                                    }
                                    checked={
                                        (bodyInformData as IBodyInform)
                                            .gender === 'male'
                                    }
                                />
                            </label>
                            <label>
                                여자{' '}
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={
                                        handleInputChange as ChangeEventHandler<HTMLInputElement>
                                    }
                                    checked={
                                        (bodyInformData as IBodyInform)
                                            .gender === 'female'
                                    }
                                />
                            </label>
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
                    <div className="inputContainer">
                        <div className="title">활동 점수</div>
                        <select
                            name="activityScore"
                            onChange={
                                handleInputChange as unknown as ChangeEventHandler<HTMLSelectElement>
                            }
                        >
                            <option value="0">선택</option>
                            <option value="1.2">거의 움직이지 않음</option>
                            <option value="1.375">가벼운 활동</option>
                            <option value="1.55">보통의 활동수준</option>
                            <option value="1.725">활발한 활동수준</option>
                            <option value="1.9">매우 활발한 활동수준</option>
                        </select>
                    </div>
                </StyeldForm>
                <StyledButton onClick={() => console.log(bodyInformData)}>
                    다음 단계
                </StyledButton>
            </StyledFormContainer>
        </StyledBodyInformContainer>
    );
}

export default BodyInform;

const StyledButton = styled.button`
    background-color: #0e5a0c;
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
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
        height: 2rem;
        border-bottom: 2px solid gray;
        font-size: 1.3rem;
        transition: border-bottom 0.3s ease-in-out;
        &:hover {
            cursor: pointer;
            border-bottom: 2px solid black;
        }
    }
    .inputContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
    width: 20rem;
    height: 40rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    display: flex;
`;
