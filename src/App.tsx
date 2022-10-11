import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">This Page has a Header Now</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <img
                src="C:\Users\nater\OneDrive\Pictures\Saved Pictures\Camera Roll"
                alt="My desktop background"
            />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Left column
                        <div className="Rectangle"></div>
                    </Col>
                    <Col>
                        Right column
                        <div className="Rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
