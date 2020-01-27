import React from 'react';

export default function Reviews(props) {
  return (
      <div className="reviews">
        <a className="review-name" href="/">{props.username}</a>
        <div className="review-stars">
          <img width="15px" src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" alt="1-Star"/>
          <img width="15px" src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" alt="1-Star"/>
          <img width="15px" src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" alt="1-Star"/>
          <img width="15px" src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" alt="1-Star"/>
          <img width="15px" src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" alt="1-Star"/>
          <a className="review-count" href="/">({props.count})</a>
        </div>
      </div>
  )
}