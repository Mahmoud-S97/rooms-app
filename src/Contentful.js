import { createClient } from 'contentful';

export default createClient({ // We got this data of the capital letters from the .env.development file
    // This is the space ID. A space is like a project folder in Contentful terms
//     space: process.env.REACT_APP_API_SPACE,
    space: "hwqgwk5bcoh6",

    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//     accessToken: process.env.REACT_APP_API_SPACE
    accessToken: "2YahAunW7dEieha7Rt5aat8bCxXgOsel17ekhvqjklk"
  });
