class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
    		blogs: []
        };
	}
	
	componentDidMount() {
	    var self = this;
		fetch('./blogs.json').then((results) => {
		  return results.json();
		}).then((data) => {
			self.setState({
				blogs: data.blogs
			});
		});
  	}

	render() {
		let links = [];
		this.state.blogs.forEach(blog => {
			links.push(React.createElement(BlogLink, blog, null));
		});
		return React.createElement('div', null, links);
//		  const link1 = React.createElement(BlogLink, {title: 'Test Blog 1', date: 'June 26, 2018', body: 'content'}, null);
//		  const link2 = React.createElement(BlogLink, {title: 'Test Blog 2', date: 'June 19, 2018', body: 'content'}, null);
//		  return React.createElement('div', null, [link1,link2]);
	}
}