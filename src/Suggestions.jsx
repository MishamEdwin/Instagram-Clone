import React, { useState, useEffect } from "react";
import axios from "axios";

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://json-server-deployment-imv4.onrender.com/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));

    fetch("https://json-server-deployment-imv4.onrender.com/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.log(error));
  }, []);

  const handleFollow = async (id, username, profilePic) => {
    axios
      .post("https://json-server-deployment-imv4.onrender.com/followers", {
        id: id,
        username: username,
        profilePic: profilePic,
      })
      .then(alert("Followed!"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profilePic}
              alt="prof_pic"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/_extra_chrispy_",
                  "_blank"
                )
              }
            />
            <h5
              style={{ marginTop: "7px", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/_extra_chrispy_",
                  "_blank"
                )
              }
            >
              {profile.username}
            </h5>
            <small
              className="ms-auto text-primary"
              style={{ marginTop: "7px", cursor: "pointer" }}
            >
              Switch
            </small>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="d-flex m-2">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>
        <div>
          {suggestions.length > 0 ? (
            <div>
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="d-flex align-items-center mb-2"
                >
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profilePic}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="ms-2 mb-0" style={{ fontSize: "14px" }}>
                    {suggestion.username}
                  </h5>
                  <p
                    className="text-primary ms-auto mb-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleFollow(
                        suggestion.id,
                        suggestion.username,
                        suggestion.profilePic
                      );
                    }}
                  >
                    Follow
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>Loading Posts</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
