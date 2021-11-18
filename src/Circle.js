import React from 'react';
import styled from 'styled-components';

const Circle = (props) => {

    const [count, setCount] = React.useState(5);
    const circle_count = Array.from({ length: count }, (el, i) => i);
    console.log(circle_count); 


    let random = Math.floor(Math.random() * 5)
    let sum = 0;

    return (
        <Circlewrap>
            {circle_count.map((num, index) => {
                if (index <= random) {
                    sum += 1;
                    return (
                        <div>
                            <Click key={index}></Click>
                        </div>   
                    )
                } else {
                    return (
                        <div>
                            <Click key={index} style={{borderColor:"whitesmoke"}}></Click>
                        </div> 
                    )
                }
            })}
        </Circlewrap>
    )
}

// 0~4까지 랜덤 정수 Math.floor(Math.random()*5)
// if 

const Circlewrap = styled.div`
    width: 230px;
    display: flex;
    margin: 0 10px;
`;

const Click = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    margin: 17.5px 8px;
    border: 5px solid seagreen;
    border-radius: 50%;
    background-color: white;
`;

export default Circle;