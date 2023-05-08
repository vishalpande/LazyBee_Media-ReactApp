import React from "react";
import ReactDOM from "react-dom";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  const date = new Date(publishedAt);
  const mArray = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = mArray[date.getMonth()];
  return (
    <div className="card" style={{ width: "18rem", position: "relative" }}>
      <span
        className="badge rounded-pill "
        style={{
          position: "absolute",
          top: "-2%",
          right: "-4%",
          backgroundColor: "#C70039",
        }}
      >
        {source.name}
      </span>
      <img
        style={{ height: "12rem" }}
        src={imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-body-secondary">
            {author ? "By" : ""} <b>{author}</b> {date ? "on" : ""}{" "}
            <span style={{ color: "#333300", fontWeight: "500" }}>
              {date.getDate()} {month} {date.getUTCFullYear()}
            </span>
          </small>
        </p>
        <a target="blank" href={newsUrl} className="btn btn-primary btn-sm">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
