'use strict';

class BlogLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const a = React.createElement('a', { 
    	onClick: () => {
    		const entry = React.createElement(BlogEntry, this.props, null);
    		ReactDOM.render(entry, document.querySelector('#blog_container'));
		}, href: '#'
    }, `${this.props.title}`);
    return React.createElement('div', null, a);
  }
}
