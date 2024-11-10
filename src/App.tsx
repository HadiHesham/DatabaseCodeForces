import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [Writer, setWriter] = useState(false);
  const [Tags, setTags] = useState(false);
  const [openQ5, setOpenQ5] = useState(false);
  const [Q5, setQ5] = useState([]);
  const [Q52, setQ52] = useState([]);
  const [openQ6, setOpenQ6] = useState(false);
  const [Q6, setQ6] = useState([]);
  const [openQ8, setOpenQ8] = useState(false);
  const [Q8, setQ8] = useState([]);
  const [openQ7, setOpenQ7] = useState(false);
  const [Q7, setQ7] = useState([]);
  const [openQ9, setOpenQ9] = useState(false);
  const [Q9, setQ9] = useState([]);
  const [openQ1, setOpenQ1] = useState(false);
  const [Q1, setQ1] = useState([]);
  const [openQ2, setOpenQ2] = useState(false);
  const [Q2, setQ2] = useState([]);
  const [openQ3, setOpenQ3] = useState(false);
  const [Q3, setQ3] = useState([]);
  const [openQ10, setOpenQ10] = useState(false);
  const [Q10, setQ10] = useState([]);
  const [openQ4, setOpenQ4] = useState(false);
  const [Q4, setQ4] = useState([]);
  const [Q42, setQ42] = useState([]);
  const [country, setcountry] = useState("");
  const [screenname, setscreenname] = useState("");
  const fetchQ5 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q5");
      setQ5(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchQ52 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q52");
      setQ52(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ5 = () => {
    fetchQ5();
    fetchQ52();
    setOpenQ5(!openQ5);
  };
  const fetchQ2 = async () => {
    setQ2([]);
    try {
      const response = await axios.get(
        `http://localhost:6500/api/Q2?writer=${Writer}`
      );

      // Check if the response contains data
      if (response && response.data) {
        setQ2(response.data); // Set state with the fetched data
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setQ2([]); // Optionally set Q7 to an empty array on error
    }
  };

  const ShowQ2 = () => {
    openQ2 && fetchQ2();
    setOpenQ2(!openQ2);
  };

  const fetchQ3 = async () => {
    setQ3([]);
    try {
      const response = await axios.get(
        `http://localhost:6500/api/Q3?problem=${Tags}`
      );

      // Check if the response contains data
      if (response && response.data) {
        setQ3(response.data); // Set state with the fetched data
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setQ3([]); // Optionally set Q7 to an empty array on error
    }
  };

  const ShowQ3 = () => {
    openQ3 && fetchQ3();
    setQ3([]);
    setOpenQ3(!openQ3);
  };
  const fetchQ6 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q6");
      setQ6(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ6 = () => {
    fetchQ6();
    setOpenQ6(!openQ6);
  };
  const fetchQ4 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q4");
      setQ4(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchQ42 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q42");
      setQ42(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ4 = () => {
    fetchQ4();
    fetchQ42();
    setOpenQ4(!openQ4);
  };
  const fetchQ8 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q8");
      setQ8(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ8 = () => {
    fetchQ8();
    setOpenQ8(!openQ8);
  };
  const fetchQ10 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q10");
      setQ10(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ10 = () => {
    fetchQ10();
    setOpenQ10(!openQ10);
  };
  const fetchQ9 = async () => {
    try {
      const response = await axios.get("http://localhost:6500/api/Q9");
      setQ9(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const ShowQ9 = () => {
    fetchQ9();
    setOpenQ9(!openQ9);
  };
  const fetchQ7 = async () => {
    setQ7([]);
    try {
      const response = await axios.get(
        `http://localhost:6500/api/Q7?country=${country}`
      );

      // Check if the response contains data
      if (response && response.data) {
        setQ7(response.data); // Set state with the fetched data
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setQ7([]); // Optionally set Q7 to an empty array on error
    }
  };

  const ShowQ7 = () => {
    fetchQ7();
    setOpenQ7(!openQ7);
  };

  const fetchQ1 = async () => {
    setQ1([]);
    try {
      const response = await axios.get(
        `http://localhost:6500/api/Q1?screenname=${screenname}`
      );

      // Check if the response contains data
      if (response && response.data) {
        setQ1(response.data); // Set state with the fetched data
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setQ1([]); // Optionally set Q7 to an empty array on error
    }
  };
  const fetchQ1Contests = async () => {
    setQ1([]);
    try {
      const response = await axios.get(
        `http://localhost:6500/api/Q1Contests?screenname=${screenname}`
      );

      // Check if the response contains data
      if (response && response.data) {
        setQ1(response.data); // Set state with the fetched data
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setQ1([]); // Optionally set Q7 to an empty array on error
    }
  };
  const ShowQ1 = () => {
    openQ1 && fetchQ1();
    setQ1([]);
    setOpenQ1(!openQ1);
  };
  return (
    <div>
      <div style={{ marginLeft: "39vw", fontSize: "60px" }}>CodeForces!</div>
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
          }}
          onClick={ShowQ1}
        >
          Login as one of the site users (only using screen name) and seeing all
          the problems they attempted and the competitions they participated in.
        </button>
      </div>
      {openQ1 && (
        <div
          style={{ marginLeft: "22vw", gap: 10, width: "50vw" }}
          className="Post"
        >
          <div>Contests:</div>
          <input
            style={{ width: "15vw" }}
            type="text"
            placeholder=""
            onChange={(e) => setscreenname(e.target.value)}
          />
          <button onClick={fetchQ1Contests}>Enter</button>
          <div>ProblemSets:</div>
          <input
            style={{ width: "15vw" }}
            type="text"
            placeholder=""
            onChange={(e) => setscreenname(e.target.value)}
          />
          <button onClick={fetchQ1}>Enter</button>
        </div>
      )}
      {openQ1 && Q1.length > 0 && (
        <div>
          {Q1.map((user) => (
            <div key={user.Screen_Name}>
              <div style={{ marginLeft: "40vw", width: 200 }} className="Post">
                {user.Problem_Set_Name}
                {user.Contest_Name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ2}
        >
          Show all the competitions that have a given user as a writer.
        </button>
      </div>
      {openQ2 && (
        <div
          style={{ marginLeft: "22vw", gap: 10, width: "50vw" }}
          className="Post"
        >
          <div>Contests:</div>
          <input
            style={{ width: "15vw" }}
            type="text"
            placeholder=""
            onChange={(e) => setWriter(e.target.value)}
          />
          <button onClick={fetchQ2}>Enter</button>
        </div>
      )}
      {openQ2 && Q2.length > 0 && (
        <div>
          {Q2.map((user) => (
            <div key={user.Screen_Name}>
              <div style={{ marginLeft: "40vw", width: 200 }} className="Post">
                {user.Problem_Set_Name}
                {user.Contest_Name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ3}
        >
          Show all the problem sets for a given tag.
        </button>
      </div>
      {openQ3 && (
        <div
          style={{ marginLeft: "22vw", gap: 10, width: "50vw" }}
          className="Post"
        >
          <div>Tags:</div>
          <input
            style={{ width: "15vw" }}
            type="text"
            placeholder="Tag"
            onChange={(e) => setTags(e.target.value)}
          />
          <button onClick={fetchQ3}>Enter</button>
        </div>
      )}
      {openQ3 && Q3.length > 0 && (
        <div>
          {Q3.map((user) => (
            <div style={{ marginLeft: "40vw", width: 200 }} className="Post">
              {user.Problem_Set_Name}
            </div>
          ))}
        </div>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ4}
        >
          Show the top 5 programming languages used to solve the problem sets by
          speed and by memory efficiency.
        </button>
      </div>
      {openQ4 && (
        <div style={{ display: "flex", marginLeft: "28vw", gap: "2rem" }}>
          {/* Memory List */}
          <ul>
            <div className="Post" style={{ textAlign: "center" }}>
              Memory:
            </div>
            {Q4.map((user) => (
              <div
                key={user.Language_Used}
                style={{ textAlign: "center" }}
                className="Post"
              >
                {user.Language_Used}: {user.AvgMemoryUsage}
              </div>
            ))}
          </ul>

          {/* Time List */}
          <ul>
            <div className="Post" style={{ textAlign: "center" }}>
              Time:
            </div>
            {Q42.map((user) => (
              <div
                key={user.Language_Used}
                style={{ textAlign: "center" }}
                className="Post"
              >
                {user.Language_Used}: {user.AvgExecutionTime}
              </div>
            ))}
          </ul>
          <>Loading Please Wait...</>
        </div>
      )}

      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ5}
        >
          Show the top 10 users by the number of days in a row they spent on the
          site, and by the number of problems solved.
        </button>
      </div>
      {openQ5 && (
        <div style={{ display: "flex", marginLeft: "28vw", gap: "2rem" }}>
          {/* Days in Row List */}
          <ul>
            <div className="Post" style={{ textAlign: "center" }}>
              Days in row:
            </div>
            {Q5.map((user) => (
              <div
                key={user.Screen_Name}
                style={{ textAlign: "center" }}
                className="Post"
              >
                {user.Screen_Name}: {user.Days_In_Row}
              </div>
            ))}
          </ul>

          {/* Number of Problems List */}
          <ul>
            <div className="Post" style={{ textAlign: "center" }}>
              Number of Problems:
            </div>
            {Q52.map((user) => (
              <div
                key={user.Screen_Name}
                style={{ textAlign: "center" }}
                className="Post"
              >
                {user.Screen_Name}: {user.Number_Of_Problems_Solved}
              </div>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ6}
        >
          Show the top 10 users by their total scores in Div. 1 & Div. 2
          contests.
        </button>
      </div>
      {openQ6 && (
        <ul>
          {Q6.map((user) => (
            <div>
              <div style={{ marginLeft: "40vw" }} className="Post">
                {user.Screen_Name}: {user.TotalScore} Points
              </div>
            </div>
          ))}
        </ul>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ7}
        >
          Show the top 5 organizations by the ratings of their users in Div. 1 &
          Div. 2 contests by country.
        </button>
      </div>
      {openQ7 && (
        <div
          style={{ marginLeft: "35vw", gap: 10, width: "20vw" }}
          className="Post"
        >
          <input
            style={{ width: "15vw" }}
            type="text"
            placeholder="Egypt"
            onChange={(e) => setcountry(e.target.value)}
          />
          <button onClick={fetchQ7}>Enter</button>
        </div>
      )}
      {openQ7 && Q7.length > 0 && (
        <div>
          {Q7.map((user) => (
            <div key={user.Organization}>
              <div style={{ marginLeft: "40vw" }} className="Post">
                {user.Organization}: {user.Avg_Standing}
              </div>
            </div>
          ))}
        </div>
      )}
      {Q7.length == 0 && openQ7 && (
        <div style={{ marginLeft: "40vw" }} className="Post">
          The Country Has No Data
        </div>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ8}
        >
          Show the top 5 users by their contest participation frequency relative
          to their registration period.
        </button>
      </div>
      {openQ8 && (
        <ul>
          {Q8.map((user) => (
            <div>
              <div style={{ marginLeft: "40vw" }} className="Post">
                {user.Screen_Name}: {user.ParticipationFrequency}
              </div>
            </div>
          ))}
        </ul>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ9}
        >
          Show the top 10 users from the AUC in terms of their overall rating in
          Div. 1 & Div. 2 contests.
        </button>
      </div>
      {openQ9 && (
        <ul>
          {Q9.map((user) => (
            <div>
              <div style={{ marginLeft: "40vw" }} className="Post">
                {user.Screen_Name}: {user.AVG_Standing}
              </div>
            </div>
          ))}
        </ul>
      )}
      <div style={{ marginLeft: "25vw" }}>
        <button
          style={{
            textAlign: "center",
            width: "50vw",
            backgroundColor: "green",
            marginTop: "10px",
          }}
          onClick={ShowQ10}
        >
          Show the top 5 attempted problem sets by users from Egypt.
        </button>
      </div>
      {openQ10 && (
        <ul>
          <>Loading Please Wait...</>
          {Q10.map((user) => (
            <div>
              <div style={{ marginLeft: "40vw" }} className="Post">
                {user.Problem_Set_Name}: {user.AttemptCount}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
