import React from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Agent from "../../assets/Agent.png";
import { Typography, Row, Col, Image, Flex, Spin } from "antd";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

import { Container } from "react-bootstrap";
import LetTalk from "../../components/LetTalk";
import { useParams, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import useAgent from "../../hooks/useAgent";
const { Title, Paragraph } = Typography;
function AgentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data, isError } = useAgent(id);

  return (
    <>
      <BackgroundImage Image={Agent}>
        <Title className="text-white text-upper f-50 f-100">
          Agent Profile
        </Title>
      </BackgroundImage>
      {isLoading ? (
        <Flex justify={"center"} align="center" className="py-5">
          <Spin size="large" />
        </Flex>
      ) : (
        <>
          <Container>
            <Row gutter={[80, 20]}>
              <Col lg={8}>
                <Image
                  preview={false}
                  src={data?.photo}
                  style={{ marginTop: "-50px" }}
                  width="100%"
                  fallback="https://placehold.co/300x388"
                />
              </Col>
              <Col lg={16} className="py-5">
                <Flex justify={"flex-start"} align="center" className="w-75">
                  <Paragraph className="">
                    <span className="about-agent">About</span>
                    <i className="title-line-agent"></i>
                    <br />
                    <span className="agent-first-name">
                      {data?.firstName}
                    </span>{" "}
                    &nbsp;
                    <span className="agent-last-name">{data?.lastName}</span>
                    <br />
                    <span className="agent-estate">Estate Agent</span>
                  </Paragraph>
                </Flex>
                <Paragraph className="agent-description">
                  {data?.description}
                </Paragraph>
              </Col>
            </Row>
          </Container>
          <div className="agent-info-bg">
            <div className="agent-info-bg-shadow">
              <Flex
                justify={"center"}
                align="center"
                style={{ height: "100%" }}
                wrap="wrap"
              >
                <Flex vertical gap={10} wrap="nowrap">
                  <div>
                    <Title className="text-white text-upper">
                      Contact {data?.firstName}
                    </Title>
                  </div>

                  <Flex gap={20}>
                    <Flex
                      vertical
                      justify={"center"}
                      align={"center"}
                      style={{ marginLeft: "-50px" }}
                      gap={10}
                    >
                      <div className="bg-social-media">
                        <FaFacebookF color="black" size={24} />
                      </div>
                      <div className="bg-social-media">
                        <FaLinkedinIn color="black" size={24} />
                      </div>
                      <div className="bg-social-media">
                        <RiTwitterXLine color="black" size={24} />
                      </div>
                    </Flex>
                    <Flex vertical justify="center" gap={10}>
                      <Flex align={"center"} gap={10}>
                        <MdOutlinePhone color="#838383" size={25} />{" "}
                        <span className="text-white f-32">
                          {data?.phoneNumber}
                        </span>
                      </Flex>
                      <Flex align={"center"} gap={10}>
                        <MdOutlineMailOutline color="#838383" size={25} />{" "}
                        <span className="text-white f-32">{data?.email}</span>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </div>
          <LetTalk />
        </>
      )}
    </>
  );
}

export default AgentProfile;
