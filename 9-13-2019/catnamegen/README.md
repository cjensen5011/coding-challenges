# Your Cat Name Generator
Your challenge today is to build a “Your Cat Name Generator” which willreceive user input and output a cat-themed nickname for the user based onthe   input.     Winners   for   the   challenge   will   be   chosen   based   on   yourpresentation of your solution:   you should talk about which language youpicked and why, how you approached the problem, what difficulties did yourun into and how did you resolve them, and show a demo of your solution (asfar as you are able to get).
## Part 1:
App/function receives an array/list containing a user’s first name, last name,birth month, and cat gender preference and generates a cat name based on the rules below.

`Example array input: [“Keri”, “Ondrus”, 01, “Female” ]`
## Rules:
The cat name will contain three parts picked based on the tables below.Each part will be capitalized.  The second and third parts will be hyphenated together.

For the example input above, the out would be: Empress Moody-Face

First part of the cat name is picked based on birth month and cat gender preference

| Birth Month | Male Name Part | Female Name Part |
| ----------- | :------------: | ---------------: |
| 01          |    Emperor     |          Empress |
| 02          |      Duke      |          Duchess |
| 03          |      Mr.       |              Ms. |
| 04          |      King      |            Queen |
| 05          |      Dr.       |              Dr. |
| 06          |    Ol’ Boy     |          Ol’ Gal |
| 07          |     Prince     |         Princess |
| 08          |      Lord      |             Lady |
| 09          |   His Honor    |        Her Honor |
| 10          |      Sir       |            Madam |
| 11          | His Excellency |   Her Excellency |
| 12          |   Professor    |        Professor |

Second part of the cat name is picked based on the first letter of the first name

| Letter | NamePart | Letter | NamePart  | Letter | NamePart |
| ------ | :------: | :----: | :-------: | :----: | -------: |
| A      |  Fluffy  |   B    |   Bossy   |   C    |  Snuggly |
| D      |  Clumsy  |   E    |  Sneaky   |   F    |    Noisy |
| G      |  Crazy   |   H    |  Pretty   |   I    |    Happy |
| J      |  Cuddly  |   K    |   Moody   |   L    |    Needy |
| M      | Naughty  |   N    |   Picky   |   O    |  Bashful |
| P      | Playful  |   Q    | Beautiful |   R    |     Nice |
| S      |  Loyal   |   T    |  Scaredy  |   U    |  Playful |
| V      |  Frisky  |   W    |   Goofy   |   X    |  Scrawny |
| Y      |  Grumpy  |   Z    |   Lazy    |

Third part of the name is picked based on the length of the last name

| Length | NamePart | Length | NamePart | Length | NamePart |
| ------ | :------: | :----: | :------: | :----: | -------: |
| 1-3    |  Belly   |  4-5   |   Toes   |  6-7   |     Face |
| 8-9    |  Claws   | 10-12  |   Paws   |  13+   |     Tail |

## Part 2:
App/function checks for user input errors and outputs a meaningful error response.
  * Checks input types – first name, last name, and gender are strings;birth month is number
  * Checks that birth month is in appropriate range
  * Checks that strings are not empty
  * Checks   that   first   letter   of   first   name   is   not   a   number   or   special character
  * Checks that gender is “Male” or “Female”

## Part 3:
App has a UI

<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
