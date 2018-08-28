let express = require('express');
let app = express();
let db = require('./models');

//populate db for testing
// db.student.create({firstName: 'Tony', lastName: 'Doe', phoneNumber: '5419900760', email: 'tracy@gmail.com', address: '1234 Westheimer Pkwy', uniformSize: 'm', instrument: 'tuba'});
// db.student.create({firstName: 'Levi', lastName: 'Doe', phoneNumber: '5419900760', email: 'tracy@gmail.com', address: '1234 Westheimer Pkwy', uniformSize: 'm', instrument: 'tuba'});
// db.group.create({name: 'Percussion', teacher: 'Eric', meetingRoom: 'N232', meetingDates: 'MWF', meetingTime: '3:00', description: 'The full band'});
// db.group.create({name: 'Flutes', teacher: 'Eric', meetingRoom: 'N232', meetingDates: 'MWF', meetingTime: '3:00', description: 'The full band'});
db.sequelize.query('INSERT INTO studentGroups VALUES(DEFAULT, DEFAULT, DEFAULT, 1, 2)');
    
// db.studentGroup.create({studentId: 2, groupId: 1});




app.get("/", (req, res) => {
    res.send("Hello Band Teachers");
})

// app.listen(3000, () => {
//     console.log("Listening on port 3000")
// });