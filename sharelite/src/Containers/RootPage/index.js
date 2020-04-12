import React, { useState } from "react";
import { Card } from "./../../Components/Card";
import {
  Container,
  Card as SUICard,
  Menu,
  Image,
  Header
} from "semantic-ui-react";
import { SearchBox } from "./search";
import { meetups } from "./data";
export function RootPage() {
  const [meetupData, updateMeetupData] = useState(meetups);

  const handleRegister = (categoryIdx, itemIdx) => {
      console.log(categoryIdx, itemIdx)
    let meetingObj = Object.assign([]  , meetupData);
    meetingObj[categoryIdx]['data'][itemIdx]["hasRegistered"] = true;
    meetingObj[categoryIdx]['data'][itemIdx]["members"] =
      meetingObj[categoryIdx]['data'][itemIdx]["members"] + 1;
    updateMeetupData(meetingObj);
  };
  return (
    <>
      <Menu fixed="top" size="large" inverted style={{ height: "80px" }}>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            Professional Meetup
          </Menu.Item>
          <SearchBox />
        </Container>
      </Menu>

      <Container style={{ marginTop: "7em" }}>
        {meetupData.map((item, categoryIdx) => (
          <div key={categoryIdx}>
            <Header dividing>{item.name}</Header>
            <SUICard.Group itemsPerRow={4}>
              {item.data.map((meetup, itemIdx) => (
                <Card
                  key={itemIdx}
                  handleRegister={handleRegister.bind(
                    this,
                    categoryIdx,
                    itemIdx
                  )}
                  {...meetup}
                />
              ))}
            </SUICard.Group>
          </div>
        ))}
      </Container>
    </>
  );
}
