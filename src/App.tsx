import React from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Flex from "./components/Flex";
import Type from "./components/Type";

function App() {
  return (
    <div className="App">
      <head className="App-header">
        <link
          rel="stylesheet"
          href="https://dnlklmn.github.io/ds-tokens/variables.css"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        </style>

        <Card>
          <Flex column gap="small">
            <Type textStyle="h5" text="Lorem ipsum dolor sit amet" />
            <Type
              textStyle="body1"
              text="Morbi lorem lectus, semper vel commodo scelerisque, mattis sit
              amet justo. Donec euismod quam nec nisi efficitur aliquam.
              Suspendisse consectetur at sapien eget sodales."
            />
          </Flex>
          <Flex alignEnd>
            <Button variant="secondary" title="Decline" />
            <Button title="Accept" />
          </Flex>
        </Card>
      </head>
    </div>
  );
}

export default App;
