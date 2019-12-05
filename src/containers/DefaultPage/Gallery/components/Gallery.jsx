/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

export default class Gallery extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string,
      alt: PropTypes.string,
    })).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      tag: PropTypes.string,
      title: PropTypes.string,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentTag: 'all',
      tags: props.tags,
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  onFilter = (tag, e) => {
    const { images } = this.props;
    e.preventDefault();
    if (tag === 'all') {
      const imgs = images;
      this.setState({
        images: imgs,
        currentTag: 'all',
      });
    } else {
      const imgs = images.filter(t => t.type === tag);
      this.setState({
        images: imgs,
        currentTag: tag,
      });
    }
  };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState(prevState => ({ currentImage: prevState.currentImage - 1 }));
  };

  gotoNext = () => {
    this.setState(prevState => ({ currentImage: prevState.currentImage + 1 }));
  };

  gotoImage = (index) => {
    this.setState({
      currentImage: index,
    });
  };

  handleClickImage = () => {
    const { currentImage } = this.state;
    const { images } = this.props;
    if (currentImage === images.length - 1) return;
    this.gotoNext();
  };

  render() {
    const {
      currentImage, lightboxIsOpen, tags, images, currentTag,
    } = this.state;

    return (
      <div className="gallery">
        <div className="gallery__btns">
          <button
            type="button"
            className={`gallery__btn${currentTag === 'all' ? ' gallery__btn--active' : ''}`}
            onClick={e => this.onFilter('all', e)}
          >all
          </button>
          {tags.map((btn, i) => (
            <button
              type="button"
              key={i}
              className={`gallery__btn${btn.tag === currentTag ? ' gallery__btn--active' : ''}`}
              onClick={e => this.onFilter(btn.tag, e)}
            >{btn.title}
            </button>
          ))}
        </div>
        {images.map((img, i) => (
          <a className="gallery__img-wrap" key={i} onClick={e => this.openLightbox(i, e)} href={img.src}>
            <img src={img.src} alt={img.alt} />
          </a>
        ))}
        <Lightbox
          currentImage={currentImage}
          images={images}
          isOpen={lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}
