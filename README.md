# WanderList — Day 25 Task (useEffect Hook)

## Objective
Learn how to perform side effects in React using the `useEffect` Hook by fetching
real destination data from a public API instead of using hardcoded data.

## What I did
Replaced the hardcoded destination array in the WanderList app with live country
data fetched from the **REST Countries API**, using the `useEffect` Hook to load
data when the component mounts.

## Tech Used
- React (`useState`, `useEffect`)
- Fetch API + `async/await`
- REST Countries API (v5)

## Features
- Destination cards populated dynamically from the API (name, region, capital, population)
- Loading and error states while data is being fetched
- Region filter (All, Asia, Europe, Americas, Africa, Oceania)
- Trip budget summary (total destinations + total estimated budget)
- Option to manually add a new destination

## Screenshots

### Dashboard with live country data


![Dashboard](1.png)



### Destination cards


![Destination Cards](2.png)



## How to Run
```bash
npm install
npm run dev