import { Card as SUICard, Image, Icon, Button } from "semantic-ui-react";
import React, { useState } from "react";
import moment from "moment";
import _ from "underscore";
import { Link } from "react-router-dom"
export const Card = props => {
  const {
    imageUrl,
    title,
    description,
    startTime,
    joinURL,
    members,
    hasRegistered,
    handleRegister,
    duration
  } = props;

  let btn,
    currentTime = new Date().getTime();
  if (!hasRegistered) {
    if (currentTime < startTime + duration) {
      btn = (
        <Button primary onClick={handleRegister} floated="right">
          Register
        </Button>
      );
    } else {
      btn = (
        <span
          style={{
            float: "right",
            marginTop: "10px",
            color: "red"
          }}
        >
          Ended
        </span>
      );
    }
  } else {
    if (currentTime > startTime + duration) {
      btn = <span>Ended</span>;
    }
    if (currentTime < startTime + duration && currentTime >= startTime) {
      btn = (
        <Button primary onClick={handleRegister} floated="right">
          Join
        </Button>
      );
    }
  }
  return (
    <SUICard href="/feed">
      <Image src={imageUrl} wrapped ui={false} />
      <SUICard.Content>
        <SUICard.Meta style={{ marginBottom: "10px" }}>
          {startTime <= new Date().getTime() &&
          new Date().getTime() <= startTime + duration ? (
            <span style={{ color: "red", fontWeight: 400 }}>LIVE</span>
          ) : (
            <span className="date">
              {startTime ? moment(new Date(startTime)).format("LLLL") : ""}
            </span>
          )}
        </SUICard.Meta>
        <SUICard.Header>{title}</SUICard.Header>
        <SUICard.Description>{description}</SUICard.Description>
      </SUICard.Content>
      <SUICard.Content>
        <SUICard.Description>
          <span style={{ marginTop: "10px", float: "left" }}>
            <Icon name="user" />
            {members} attendees
          </span>
          {btn}
        </SUICard.Description>
      </SUICard.Content>
    </SUICard>
  );
};
