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
  height: "100%",
  minHeight: "500px"
};

const descriptor = {
  fontSize: "16px",
  padding: "10px",
  marginTop: "5%",
  fontFamily: "montserrat"
};

const Home = ({ start }) => {
  return (
    <Layout>
      <Header style={headerStyle}>HeadBox Brain</Header>
      <Content style={contentStyle}>
        <img src={logo} style={{ height: "200px", margin: "50px" }} />
        <div style={descriptor}>
          Welcome to the HeadBox brain trainer. Please select all 'emotions' you
          feel apply to each picture. Hit START when you are ready to begin.
        </div>
        <Button
          type="primary"
          onClick={start}
          style={{
            background: "#af231c",
            border: "none",
            width: "100px",
            margin: "50px"
          }}
        >
          START
        </Button>
      </Content>
    </Layout>
  );
};

export default Home;
