import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ViewStory() {
  const { id, tot } = useParams();

  const [story, setStory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (parseInt(id) > parseInt(tot) || parseInt(id) <= 0) {
      navigate("/");
    }
  }, [id, tot, navigate]);

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center bg-black align-items-center">
          <Link to={`http://localhost:5173/story/${Number(id) - 1}/${tot}`}>
            <i className="bi bi-arrow-left-circle text-primary"></i>
          </Link>
          <img className="vh-100" src={story.image} alt="" style={{maxWidth:"30%"}}/>
          <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}>
            <i className="bi bi-arrow-right-circle text-primary"></i>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewStory;
