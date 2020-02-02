import React from "react";

class ListingsPhoto extends React.Component {

  render(){
    const { listings } = this.props;


    return (
      <div id="listings-show" className="photo-container">
        <div className="row">

          <div className="primary-column">
            <img src={listings.photoUrls[0]}/>
          </div>

        <div className="sub-column">

          <div className="photo-container-col-1">
            <div className="photo-subimages">
              <img src={listings.photoUrls[1]} />
            </div>
            <div className="photo-subimages">
              <img src={listings.photoUrls[2]} />
            </div>
          </div>

          <div className="photo-container-col-1">
            <div className="photo-subimages">
              <img src={listings.photoUrls[3]} />
            </div>
            <div className="photo-subimages">
              <img src={listings.photoUrls[4]} />
          </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ListingsPhoto;