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
	}
}