import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className='profile' />
        <h1>Hello!</h1>
        <p>My name is Dongmyoung.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Halifax.</p>
            <p>
              My favorite language is JavaScript, and I think React is awesome.
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
