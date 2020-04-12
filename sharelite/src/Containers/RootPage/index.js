import React from "react";
import { Card } from "./../../Components/Card"
  
let meetups = [{
    id: 1,
    imageUrl: 'testURL',
    title: "Test Meeting",
    description: "Test description",
    statTime: '1-1-2012',
    isLive: true,
    joinURL: 'google.com'
}];
export function RootPage() {
  return (
    <div>
    {
        meetups.map(meetup => {
            return <Card key={meetup.id} {...meetup} />
        })
    }
    </div>
  );
}
