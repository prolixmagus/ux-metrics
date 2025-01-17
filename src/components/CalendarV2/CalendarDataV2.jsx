import axios from 'axios';

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appcgw78ivd84I8iC/tblIp6K3y5WInuAoR/viwISFvh98JdPpjo9?blocks=hide

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;

//// EXAMPLE ////

/// COHORT # START ///
/// COHORT # START ///
/// COHORT # START ///

// const TABLE_ID_COHORT# = process.env.REACT_APP_TABLE_ID_COHORT#;

// export const COHORT#_DATE_RANGE = [
//   {
//     start: `MONTH DAY`,
//     end: `MONTH DAY`,
//   }
// ]

// export const fetchCohort# = async () => {    <------ UPDATE
//   const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT#}`; <----- UPDATE
//   const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data.records.map(record => ({
//       week: record.fields.Week,

//       name1: record.fields.Name1,
//       timeLecture1: record.fields.TimeLecture1,
//       timeCoaching1: record.fields.TimeCoaching1,
//       rich1: record.fields.RichText1,

//       name2: record.fields.Name2,
//       timeLecture2: record.fields.TimeLecture2,
//       timeCoaching2: record.fields.TimeCoaching2,
//       rich2: record.fields.RichText2,
      
//     }));
//   } catch (error) {
//     console.error('Error fetching data from Airtable', error);
//     return [];
//   }
// };


/// COHORT # END ///
/// COHORT # END ///
/// COHORT # END ///



/// COHORT 6 START ///
/// COHORT 6 START ///
/// COHORT 6 START ///

const TABLE_ID_COHORT6 = process.env.REACT_APP_TABLE_ID_COHORT6;

export const COHORT6_DATE_RANGE = [
  {
    start: `Mar 3`,
    end: `Mar 26`,
  }
]

export const fetchCohort6 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT6}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,
      start: record.fields.CohortOutput1,
      end: record.fields.CohortOutput2,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};


/// COHORT 6 END ///
/// COHORT 6 END ///
/// COHORT 6 END ///







/// COHORT 5 START ///
/// COHORT 5 START ///
/// COHORT 5 START ///

const TABLE_ID_COHORT5 = process.env.REACT_APP_TABLE_ID_COHORT5;

export const COHORT5_DATE_RANGE = [
  {
    start: `Feb 18`,
    end: `Mar 13`,
  }
]

export const fetchCohort5 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT5}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,
      start: record.fields.CohortOutput1,
      end: record.fields.CohortOutput2,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};


/// COHORT 5 END ///
/// COHORT 5 END ///
/// COHORT 5 END ///






/// COHORT 4 START ///
/// COHORT 4 START ///
/// COHORT 4 START ///

const TABLE_ID_COHORT4 = process.env.REACT_APP_TABLE_ID_COHORT4;

export const COHORT4_DATE_RANGE = [
  {
    start: `Jan 13`,
    end: `Feb 5`,
  }
]

export const fetchCohort4 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT4}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,
      start: record.fields.CohortOutput1,
      end: record.fields.CohortOutput2,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 4 END ///
/// COHORT 4 END ///
/// COHORT 4 END ///








/// COHORT 3 START ///
/// COHORT 3 START ///
/// COHORT 3 START ///

const TABLE_ID_COHORT3 = process.env.REACT_APP_TABLE_ID_COHORT3;

export const COHORT3_DATE_RANGE = [
  {
    start: `Dec 10`,
    end: `Jan 17`,
  }
]

export const fetchCohort3 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT3}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 3 END ///
/// COHORT 3 END ///
/// COHORT 3 END ///








/// COHORT 2 START ///
/// COHORT 2 START ///
/// COHORT 2 START ///

const TABLE_ID_COHORT2 = process.env.REACT_APP_TABLE_ID_COHORT2;

export const COHORT2_DATE_RANGE = [
  {
    start: `Nov 18`,
    end: `Dec 19`,
  }
]

export const fetchCohort2 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT2}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 2 END ///
/// COHORT 2 END ///
/// COHORT 2 END ///







/// COHORT 1 START ///
/// COHORT 1 START ///
/// COHORT 1 START ///

const TABLE_ID_OCTOBER = process.env.REACT_APP_TABLE_ID_OCTOBER;

export const COHORT_DATE_RANGE_OCTOBER = [
  {
    start: `Nov 5`,
    end: `Dec 3`,
  }
]

export const fetchOctober = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_OCTOBER}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

/// COHORT 1 END ///
/// COHORT 1 END ///
/// COHORT 1 END ///




/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///

export const formatToLocalTime = (dateString, includeTimezone = true, timezone = null) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  // Use the local timezone if no timezone is provided
  const localTimezone = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; // Fallback to UTC if no timezone is detected

  let formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: localTimezone, // Use local or passed timezone
    timeZoneName: includeTimezone ? 'short' : undefined
  }).format(date);

  // Remove the first space before AM/PM and make it lowercase
  formattedTime = formattedTime.replace(/ (\wM)/, match => match.toLowerCase().trim());

  // Remove minutes if they are ":00"
  formattedTime = formattedTime.replace(/(:00)/, '');

  return formattedTime;
};


export const timezones = [
  "UTC",
  "America/New_York", // EST
  "America/Los_Angeles", // PST
  "America/Chicago", // CST
  "America/Denver", // MST
  "America/Anchorage", // AKST
  "Europe/London", // GMT
  "Europe/Paris", // CET
  "Europe/Moscow", // MSK
  "Europe/Istanbul", // TRT
  "Africa/Cairo", // EET
  "Africa/Johannesburg", // SAST
  "Asia/Tokyo", // JST
  "Asia/Shanghai", // CST
  "Asia/Taipei", // HKT
  "Asia/Seoul", // KST
  "Asia/Jakarta", // Indonesia ST
  "Asia/Kolkata", // IST
  "Asia/Yerevan", // Armenia ST
  "Asia/Dubai", // GST
  "Australia/Melbourne", // AEDT
  "Pacific/Auckland", // NZDT
  "Pacific/Fiji", // FJT
  "Pacific/Honolulu" // HST
];


export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
  return (
    <select 
      value={selectedTimezone} 
      onChange={(e) => setSelectedTimezone(e.target.value)}
    >
      {timezones.map((tz) => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///