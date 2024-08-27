import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadingOutlined,
  PlusOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Space,
  Card,
  Button,
  Table,
  Input,
  Popconfirm,
  Modal,
  notification,
  Upload,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getReports,
  addReport,
  updateReport,
  deleteReport,
} from "./../../api/Report";
import { api_base_URL } from "../../api/Axios";

function Report() {
  const columns = [
   
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link onClick={() => showModal(record)}>Edit</Link>
          <Popconfirm
            title="Delete this task"
            description="Are you sure to delete this Report?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => dispatch(deleteReport(record._id))}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type, description) => {
    api[type]({ description });
  };

  const [tableParams, setTableParams] = useState({
    current: 1,
    pageSize: 10,
  });
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProp, setSelectedProp] = useState({});
  const [photo, setPhoto] = useState("");
  const [photoUploading, setPhotoUploading] = useState(false);
  const [pdf, setPdf] = useState("");
  const [pdfUploading, setPdfUploading] = useState(false);
  const { isLoading, isError, data } = useSelector((s) => s.getReportsReducer);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getReports({
        page: tableParams.current,
        limit: tableParams.pageSize,
      })
    );
    if (isError) {
      console.log(isError);
    }
  }, [dispatch, tableParams.current, tableParams.pageSize, isError]);

  const handleTableChange = (pagination) => {
    setTableParams(pagination);
    dispatch(
      getReports({
        page: pagination.current,
        limit: pagination.pageSize,
      })
    );
  };

  const extractBase64Data = (content) => {
    const regex = /data:image\/[a-zA-Z]+;base64,([^\"]*)/;
    const match = content.match(regex);
    return match
      ? match[0].replace(/^data:image\/[a-zA-Z]+;base64,/, "")
      : null;
  };

  const base64ToBlobURL = (base64Data) => {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" }); // Adjust type as needed
    return URL.createObjectURL(blob);
  };

  const showModal = (property) => {
    setIsModalOpen(true);
    if (property._id) {
      setTimeout(() => {
        setSelectedProp(property);
        setTitle(property.title);
        setPhoto(property.cover);
        setPdf(property.pdf || "");
        const base64Data = extractBase64Data(property.content);
        if (base64Data) {
          setPhoto(base64ToBlobURL(base64Data));
        } else {
          setPhoto(property.cover); // Fallback to default if no base64 data
        }
        const parser = new DOMParser();
        const decodedHtml = parser.parseFromString(
          property?.content,
          "text/html"
        ).body.textContent;
        window.$("#summernote").summernote("code", decodedHtml);
      }, 1000);
    } else {
      setTitle("");
      setPhoto("");
      setPdf("");
      setTimeout(() => {
        const parser = new DOMParser();
        const decodedHtml = parser.parseFromString("", "text/html").body
          .textContent;
        window.$("#summernote").summernote("code", decodedHtml);
      }, 1000);
    }
  };

  const beforeUpload = (e) => {
    if (e.type === "application/pdf") {
      setPdfUploading(true);
    } else {
      setPhotoUploading(true);
    }
  };

  const handleFileChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.type === "application/pdf") {
        setPdfUploading(false);
        setPdf(info.file.response.url);
      } else {
        setPhotoUploading(false);
        setPhoto(info.file.response.url);
      }
    }
  };

  const uploadButton = (
    <div>
      {photoUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleOk = async () => {
    try {
      const markupStr = $("#summernote").summernote("code");
      if (selectedProp._id) {
        await dispatch(
          updateReport({
            id: selectedProp._id,
            title,
            cover: photo,
            content: markupStr,
            file: pdf || "",
          })
        ).unwrap();
        openNotification("success", "Report updated successfully.");
        setSelectedProp({});
        setIsModalOpen(false);

        dispatch(
          getReports({
            page: tableParams.current,
            limit: tableParams.pageSize,
          })
        );
      } else {
        await dispatch(
          addReport({
            title,
            cover: photo,
            content: markupStr,
          })
        ).unwrap();
        openNotification("success", "Report added successfully.");
        setIsModalOpen(false);

        // Refresh the posts list
        dispatch(
          getReports({
            page: tableParams.current,
            limit: tableParams.pageSize,
          })
        );
      }
    } catch (error) {
      console.error("Failed to save the post:", error);
      openNotification("error", "Failed to save the post.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProp({});
  };

  // Function to add PDF upload button to Summernote toolbar
  const addPdfUploadButton = () => {
    window.$.summernote.ui
      .button({
        contents: '<i class="note-icon-picture"></i> Upload PDF',
        tooltip: "Upload PDF",
        click: function () {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "application/pdf";
          input.onchange = async (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
              const response = await fetch(`${api_base_URL}upload`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                },
                body: formData,
              });
              const result = await response.json();

              if (result.url) {
                const pdfEmbed =
                  '<a href="' +
                  result.url +
                  '" target="_blank">' +
                  file.name +
                  "</a>";
                window.$("#summernote").summernote("pasteHTML", pdfEmbed);
              }
            } catch (error) {
              openNotification("error", "Failed to upload PDF.");
            }
          };
          input.click();
        },
      })
      .render();
  };

  useEffect(() => {
    // Initialize Summernote with custom toolbar including PDF upload button
    window.$("#summernote").summernote({
      height: 200,
      toolbar: [
        ["style", ["style"]],
        ["font", ["bold", "underline", "clear"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link", "picture", "video"]],
        ["view", ["fullscreen", "codeview", "help"]],
        ["upload", ["uploadPdf"]],
      ],
      callbacks: {
        onInit: addPdfUploadButton,
      },
    });
  }, []);

  return (
    <>
      {contextHolder}
      <Card
        title="Report Info"
        extra={
          <Space>
            <Button onClick={() => showModal({})} type="primary">
              <Link>
                <PlusOutlined />
                Add
              </Link>
            </Button>
          </Space>
        }
        style={{ padding: 0 }}
      >
        <Table
          columns={columns}
          loading={isLoading}
          pagination={{ ...tableParams, total: data?.totalCount }}
          dataSource={data?.Reports}
          onChange={handleTableChange}
        />
      </Card>
      <Modal
        title="Add Report Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        style={{ top: 20 }}
      >
        {" "}
        <div style={{ marginBottom: "20px" }}>
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${api_base_URL}upload`}
            beforeUpload={beforeUpload}
            onChange={handleFileChange}
            headers={{ Authorization: `Bearer ${localStorage.token}` }}
          >
            {photo ? (
              <img
                src={photo}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>{" "}
        </div>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ marginBottom: "20px" }}>
          <Upload
            name="file"
            listType="text"
            className="pdf-uploader"
            loading={pdfUploading}
            showUploadList={false}
            headers={{
              Authorization: `Bearer ${localStorage.token}`,
            }}
            action={`${api_base_URL}upload`}
            beforeUpload={beforeUpload}
            onChange={handleFileChange}
          >
            {pdf ? (
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                <FilePdfOutlined
                  style={{ fontSize: "32px", color: "#ff4d4f" }}
                />
                <span style={{ marginLeft: "8px" }}>View PDF</span>
              </a>
            ) : (
              <Button>
                <PlusOutlined /> Upload PDF
              </Button>
            )}
          </Upload>
        </div>
        <div id="summernote"></div>
      </Modal>
    </>
  );
}

export default Report;