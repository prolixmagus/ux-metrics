import React, { useState, useEffect } from 'react';
import "./HorizontalCohortSelector.css"
import { Link } from "react-router-dom"
// import { COHORT_DATE_RANGE_OCTOBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_NOVEMBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_DECEMBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_JANUARY } from '../Calendar/CalendarData'

export default function HorizontalCohortSelector() {

    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        <div className="horizontalCohortSelector">

            <div className="horizontalCohortSelector-container">
            <span><b>{isMobile ? "Next Cohorts" : "Check Out Our Upcoming Cohorts"}:</b></span>

                <div className="cohort-1-container">
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_NOVEMBER[0].start} - {COHORT_DATE_RANGE_NOVEMBER[0].end}
                            </b></p>
                            <Link to="/novemberschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/november" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_DECEMBER[0].start} - {COHORT_DATE_RANGE_DECEMBER[0].end}
                            </b></p>
                            <Link to="/decemberschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/december" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                            <p><b>
                            {COHORT_DATE_RANGE_JANUARY[0].start} - {COHORT_DATE_RANGE_JANUARY[0].end}
                            </b></p>
                            <Link to="/januaryschedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/january" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>

                </div>
            </div>
            {/* <Link to="/teams">Explore private team courses</Link> */}
        </div>

    )
}