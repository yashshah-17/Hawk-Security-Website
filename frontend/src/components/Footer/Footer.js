import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <footer className="footerSection">
            //     <div className="footerTop p70-0 ">
            //         <div className="wrapper">
            //             <div className="clearfix noListStyle fortopInner">            
            //                 <div className="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
            //                     <h6 className="titleHeight">Main Content</h6>
            //                     <ul>
            //                         <li><a href="javascript:void(0)">Home</a></li>
            //                         <li><a href="javascript:void(0)">Services</a></li>
            //                         <li><a href="javascript:void(0)">Contact Us</a></li>
            //                         <li><a href="javascript:void(0)">Privacy Policy</a></li>
            //                     </ul>
            //                 </div>
                            
            //                 <div className="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
            //                     <h6 className="titleHeight">Connect with us</h6>
            //                     <ul>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-google-plus"></i>Google</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i>Twitter</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i>Facebook</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i>Linkdin</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-pinterest"></i>Pintrest</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i>instagram</a></li>
            //                     </ul>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="footerBottom p20-0 text-center">
            //         <div className="wrapper">
            //         <p> &copy; 2020 Hawk Security. All rights has been reserved.</p>
            //         </div>
            //     </div>
            // </footer>

            // <!-- Footer -->
            <footer className="page-footer font-small unique-color-dark">

                <div>  
                    <div className="container">

                    {/* <!-- Grid row--> */}
                    <div className="row py-4 d-flex align-items-center">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                            {/* <!-- Facebook --> */}
                            <a className="fb-ic">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            {/* <!-- Twitter --> */}
                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            {/* <!-- Google +--> */}
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            {/* <!--Linkedin --> */}
                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            {/* <!--Instagram--> */}
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                            </a>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row--> */}

                    </div>
                </div>

                {/* <!-- Footer Links --> */}
                <div className="container text-center text-md-left mt-5">

                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase font-weight-bold">Hawk Security</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            {/* //TODO :: Fill proper content in the p tag */}
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                            <a href="#!">Home</a>
                            </p>
                            <p>
                            <a href="#!">Login</a>
                            </p>
                            <p>
                            <a href="#!">Contact Us</a>
                            </p>
                            <p>
                            <a href="#!">Privacy Policy</a>
                            </p>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase font-weight-bold">Services</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                                <a href="#!">Healthcare</a>
                            </p>
                            <p>
                                <a href="#!">Commercial</a>
                            </p>
                            <p>
                                <a href="#!">Infrastructure</a>
                            </p>
                            <p>
                                <a href="#!">Industrial</a>
                            </p>

                        </div>
                        {/* <!-- Grid column --> */}

                        

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                 
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    {/* //TODO :: Add the hyperlink of the application. */}
                    <a href="https://mdbootstrap.com/"> <u>Hawk Security</u></a>
                    . All rights has been reserved.
                </div>
                {/* <!-- Copyright --> */}

            {/* <!-- Footer --> */}
            </footer>
        );
    }
}

export default Footer;