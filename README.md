# Community_Calendar_2
For the Cornerstone

Developers:
Satya Kurmapu
Abdullah Sorathia
Jonathon Kirkpatrick
Github: 
# The Point of the App
	The point of this app is to auto generate a calendar such that at least 1 person is at the Cornerstone on Monday-Friday from 9am-5pm with the sole purpose to greet and welcome people into the community.  In order to know everyone’s schedule we need to create an app (ideally on slack because this is a technology most cornerstone people are familiar with) that allows people to give some system the times they are available throughout the year.  Then some algorithm (Let's call it the Special Algo) will use everyone's schedule of availability and generate a schedule of when someone is supposed to be at the cornerstone.  [Does this make sense?]
# Main Idea
We will make an app that allows any user to create an “Availability Calendar”.  In this calendar, they will state when they are available.  To make this easier on the user.  We will create a “Regular Week Calendar” that allows them to choose when they are typically available from 9am-5pm on Monday-Friday.  On this calendar the user will add/remove/update [Basic CRUD operations] times for any particular day.  Then there will be the big Availability Calendar by which the user can do the same CRUD operations.  They can even CRUD days that are on their Regular Calendar but this will not affect the Regular Week Calendar.  
There will be a backend that uses some form of a database to keep track of all this data as well as produce the “Actual Community Calendar” [This is the calendar they must abide too].  
The user needs some sort of user friendly way to see their Availability Calendar, Regular Week Calendar, and Actual Calendar.
# Big Ideas
## Using Slack and a Backend
### Big Idea
	This is a system that uses slacks built in forms to send the system data and output will be a picture of a schedule.  There are many ways to implement this and there is some concept on how you can potentially create your own app in slack with buttons and stuff but I haven’t looked too far into it to see if it’s feasible. 
### Issues/Benefits
    Potentially not very user friendly interface
    Only need 1 Web Service to run the Event bot and execute the code
    Not very complicated
    Easy UI
    Using Slack, Webpage, and a Backend
## Big Idea
	This will basically just allow the user to type a slack command and it will give them a URL to click on that will allow them to insert and view the output via the web page.  
Issues/Benefits
Very User Friendly
Need 2 Web Services for the HTML service and  another to execute the code
Seems a bit more complex [Need an API Tech and something to run it  (Express?)]
 Difficult UI