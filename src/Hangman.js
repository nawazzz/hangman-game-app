import { VStack, Image, Button, Text, Container, Flex } from '@chakra-ui/react';
import React, { Component } from 'react'
import { randomWord } from './words';
import zero from './0.jpg';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';

class Hangman extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: "abcdefghijklmnopqrstuvwxyz",
            buttonsList: [],
            slots: [],
            correctWord: [],
            maxGuess: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        let temp = randomWord().split('')
        let obj = {
            value: '_',
            id: Math.floor(Math.random() * 9) + 1
        }
        let res = new Array(randomWord().length).fill('_')
        this.setState({
            slots: res,
            correctWord: temp
            
        }, () => {console.log(this.state)})
    }

    handleClick(item, ind) {
        let arr = undefined
        console.log(item, ind)
        this.state.correctWord.map((el, index) => {
            if (el === item) {
               arr = this.state.slots.join('')
               arr = arr.substr(index) + item + arr.substr(index + item.length).split('')
            }
        })
        console.log(arr)

    }

    render() {
        return(
            <VStack display='flex' >
                <Image src={this.state.maxGuess === 1 ? one : this.state.maxGuess === 2 ? two : this.state.maxGuess === 3 ? three : this.state.maxGuess === 4 ? four : this.state.maxGuess === 5 ? five : this.state.maxGuess === 6 ? six : zero}/>
                <Flex gap='3'>
                    {this.state.slots.map(elm => <Text as='span' w='50px'>{elm}</Text>)}
                </Flex>
                <Container display='flex' flexWrap='wrap' gap='1'>
                {
                    this.state.buttons.split('').map((elm, index) => {
                        return(
                                <Button
                                    disabled={this.state.maxGuess >= 6}
                                    onClick={() =>{this.handleClick(elm, index)}}
                                >{elm}</Button>

                        )
                    })
                }
                </Container>
            </VStack>
        )
    }
}
export default Hangman;