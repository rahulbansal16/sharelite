import React from "react";
import { Card } from "./../../Components/Card";
import { Container, Card as SUICard, Menu, Image } from "semantic-ui-react";
import {SearchBox} from "./search"
let meetups = [
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  },
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  },
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  },
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  },
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  },
  {
    id: 1,
    imageUrl:
      "https://i.ytimg.com/vi/QnZHO7QvjaM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpYsMiOU_YFPy2oHNHmCx_BzpDFQ",
    videoUrl:
      "https://youtu.be/QnZHO7QvjaM?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh",
    title: "Test Meeting",
    description: "Test description",
    startTime: "1586682114444",
    isLive: true,
    joinURL: "google.com"
  }
];
export function RootPage() {
  return (
    <>
      <Menu fixed="top" size="large" inverted style={{height: '80px'}}>
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
        <SUICard.Group itemsPerRow={4}>
          {meetups.map(meetup => {
            return <Card key={meetup.id} {...meetup} />;
          })}
        </SUICard.Group>
      </Container>
    </>
  );
}
