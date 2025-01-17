import React, { useState, useEffect } from 'react';
import "./VerticalCohortSelector.css"
import { Link } from "react-router-dom"

import { fetchCohort4 } from "../CalendarV2/CalendarDataV2"
import { fetchCohort5 } from "../CalendarV2/CalendarDataV2"
import { fetchCohort6 } from "../CalendarV2/CalendarDataV2"


export default function VerticalCohortSelector() {
    
    const [events1, setEvents1] = useState([]);
    const [events2, setEvents2] = useState([]);
    const [events3, setEvents3] = useState([]);


    // IF YOU ARE NOT MAPPING, YOU NEED A NULL OPERATOR OTHERWISE THE PAGE CRASHES
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

        <div className="verticalCohortSelector">
            <img src="./images/11.png" alt="Outcome-Driven UX Metrics" className="cohortSelector-image" />
            <span>Next Cohorts:</span>
            <div>

                {/* FIRST COHORT START */}
                {/* <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{events1[0]?.start} – {events1[3]?.end}</b></p>
                        <Link to="/cohort4-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort4" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div> */}
                {/* FIRST COHORT END */}


                {/* SECOND COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{events2[0]?.start} – {events2[3]?.end}</b></p>
                        <Link to="/cohort5-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort5" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* SECOND COHORT END */}


                {/* THIRD COHORT START */}
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{events3[0]?.start} – {events3[3]?.end}</b></p>
                        <Link to="/cohort6-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/cohort6" className="cohortSelector-button-link">Join Cohort</Link></button>
                </div>
                {/* THIRD COHORT END */}




            </div>
            <span className="mt-2">8 or more team members?</span>
            <br />
            <Link to="/teams">Explore private team courses</Link>
        </div>

    )
}