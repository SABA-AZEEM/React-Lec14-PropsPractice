import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="heading">{props.name}</h2>
          <img src={props.imgURL} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom ">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
