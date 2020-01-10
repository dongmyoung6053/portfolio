import React, { Component } from 'react';

const TITLES = [
  'a web developer',
  'a full stack programmer',
  'an enthusiastic learner',
  'an adventure seeker'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];

    return (
      <h4 className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>
        I am {title}
      </h4>
    );
  }
}

export default Title;
