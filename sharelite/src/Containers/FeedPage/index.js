import React from 'react';
import {Grid}  from 'semantic-ui-react';
import {Preview} from './../../Components/Preview';
import {Intro} from './../../Components/Intro';
import { IntroButton } from '../../Components/IntroButton';


let introJson = [
        {
            id:23,
            heading:'Marketing',
            exp:'< 1',
            college:'IIM Rohtak',
            tags:['finance', 'marketing','strategy','MS Excel', 'MS Word', 'C++', 'Java', 'Salesforce', 'GitHub', 'PowerPoint'],
            question: 'I am Shini Jain, first year MBA student at Indian Institute of Management, Rohtak. I am a computer engineer and have work experience in Accenture for 23 months in technology. Due to the ongoing COVID-19 pandemic, the internship I was offered stands cancelled. I am actively looking for internship opportunities in varied domains and my areas of interest are Marketing, Research, Strategy, Consulting and Finance. Pursuing summer internship from your organization will enrich my learning and give me the necessary exposure. The duration Iamm looking for the internship is 6-8 weeks i.e., from April to May.' ,
            email:'pgp10shinij@iimrohtak.ac.in' ,
            linkedin:'https://www.linkedin.com/in/shinijain/',
        },
        {
            heading:'Marketing',
            exp:'< 1',
            college:'IIM Rohtak',
            tags:['finance', 'marketing','strategy','MS Excel', 'MS Word', 'C++', 'Java', 'Salesforce', 'GitHub', 'PowerPoint'],
            question: 'I am Shini Jain, first year MBA student at Indian Institute of Management, Rohtak. I am a computer engineer and have work experience in Accenture for 23 months in technology. Due to the ongoing COVID-19 pandemic, the internship I was offered stands cancelled. I am actively looking for internship opportunities in varied domains and my areas of interest are Marketing, Research, Strategy, Consulting and Finance. Pursuing summer internship from your organization will enrich my learning and give me the necessary exposure. The duration Iamm looking for the internship is 6-8 weeks i.e., from April to May.' ,
            email:'pgp10shinij@iimrohtak.ac.in' ,
            linkedin:'https://www.linkedin.com/in/shinijain/',
        },
        {
            heading:'Marketing',
            exp:'< 1',
            college:'IIM Rohtak',
            tags:['finance', 'marketing','strategy','MS Excel', 'MS Word', 'C++', 'Java', 'Salesforce', 'GitHub', 'PowerPoint'],
            question: 'I am Shini Jain, first year MBA student at Indian Institute of Management, Rohtak. I am a computer engineer and have work experience in Accenture for 23 months in technology. Due to the ongoing COVID-19 pandemic, the internship I was offered stands cancelled. I am actively looking for internship opportunities in varied domains and my areas of interest are Marketing, Research, Strategy, Consulting and Finance. Pursuing summer internship from your organization will enrich my learning and give me the necessary exposure. The duration Iamm looking for the internship is 6-8 weeks i.e., from April to May.' ,
            email:'pgp10shinij@iimrohtak.ac.in' ,
            linkedin:'https://www.linkedin.com/in/shinijain/',            
        },
];
export class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: introJson}
        
    }

    saveIntro = (info) => {
        console.log("Data for the FeedPage is", info);
        if ( info.heading && info.question && info.linkedin){
            introJson.push(info);
            this.setState({data:introJson})
        }
    }

    render(){
        return (
            <>
                <Grid columns={2}
                      divided
                      style= {{margin:'10px'}}
                      stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <div style = {{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%vh', marginTop:'10%'}}>
                                <Preview style={{display:'inline'}}/>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div style = {{alignItems:'rights'}}>
                                <IntroButton style={{display:'inline'}} saveIntro = {this.saveIntro}/>
                                <Intro data={this.state.data} style={{display:'inline'}}/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}


