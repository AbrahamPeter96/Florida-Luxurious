import React from "react";
import { Flex, Typography, Button } from "antd";
import Slider from "react-slick";
import Team from "../../assets/team.png";
import BackArrow from "../../assets/backArrow.svg";
import NextArrow from "../../assets/nextArrow.svg";
const { Title, Text } = Typography;
function MeetTeam() {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      >
        <img src={BackArrow} alt="Previous" width="45px" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      >
        <img src={NextArrow} alt="Next" width="45px" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div style={{ background: "black" }}>
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Title level={1} className="meet-team-heading">
            Meet The Team
          </Title>
          <Flex
            justify={"center"}
            align={"center"}
            style={{
              marginTop: 60,
              marginBottom: 60,
            }}
            className="features_section_slider"
          >
            <div className="meet-slider-width">
              <Slider {...settings}>
                <div className="displayy-teamimg-center">
                  <div class="flip-container">
                    <div class="flipper">
                      <div class="front">
                        <img src={Team} width="100%" />
                      </div>
                      <div class="back">
                        <img src={Team} width="100%" className="img-op1" />
                        <div className="p-absoulte p-b-30-left-0 w-100">
                          <Flex justify="center" align="center">
                            <button className="button-view1">View More </button>
                          </Flex>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="displayy-teamimg-center">
                  <img src={Team} width="100%" />
                </div>
                <div className="displayy-teamimg-center">
                  <img src={Team} width="100%" />
                </div>
                <div className="displayy-teamimg-center">
                  <img src={Team} width="100%" />
                </div>
              </Slider>
            </div>
          </Flex>
        </div>
      </div>
      <div className="let-talk">
        <div className="hero-bg-img-shadow-talk">
          <Flex
            justify={"center"}
            align={"center"}
            style={{ height: "inherit" }}
            vertical
          >
            <Title level={3} className="meet-team-heading">
              LET’S TALK
            </Title>
            <div
              style={{
                marginBottom: "10px",
                marginTop: "20px",
                width: "6%",
                borderBottom: "1px solid white",
              }}
            ></div>
            <Text
              style={{
                color: "white",
                lineHeight: "25.6px",
                letterSpacing: "1px",
                fontSize: "20px",
                textAlign: "center",
                width: "45%",
              }}
            >
              Reach out to us today and let's start turning your real estate
              dreams into reality
            </Text>
            <div>
              <Button
                style={{
                  marginTop: "24px",
                  height: "40px",
                }}
                className="contact-us-btn"
              >
                Contact Us
              </Button>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default MeetTeam;
