import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Coming_soon() {
  
  return (
    <React.Fragment>
      {/* //? Suggetion :: Need to Bigger the view or add an image to make it more attractive */}
      {/* <!-- 1  coloumn  Section--> */}
      <section id="coming_soon" className="oneColumnSection p100-0 forUp">
        <div className="wrapper">
          <div className="text-center wow fadeInDown ">
            <h1 className="display-2">Coming Soon</h1>
            <div className="p40-0 forSmallWidth light">
              {/* //TODO :: Add content in the P tag */}
              <h5>We are currently working on this page! </h5>
              <h5>It will be available soon..!</h5>
            </div>
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Coming_soon;