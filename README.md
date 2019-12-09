This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run storybook`

Run storybook to build & test UI components on `http://localhost:6006/?path=/story/blocks--block-test`


### `yarn build`

On `master` will deploy a build to Netlify, meaning it will be live on our domain within 2-3 minutes


### `npm start:production`

Runs the app in the "PRODUCTION" mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will NOT reload if you make edits.<br />
You will also see any lint errors in the console.


## Check for errors

`Yarn prettier:format`
`Yarn lint`
`Yarn flow:test`



# Using Our White Label Product

### Checklist

- [ ] index.html `<title>`, `<meta>` and `<noscript>` content
- [ ] `logoColor` and `logoWhite` in assets/images folder
- [ ] favicon
- [ ] Mixpanel `Home` & `Subscribed!` event: Find & replace experiment name e.g. 'Stoic'
- [ ] Mailchimp URL (in Hero.jsx)
- [ ] Hero content and background image
- [ ] Image images and description text
- [ ] Edit/remove AppPrototype section
- [ ] Testimonials content and images
- [ ] Edit all colour, text, corner-radius & elevation variables
