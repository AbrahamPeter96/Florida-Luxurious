import React from "react";
import FloridaProperties from "./FloridaProperties";
import { Typography, Flex } from "antd";
import RecognitionSlide from "./RecognitionSlide";
import OurStory from "./OurStory";
import Team from "./MeetTeam";
import FeatureListing from "./FeatureListing";
import Neighborhoods from "./Neighborhoods";

const { Title, Text } = Typography;
function Home() {
  return (
    <>
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source src="https://firebasestorage.googleapis.com/v0/b/yahyanbilal.appspot.com/o/herovideo.mp4?alt=media&token=dc257c02-dbfd-43fd-a5d0-49adf87f95b1" type="video/mp4" />
        </video>
      </div>
      <div className="content-hero w-100">
        <div className="hero-bg-img-shadow ">
          <Flex
            align={"center"}
            justify={"center"}
            hidden
            style={{ height: "inherit" }}
            wrap={"wrap"}
            vertical
          >
            <Flex style={{ width: "98%" }} justify={"space-between"}>
              <Flex
                vertical
                justify={"center"}
                align={"center"}
                style={{ width: "100%" }}
              >
                <Text style={{ color: "#D4CFC9" }} className="text-paragraph">
                  Luxury. Innovation. Excellence.
                </Text>
                <Title className="title-home-page">
                  unlock exclusive living <br />
                  explore florida’s finest properties
                </Title>
                <Text
                  style={{ color: "#D4CFC9" }}
                  className="text-paragraph text-center"
                >
                  Discover Your Dream Home in the Heart of Florida with Florida
                  Luxurious Properties
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
      <FloridaProperties />
      <RecognitionSlide />
      <FeatureListing />
      <Neighborhoods />
      <OurStory />
      <Team />
    </>
  );
}

export default Home;
