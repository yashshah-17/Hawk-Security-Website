import React from 'react';

function Home() {
  
  return (
    <React.Fragment>

      {/* <!--Banner Section--> */}
      <section className="BannerSection overlay ">
        <div className="wrapper">
          <div className="table">
            <div className="table-cell text-center fontWhite">
              <h1 className="pb10 fontWhite">HAWK SECURITY</h1>
              <p className="pb20"> OUR SECURITY SERVICES MAKE THE WORLD A SAFER & FRIENDLIER PLACE</p>
              {/* <!-- <div className="button pt30 whiteButton wow fadeInDown"  data-wow-delay="0.6s">
                <a href="#">View Equipment</a>
                <a href="#">Request Parts</a>
              </div> --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!--2 column Right Content Left Image Section--> */}
      <section id="_service_" className="twoColumnSection p70-0 forUp">
        <div className="wrapper">
          <div className="ib w50 pr15 wow fadeInLeft mw100 mr0">
            <h4>Security Guard</h4>
            <h5>Healthcare</h5>
            <div className="p20-0">
              {/* //TODO :: Add content here */}
              <p>Our Healthcare officers are always eager to serve people. They are all equipped with the knowledge for emergency situation and also knows to use the defibrillator.</p>
            </div>
            <div className="button">
              <a href="javascript:void(0)">view more</a>
            </div>
          </div>
          <div className="ib w50 text-right pl15 wow fadeInRight mw100 mtop30 mobile-center mr0">
            {/* //TODO :: Add Image here */}
            <img src="https://images.squarespace-cdn.com/content/v1/56ae28f9cf80a1c462b624be/1481565679322-2MVB9GOCBZN3FM98WMNU/ke17ZwdGBToddI8pDm48kMS6Ag27B5PiNmuGKFL_Ya9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI4Jb8t-oE2cQnOjGBbWABngHbdRE5IN2-lFfoAl4DPcMKMshLAGzx4R3EDFOm1kBS/security-guard.jpg?format=1500w"/>
          </div>
        </div>
        
      </section>

      {/* <!--2 column Right Content Left Image Section--> */}
      <section className="twoColumnSection p70-0 forUp greyBg">
        <div className="wrapper">
          <div className="ib w50 pr15 mw100 mtop30 mobile-center mr0">
            {/* //TODO :: Add image here */}
            <img src={require('../../assets/images/guard.jpg')}/>
          </div>
          <div className="ib w50 pl15 wow fadeInLeft mw100 mr0">
            <h4>Security Guard</h4>
            <h5>Commercial</h5>
            <div className="p20-0">
              {/* //TODO :: Add content here */}
              <p>Our Security Guards provides 24/7 service to commercial buildings in various shifts. They are quick, strong and know how to use the taser gun when necessary.</p>
            </div>
            <div className="button">
              <a href="javascript:void(0)">view more</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!--2 column Right Content Left Image Section-->
      <!-- <section className="twoColumnSection p70-0 forUp">
        <div className="wrapper">
          <div className="ib w50 pr15 wow fadeInLeft mw100 mr0">
            <h4>Featured Current Project</h4>
            <h5>ABC Laundry - New jerecy</h5>
            <div className="p20-0">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="button">
              <a href="javascript:void(0)">view more</a>
            </div>
          </div>
          <div className="ib w50 text-right pl15 wow fadeInRight mw100 mtop30 mobile-center mr0">
            <img src="Training-Crew-2.jpg">
          </div>
        </div>
      </section> --> */}

      {/* <!--3 column Section--> */}
      <section className="threeColumnSection altBg p100-0 forUp">
        <div className="wrapper">
          <div className="capitalize fontWhite pb70 text-center ">
            <h3 className="fontWhite">Industry</h3>
          </div>
          <div className="threeColumnParent text-center fontWhite clearfix">
            <div className="Column fl w33 rowHeight tabw100">
              <div className="ServiceImage">
                <img src={require('../../assets/images/hospital.png')}/>
              </div>
              <h6 className="equalHeight fontWhite"> Healthcare </h6>
              
            </div>
            <div className="Column fl w33 rowHeight tabw100">
              <div className="ServiceImage">
                <img src={require("../../assets/images/office-block.png")}/>
              </div>
              <h6 className="equalHeight fontWhite"> Commercial </h6>
              
            </div>
            <div className="Column fl w33 rowHeight tabw100">
              <div className="ServiceImage">
                <img src={require("../../assets/images/crane.png")}/>
              </div>
              <h6 className="equalHeight fontWhite"> Infrastructure </h6>
              
            </div>
          </div>
          <div className="p40-0 text-center fontWhite">
          <p>We are all prepared to serve our clients with our security guards who are well-knowledged of using medical 
            equipment and equipped with security weapons to control emergency situations. 
            Their experience of working gives us the power to provide the best service.</p>
            </div>
          
        </div>
      </section>


      {/* <!-- 4 column Section--> */}
      {/* <!-- <section className="fourColumnSection p100-0 greyBg forUp">
        <div className="wrapper">
          <div className=" text-center pb50 light wow fadeInDown">
            <h3 >What makes working with PLS the best choice?</h3>
            <div className="forAltWidth pt10">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>

          <div className="fourColumnParent clearfix">
            <div className="imgColumn fl w25 tabw50">
              <div className="imagColumnInner equalHeight">
                <div className="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
                </div>
                <div className="imgColumnContent">
                  <div className="ServiceTitle">
                    <a href="#">
                      <h6>Laundry rooms for Mullti-family/apartment</h6>
                    </a>
                  </div>
                  <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
                </div>
              </div>
            </div>
            <div className="imgColumn fl w25 tabw50">
              <div className="imagColumnInner equalHeight">
                <div className="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
                </div>
                <div className="imgColumnContent">
                  <div className="ServiceTitle">
                    <a href="#">
                      <h6>Laundry rooms for Mullti-family/apartment</h6>
                    </a>
                  </div>
                  <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
                </div>
              </div>
            </div>
            <div className="imgColumn fl w25 tabw50">
              <div className="imagColumnInner equalHeight">
                <div className="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
                </div>
                <div className="imgColumnContent">
                  <div className="ServiceTitle">
                    <a href="#">
                      <h6>Laundry rooms for Mullti-family/apartment</h6>
                    </a>
                  </div>
                  <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
                </div>
              </div>
            </div>
            <div className="imgColumn fl w25 tabw50">
              <div className="imagColumnInner equalHeight">
                <div className="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
                </div>
                <div className="imgColumnContent">
                  <div className="ServiceTitle">
                    <a href="#">
                      <h6>Laundry rooms for Mullti-family/apartment</h6>
                    </a>
                  </div>
                  <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> --> */}

      {/* //? Suggetion :: Need to Bigger the view or add an image to make it more attractive */}
      {/* <!-- 1  coloumn  Section--> */}
      <section id="contact_us" className="oneColumnSection p100-0 forUp">
        <div className="wrapper">
          <div className="text-center wow fadeInDown">
            <h3>Let's Chat</h3>
            <div className="p40-0 forSmallWidth light">
              {/* //TODO :: Add content in the P tag */}
              <p>Interested for our services? Explore our plans and services. Adjust your requirements and get a ballpark quote of our services.</p>
            </div>
            <div className="button">
              <a href="/request">Request a Quote</a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;