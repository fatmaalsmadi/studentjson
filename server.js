const express = require('express')
const app = express()
const port = 4000
let pagesize = 5;

const fs = require('fs');
let Student;
let FileName = 'student.json';
fs.readFile(FileName, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
      
        Student = JSON.parse(data);
        console.log(Student);
    }
});
app.get("/Student", (req, res) => {
    let page = req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    start = (page-1) * pagesize;
    end = start + pagesize;
    res.send(Student.slice(start, end));
});
app.listen(port);