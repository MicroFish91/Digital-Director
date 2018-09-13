# Digital Director

Digital Director is a light-weight, full stack web application built to help teachers manage their after school programs.  The application connects a back-end server and database to a convenient and intuitive front-end GUI which assists the user in tracking student information, inventory, and calendar events.


## Motivation

Several software developers on our team come from a teaching background. This past experience has enabled us to quickly identify the need for an application that would help teachers manage their afterschool activities with ease. Many existing programs are bloated with unnecessary frills that weigh down core management functionality. Our application gets to the heart of this issue and was designed with ease of use in mind.  We focused on designing this software for after-school programs as we saw the greatest need for a secondary management tool there.


## Features

*  Uses Google OAuth 2.0 authentication to verify users

*  Student information saved into a PostgreSQL database

*  Information can be easily updated from any screen, unlike many menu-based teacher programs

*  Equipment and instruments can be checked out to students and displayed back in real-time

*  A dynamic events scheduler with optional calendar view


## How to Use

Begin by navigating to [Digital Director](https://digitaldirector.org). Click the login button where you will be prompted to sign in using your Google account. Upon successful authentication, the user will be redirected to the home page to view live information about his or her students. On the equipment and instruments tab, the user will be able to set up and manage inventory checked out to the students or for general use.  Finally, on the events tab the user is able to organize activities for future reference.  These activities may be organized in a list or viewed in a calendar for convenience. All data submitted through Digital Director is easy to add, update, and maintain.


## Code Organization

* 'App.js':  The project is initialized here.  'App.js' handles incoming server requests via the use of routers.

* 'Routes':  Contains modularized routing instructions on how to handle incoming page requests.  The route .js files will handle the serving of .ejs files found in the 'views' folder.

* 'Views':  Contains .ejs files that will be rendered and sent to those who request it.  The .ejs files may reference other front-end use files found in the 'public' folder.

* 'Public': Contains static files that will be served with the outgoing rendered .ejs files (seen by the user now as pure HTML).  Public files that also accompany the HTML include .css and .js files that will give the user a front-end experience.  Other files included here are the imported DateTimePicker and MindFusion Javascript Scheduler (Calendar API).

* 'Models' & 'Migrations': Used to set up and configure our back-end PostgreSQL database via Sequelize.


## Challenges & Stretch Goals

#### MindFusion Javascript Scheduler

Events configured from the main page display in the calendar properly; however, events scheduled specifically via the calendar view and not the events view show up only temporarily and will need further database code to permanently update.  This was considered a stretch goal due to time constraints, but core functionality works as intended.

#### Account Access

We set up the code to only show data associated with the logged-in user.  We considered it a stretch goal to also add in student and/or group lead users which would be able to view different amounts of data based on the granted "privilege access level".

## Technologies & Frameworks

<b>Built with:</b>
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize.js](http://docs.sequelizejs.com/)
- [Google Sign-In](https://developers.google.com/identity/)
- [MindFusion JavaScript Scheduler](https://mindfusion.eu/javascript-scheduler.html)


## Credits
* [Matthew Fisher](https://github.com/MicroFish91)
* [Tracy Herbert](https://github.com/hrubert)
* [Preston Neal](https://github.com/pneal1995)
* [Eric Ridenour](https://github.com/etridenour)