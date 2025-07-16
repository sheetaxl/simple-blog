# Simple Blog Platform 📝

A multi-page blog viewing platform built using React, Vite, Tailwind CSS, and React Router. It fetches posts, users, and comments from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) and allows users to view blog posts, author profiles, and comments.

##  Live Demo
Click here to view the deployed app (https://sheetaxl.github.io/simple-blog)

##  Features

- View a list of blog posts with author names
- Click on a post to read full content and comments
- Navigate to the author’s page to see user info
- Loading spinner while data is fetched
- Responsive design with Tailwind CSS

##  Tech Stack

- React.js
- React Router DOM
- Vite
- Tailwind CSS
- JSONPlaceholder API
- GitHub Pages for deployment

## 📂 Project Structure
simple-blog/
├── public/
├── src/
│ ├── components/
│ │ └── Loader.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Post.jsx
│ │ └── User.jsx
│ ├── App.jsx
│ ├── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js

## 📦 Installation & Run Locally

```bash
git clone https://github.com/sheetaxl/simple-blog.git
cd simple-blog
npm install
npm run dev
📤 Deployment
Deployed to GitHub Pages using the gh-pages package.

bash
npm run build
npm run deploy
🙋‍♀️ Author
Sheetal Sharma
🔗 LinkedIn www.linkedin.com/in/sheetal-sharma-02499b284

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Updated README content
