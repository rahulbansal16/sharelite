import React from 'react';
import {Button,Modal, Form, Header, Checkbox} from 'semantic-ui-react';

// Add your post over here
// This will be an amazing thing to do

export class IntroButton extends React.Component{


    handleChange = (event,data) => {
        // console.log(event,data);
        let {name,value} = event.target;
        if(this.state.hasOwnProperty(name)){
            this.setState({
                [name]:value
            })
        }
    }

    constructor(props){
        super(props);
        this.state = {
            heading:'',
            linkedinUrl:'',
            question:'',
            showModal:false
        }
    }

    render(){
        return(
            <Modal trigger={<Button onClick = { () => this.setState({showModal:true})}>Create Post</Button>} open={this.state.showModal}>
            <Modal.Header>Feed Post</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Use the below space to introduce or ask a question</Header>
                <Form>
                    <Form.Field>
                        <label>Heading</label>
                        <input name = "heading" placeholder='heading' onChange = {this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Linkedin Url</label>
                        <input name = "linkedinUrl" placeholder='linkedin' onChange = {this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Summary</label>
                        <textarea name = "question" placeholder='description' onChange = {this.handleChange} />
                    </Form.Field>
                    {/* <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field> */}
                    <Button type='submit' onClick={()=> {this.props.saveIntro(this.state)
                                                        this.setState({showModal:false})}}>Submit</Button> 
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        )
    }

}