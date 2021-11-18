import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Circle from './Circle';


const Myweek = (props) => {

    const history = useHistory();
    const daydays = props.dayday;
    console.log(daydays);

    return (
        <div>
            <Title>How are you  <Highlight>Today</Highlight>?</Title>

            {daydays.map((day, index) => {
                console.log(day);
                return (
                    <Row key={index}>
                        <Day>{day}</Day>
                        <Circle />
                        <Link to={`/detail/${day}`}>
                            <Detail >
                            </Detail>
                        </Link>
                    </Row>
                );
            })}
        </div>
    );
};

const Highlight = styled.span`
    background-image: linear-gradient(transparent 60%, #F8CD07 40%);
`;

const Title = styled.h2`
    font-family: 'Pretendard-Bold';
    font-size: 24px;
    color: #464646;
    margin: 30px auto;
`;

const Row = styled.div`
    display: flex;
    justify-content: left;
    align-items; center;
`;

const Day = styled.div`
    width: 75px;

    font-family: 'Pretendard-Regular';
    font-size: 12px;
    color: #464646;
    vertical-align: middle;
    line-height: 65px;
    text-align: right;
`;

const Detail = styled.div`
    width: 12px;
    height: 12px;
    margin: 25px 30px;

    
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    transform: rotate(45deg);
    
    cursor: pointer;
    vertical-align: middle;
    line-height: 65px;

    &:hover {
        border-top: 3px solid #F8CD07;
        border-right: 3px solid #F8CD07;
    }
`;

// border-top: 16px solid transparent;
//     border-bottom: 16px solid transparent;
//     borderright: 16px solid none;
//     border-left: 24px solid seagreen;

export default Myweek;

