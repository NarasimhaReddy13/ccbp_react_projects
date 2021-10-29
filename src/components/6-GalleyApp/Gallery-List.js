import {Component} from 'react'

import ThumbnailsList from './Thumbnail'

import './Gallery-List.css'

const photosData = [
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
]



class Gallery extends Component {
  state = {
    selectedThumbnailId: 0,
  }

  updateSelectedImageUrl = id => {
    this.setState({
      selectedThumbnailId: id,
    })
  }

  renderSelectedImage = () => {
    const {selectedThumbnailId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedThumbnailId]

    return <img src={imageUrl} className="selected-image" alt={imageAltText} />
  }

  render() {
    const {selectedThumbnailId} = this.state

    return (
      <div className="app1-container">
        <div className="gallery-container">
          {this.renderSelectedImage()}
          <ThumbnailsList
            photosData={photosData}
            selectedThumbnailId={selectedThumbnailId}
            onClickThumbnailImage={this.updateSelectedImageUrl}
          />
        </div>
      </div>
    )
  }
}

export default Gallery