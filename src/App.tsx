import React from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Flex from "./components/Flex";
import Type from "./components/Type";

fetch("https://raw.githubusercontent.com/dnlklmn/ds-tokens/main/polkadot.json")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        </style>
        <Card>
          <Flex column gap="small">
            <Type textStyle="h5">Lorem ipsum dolor sit amet</Type>
            <Type textStyle="body1">
              Morbi lorem lectus, semper vel commodo scelerisque, mattis sit
              amet justo. Donec euismod quam nec nisi efficitur aliquam.
              Suspendisse consectetur at sapien eget sodales.
            </Type>
          </Flex>
          <Flex alignEnd>
            <Button variant="secondary" title="Decline" />
            <Button title="Accept" />
          </Flex>
        </Card>
      </header>
    </div>
  );
}

export default App;
