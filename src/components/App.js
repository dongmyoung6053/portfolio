import React, { Component } from 'react';
import HighlightedProjects from './HighlightedProjects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h4>My name is Dongmyoung.</h4>
        <Title />
        {this.state.displayBio ? (
          <div>
            <p>I'm always looking forward to working on meaningful projects.</p>
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
        <HighlightedProjects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
