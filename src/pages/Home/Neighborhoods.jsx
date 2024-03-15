import React from "react";
import { Typography, Flex } from "antd";
import Slider from "react-slick";
import Florida from "../../assets/florida.png";
const { Title, Text, Paragraph } = Typography;
function Neighborhoods() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div style={{ paddingTop: 85, paddingBottom: 85 }}>
      <Title
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 100,
          fontSize: 40,
          lineHeight: "39px",
          letterSpacing: "1px",
        }}
        level={1}
      >
        Feature Neighborhoods
      </Title>
      <Flex
        justify={"center"}
        align={"center"}
        style={{
          marginTop: 65,
          marginBottom: 65,
          gap: "2rem",
        }}
        className="negborihood-list"
      >
        <div className="meet-slider-width" style={{ width: "100%" }}>
          <Slider {...settings}>
            <div className="displayy-teamimg-center">
              <img src={Florida} width="100%" className="img-op" />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  width: "100%",
                }}
              >
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  style={{ width: "95%" }}
                >
                  <Title>View All</Title>
                </Flex>
              </div>
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
            <div>
              <img src={Florida} width="100%" />
            </div>
          </Slider>
        </div>
      </Flex>
      <Flex justify="center" align="center">
        <button className="button-view1">See All Neighborhoods </button>
      </Flex>
    </div>
  );
}

export default Neighborhoods;
