/* libraries */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* components */
import { Footer } from './blocks/Footer';
import { Header } from './blocks/Header';
import { Router } from './Router';
import { ScrollReset } from './blocks/ScrollReset';
import { ScrollToTop } from './blocks/ScrollToTop';

/* stylesheets */
import styles from './App.module.css';

const App = () => (
  <BrowserRouter>
    <ScrollReset />

    <div className={styles.App}>
      <Header />

      <main>
        <Router />

        <ScrollToTop />
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
