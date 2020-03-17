import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  return (
    <div className="container ">
      <div className="col-md-8 m-auto">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5>{track.artist_name}</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-play"></i> Track
              </strong>
              : {track.track_name}
              <br></br>
              <strong>
                <i className="fas fa-compact-disc"></i> Album
              </strong>
              : {track.album_name}
            </p>
            <Link
              to={`lyrics/track/${track.track_id}`}
              className="btn btn-info btn-block"
            >
              <i className="fas fa-chevron-right"></i> Play with lyrics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Track;
