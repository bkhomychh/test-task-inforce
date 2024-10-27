# Test Task - Inforce

This repository contains the solution to the **test task** for the Inforce vacancy. It is built
using a modern tech stack, including **React, Vite, TypeScript, React Query, Redux Toolkit, and
React Hook Form**. The project implements core concepts such as **state management, form validation,
API integration, and routing** to demonstrate proficiency with the required technologies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Usage](#usage)

---

## Features

- State management with **Redux Toolkit**
- API data fetching and caching using **React Query**
- Form handling and validation with **React Hook Form** + **Yup**
- Routing with **React Router v6**
- JSON server as a mock backend for API
- SCSS support for styling

---

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript
- **State Management:** Redux Toolkit
- **Data Fetching:** React Query
- **Form Handling:** React Hook Form, Yup
- **Routing:** React Router Dom v6
- **HTTP Client:** Axios
- **Styling:** SCSS
- **Development Tools:** Vite, ESlint, TypeScript, JSON Server

---

## Installation

**Clone the repository:**

```bash
git clone https://github.com/your-username/test-task-inforce.git
cd test-task-inforce
npm install
```

---

## Environment Variables

1. Create a .env file in the root directory based on the provided .env.example

2. Open the .env file and fill in the required variables:

`VITE_API_URL=http://localhost:3000/`

---

## Scripts

`npm run dev` - Start Development Server

`npm run build` - Build for Production

`npm run preview` - Preview Production Build

`npm run lint` - Run Linter

`npx json-server db.json --port 3000` - Mock API with JSON Server

---

## Usage

1. Start the development server - `npm run dev`

2. Start the JSON Server (in another terminal) - `npx json-server db.json --port 3000`

3. Open your browser and navigate to: http://localhost:5173

4. The mock API will be available at: http://localhost:3000
