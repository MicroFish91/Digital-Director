# sequelize model:generate --name student \
# --attributes firstName:string,lastName:string,phoneNumber:string,email:string,address:string,uniformSize:string,instrument:string

# sequelize model:generate --name group \
# --attributes name:string,teacher:string,meetingRoom:string,meetingDates:string,meetingTime:string,description:string

# sequelize model:generate --name student_group \
# --attributes student_id:integer,group_id:integer

# sequelize model:generate --name uniforms \
# --attributes student_id:integer,type:string,pant_size:string,jacket_size:string,dress_size:string

# sequelize model:generate --name instruments \
# --attributes student_id:integer,instrument_type:string,instrument:string,brand:string,model_number:string,serial_number:string,year_purchased:integer,condition:string,cost:integer,current_est_value:integer

#sequelize model:generate --name studentGroup \
#--attributes student_id:integer,group_id:integer

#sequelize model:generate --name events \
#--attributes title:string,location:string,description:string,startDate:date,endDate:date

# sequelize model:generate --name studentGroup \
# --attributes student_id:integer,group_id:integer
#sequelize migration:create --name eventGroupIdColAdd

#sequelize model:generate --name eventGroup \
#--attributes group_id:integer,event_id:integer

#sequelize migration:create --name eventGroupAddColOne

#sequelize migration:create --name eventGroupAddColTwo

# sequelize model:generate --name teacher \
# --attributes displayName:string,email:string

sequelize migration:create --name uniformsAddCol
