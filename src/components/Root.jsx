import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import NoMatch from './Pages/NoMatch';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';

export default function Root() {
  const routes = [
    { path: '/', name: 'Home', Component: App, exact: true },
    { path: '/blog', name: 'Blog', Component: Blog, exact: false },
    { path: '/blog/:id', name: 'Blog Post', Component: BlogPost, exact: false },
    { path: '/about', name: 'About Page', Component: About, exact: false },
    { path: '*', name: '404 page', Component: NoMatch, exact: false },
  ];

  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            {routes.map(({ path, Component, exact }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
                exact={exact}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
