# Community_Calendar_2
For the Cornerstone

## Developers:
    Satya Kurmapu
    Abdullah Sorathia
    Jonathon Kirkpatrick

## The Point of the App
The point of this app is to auto generate a calendar such that at least 1 person is at the Cornerstone on Monday-Friday from 9am-5pm with the sole purpose to greet and welcome people into the community.  In order to know everyone’s schedule we need to create an app (ideally on slack because this is a technology most cornerstone people are familiar with) that allows people to give some system the times they are available throughout the year.  Then some algorithm (Let's call it the Special Algo) will use everyone's schedule of availability and generate a schedule of when someone is supposed to be at the cornerstone.  [Does this make sense?]
## Main Idea
We will make an app that allows any user to create an “Availability Calendar”.  In this calendar, they will state when they are available.  To make this easier on the user.  We will create a “Regular Week Calendar” that allows them to choose when they are typically available from 9am-5pm on Monday-Friday.  On this calendar the user will add/remove/update [Basic CRUD operations] times for any particular day.  Then there will be the big Availability Calendar by which the user can do the same CRUD operations.  They can even CRUD days that are on their Regular Calendar but this will not affect the Regular Week Calendar.  
There will be a backend that uses some form of a database to keep track of all this data as well as produce the “Actual Community Calendar” [This is the calendar they must abide too].  
The user needs some sort of user friendly way to see their Availability Calendar, Regular Week Calendar, and Actual Calendar.