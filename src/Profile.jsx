import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);

  const[unfollow,setUnfollow]=useState(0)

  useEffect(() => {
    axios
      .get("https://json-server-deployment-imv4.onrender.com/profile")
      .then((data) => {
        setProfile(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://json-server-deployment-imv4.onrender.com/followers")
      .then((data) => setFollowers(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [unfollow]);

  function handleOnChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleUpdate = async () => {
    axios
      .put("https://json-server-deployment-imv4.onrender.com/profile", profile)
      .then(console.log("Updated"))
      .catch((err) => console.log(err));
  };



  const handleUnfollow = async (id) => {
    axios
      .delete(`https://json-server-deployment-imv4.onrender.com/followers/${id}`)
      .then(alert("Unfollowed !"))
      .then(setUnfollow(!unfollow))
      .catch((error) => console.log(error));
  };

  return (
    <div className="m-5">
      {profile ? (
        <div>
          <img
            className="profile rounded-circle"
            src={profile.profilePic}
            alt=""
          />
          <h5>{profile.username}</h5>

          <input
            type="text"
            value={profile.username}
            className="form-control my-4"
            name="username"
            onChange={handleOnChange}
          />

          <input
            type="text"
            value={profile.profilePic}
            name="profilePic"
            className="form-control"
            onChange={handleOnChange}
          />

          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <p>Loading</p>
      )}

      <h5 style={{ paddingTop: "15px" }}>Followers</h5>
      {followers.length > 0 ? (
        followers.map((follower) => (
          <div key={follower.id}>
            <div className="d-flex">
              <img
                className="profile rounded-circle mx-2 my-2"
                src={follower.profilePic}
                style={{ height: "50px", width: "50px" }}
                alt=""
              />
              <h6 style={{ marginTop: "23px", marginLeft: "3px" }}>
                {follower.username}
              </h6>
              <p
                className="text-primary"
                style={{
                  marginLeft: "13px",
                  marginTop: "21px",
                  cursor: "pointer",
                }}
                onClick={()=>{handleUnfollow(follower.id)}}
              >
                Unfollow
              </p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Profile;
