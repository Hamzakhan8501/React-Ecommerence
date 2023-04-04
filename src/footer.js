import React from "react";
import { ReactDOM } from "react";


export default function Footer() {
    return (
        <div>
            <footer>
            <div className="footer-wrappr " data-background="assets/img/gallery/footer-bg.png">
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo mb-25">
                                        {/* <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a> */}
                                    </div>
                                    <div className="footer-tittle mb-50">
                                        <p>Subscribe our newsletter to get updates about our services</p>
                                    </div>
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form method="get" className="subscribe_form relative mail_part" novalidate="true">
                                                <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                        Subscribe
                                                    </button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer-social mt-50">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Company</h4>
                                        <h6>Why choose us</h6>
                                        <h6>Review</h6>
                                        <h6>Customers</h6>
                                        <h6>Blog</h6>
                                        <h6>Carrier</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Products</h4>
                                        <h6>Why choose us</h6>
                                        <h6>Review</h6>
                                        <h6>Customers</h6>
                                        <h6>Blog</h6>
                                        <h6>Carrier</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <h6>Why choose us</h6>
                                        <h6>Review</h6>
                                        <h6>Customers</h6>
                                        <h6>Blog</h6>
                                        <h6>Carrier</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">
                                        <p>
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made by Hamza khan
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer></div>
    )
}