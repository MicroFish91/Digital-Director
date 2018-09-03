
db = require('../models');

// db.student.create({firstName:'Matt', lastName:'Fisher', phoneNumber:'3083334456', email:'blah@blah.com', parentname1:'Janet', parentname2:'Bill' ,parentPhoneNumber: '204937', parentEmail:'sg@sdfg.com', address:'33 blah lane', uniformSize:'L', instrument:'percussion', teacherId:'1'});

// db.student.create({firstName:'Joe', lastName:'Bob', phoneNumber:'3068523456', email:'blah@blah.com', parentname1:'Janet', parentname2:'Bill' ,parentPhoneNumber: '204-37', parentEmail:'sg@sdfg.com', address:'33 blah lane', uniformSize:'L', instrument:'percussion', });

// db.student.create({firstName:'Jill', lastName:'Heath', phoneNumber:'3068523456', email:'blah@blah.com', parentname1:'Janet', parentname2:'Bill' ,parentPhoneNumber: '204-37', parentEmail:'sg@sdfg.com', address:'33 blah lane', uniformSize:'L', instrument:'percussion'});

// db.student.create({firstName:'Jillian', lastName:'Heath', phoneNumber:'3068523456', email:'blah@blah.com', parentname1:'Janet', parentname2:'Bill' ,parentPhoneNumber: '204-37', parentEmail:'sg@sdfg.com', address:'33 blah lane', uniformSize:'L', instrument:'percussion'});

db.instruments.create({studentId: 1, instrument_type:'percussion', instrument:'Triangle', brand:'Grover', model_number:'L45', serial_number:'' ,year_purchased: '1903', condition:'pure shit', cost:'400', current_est_value:'0'});

db.instruments.create({studentId: 2, instrument_type:'percussion', instrument:'frame drum', brand:'Grover', model_number:'666', serial_number:'666' ,year_purchased: '1903', condition:'pure shit', cost:'400', current_est_value:'0'});

db.instruments.create({studentId: 1, instrument_type:'percussion', instrument:'snare drum', brand:'Grover', model_number:'666', serial_number:'666' ,year_purchased: '1903', condition:'pure shit', cost:'400', current_est_value:'0'});

db.uniforms.create({studentId: 2, type:'percussion', pant_size:'snare drum', jacket_size:'Grover', dress_size:'666', name:'666'});

db.uniforms.create({studentId: 1, type:'percuon', pant_size:'snarerum', jacket_size:'Grover', dress_size:'666', name:'666'});
db.uniforms.create({studentId: 1, type:'percuon', pant_size:'snarerum', jacket_size:'Grover', dress_size:'666', name:'666'});

