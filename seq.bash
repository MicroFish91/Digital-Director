# sequelize model:generate --name student \
# --attributes firstName:string,lastName:string,phoneNumber:string,email:string,address:string,uniformSize:string,instrument:string

# sequelize model:generate --name group \
# --attributes name:string,teacher:string,meetingRoom:string,meetingDates:string,meetingTime:string,description:string

sequelize model:generate --name student_group \
--attributes student_id:integer,group_id:integer