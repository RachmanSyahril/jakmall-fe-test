# Jakmall FE Test, by Syahril Rachman

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Stack Used:

```
- ReactJs (via CRA)
- react-hook-form (mandatory)
- styled-components (mandatory)
- redux (used because seeing the need for a central state-management used by many places in the UI components)
```

## Project Structure
- [ ] `public/`: contains site's meta descriptions.
  - [ ] `favicon.ico/`: site's default icon.
  - [ ] `index.html/`: site's entry point.
- [ ] `src/`: contains site's logic.
  - [ ] `assets/`: contain app styles, images, and other non-code assets.
    - [ ] `styles/`: contain general style of the app and app-theme.
    - [ ] `App.css`: app general stylesheet, background, padding, and margins.
  - [ ] `components/`: contain app functional components, used by more general pages.
  - [ ] `pages/`: contain app feature pages.
  - [ ] `redux/`: contain app state management (redux).
  - [ ] `App.jsx`: App main configuration, can contain routing etc for the future.
  - [ ] `index.js`: React's entry point to the dom.

## Getting Started

```
git clone https://github.com/RachmanSyahril/jakmall-fe-test.git
cd jakmall-fe-test
npm install
npm run start
```
