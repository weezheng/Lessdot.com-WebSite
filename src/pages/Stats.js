import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/stats/Personal';
import Site from '../components/stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Zheng Wee and lesscode.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Stats</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
