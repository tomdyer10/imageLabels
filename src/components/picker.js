import React from "react";
import { Row, Col, Layout, Button } from "antd";
import { tags } from "./../constants/tags";

const Picker = ({ handleClick, selectedTags }) => {
  return (
    <Layout>
      <Row gutter={16} style={{ padding: "10px" }}>
        {tags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Col span={4} key={tag}>
              <Button
                onClick={() => handleClick(tag)}
                style={{
                  color: "#1e1e1d",
                  width: "100%",
                  margin: "5px",
                  fontSize: "16px",
                  border: "#af231c",
                  background: isSelected ? "#d7918e" : "#fff"
                }}
              >
                {tag}
              </Button>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Picker;
