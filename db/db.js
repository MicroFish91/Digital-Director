let db = require('../models')


// populate db for testing
db.student.create({teacherId:'106412504544458970400',  firstName: 'Jenny', lastName: 'Doe', phoneNumber: '5419900760', email: 'tracy@gmail.com', parentname1: 'John Smith', parentPhoneNumber: '8322917066', parentEmail: 'coolGuy2013@gmail.com', address: '1234 Westheimer Pkwy', uniformSize: 'm', instrument: 'tuba'});
db.student.create({teacherId:'106412504544458970400', firstName: 'Paula', lastName: 'Doe', phoneNumber: '5419900760', email: 'tracy@gmail.com', address: '1234 Westheimer Pkwy', uniformSize: 'm', instrument: 'tuba'});
// db.group.create({name: 'Percussion', teacher: 'Eric', meetingRoom: 'N232', meetingDates: 'MWF', meetingTime: '3:00', description: 'The full band'});
// db.group.create({name: 'Flutes', teacher: 'Eric', meetingRoom: 'N232', meetingDates: 'MWF', meetingTime: '3:00', description: 'The full band'});
// db.sequelize.query('INSERT INTO studentgroups VALUES(DEFAULT, CURRENT_TIMESTAMP , CURRENT_TIMESTAMP, 1, 2)');
// db.studentGroup.create({studentId: 2, groupId: 1});