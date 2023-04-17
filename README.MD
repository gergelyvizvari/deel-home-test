# Deel - home task

name: Gergely Vizvari

## steps to run this project

- clone the repository
- in the project route run the folllowing terminal commands:
  - npm install
  - npm run dev
  - open the given Local url (or press 'o')

## used dev environment

- osx
- node 18.15.0 (arm)
- npm 9.5.0

## short logic

The test requested to create an autocomplete component:

- App.tsx: to represent using api https://restcountries.com/v3.1/all (only to get countries)
- components/autoComplete is the requested component
  - **hooks/autocomplete.ts**: the async filter
  - **index.tsx & index.css**: the component wrapper
  - **list.tsx**: displaying the filter results
  - **listItem.tsx**: displaying one record highlighting the matching characters
  - **search.tsx**: input field for autocomplete

## comments

- in the test at the 5th point talks about perfect user experience, but the timeframe wasn't enough for me to handle keyboard navigation as well
- also missing "not match" solution
