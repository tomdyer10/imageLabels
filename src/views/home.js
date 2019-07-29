import React from "react";
import { Layout, Button } from "antd";
import logo from "./../constants/symbol-brick.png";

const { Header, Content } = Layout;

const headerStyle = {
  fontSize: "20px",
  fontWeight: "900",
  background: "none"
};

const contentStyle = {
  overflowY: "auto",
  margin: "0 auto",
  minHeight: "100vh"
};

const descriptor = {
  fontSize: "16px",
  padding: "10px",
  marginTop: "5%",
  fontFamily: "montserrat",
  marginLeft: "10%",
  marginRight: "10%"
};

const Home = ({ start }) => {
  return (
    <Layout style={{ overflowY: "auto" }}>
      <Content style={contentStyle}>
        <div style={descriptor}>
          Welcome to the image picker! You will be presented with 10 images of
          venues. For each image, please select every description you feel fits
          the image.
        </div>
        <div style={descriptor}>Click begin when you are ready!</div>
        <Button
          type="primary"
          onClick={start}
          style={{
            background: "#008578",
            border: "none",
            width: "100px",
            margin: "50px"
          }}
        >
          BEGIN
        </Button>
      </Content>
    </Layout>
  );
};

export default Home;
