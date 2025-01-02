import React from 'react'
interface GreetingProps {
    name: string;
  }

  const Greeting: React.FC<GreetingProps> = ({ name }) => {
    console.log(`hello ${name}`);
    return <h1>Hello, {name}!</h1>;
    Greeting({ name: "John" });
  };
  