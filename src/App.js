import React, { Component } from 'react'
import { VStack, Text, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Hangman from './Hangman';

class App extends React.Component {
  render() {
    return(
      <ChakraProvider>
        <VStack 
          
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/61f7685f-47e5-49a0-b5cb-ca6b8cab4228/drok89-a7a2a550-ba87-40a6-9701-b635550d55b3.jpg"}
          height='100vh'
          >
          <Text fontSize='40px' fontWeight='700'>
            Hangman Game
          </Text>
          <Hangman/>
        </VStack>
      </ChakraProvider>
    )
  }

}

export default App;
