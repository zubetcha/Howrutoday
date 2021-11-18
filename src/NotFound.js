import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = (props) => {

    const history = useHistory();

    return (
        <div>
            <h2>Sorry, the path is wrong.</h2>
            <Goback onClick={() => { history.push("/") }}>
                go back
            </Goback>
        </div>

    )
};

const Goback = styled.button`
    outline: 0;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: seagreen;
    color: whitesmoke;

    width: 120px;
    height: 40px;
    margin: 20px auto;

    font-size: 14px;
    cursor: pointer;
`;

export default NotFound;