# Execution Plan

1. Create Elements and CSS styling in HTML for hours of the working day 9am-5pm
* Bootstrap elements and CSS classes provided in style.css Appended to the HTML for each hour
* Current Date is displayed at the top of the scheduler with jQuery

2. Functionality
* When the user enters text into the input area they can save their task to local storage by clicking the save button associated with that hour's row and it will still be there after refreshing the page
* The hours text area is colour coordinated to represent the past, present and future time by the hour.
* When the user clicks the clear all button, the text is cleared from the input fields and also the local storage.



<dl>
    <a href=""><img src="" /></a>
</dl>

# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
