import React, { Component } from 'react';

const WebComponent = () => (
  <div style={{ height: '100vh', backgroundColor: 'red' }}>Web Component</div>
);
const MobileComponent = () => (
  <div style={{ height: '100vh', backgroundColor: 'yellow' }}>
    Mobile Component
  </div>
);

const switchMobileWeb = (Web, Mobile, breakpoint = 576) => {
  class SwitchComponent extends Component {
    state = { isMobile: false };

    componentDidMount() {
      this.eventHandler();
      window.addEventListener('resize', this.eventHandler);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.eventHandler);
    }

    eventHandler = () => {
      const currentWidth = window.innerWidth;
      const { isMobile } = this.state;

      if (currentWidth <= breakpoint && !isMobile) {
        this.setState({ isMobile: true });
      } else if (currentWidth > breakpoint && isMobile) {
        this.setState({ isMobile: false });
      }
    };

    render() {
      const { isMobile } = this.state;

      return isMobile ? <Mobile {...this.props} /> : <Web {...this.props} />;
    }
  }

  return SwitchComponent;
};

const App = () => {
  const Component = switchMobileWeb(WebComponent, MobileComponent);

  return <Component />;
};

export default App;
