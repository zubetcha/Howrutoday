import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from './NotFound';

const Detail = (props) => {

    const history = useHistory();
    let parameter = props.match.params.day;
    console.log(parameter);

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            if (i <= index) clickStates[i] = true;
            else clickStates[i] = false;
        }
        setClicked(clickStates);
    };


    if (parameter) {
        return (
            <div>
                <Title>How was your <Parameter>{parameter}</Parameter>?</Title>
                <Circlewrap>
                    <div onClick={(e) => handleStarClick(e, 0)} style={clicked[0] ? {borderColor: "seagreen"} : null}/>
                    <div onClick={(e) => handleStarClick(e, 1)} style={clicked[1] ? {borderColor: "seagreen"} : null}/>
                    <div onClick={(e) => handleStarClick(e, 2)} style={clicked[2] ? {borderColor: "seagreen"} : null}/>
                    <div onClick={(e) => handleStarClick(e, 3)} style={clicked[3] ? {borderColor: "seagreen"} : null}/>
                    <div onClick={(e) => handleStarClick(e, 4)} style={clicked[4] ? {borderColor: "seagreen"} : null}/>
                </Circlewrap>
                <Complete
                    onClick={() => { history.push("/") }}>
                    Complete
                </Complete>
            </div >
        )
    } else {
        return <NotFound />;
    }
}
const Title = styled.h2`
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    color: #464646;
`;

const Parameter = styled.span`
    background-image: linear-gradient(transparent 60%, #F8CD07 40%);
`;

const Circlewrap = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items; center;

    div {
        display: flex;
        width: 20px;
        height: 20px;
        margin: 28px 8px;
        border: 5px solid lightgrey;
        border-radius: 50%;
        background-color: white;
    }

    div:hover {
        border-color: seagreen;
    }
`;

const Complete = styled.button`
    font-family: 'Pretendard-Regular';
    outline: 0;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: seagreen;
    color: whitesmoke;

    width: 120px;
    height: 40px;
    margin: auto;

    font-size: 14px;
    cursor: pointer;
`;

export default Detail;