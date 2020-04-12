import React from 'react'
import {Embed, Card, Header} from 'semantic-ui-react';
// import {code} from '../../images/code.jpg';
export class Preview extends React.Component{
    constructor(props){
        super(props);
        this.props = {}
    }

    render(){
        return (
            <>
            <Header as='h1' textAlign='center'>Live Feed</Header>
            <Embed id = {this.props.id}>
            </Embed>
            </>
        );
    }
}