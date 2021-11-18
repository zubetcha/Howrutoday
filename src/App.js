import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Myweek from './Myweek';
import Detail from './Detail';
import Circle from './Circle';
import NotFound from './NotFound';
import styled from 'styled-components';

function App() {

    const [dayday, setDayday] = React.useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

    return (
        <div className="App">
            <Container>
                <Wrap>
                    <Switch>
                        <Route exact path="/" render={(props) => (<Myweek dayday={dayday} />)} />
                        <Route path="/detail/:day" component={Detail} render={(props) => (<Detail dayday={dayday} />)} />
                        <Route component={NotFound} />
                    </Switch>
                </Wrap>
            </Container>
        </div>
    );
}

const Container = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid transparent;
    margin: auto;
`;

const Wrap = styled.div`
    width: 400px;
    margin: 90.5px auto;
`;

export default App;
