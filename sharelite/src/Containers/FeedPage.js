import React from 'react';
import Grid  from 'react-semantic-ui';
import Preview from '../Components/Preview';
import Intro from '../Components/Intro';

class FeedPage extends React.Component {

    render(){
        return (
            <>
            <Grid columns = {2} divided stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Preview/>
                    </Grid.Column>
                    <Grid.Column>
                        <Intro/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        );
    }
}

export default FeedPage;