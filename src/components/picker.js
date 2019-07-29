import React from "react";
import { Row, Col, Layout, Button } from "antd";
import { tags } from "./../constants/tags";
import Media from "react-media";

const Picker = ({ handleClick, selectedTags }) => {
  return (
    <Layout>
      <Row gutter={16} style={{ padding: "10px" }}>
        {tags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Media query="(max-width: 599px)">
              {matches =>
                matches ? (
                  <Col span={8} key={tag}>
                    <Button
                      onClick={() => handleClick(tag)}
                      style={{
                        color: "#1e1e1d",
                        width: "90%",
                        margin: "10px",
                        fontSize: "16px",
                        border: "#008578",
                        background: isSelected ? "#80c2bc" : "#fff"
                      }}
                    >
                      {tag}
                    </Button>
                  </Col>
                ) : (
                  <Col span={4} key={tag}>
                    <Button
                      onClick={() => handleClick(tag)}
                      style={{
                        color: "#1e1e1d",
                        width: "100%",
                        margin: "5px",
                        fontSize: "16px",
                        border: "#008578",
                        background: isSelected ? "#80c2bc" : "#fff"
                      }}
                    >
                      {tag}
                    </Button>
                  </Col>
                )
              }
            </Media>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Picker;
