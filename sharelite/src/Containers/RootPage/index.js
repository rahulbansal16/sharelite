import { Card } from "semantic-ui-react";
import { React } from "react";
const {imageURL, title, description, startTime, joinURL, isLive} = props
  
let meetups = {
    id: 1,
    imageUrl: 'testURL',
    title: "Test Meeting",
    description: "Test description",
    statTime: '1-1-2012',
    isLive: true,
    joinURL: 'google.com'
}
export const Card = (props) => {
  return (
    <div>
    {
        meetups.map((meetup => {
            return <Card key={meetup.id} {...meetup} />
        })
    }
    </div>
  );
}
