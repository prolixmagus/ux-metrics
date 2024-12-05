import React from "react";
import { Link } from 'react-router-dom';

// This cohort started in OCTOBER and will end in JANUARY

// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import SpiffyCheckout from "../components/SpiffyCheckout/SpiffyCheckout";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort1() {
    return (
        <div id="Cohort1">
            <Navbar />
            <Header />
            < GreenArticle >
                <h1>Join October Cohort</h1>
            </GreenArticle >
            <TestComponent >
                <div className="width-500">
                    <h3><b>Cohort: Nov 5 - Dec 3</b></h3>
                    <h3><b>UPDATE New Start Date For Cohort Previously Starting Oct 29.</b></h3>
                    <h2>Develop your own organization’s Outcome-driven UX Metrics.</h2>
                    <p>Join us to complete your journey with metrics that will <b>drive your organization to deliver better-designed products and services.</b></p>
                    <p>You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.</p>
                </div>
                <div className="test-component-content-container">
                    <img src="./images/11.png" alt="Outcome Driven UX Metrics" />
                    <button className="btn btn-shadow test-component-purchase button cohortSelector-button-link"> <Link to="/cohort1-schedule" className="cohortSelector-button-link">October Schedule</Link></button>
                </div>
            </TestComponent >
            <TestComponent>
                <div className="">

                    <h2>Choose to sign up as an Individual or a Team Member</h2>
                    <p>You’ll get the most out of your course if you come with your team.</p>

                    <p><b>As a team, you’ll develop your Outcome-driven UX Metrics together. </b>You’ll identify the most effective UX metrics to tell your teams’ story. You’ll come away from the course with your own custom approach to UX Metrics that your entire team can use.</p>
                    <p><b>Each team member saves $100 on their registration when they sign up as a team member.</b></p>
                    <p>Each team member must purchase their registration separately.</p>
                    <p>Whichever you choose, team or individual, we’ll give you our full support.</p>
                </div>

                <div className="width-50">
                    <h2>Currently out of work?
                        We’ve got you.</h2>
                    <p><b>We’re offering $199 registrations for our out-of-work colleagues. </b></p>
                    <p>We recognize that there are UX Leaders dedicated to learning and growing who are unfortunately in between jobs right now—we get it. So, if you’re an unemployed, dedicated learner, this special price is for you.  </p>
                    <p>(If you’re fortunate enough to be employed right now, please leave these spots for those who are not currently employed. Don’t be that person. Don’t take the seat of someone who really needs this price.)</p>
                </div>
            </TestComponent >

            <SpiffyCheckout >
                <spiffy-checkout url="https://centercentre.spiffy.co/checkout/ux-metrics-oct" ></spiffy-checkout>
            </SpiffyCheckout>





            < Footer />
        </div >


    )


}