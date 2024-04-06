import React from "react";
import { Flex, Col, Row, Typography, Form, Input, Card } from "antd";
import { Container } from "react-bootstrap";
import LetTalk from "../../components/LetTalk";
import Button from "../../components/Buttons";
import Icons from "../../components/Icons";
import Logo from "../../assets/logoicon.png";
import { CiMap, CiPhone, CiMail } from "react-icons/ci";

const { Title, Text } = Typography;
function ContactUs() {
  return (
    <>
      <div className="contact-us-banner"></div>
      <div className="contact-us-form-bg">
        <div className="contact-us-shadow-gray">
          <Container>
            <Row align={"middle"}>
              <Col lg={14} md={14} sm={24}>
                <div className="contact-us-content">
                  <Flex justify={"center"} align="center" vertical>
                    <Title
                      className="contact-us-title site-section-title"
                      style={{ color: "black" }}
                    >
                      <Text className="contact-us-title">Contact</Text>
                      <br />
                      <Text className="contact-us-sub f-100">us</Text>
                      <i class="title-line"></i>
                    </Title>
                    <Flex>
                      <Text className="text-upper f-16 f-bold ">
                        We would love to hear from you! Send us a message and
                        we’ll get right back in touch
                      </Text>
                    </Flex>
                  </Flex>
                  <Form layout="vertical">
                    <Row gutter={[8, 16]} className="py-4">
                      <Col lg={12} md={12} sm={24}>
                        <Form.Item
                          label="First Name"
                          className="contact-us-form"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={12} md={12} sm={24}>
                        <Form.Item
                          label="Last Name"
                          className="contact-us-form"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={24} md={24} sm={24}>
                        <Form.Item
                          label="Email Address"
                          className="contact-us-form"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={24} md={24} sm={24}>
                        <Form.Item label="Phone" className="contact-us-form">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={24} md={24} sm={24}>
                        <Form.Item label="Message" className="contact-us-form">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button classNam="button-view1">Send</Button>
                  </Form>
                </div>
              </Col>
              <Col lg={10} md={10} sm={24} align="middle">
                <Card
                  bordered={false}
                  style={{ backgroundColor: "black" }}
                  className="contact-us-card-margin"
                >
                  <Flex vertical>
                    <Flex justify={"center"} align="center" className="py-3">
                      <img src={Logo} width={"30%"} preview={false} />
                    </Flex>
                    <Text className="text-upper text-white text-center f-16 f-200">
                      {" "}
                      Florida
                    </Text>
                    <Text className="text-upper text-white text-center f-24 f-bold">
                      {" "}
                      LUXURIOUS
                    </Text>
                    <Text className="text-upper text-white text-center f-16  f-200">
                      {" "}
                      properties
                    </Text>

                    <Flex
                      justify={"flex-start"}
                      align="flex-start"
                      vertical
                      className="py-4"
                      gap={10}
                    >
                      <Flex align={"center"} gap={5}>
                        <CiMap color="#838383" size={15} />
                        <Text className="text-white text-upper">
                          2438 East Las Olas Boulevard Fort Lauderdale, FL 33301
                        </Text>
                      </Flex>
                      <Flex align={"center"} gap={5}>
                        <CiMail color="#838383" size={15} />
                        <Text className="text-white text-upper">
                          floridainfo@gmail.com
                        </Text>
                      </Flex>
                      <Flex align={"center"} gap={5}>
                        <CiPhone color="#838383" size={15} />
                        <Text className="text-white text-upper">
                          2954.870.080
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Container>
          <Icons />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="background-video-container" style={{ height: "70vh" }}>
          <video autoPlay muted loop className="background-video">
            <source
              src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/zw1a9ghcf2tdaw9t0klw/miami-down-town-center-skyscrapers.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="content-hero w-100">
          <div className="hero-bg-img-shadow "></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
