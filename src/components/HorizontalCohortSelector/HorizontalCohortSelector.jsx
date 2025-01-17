import React, { useState, useEffect } from 'react';
import "./HorizontalCohortSelector.css"
import { Link } from "react-router-dom"

import { fetchCohort4 } from "../CalendarV2/CalendarDataV2"
import { fetchCohort5 } from "../CalendarV2/CalendarDataV2"
import { fetchCohort6 } from "../CalendarV2/CalendarDataV2"

export default function HorizontalCohortSelector() {
    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [events1, setEvents1] = useState([]);
    const [events2, setEvents2] = useState([]);
    const [events3, setEvents3] = useState([]);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadEvents = async () => {
            const fetchedData1 = await fetchCohort4(); // <--------- UPDATE
            const fetchedData2 = await fetchCohort5(); // <--------- UPDATE
            const fetchedData3 = await fetchCohort6(); // <--------- UPDATE
            // Sort events by week number in ascending order
            const sortedEvents1 = fetchedData1.sort((a, b) => a.week - b.week);
            const sortedEvents2 = fetchedData2.sort((a, b) => a.week - b.week);
            const sortedEvents3 = fetchedData3.sort((a, b) => a.week - b.week);
            setEvents1(sortedEvents1);
            setEvents2(sortedEvents2);
            setEvents3(sortedEvents3);
        };
        loadEvents();
        }, []);



    return (

        <div className="horizontalCohortSelector">

            <div className="horizontalCohortSelector-container">
            <span><b>{isMobile ? "Next Cohorts" : "Check Out Our Upcoming Cohorts"}:</b></span>
                <div className="cohort-1-container">

                    {/* FIRST COHORT START */}
                    {/* <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                        <p><b>{events1[0]?.start} – {events1[3]?.end}</b></p>
                            <Link to="/cohort4-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort4" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div> */}
                    {/* FIRST COHORT END */}


                    {/* SECOND COHORT START */}
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                        <p><b>{events2[0]?.start} – {events2[3]?.end}</b></p>
                            <Link to="/cohort5-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort5" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>
                    {/* SECOND COHORT END */}


                    {/* THIRD COHORT START */}
                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
                        <p><b>{events3[0]?.start} – {events3[3]?.end}</b></p>
                            <Link to="/cohort6-schedule">See Schedule</Link>
                        </div>
                        <button className="btn-shadow">
                            <Link to="/cohort6" className="cohortSelector-button-link">Join Cohort</Link>
                        </button>
                    </div>
                    {/* THIRD COHORT END */}



                </div>
            </div>
            {/* <Link to="/teams">Explore private team courses</Link> */}
        </div>

    )
}