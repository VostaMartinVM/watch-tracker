import React from "react";

function Upcoming() {
  return (
    <div className="List">
      <div className="gallery">
        <a target="_blank" href="img_5terre.jpg">
          <img
            src="https://static.educalingo.com/img/pt/800/colhereiro-americano.jpg"
            alt="Cinque Terre"
            width="400"
            height="600"
          ></img>
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href="img_forest.jpg">
          <img
            src="https://i.natgeofe.com/n/63527567-9a8b-4b08-819d-a6142fb2b350/aurora-kirkjufell-iceland_2x3.jpg"
            alt="Forest"
            width="400"
            height="600"
          ></img>
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href="img_lights.jpg">
          <img
            src="https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVyb3JhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Northern Lights"
            width="400"
            height="600"
          ></img>
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href="img_mountains.jpg">
          <img
            src="https://i.natgeofe.com/n/63527567-9a8b-4b08-819d-a6142fb2b350/aurora-kirkjufell-iceland_2x3.jpg"
            alt="Mountains"
            width="400"
            height="600"
          ></img>
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
    </div>
  );
}

export default Upcoming;
