import React, { useEffect, useState } from "react";
import ViewStory from "./ViewStory";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);

  const navigate=useNavigate();

  let tot=0;

  useEffect(() => {
    fetch("https://json-server-deployment-imv4.onrender.com/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="story d-flex"
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        whiteSpace: "nowrap",
        padding: "10px",
      }}
    >
      {stories.length > 0 ? (
        stories.map((story) => (
          <div
            className="mx-1"
            key={story.id}
            style={{
              padding: "3px",
              display: "inline-block",
              textAlign: "center",
            }}
           onClick={()=>{navigate(`/story/${story.id}/${stories.length}`)}}

          >
            <div className="gradient-border">
              <img
                className="story-dp rounded-circle"
                src={story.profilePic}
                alt="prof_pic"
                
              />
            </div>

            <p className="text-truncate" style={{ width: "50px" }}>
              {story.username}
            </p>
            {console.log(story.profilePic)}
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Stories;
