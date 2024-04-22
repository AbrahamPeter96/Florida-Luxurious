import React from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Agent from "../../assets/Agent.png";
import { Typography, Row, Col, Image, Flex, Spin } from "antd";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { Container } from "react-bootstrap";
import LetTalk from "../../components/LetTalk";
import { useParams, useNavigate } from "react-router-dom";
import useAgent from "../../hooks/useAgent";
const { Title, Paragraph } = Typography;
function AgentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data, errorCode, isError } = useAgent(id);
  if (isError) {
    if (errorCode == "400") {
      navigate("*");
    }
  }
  return (
    <>
      <BackgroundImage Image={Agent}>
        <Title className="text-white text-upper f-50">Agent Profile</Title>
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
                    >
                      <a
                        className="circle-bg-white"
                        target="_blank"
                        href="https://www.facebook.com/FloridaLuxuriousProperties/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="25"
                          viewBox="0 0 13 25"
                          fill="none"
                          className="fill-change"
                        >
                          <path
                            d="M12.5367 0.173828V4.00419H10.2588C9.42694 4.00419 8.86593 4.17829 8.57575 4.52651C8.28557 4.87472 8.14048 5.39704 8.14048 6.09347V8.83566H12.3916L11.8258 13.1303H8.14048V24.1426H3.70075V13.1303H0.000976562V8.83566H3.70075V5.67271C3.70075 3.87361 4.20373 2.47833 5.20968 1.48689C6.21563 0.495443 7.55529 -0.000278473 9.22865 -0.000278473C10.6505 -0.000278473 11.7532 0.0577564 12.5367 0.173828Z"
                            className="fill-change"
                          />
                        </svg>
                      </a>
                      <a
                        className="circle-bg-white line-between"
                        target="_blank"
                        href="https://www.instagram.com/florida_luxurious/?hl=en"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M14.1157 14.6258C14.1157 14.6258 14.297 14.4445 14.6597 14.0818C15.0225 13.719 15.2038 13.025 15.2038 11.9997C15.2038 10.9744 14.8411 10.0991 14.1157 9.37361C13.3902 8.64816 12.5148 8.28544 11.4895 8.28544C10.4642 8.28544 9.58887 8.64816 8.86342 9.37361C8.13797 10.0991 7.77525 10.9744 7.77525 11.9997C7.77525 13.025 8.13797 13.9004 8.86342 14.6258C9.58887 15.3513 10.4642 15.714 11.4895 15.714C12.5148 15.714 13.3902 15.3513 14.1157 14.6258ZM15.5375 7.95173C15.5375 7.95173 15.8156 8.22982 16.3718 8.78599C16.928 9.34217 17.2061 10.4134 17.2061 11.9997C17.2061 13.586 16.6499 14.9354 15.5375 16.0477C14.4252 17.1601 13.0758 17.7162 11.4895 17.7162C9.90323 17.7162 8.5539 17.1601 7.44155 16.0477C6.32919 14.9354 5.77302 13.586 5.77302 11.9997C5.77302 10.4134 6.32919 9.06408 7.44155 7.95173C8.5539 6.83938 9.90323 6.2832 11.4895 6.2832C13.0758 6.2832 14.4252 6.83938 15.5375 7.95173ZM18.3813 5.10798C18.3813 5.10798 18.4466 5.17327 18.5771 5.30385C18.7077 5.43443 18.773 5.6835 18.773 6.05106C18.773 6.41862 18.6424 6.73298 18.3813 6.99414C18.1201 7.2553 17.8058 7.38588 17.4382 7.38588C17.0706 7.38588 16.7563 7.2553 16.4951 6.99414C16.234 6.73298 16.1034 6.41862 16.1034 6.05106C16.1034 5.6835 16.234 5.36914 16.4951 5.10798C16.7563 4.84682 17.0706 4.71624 17.4382 4.71624C17.8058 4.71624 18.1201 4.84682 18.3813 5.10798ZM12.5995 2.85184C12.5995 2.85184 12.4314 2.85305 12.0953 2.85547C11.7592 2.85789 11.5572 2.8591 11.4895 2.8591C11.4218 2.8591 11.0519 2.85668 10.3796 2.85184C9.70736 2.84701 9.19713 2.84701 8.84891 2.85184C8.5007 2.85668 8.03399 2.87119 7.4488 2.89537C6.86361 2.91955 6.36547 2.96791 5.95438 3.04046C5.54329 3.113 5.1975 3.20247 4.91699 3.30887C4.43336 3.50233 4.00777 3.78283 3.64021 4.15039C3.27265 4.51795 2.99214 4.94355 2.79869 5.42718C2.69229 5.70768 2.60282 6.05348 2.53027 6.46457C2.45773 6.87565 2.40937 7.37379 2.38518 7.95898C2.361 8.54418 2.34649 9.01088 2.34166 9.3591C2.33682 9.70731 2.33682 10.2175 2.34166 10.8898C2.34649 11.562 2.34891 11.932 2.34891 11.9997C2.34891 12.0674 2.34649 12.4374 2.34166 13.1097C2.33682 13.7819 2.33682 14.2921 2.34166 14.6403C2.34649 14.9886 2.361 15.4553 2.38518 16.0405C2.40937 16.6257 2.45773 17.1238 2.53027 17.5349C2.60282 17.946 2.69229 18.2918 2.79869 18.5723C2.99214 19.0559 3.27265 19.4815 3.64021 19.8491C4.00777 20.2166 4.43336 20.4971 4.91699 20.6906C5.1975 20.797 5.54329 20.8864 5.95438 20.959C6.36547 21.0315 6.86361 21.0799 7.4488 21.1041C8.03399 21.1283 8.5007 21.1428 8.84891 21.1476C9.19713 21.1524 9.70736 21.1524 10.3796 21.1476C11.0519 21.1428 11.4218 21.1403 11.4895 21.1403C11.5572 21.1403 11.9272 21.1428 12.5995 21.1476C13.2717 21.1524 13.7819 21.1524 14.1302 21.1476C14.4784 21.1428 14.9451 21.1283 15.5303 21.1041C16.1155 21.0799 16.6136 21.0315 17.0247 20.959C17.4358 20.8864 17.7816 20.797 18.0621 20.6906C18.5457 20.4971 18.9713 20.2166 19.3389 19.8491C19.7064 19.4815 19.9869 19.0559 20.1804 18.5723C20.2868 18.2918 20.3763 17.946 20.4488 17.5349C20.5213 17.1238 20.5697 16.6257 20.5939 16.0405C20.6181 15.4553 20.6326 14.9886 20.6374 14.6403C20.6423 14.2921 20.6423 13.7819 20.6374 13.1097C20.6326 12.4374 20.6302 12.0674 20.6302 11.9997C20.6302 11.932 20.6326 11.562 20.6374 10.8898C20.6423 10.2175 20.6423 9.70731 20.6374 9.3591C20.6326 9.01088 20.6181 8.54418 20.5939 7.95898C20.5697 7.37379 20.5213 6.87565 20.4488 6.46457C20.3763 6.05348 20.2868 5.70768 20.1804 5.42718C19.9869 4.94355 19.7064 4.51795 19.3389 4.15039C18.9713 3.78283 18.5457 3.50233 18.0621 3.30887C17.7816 3.20247 17.4358 3.113 17.0247 3.04046C16.6136 2.96791 16.1155 2.91955 15.5303 2.89537C14.9451 2.87119 14.4784 2.85668 14.1302 2.85184C13.7819 2.84701 13.2717 2.84701 12.5995 2.85184ZM22.5598 7.40039C22.6082 8.25158 22.6324 9.78469 22.6324 11.9997C22.6324 14.2148 22.6082 15.7479 22.5598 16.5991C22.4631 18.611 21.8634 20.1682 20.7607 21.2709C19.6581 22.3736 18.1008 22.9733 16.0889 23.07C15.2377 23.1184 13.7046 23.1426 11.4895 23.1426C9.27451 23.1426 7.7414 23.1184 6.89021 23.07C4.8783 22.9733 3.32101 22.3736 2.21833 21.2709C1.11565 20.1682 0.515951 18.611 0.419224 16.5991C0.370861 15.7479 0.34668 14.2148 0.34668 11.9997C0.34668 9.78469 0.370861 8.25158 0.419224 7.40039C0.515951 5.38849 1.11565 3.83119 2.21833 2.72852C3.32101 1.62584 4.8783 1.02613 6.89021 0.929409C7.7414 0.881046 9.27451 0.856865 11.4895 0.856865C13.7046 0.856865 15.2377 0.881046 16.0889 0.929409C18.1008 1.02613 19.6581 1.62584 20.7607 2.72852C21.8634 3.83119 22.4631 5.38849 22.5598 7.40039Z"
                            className="fill-change"
                          />
                        </svg>
                      </a>
                      <a
                        className="circle-bg-white"
                        target="_blank"
                        href="https://www.linkedin.com/in/florida-luxurious-properties-585146a2/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="26"
                          viewBox="0 0 23 26"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_859_343)">
                            <path
                              d="M5.4103 9.06892V23.4473H0.622349V9.06892H5.4103ZM5.71498 4.62919C5.72466 5.33529 5.48042 5.92532 4.98228 6.39927C4.48414 6.87323 3.82882 7.11021 3.01632 7.11021H2.9873C2.19415 7.11021 1.55576 6.87323 1.07213 6.39927C0.588495 5.92532 0.34668 5.33529 0.34668 4.62919C0.34668 3.91341 0.59575 3.32096 1.09389 2.85184C1.59203 2.38272 2.24251 2.14816 3.04534 2.14816C3.84817 2.14816 4.4914 2.38272 4.97503 2.85184C5.45866 3.32096 5.70531 3.91341 5.71498 4.62919ZM22.6324 15.2062V23.4473H17.859V15.7575C17.859 14.7419 17.6631 13.9463 17.2713 13.3708C16.8796 12.7953 16.2678 12.5075 15.436 12.5075C14.8266 12.5075 14.3164 12.6744 13.9053 13.0081C13.4942 13.3418 13.1871 13.7553 12.984 14.2486C12.8776 14.5388 12.8244 14.9305 12.8244 15.4238V23.4473H8.05092C8.07027 19.5879 8.07994 16.4588 8.07994 14.06C8.07994 11.6612 8.0751 10.2296 8.06543 9.76535L8.05092 9.06892H12.8244V11.1582H12.7953C12.9888 10.8487 13.1871 10.5778 13.3902 10.3457C13.5933 10.1136 13.8666 9.86207 14.21 9.59124C14.5533 9.32041 14.9741 9.11003 15.4722 8.9601C15.9704 8.81017 16.5241 8.73521 17.1335 8.73521C18.7875 8.73521 20.1175 9.28413 21.1235 10.382C22.1294 11.4798 22.6324 13.0879 22.6324 15.2062Z"
                              className="fill-change"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_859_343">
                              <rect
                                width="22.3"
                                height="26"
                                fill="white"
                                transform="matrix(1 0 0 -1 0.339844 26)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </Flex>
                    <Flex vertical>
                      <Flex align={"center"} gap={10}>
                        <MdOutlinePhone color="#838383" size={25} />{" "}
                        <span className="text-white f-24">
                          {data?.phoneNumber}
                        </span>
                      </Flex>
                      <Flex align={"center"} gap={10}>
                        <MdOutlineMailOutline color="#838383" size={25} />{" "}
                        <span className="text-white f-24">{data?.email}</span>
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
