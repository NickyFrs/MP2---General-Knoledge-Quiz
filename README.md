# Milestone Project 2 - General Knowledge Quiz

---
## Project Description
Using the skills and techniques learnt with Code Institute in the JavaScript module I have created a very simple and basic 10 questions quiz. The idea is to showcase the use of JavaScript to create and manipulate elements within the DOM.

This is a 2 pages (and intro and the main quiz page) project that feels as if made of multiple pages.


## 	Demo / Sample

Screenshots of the pages as it is, please see links below:

- Project View,
   See pictures here:
	- [Homepage](https://nickyfrs.github.io/Milestone-Project-2-General-Knoledge-Quiz/screenshots/index-page.jpg)
	- [Quiz Page](https://nickyfrs.github.io/Milestone-Project-2-General-Knoledge-Quiz/screenshots/last-page.jpg)
	- [Final Page](https://nickyfrs.github.io/Milestone-Project-2-General-Knoledge-Quiz/screenshots/quiz-page.jpg)
	

## UX 

### User Background

My approach to the UX design was to present what I believed to be a simple yet functional presentation of information,
without overloading. To achieve this, I present a clean homepage with minimum information, and a button to start the quiz. 
I believe that this would prevent distraction and keep the user attention and would encourage the user to see what the
quiz's questions will be.

---
### External User’s goal

People that visit the website should intuitive know what to do form the first visit.

- User stories

     * Visitor Goals
		I want the visitor to see a clear layout of the information.
		That the visitor can clearly see and identify how to start the quiz.
		I want visitors to easily navigate thru the quiz.
		The questions and options are layout in a clear and concise way.
		The selection of option is clear, and the user have a feedback of the chosen option.
		That, once finished, the user know how many questions were correct.
		The user should have a way to go back to the homepage while doing the quiz and after finishing the quiz.
					


 ### Site Owner's goals

- As initially there is only basic functionality, the owner wants to present a simple, easy and intuitive application that
the users can enjoy and have a little fun with.

---
## Design
		
### Logo

The logo is as simple and clean as the application. The ficticious company name is General Knowledge. Their logo is a
yellow square with a puzzle of four pieces in the middle with the name of the company (General Knowledge) in lowercase
underneath.

### Colour Palette

Following the logo fonts are in Black. Background for the application is White. The buttons colours will vary depending
on what stage of the application they are found, i.e.:
- the Start button is Blue with white color fonts.
- the buttons on the main quiz are: one is the Blue with white color fonts and
 the second is Red with white color.
- the buttons on the result page of the quiz are: one is the Blue with white color fonts and
   the second is Green with white color.

The is also a Orange square line surrounding all the text (info and questions) of the application. 
Ans an Orange highlighter for the question's option when the user hover over them.

I will be using a total of four colour palettes on the website:

- Blue
- Red
- Green
- Orange

		
### Typography / Fonts

Fonts will be imported from the Google Font repository. The main text for all round is 
Raleway with Sand Serif as fall back font. With a default color of Black against a white background.
For the buttons, font color will be White.

### Images

Images are kept to a minimum just using 2:
- one for the logo, created with the Adobe.com free online Logo Maker [link here](https://express.adobe.com/express-apps/logomaker/preview).
- The second one is used for the favicon. the image used was a photograph under the Creative Commons licenses taken from unsplash website.
  [link to the photo here](https://unsplash.com/photos/jvBXiynINGE).


---
### User Journey

Once in the Homepage the user have the title of the page and a button to strat the game. At the click of the start button
the quiz star and the user will have 10 questions to answer presented one question at the time. each question have four optionms to chose from.

At the top of the page there is a question counter and a correct answer counter. at the end of the quiz, the user is presnted
with how many questions were answered correctly and with 2 button as options to go back to the homepage or to try the quiz again.
 
---
### Future Features
Since this is a basic quiz application, there are many improvements planned for the new versions, some are:
- Implementation of a progress bar for more visual feedback to the user.
- Use of API fetching for more question options and choosing questions by the category.
- Implementation of a Hight Score track. 
- Email feedback form.
- Better layout of information.

---
## Testing

 A number of testing was carried out once the website completed. A spreadsheet and PDFs files were created for all 
 the tests and can be found in the folder Test-Validation [https://github.com/NickyFrs/Milestone-Project-2-General-Knoledge-Quiz/tree/main/Test-Validation](https://github.com/NickyFrs/Milestone-Project-2-General-Knoledge-Quiz/tree/main/Test-Validation).
 
**Validations**

- JSLint used for the JavaScript code validation.
- The css stylesheets ware inputted directly into the W3C CSS validator and approved for all three pages. 
- HTML codes for all pages were inputted directly into the W3C Markup validator. Errors and warnings for each page were addressed and then the page was rechecked through the validator. 
The process was repeated until no warning remained.
- Color Contrast Validation carried out.
- Lighthouse Extended Report for performance produced.
- Request mas created.
- [HTML used here](https://validator.w3.org/)
- [CSS used here](https://jigsaw.w3.org/css-validator/)

**Manual Testing**

- Manual testing was carried out on all the buttons on every page.
- The start buttons on the homepage was checked.
- Transitions between pages working properly.
- Questions working and presented one at the time.
- options selectable.
- Counters and End of quiz checked.

## Deployment of Website

This website was developed and hosted using **GitHub pages** and stored in repositories on Github. 

WebStorm was use for the development environment and Git was installed as an extension.

 
The website was deployed using Github Pages. To do this while in the github webpages of the project repository: 
1. on the menu that appears on the right hand side of the page under 'Environments' you can find a link to `github-pages` with anc Active batch on the side.
2. Click on either, github-pages or Environments, it will take you to the `Deployment history` page.
3. Once on the Deployment history page on the right had side you will se a `View Deployment` button. 
4. Click on `View Deployment` and this will open the home page of the websit in a new window.

Alternatively the links below can be use to directly open the website or go to the repositories:

Link to repositories:
[REPO - Milestone-Project-2-General-Knoledge-Quiz](https://github.com/NickyFrs/Milestone-Project-2-General-Knoledge-Quiz)

Link to Deployed Website:
[Milestone-Project-2-General-Knoledge-Quiz](https://nickyfrs.github.io/Milestone-Project-2-General-Knoledge-Quiz/)

---
## Technology
- GitHub was where the files were stored.
- WebStorm IDE was the editing environment used to create and edit files.
- [JSLint](https://www.jslint.com/) used for the JavaScript code validation.
- [Esprima](https://esprima.org/) used as JavaScript Syntax Validator.
- [Bootstrap 5](https://getbootstrap.com/) was used for Collapse menu on about page and progress bars shown in the core value section on the same page.
- [Font awesome](https://fontawesome.com/) was used to provide icons for social media and in the contact page.
- [Google Fonts](https://fonts.google.com/) was used to provide the fonts.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator) was used to validate the style.css file.
- [HTML](https://www.w3schools.com)  **HTML5 reference** for creating the website and leveraged it's semantic elements.
- [CSS3](https://www.w3schools.com/css/css_intro.asp) The project uses **CSS3** for styling elements of the page.
- [JQuery](https://jquery.com) from boostrap **JQuery** to support bootstrap collapsible menu in the about.html page.
- [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)
- Express.adobe.com. 2022. Creative Cloud Express - Logo Maker. [online] Available at: <https://express.adobe.com/express-apps/logomaker/preview> [Accessed 3 May 2022]

---
## Credit

- Hope Music Academy for letting me use their content and allowing me to present the idea.
- The Code Institute tutorials.
- Philip Morris for guidance and help on testing.

- ##### Thanks for the visual guidance and help of YouTubers: 
   
     - James Q Quick, J., 2022. Build a Quiz App series. [online] Youtube.com. Available at: <https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx> [Accessed 3 May 2022].
     - Design, B., 2022. How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial. [online] Youtube.com. Available at: <https://www.youtube.com/watch?v=f4fB9Xg2JEY> [Accessed 2 May 2022]
---
## Content and Media
- Only the photo "Rubik’s Cube 3x3x3x5x5x5" was used for the creation of the favicon:

  Unsplash.com. 2022. Photo by Olav Ahrens Røtne on Unsplash. [online] unsplash.com. Available at: <https://unsplash.com/photos/jvBXiynINGE> [Accessed 10 April 2022].
  Published on October 15, 2018; last accessed 10-apr-2022@12:08
  
---
#### Bugs and Fixes
- Responsiveness for mobile devices needs to be review.
- previous question button needs to be implemented.
- alert should be changed to modal. 
