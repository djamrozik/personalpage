
// global imports
import React, { Component } from "react";
import ReactDOM from "react-dom";

// local imports

class RootComponent extends Component {
  render() {
    return (
     <div className="RootComponent">
         <div className="container-fluid">
            <div className="row">

                <div className="collapse-navbar">
                    <collapse-nav info="vm"></collapse-nav>
                </div>

                <div className="left-column-container">
                    <left-column info="vm"></left-column>
                </div>

                <div className="main-content-container">
                    <div className="main-page">
                        <div className="main-info">
                            <div className="main-banner">
                                <img src="/static/images/rock_skip.jpg" className="img-circle" />
                            </div>
                            <p className="main-info-first-text banner-text">
                                <strong>Welcome to my page!</strong>
                                I'm a passionate web developer and computer science student
                                currently studying at the University of Illinois, Urbana/Champaign.
                                I've been able to work as a web developer with UIUC, DockSocial, Yahoo,
                                and now Justworks. (check out my Linkedin for more info)
                            </p>
                            <p className="banner-text"> Lastly, I am a huge fan of taking on side projects, so please feel free to contact me about any work. Thanks!</p>
                        </div>

                        <div id="projects">
                            <div className="header">
                                <h3>PROJECTS</h3>
                            </div>

                            <div className="projects-list-short">
                                    <div className="projects-list-short-item">
                                            <p className="title">
                                                <a href="http://datalok.co/dashboard.html?searchQuery=chicago">
                                                    datalok.co
                                                </a>
                                            </p>
                                            <p className="description">
                                                Datalok is a website which attempts to make trends about social groups
                                                (facebook groups, subreddits, instagram pages) more human readable.
                                                Built with React on the front-end and AWS Lambda functions
                                                which serve as the back-end.
                                            </p>
                                        </div>
                    <div className="projects-list-short-item">
                      <p className="title">
                        <a href="https://toptracks.me">
                          TopTracks.me
                        </a>
                      </p>
                      <p className="description">
                        Web app which shows spotify listeners their top tracks
                        and artists.
                        Can show that info for the last 4 weeks, last 6 months, or all of
                        that user's history on Spotify.
                        Built with React on the front-end and hosted with S3. Any server
                        needs are handled with Lambda functions on AWS.
                      </p>
                    </div>
                                <div className="projects-list-short-item">
                                    <p className="title">
                                        <a href="https://www.amazon.com/dp/B06XDWHPT6">
                                          Amazon Alexa Bus Tracking Skill
                                      </a>
                                    </p>
                                    <p className="description">
                                        This Alexa skill is specific to the Champaign Urbana bus system.
                                        Helps users by respoding with scheduled buses
                                        for the next 20 minutes on a given stop.
                                        The code for this is open source and available
                                        <a href="https://github.com/djamrozik/Alexa-Bus-Tracker">
                                            here
                                        </a>
                                    </p>
                                </div>
                                <div className="projects-list-short-item">
                                    <p className="title">
                                        <a href="https://www.docksocial.com">
                                            DockSocial
                                      </a>
                                    </p>
                                    <p className="description">
                                        Worked as a mix of a freelancer and a partner on DockSocial. Helped
                                        create the web app by using the MEAN stack. This was a project with only
                                        a few people, so the exposure to the business side helped.
                                    </p>
                                </div>
                                <div className="projects-list-short-item">
                                    <p className="title">
                                        <a href="http://gifmage.com/reverse.html">
                                            Gif Reverser
                                      </a>
                                    </p>
                                    <p className="description">
                                        Simple web app which reverses a gif. The web app takes a gif URL and will
                                        return a new gif which is hosted on gifmage.com
                                    </p>
                                </div>
                                <div className="projects-list-short-item">
                                    <p className="title">
                                        <a href="http://gifmage.com/books/">
                                          Programming Book Recommender (WIP)
                                      </a>
                                    </p>
                                    <p className="description">
                                        As someone who likes to read a lot, even for programming, I like to
                                        recommend books to others here and there. The site is something I am continually
                                        adding to.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="contact">
                            <div className="header new-row">
                                <h3>CONTACT</h3>
                                <p className="contact-info">For contact, feel free to send a message below (or send an email directly to <span>danjamrozik@gmail.com</span>). Thanks!</p>
                            </div>

                            <div className="contact-form">
                                <form action="https://formspree.io/danjamrozik@gmail.com" method="POST">
                                    <div className="form-group">
                                        <label for="inputEmail">Your Email Address</label>
                                        <input type="email"
                                    ng-model="vm.message.email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="your email"
                                    name="email"
                                    required
                            />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputTopic">Message Topic</label>
                                        <input type="text"
                                    className="form-control"
                                    ng-model="vm.message.topic"
                                    id="inputTopic"
                                    placeholder="message topic"
                                    name="subject"
                            />
                                    </div>
                                    <div className="form-group">
                                        <label for="textareaMessage">Message</label>
                                        <textarea className="form-control"
                                    ng-model="vm.message.message"
                                    id="textareaMessage"
                                    cols="30" rows="5"
                                    name="message"
                                    required>
                        </textarea>
                                    </div>
                                    <div className="button-container">
                                        <button type="submit" className="btn btn-info">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<RootComponent />, document.getElementById('react-root'));
