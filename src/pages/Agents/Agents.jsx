import React from "react";
import { Flex, Typography, Col, Row, Image, Card, Spin } from "antd";
import { Container } from "react-bootstrap";
import OurStory from "../Home/OurStory";
import LetsTalk from "../../components/LetTalk";
import FlipCard from "../../components/Flipcard";
import Logo from "../../assets/logoicon1.png";
import { CiMap, CiPhone, CiMail } from "react-icons/ci";
import Buttons from "../../components/Buttons";
import useAgents from "../../hooks/useAgents";
import { useNavigate } from "react-router-dom";
import useReport from "../../hooks/useReport";

const { Title, Text } = Typography;

function Agents() {
  const { isLoading, data } = useAgents(30, 1);
  const { reports } = useReport();
  // console.log(reports, "DataReports");
  const navigate = useNavigate();

  return (
    <>
      <div className="team-banner">
        <div className="team-banner-shadow">
          <Flex justify={"center"} align="center">
            <Title
              className="text-upper text-white f-50 f-100"
              style={{ textAlign: "center" }}
            >
              Meet The Team
            </Title>
          </Flex>
        </div>
      </div>
      <OurStory />
      <div className="boxshadow-section">
        <Container className="py-5">
          <Row gutter={[20, 60]}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title className="text-center f-100 text-upper">
                Our Team Member
              </Title>
            </Col>
            {isLoading ? (
              <Flex justify={"center"} align="center" className="w-100">
                <Spin size="large" />
              </Flex>
            ) : (
              <>
                {data?.agents?.map((item, index) => (
                  <Col
                    lg={6}
                    md={12}
                    sm={24}
                    xs={24}
                    key={index}
                    onClick={() => navigate(`/agent/${item._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <FlipCard
                      fImg={
                        <Image
                          src={
                            item.photo
                              ? item.photo
                              : "https://placehold.co/300x388"
                          }
                          className=""
                          preview={false}
                          fallback="https://placehold.co/300x388"
                          style={{
                            aspectRatio: "5/7.5",
                            objectFit: "cover",
                            width: "90%",
                          }}
                        />
                      }
                      bImg={
                        <Image
                          src={
                            item.photo
                              ? item.photo
                              : "https://placehold.co/300x388"
                          }
                          className="img-op1"
                          preview={false}
                          fallback="https://placehold.co/300x388"
                          style={{
                            aspectRatio: "5/7.5",
                            objectFit: "cover",
                            width: "90%",
                          }}
                        />
                      }
                    >
                      <div className="p-absoulte p-b-30-left-0 w-100">
                        <Flex justify="center" align="center">
                          <button className="team-view-btn">View More </button>
                        </Flex>
                      </div>
                    </FlipCard>
                    <Flex justify={"center"} align="center">
                      <Text className="text-center f-24 f-100">
                        {item.firstName}
                        &nbsp;{item.lastName}
                      </Text>
                    </Flex>
                    <Flex justify={"center"} align="center">
                      <Text className="text-center text-upper f-bold">
                        florida retailer
                      </Text>
                    </Flex>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
      </div>
      <div className="boxshadow-section">
        <Container className="py-5">
          <Row align={"middle"} gutter={[40, 16]}>
            <Col lg={16} md={24} sm={24}>
              <Card bordered={false} style={{ backgroundColor: "#D4CFC9" }}>
                <Flex vertical>
                  <Flex justify={"center"} align="center" className="py-3">
                    <img src={Logo} width={"20%"} preview={false} />
                  </Flex>
                  <Text className="text-upper text-black text-center f-40 f-200">
                    Florida
                  </Text>
                  <Text className="text-upper text-black text-center f-50 f-bold">
                    LUXURIOUS
                  </Text>
                  <Text className="text-upper text-black text-center f-40 f-200">
                    properties
                  </Text>
                  <Flex className="mt-5" justify={"center"} align="center">
                    <Text className="text-upper text-black text-center f-40 f-200">
                      ANNUAL{" "}
                      <Text className="text-upper text-black text-center f-40 f-bold">
                        LUXURY
                      </Text>{" "}
                      SALES REPORT
                    </Text>
                  </Flex>
                  <Flex className="mt-3">
                    <Text
                      className="text-upper f-24 f-100"
                      style={{ color: "#838383" }}
                    >
                      Broward County's <br />
                      <Text className="text-upper text-black f-24 f-bold">
                        #1 Ranked{" "}
                      </Text>
                      <br />
                      Private Luxurious <br />
                      Brokerage
                    </Text>
                  </Flex>
                  <hr style={{ opacity: 1.25, color: "white" }} />

                  <div className="florida_info">
                    <Flex align={"center"} gap={15}>
                      <CiMap color="#838383" size={15} />
                      <Text className="text-black text-upper text-1024">
                        2438 East Las Olas Boulevard Fort Lauderdale, FL 33301
                      </Text>
                    </Flex>
                    <Flex align={"center"} gap={5}>
                      <CiMail color="#838383" size={12} />
                      <Text className="text-black text-upper text-1024">
                        info@floridaluxurious.com
                      </Text>
                    </Flex>
                    <Flex align={"center"} gap={5}>
                      <CiPhone color="#838383" size={15} />
                      <Text className="text-black text-upper text-1024">
                        954.870.4080
                      </Text>
                    </Flex>
                  </div>
                </Flex>
              </Card>
            </Col>
            <Col lg={8} md={24} sm={24}>
              {reports?.map((reportItem, index) => (
                <div key={index}>
                  <img src={Logo} width={"20%"} preview={false} />
                  <Title
                    style={{ color: "black" }}
                    className="text-upper f-100"
                    level={2}
                  >
                    {reportItem.title || "FLP ANNUAL REPORT 2023"}
                  </Title>
                  <div>
                    <Text
                      style={{ color: "#838383" }}
                      className="text-upper f-24 f-100"
                    >
                      {reportItem.date || "February 2024"}
                    </Text>
                  </div>
                  <Flex justify={"center"} className="mt-3">
                    <Buttons
                      classNam="button-view1"
                      width="200px"
                      Click={() => navigate(`/reports/${reportItem._id}`)}
                    >
                      Read More
                    </Buttons>
                  </Flex>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      <LetsTalk />
    </>
  );
}

export default Agents;
