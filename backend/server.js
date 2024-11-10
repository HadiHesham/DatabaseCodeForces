const express = require('express');
const { json } = require('express');
const cors = require('cors'); // Changed to require syntax

const app = express();
const port = 6500;

// Middleware
app.use(cors());
app.use(json());

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'codeforcess.c94s6ym8gr3r.us-east-1.rds.amazonaws.com',
    user: 'hadi',
    password: 'Dodo1977',
    database: 'ProgContests',
    waitForConnections: true,
    connectionLimit: 10,
    connectTimeout: 429296729,
    queueLimit: 0
});

// API endpoint to get data
app.get('/api/Q5', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
            SELECT Screen_Name, Days_In_Row
            FROM Contestant
            GROUP BY Screen_Name 
            ORDER BY Days_In_Row DESC
            LIMIT 10
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q52', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
            SELECT Screen_Name, Number_Of_Problems_Solved 
            FROM Contestant
            GROUP BY Screen_Name 
            ORDER BY Number_Of_Problems_Solved DESC
            LIMIT 10
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
app.get('/api/Q6', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT Contestant.Screen_Name, SUM(ContestantContest.Score) AS TotalScore
        FROM Contestant
        INNER JOIN ContestantContest ON Contestant.Screen_Name = ContestantContest.Screen_Name
        GROUP BY Contestant.Screen_Name
        ORDER BY TotalScore DESC
        LIMIT 10;        
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


app.get('/api/Q8', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT main.Screen_Name, main.ParticipationFrequency
        FROM (
            SELECT Contestant.Screen_Name, COUNT(ContestantContest.Contest_Name) / Contestant.Regestiration_Duration AS ParticipationFrequency
            FROM Contestant
            INNER JOIN ContestantContest ON Contestant.Screen_Name = ContestantContest.Screen_Name
            GROUP BY Contestant.Screen_Name
        ) AS main
        ORDER BY main.ParticipationFrequency DESC
        LIMIT 5;
        
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q7', async (req, res) => {
    try {
        const country = req.query.country || 'Egypt'; // Get country from query parameter
        const [rows, fields] = await pool.query(`
        SELECT main.Organization, main.Avg_Standing
FROM (
    SELECT Contestant.Organization, ROUND(AVG(ContestantContest.Final_Standing)) as Avg_Standing
    FROM Contestant
    INNER JOIN ContestantContest ON Contestant.Screen_Name = ContestantContest.Screen_Name
    WHERE Contestant.Contestant_Country = '${country}' AND Contestant.Organization != ''
    GROUP BY Contestant.Organization
) AS main
ORDER BY main.Avg_Standing ASC
LIMIT 5;
`); // Use parameterized query to avoid SQL injection

        res.json(rows); // Send the results as a JSON response
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
app.get('/api/Q1', async (req, res) => {
    try {
        const  screenname  = req.query.screenname; // Get screenname from query parameter
        if(screenname){
        const [rows] = await pool.query(
            `SELECT DISTINCT Screen_Name, Problem_Set_Name FROM Attempt WHERE Screen_Name = '${screenname}'`, 
        );
        res.json(rows); // Send the results as a JSON response
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
app.get('/api/Q2', async (req, res) => {
    try {
        const writer = req.query.writer; // Get screenname from query parameter
        if (writer) {
            const [rows] = await pool.query(
                `SELECT Contest_Name FROM ContestsWriters WHERE Writers = '${writer}'` 
            );
            res.json(rows); // Send the results as a JSON response
        } else {
            res.status(400).send('Writer parameter is required'); // Handle missing writer
        }
    } catch (error) {
        console.error('Error fetching contests:', error);
        res.status(500).send('Server error');
    }
});
app.get('/api/Q3', async (req, res) => {
    try {
        const problem = req.query.problem; // Get screenname from query parameter
        if (problem) {
            const [rows] = await pool.query(
                `SELECT Problem_Set_Name FROM Problem_SetsTags WHERE Tags =  '${problem}'` 
            );
            res.json(rows); // Send the results as a JSON response
        } else {
            res.status(400).send('Writer parameter is required'); // Handle missing writer
        }
    } catch (error) {
        console.error('Error fetching contests:', error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q1Contests', async (req, res) => {
    try {
        const  screenname  = req.query.screenname; // Get screenname from query parameter
        if(screenname){
        const [rows] = await pool.query(
            `SELECT DISTINCT Contest_Name FROM ContestantContest WHERE Screen_Name = '${screenname}'`, 
        );
        res.json(rows); // Send the results as a JSON response
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q9', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT main.Screen_Name, main.Organization, main.AVG_Standing
FROM (
    SELECT 
        Contestant.Screen_Name, 
        Contestant.Organization, 
        AVG(ContestantContest.Final_Standing) AS AVG_Standing
    FROM 
        Contestant
    INNER JOIN 
        ContestantContest ON Contestant.Screen_Name = ContestantContest.Screen_Name
    WHERE 
        Contestant.Organization LIKE '%American University in Cairo%'
    GROUP BY 
        Contestant.Screen_Name, Contestant.Organization
) AS main
ORDER BY 
    main.AVG_Standing ASC
LIMIT 10;

        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q10', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT Problem_Set_Name, COUNT(*) AS AttemptCount FROM Attempt INNER JOIN Contestant ON Contestant.Screen_Name = Attempt.Screen_Name WHERE Contestant_Country = 'Egypt' GROUP BY Problem_Set_Name ORDER BY AttemptCount DESC LIMIT 5;
        `);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/api/Q4', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT Language_Used, AVG(Attempt_Memory) AS AvgMemoryUsage
FROM (
    SELECT Language_Used, Attempt_Memory
    FROM Attempt
    WHERE Attempt_Memory > 0 AND Verdict = 'OK'
) AS FilteredAttempts
GROUP BY Language_Used
ORDER BY AvgMemoryUsage ASC
LIMIT 5;
`);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
app.get('/api/Q42', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
        SELECT Language_Used, AVG(Attempt_Time) AS AvgExecutionTime
FROM (
    SELECT Language_Used, Attempt_Time
    FROM Attempt
    WHERE Attempt_Time > 0 AND Verdict = 'OK'
) AS FilteredAttempts
GROUP BY Language_Used
ORDER BY AvgExecutionTime ASC
LIMIT 5;
`);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
