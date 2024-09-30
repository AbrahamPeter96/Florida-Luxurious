import React, { useEffect, useRef, useState } from "react";
import { Typography, Row, Col, Spin, Button } from "antd";
import { Container } from "react-bootstrap";
import usePressDetail from "../../hooks/usePressDetail";
import { useParams } from "react-router-dom";
import { decode } from "html-entities";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

const { Title } = Typography;

// Set the workerSrc for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const Flipbook = React.forwardRef(({ pages, onPageChange }, ref) => {
  return (
    <HTMLFlipBook
      ref={ref}
      width={500}
      height={700}
      size="stretch"
      minWidth={315}
      maxWidth={600}
      minHeight={400}
      maxHeight={1533}
      drawShadow={true}
      flippingTime={1000}
      useMouseEvents={true}
      onFlip={onPageChange} // Call this on flip event
      style={{
        margin: "0 auto",
        background: "#f5f5f5",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        maxWidth: "100%", // Ensure full width on smaller screens
      }}
    >
      {pages.map((page, index) => (
        <div key={index} className="page" style={{ padding: "20px" }}>
          <img
            src={page}
            alt={`Page ${index + 1}`}
            style={{
<<<<<<< HEAD
              width: "100%", // Responsive width
              height: "auto", // Maintain aspect ratio
=======
              width: "100%", // Make the image responsive
              height: "auto",
>>>>>>> 56264c876973ebccfa89965679c8bf00366068b4
              borderRadius: "20px",
            }}
          />
        </div>
      ))}
    </HTMLFlipBook>
  );
});

function PropertyPressDetail() {
  const { id } = useParams();
  const { data, isLoading } = usePressDetail(id);
  const refHtml = useRef(null);
  const flipbookRef = useRef(null);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // State for current page

  useEffect(() => {
    if (refHtml.current && data?.content) {
      const decodedContent = decode(data.content);
      refHtml.current.innerHTML = decodedContent;

      const iframes = refHtml.current.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        iframe.style.maxWidth = "100%";
        iframe.style.width = "100%";
        iframe.style.height = "400px"; // Fixed height for iframes
      });

      const images = refHtml.current.querySelectorAll("img");
      images.forEach((img) => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
      });
    }
  }, [data?.content]);

  useEffect(() => {
    if (data?.file) {
      const url = data.file;
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then((pdf) => {
        const totalPages = pdf.numPages;
        const pageImages = [];

        const loadPage = async (pageNumber) => {
          const page = await pdf.getPage(pageNumber);
          const scale = 1.5;
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          const imgData = canvas.toDataURL("image/png");
          pageImages.push(imgData);

          if (pageImages.length === totalPages) {
            setPages(pageImages);
          }
        };

        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
          loadPage(pageNumber);
        }
      });
    }
  }, [data?.file]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      const nextPageIndex = currentPage + 1;
      setCurrentPage(nextPageIndex);
      flipbookRef.current.pageFlip().flip(nextPageIndex);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      const prevPageIndex = currentPage - 1;
      setCurrentPage(prevPageIndex);
      flipbookRef.current.pageFlip().flip(prevPageIndex);
    }
  };

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  return (
    <>
      <div className="team-banner">
        <div className="team-banner-shadow">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Title
              className="text-upper text-white f-50 f-100"
              style={{ fontSize: "clamp(24px, 5vw, 50px)" }} // Responsive text size
            >
              {data?.title}
            </Title>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Row
          style={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </Row>
      ) : (
        <Container
          className="mt-4"
          style={{ maxWidth: "100%", padding: "0 15px" }}
        >
          <Row justify="center" style={{ paddingBottom: "30px" }}>
            <Col xs={24} md={20} lg={16}>
              <div ref={refHtml} />
<<<<<<< HEAD

              {pages.length > 1 && <Flipbook pages={pages} />}
=======
              {pages.length > 0 && (
                <>
                  <Flipbook
                    ref={flipbookRef} // Pass the ref to the flipbook
                    pages={pages}
                    onPageChange={handlePageChange}
                  />
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <Button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      style={{ marginRight: "10px" }}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={nextPage}
                      disabled={currentPage === pages.length - 1}
                    >
                      Next
                    </Button>
                  </div>
                </>
              )}
>>>>>>> 56264c876973ebccfa89965679c8bf00366068b4
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default PropertyPressDetail;
