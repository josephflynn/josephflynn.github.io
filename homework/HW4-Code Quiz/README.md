# Execution plan

1. Create HTML framework and CSS styles
* Navigation bar at the top to access Highscores and restart the quiz or go back to the welcome page. 
* Welcome page, and quiz take place on same index.html
* Minimalist aesthetics for quiz styling

2. Quiz
* Welcome message outlines rules for the quiz with a button to start
* 10 questions about JavaScript basics
* 12 seconds per question, so 120 seconds in total (2mins)
* Timer starts when quiz is started
* Incorrect answer deducts 5 seconds from timer
* Questions must be answered correctly before game moves to the next question
* Correct answer adds a score of 10% to total score
* Quiz ends when all questions are answered or timer runs out
* Player can enter initals to be submitted to highcores and taken to the highscores page
* Highscores displayed from quiz
* Sound effects on buttons, welcome screen, start quiz, quiz over, time out and high scores

# Pseudo Code

1. When the start button is clicked, the quiz begins.
* Welcome message is hidden with setAttribute "class", "hide"
* Timer starts
* Questions are populated from question objects, appended to "questions" div with multiple choice answers displayed as buttons
 - Question objects are set within questions variable
* 


# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
