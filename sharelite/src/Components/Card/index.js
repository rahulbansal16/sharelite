import { Card as SUICard, Image, Icon} from "semantic-ui-react";
import React from "react";

export const Card = (props) => {
  const {imageUrl, title, description, startTime, joinURL, isLive} = props
  return (
    <SUICard>
      <Image src={imageUrl} wrapped ui={false} />
      <SUICard.Content>
        <SUICard.Meta>
          <span className="date">{startTime}</span>
        </SUICard.Meta>
        <SUICard.Header>{title}</SUICard.Header>
        <SUICard.Description>
          {description}
        </SUICard.Description>
      </SUICard.Content>
      <SUICard.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </SUICard.Content>
    </SUICard>
  );
}
