# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Styled Components](https://github.com/styled-components/styled-components).

Below you will find some information on how to perform common tasks.<br>

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template.
- `src/index.js` is the JavaScript entry point.

## Project Setup

In the project directory, you can run:

### `npm install` or `npm i`

Installs all the dev and peer dependencies.

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Functionalities

- Render Notes from the API.
- Create note and add it to server.
- Update and delete note and update it in the API.
- Update content to api with custom debounce.
- Search notes.
- Markdown editor.
- Persist notes using firebase.
- Render Notes from the API.
- Custom hooks and lazy loading.
- Prop type checking for reusable components.
- Basic level of responsiveness using mobile friendly fluid design.
- Fallback defaults and Error handling/logging.

## Folder Structure

After creation, your project should look like this:

```
notepad/
  README.md
  node_modules/
  package.json
  src/
    components/
      button.js
      error-fallback.js
      layout.js
      note-content.js
      notes-list.js
      search-field.js
    note-pad/
      note-pad.js
    utils/
      api.js
      configs.js
      custom-hooks.js
      utils.js
    vectors/
      icons/
        **.js
    App.css
    App.js
    index.css
    index.js
```
