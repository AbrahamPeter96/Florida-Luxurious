import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Flex, Pagination, Spin } from "antd";
import BackgroundImage from "../../components/BackgroundImage";
import FeaturedPropertiesImage from "../../assets/Agent.png";
import { Container } from "react-bootstrap";
import Property from "../../assets/property.png";
import { IoLocationOutline, IoPricetagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Icons from "../../components/Icons";
import LetTalk from "../../components/LetTalk";
import useProperties from "../../hooks/useProperties";

const { Title, Text } = Typography;
function Properties() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { data, isLoading } = useProperties(
    null,
    itemsPerPage,
    currentPage,
    null
  );
  console.log(data);
  const navigate = useNavigate();

  // const properties = [
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  //   { address: "2572 Mercedes Drive", price: "$15,000,000" },
  // ];

  // // Calculate the index range for the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BackgroundImage Image={FeaturedPropertiesImage}>
        <Title className="text-white text-upper f-50 f-100">
          Featured properties
        </Title>
      </BackgroundImage>
      {isLoading ? (
        <Spin
          size="large"
          className="d-flex w-100 justify-content-center align-items-center py-5"
        />
      ) : (
        <Container className="pt-98 pb-98">
          <Row gutter={[60, 60]}>
            {data?.properties.map((property, index) => (
              <Col
                lg={12}
                md={12}
                sm={24}
                key={index}
                onClick={() => navigate(`/features/${property?._id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="displayy-teamimg-center">
                  <img src={Property} width="100%" className="" />
                  <div className="more-info-property">
                    <Flex
                      vertical
                      align={"center"}
                      justify="center"
                      style={{ height: "100%" }}
                      gap={30}
                    >
                      <Flex vertical>
                        <Text className="text-center text-upper f-24 f-bold text-white">
                          address
                        </Text>
                        <Text className="text-center text-upper f-24 f-100 text-gray">
                          {property?.addressLine1} {property?.addressLine2}
                        </Text>
                      </Flex>
                      <Flex vertical>
                        <Text className="text-center text-upper f-24 f-bold text-white">
                          last list price
                        </Text>
                        <Text className="text-center text-upper f-24 f-100 text-gray">
                          ${property?.salePrice}
                        </Text>
                      </Flex>
                      <Flex vertical>
                        <Text className="text-center text-upper f-24 f-bold text-white">
                          Agent Listing
                        </Text>
                        <Text className="text-center text-upper f-24 f-100 text-gray">
                          Abraham
                        </Text>
                      </Flex>
                      <Flex vertical>
                        <button className="let-talk-btn">View Property</button>
                      </Flex>
                    </Flex>
                  </div>

                  <div className="info">
                    <Flex justify={"end"} align={"center"}>
                      <Flex>
                        <IoLocationOutline color="white" size={20} />
                        <Text
                          className="f-14 f-bold text-white"
                          style={{ textAlign: "right" }}
                        >
                          {property?.addressLine1} {property?.addressLine2}{" "}
                          <br />
                          <IoPricetagOutline size={20} /> ${property?.salePrice}
                        </Text>
                      </Flex>
                    </Flex>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {data?.properties.length === 0 ? null : (
            <Flex justify={"center"} align="center" className="my-4">
              <Pagination
                defaultCurrent={1}
                total={data?.totalCount}
                pageSize={itemsPerPage}
                onChange={handlePageChange}
                responsive
              />
            </Flex>
          )}
          {!isLoading && data?.properties.length === 0 && (
            <Title>No Property Listed</Title>
          )}
        </Container>
      )}

      <LetTalk />
      <Icons />
    </>
  );
}

export default Properties;
