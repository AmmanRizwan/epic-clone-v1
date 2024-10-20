import React from "react";
import './NewsPost.css';
import news_data from "../Assets/News/news_data";

const NewsPost = () => {

  return (
    <>
    {news_data.map((data, index) => {
      return (
        <div className="newspost" key={index}>
          <hr className="newspost-line" />
          <div className="post-detail">
            <div>
              <img className="news-post-image" src={data.image} alt="" />
            </div>
    
            <div className="new-post-para">
              <h6 className="news-post-date">{data.yr}</h6>
              <h3 className="news-post-title">{data.news}</h3>
              <p className="news-post-description">{data.descritpion}</p>
              <h5 className="new-post-read-more">Read more</h5>
            </div>
          </div>
        </div>

      )
    })}
        </>

  )
}

export default NewsPost;