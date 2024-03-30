import React from "react";
import { Col, Row, Flex, Typography, Button } from "antd";
import Story from "../../assets/story.png";
import Logoicon from "../../assets/logoicon.png";
const { Title, Text } = Typography;
function OurStory() {
  return (
    <div className="boxshadow-section">
      <Row>
        <Col lg={8} md={24} className="d-flex-story">
          <Row className="d-flex-story-center ">
            <div className="our-story-bg">
              <Flex justify={"space-between"}>
                <Flex vertical>
                  <Title level={2} className="our-story-title ">
                    {" "}
                    OUR STORY
                  </Title>
                  <Text
                    style={{
                      color: "#D4CFC9",
                      fontSize: "21px",
                      letterSpacing: "1px",
                      lineHeight: "31.5px",
                    }}
                  >
                    Broward’s Leading Private Brokerage!
                  </Text>
                </Flex>
                <img src={Logoicon} width="20%" />
              </Flex>
              <Flex vertical>
                <Text className="our-story-text">
                  In alignment with private banking, wealth and other highly
                  individualized services which provide a greater level of
                  attention and customer satisfaction, we offer the same
                  discreet approach to Buyers and Sellers of luxurious
                  properties. As an assertive, entrepreneurial team with a broad
                  expertise in servicing the needs of our clientele we
                  consistently achieve top sales results in Broward’s luxury
                  market. To better facilitate the needs of our clients, we have
                  Agents fluent in French, German, Italian, Polish, Portuguese,
                  Russian, Spanish, Japanese, Arabic and Romanian.
                </Text>
                <button
                  className="button-secondary text-upper mt-16"
                  style={{ width: "40%" }}
                >
                  Contact us
                </button>
              </Flex>
            </div>
          </Row>
        </Col>
        <Col lg={16} md={0}>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <img src={Story} width="100%" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurStory;
