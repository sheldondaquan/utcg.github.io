import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MailingListForm from "../components/custom/MailingListForm";
import { MDBIcon } from 'mdb-react-ui-kit'

export class Contact extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="shape1">
                        <img src="/images/shapes/cube_corner.png" alt="shape"/>
                    </div>
                    <div className="shape2">
                        <img src="/images/shapes/corner_top_rt.png" alt="shape"/>
                    </div>
                    <div className="shape3">
                        <img src="/images/shapes/corner_bot_left.png" alt="shape"/>
                    </div>
                </div>

                <section className="contact-info-area pt-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Email Us</h3>
                                    <p><a href="#">utcomputergraphics@gmail.com</a></p>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-facebook"></i>
                                    </div>
                                    <h3>Visit Facebook page</h3>
                                    <a href="https://www.facebook.com/UTComputerGraphics">Our Facebook</a>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <MDBIcon fab icon="discord" size="2x"/>
                                    </div>
                                    <h3>Join our Discord!</h3>
                                    <a href="https://discord.gg/TjjDYRT6Rz">Invite Link</a>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Join Mailing List</h3>
                                    <a href="http://eepurl.com/dGyWHr">Join now!</a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-instagram"></i>
                                    </div>
                                    <h3>Follow our Instagram</h3>
                                    <a href="https://instagram.com/utcomputergraphics">@UTComputerGraphics</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area ptb-120">
                    <MailingListForm/>
                </section>

                <Footer/>
            </>
        );
    }
}

export default Contact;
