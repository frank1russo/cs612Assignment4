'use strict';

const e = React.createElement;

class BlogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
	  const title = e('div', null, e('h1', null, `${this.props.title}`));
	  const date = e('div', null, e('h3', null, `${this.props.date}`));
//	  const body = e('div', null, `${this.props.body}`);
	  const body = e('div', {dangerouslySetInnerHTML: {__html: this.props.body}}, null);
	  return e('div', null, [title, date, body]);
  }
}
