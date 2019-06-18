import React from 'react';

class MicroFrontend extends React.Component {
  
  componentDidMount() {
    const { document, name, host } = this.props;

    console.log('Microfrontend mounted', name, host);

    const scriptId = `mf-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `${host}/${manifest['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    const fn = `unmount${name}`
    const id = `${name}-app`

    console.log('Unmounting microfrontend', name, fn, id);

    window[fn](id);
  }

  renderMicroFrontend = () => {
    const { name, history, window } = this.props;
    const fn = `render${name}`
    const id = `${name}-app`

    console.log('Rendering microfrontend', name, fn, id, window);

    window[fn](id, history);
  };

  render() {
    return <div id={`${this.props.name}-app`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window
}

export default MicroFrontend;
