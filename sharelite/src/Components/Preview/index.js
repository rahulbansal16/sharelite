import React from 'react'
import {Embed, Card,Image, Header} from 'semantic-ui-react';
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QnZHO7QvjaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <Embed
            id='QnZHO7QvjaM'
            placeholder="https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ"
            source='youtube'
            >
            </Embed> */}
            {/* <Image
              size="large"
              src="https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ"
              style={{ marginRight: "1.5em" }}
            /> */}
            </>
        );
    }
}