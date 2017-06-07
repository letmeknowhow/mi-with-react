import React, { Component } from 'react';
import './Home.scss';
import TopBar from '../../components/TopBar'
import TopHeader from '../../components/TopHeader'
import TopBanner from '../../components/TopBanner'

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <TopHeader />
        <TopBanner />
      </div>
    );
  }
}

export default Home;
