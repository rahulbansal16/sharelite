import { Card } from "semantic-ui-react";
import { React } from "react";

export const Card = (props) => {
  const {imageURL, title, description, startTime, joinURL, isLive} = props
  return (
    <Card>
      <Image src={imageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Meta>
          <span className="date">{startTime}</span>
        </Card.Meta>
        <Card.Header>{title}</Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}
