import React from 'react'
import DiscographyPicture from '../discography-picture'


class DiscographyRow extends React.Component {

	render() {
		return(
			<li className="media">
		        <DiscographyPicture picture={this.props.picture} />
		        <div className="media-body">
		          <h4>{this.props.title}</h4>
		          <p>{this.props.year}</p>
		        </div>
		        <hr/>
	      </li>
		)
	}
}

export default DiscographyRow