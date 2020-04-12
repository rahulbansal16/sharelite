import React from 'react'
import {Embed,Button, Card} from 'semantic-ui-react';



export class Intro extends React.Component{

    
    navigateToPost = (id) => {
        console.log("Hoping to navigate to the id", id);
    }

    getIntro = (intro) => {
        return (
            <Card fluid link onClick={() => this.navigateToPost(intro.id)}>
                <Card.Content>
                    <Card.Header>
                        {intro.heading}
                    </Card.Header>
                    <Card.Meta>{intro.designation}</Card.Meta>
        <Card.Description style={{color:'#343a40'}}>{intro.question}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                        {/* <div style = { {display:'flex', flexDirection:'row'} }>
                        {intro.tags.map((element, index) => {
                        return this.createTags(element,index);
                        })}
                        </div> */}
                            <div className="link" style={{marginLeft:'4px'}}>
                                <a  href={intro.linkedin}>linkedin</a>
                            </div>          
                            {/* {!this.state.emailVisible?<Button basic color='blue' onClick={this.showEmail}>Contact</Button>:<div onClick={this.hideEmail}>{intro.email}</div>} */}
            </Card.Content>
            </Card>
        );
    }

    createTags = (tags, index) => {
        return (
              <div className = "tags" key = {index}>
                {tags}
              </div>
        );
    }

    renderIntros = (introDataList) => {
        return (
            <div>
               <Card.Group style = {{marginTop:'10px'}}>
                   {introDataList.map(  introData => this.getIntro(introData))}
                </Card.Group> 
            </div>
        )
    }

    render(){
        return (
            <>
                {this.renderIntros(this.props.data)}
            </>
        );
    }
}