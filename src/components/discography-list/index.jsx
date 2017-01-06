import React from 'react'  
import DiscographyRow from '../discography-row'

class DiscographyList extends React.Component {

  render() {
    return (
      <ul className="media-list">
        {
          this.props.list.map((disc) => {
            return <DiscographyRow key={ disc.id }
                                title={ disc.title }
                                year={ disc.year }
                                picture={ disc.picture } />
          })
        }
      </ul>
    )
  }
}

export default DiscographyList  