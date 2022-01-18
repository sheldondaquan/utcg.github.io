import React, { Component } from 'react';

export class Team extends Component {
    render() {
        return (
            <section className="team-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">Team Members</span>
                        <h2 className="wow fadeInDown">Meet UTCG's Executive Team</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src="/images/team-image/2021-team-images/rikin.png" className="member-img" alt="team" />
                                    <img src="/images/team-image/team-back.jpg" className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="https://rikingurditta.github.io"><i className="icofont-home"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/rikin-gurditta"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="https://github.com/rikingurditta"><i className="icofont-github"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Rikin Gurditta</h3>
                                    <span>Co-President</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/chanz.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Chanz Valmonte</h3>
                                    <span>Co-President</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/patsy.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Patsy Jian</h3>
                                    <span>VP Internal</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/louis.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Louis Zhang</h3>
                                    <span>VP External</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/team-image/2021-team-images/charlie.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Charlie Morocz</h3>
                                    <span>First Year Representative</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/team-image/2.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Doris Ni</h3>
                                    <span>Marketing Director</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={"/images/team-image/2021-team-images/kurtis.jpg"} className="member-img" alt="team" />
                                    <img src={"/images/team-image/team-back.jpg"} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Kurtis Law</h3>
                                    <span>General Executive Member</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src="/images/team-image/2021-team-images/edith.jpg" className="member-img" alt="team" />
                                    <img src="/images/team-image/team-back.jpg" className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Edith Jan</h3>
                                    <span>General Executive Member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src="/images/circle-shape.png" alt="circle" />
                </div>
                <div className="shape2">
                    <img src="/images/shapes/2.png" alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src="/images/shapes/10.png" alt="shape" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src="/images/circle-shape.png" alt="circle" />
                </div>
                <div className="shape6">
                    <img src="/images/shapes/6.png" alt="shape" />
                </div>
            </section>
        );
    }
}

export default Team;
