import React, { useState } from "react";
import Picker from "./../components/picker";
import { Layout, Button } from "antd";

const { Header, Sider, Content } = Layout;

const headerStyle = {
  background: "none",
  fontSize: "20px",
  fontWeight: "800"
};

const siderStyle = {
  background: "none",
  right: "25px",
  position: "absolute"
};

const Game = ({ complete }) => {
  const [pictureNumber, updatePictureNumber] = useState(1);
  // replace with ref to headbox.com

  // add picture results to session
  const [selectedTags, updateSelected] = useState([]);
  const [session, updateSession] = useState([]);
  const recordResults = () => {
    const pictureResults = { ID: pictureID, results: selectedTags };
    updateSession(session.concat(pictureResults));
  };

  // save results of session to server
  const submitResults = (photoid, tags) => {
    try {
      fetch("http://localhost:3001/submit", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          photoid: photoid,
          tags: tags
        })
      });
    } catch (err) {
      console.log("post error is ===", err);
    }
  };

  const nextPicture = () => {
    if (pictureNumber < 10) {
      recordResults();
      updatePictureNumber(pictureNumber + 1);
      updateSelected([]);
      setLoading(true);
      getImage();
    } else {
      recordResults();
      session.map(image => {
        submitResults(image.ID, image.results);
      });
      updateSession([]);
      complete();
    }
  };

  const handleClick = selected => {
    if (selectedTags.includes(selected)) {
      updateSelected(selectedTags.filter(item => item !== selected));
    } else {
      updateSelected(selectedTags.concat(selected));
    }
  };

  // fetch image from the marketplace
  const [pictureID, setID] = useState(null);
  const [pictureURL, setURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const getImage = async () => {
    try {
      fetch("http://localhost:3001/image/random", {
        method: "get"
      })
        .then(response => response.json())
        .then(response => {
          if (response.type !== "error") {
            setURL(response.space_photos[0].filename.detail.url);
            setID(response.space_photos[0].id);
            setLoading(false);
          } else {
            getImage();
          }
        });
    } catch (e) {
      console.log("fetch error is ==", e);
    }
  };

  // get picture on first load
  if (pictureURL === null) {
    getImage();
  }

  return (
    <Layout>
      <Header style={headerStyle}>{pictureNumber}/10</Header>

      <Content>
        {loading ? (
          <div
            style={{
              height: "300px",
              width: "300px",
              textAlign: "center",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Loading Image
          </div>
        ) : (
          <img
            src={pictureURL}
            style={{
              height: "300px",
              width: "auto"
            }}
          />
        )}
        <Picker handleClick={handleClick} selectedTags={selectedTags} />
      </Content>
      <Layout>
        <Sider style={siderStyle}>
          <Button
            onClick={nextPicture}
            style={{
              background: "#AF231C",
              width: "150px",
              color: "white",
              border: "none"
            }}
          >
            {pictureNumber < 10 ? "NEXT" : "FINISH"}
          </Button>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Game;
