import React, { Component } from 'react'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// import cs from 'classnames'//引入classnames依赖库
import styles from './Slider.scss'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curpage: 0
    }
  }
  render() {
    const self = this
    const silderEl = self.props.banners.map((banner, idx) => {
      return (
        <div key={idx}
          className="slide"
          style={idx !== self.state.curpage ? { display: 'none' } : null}
        >
          <a href={banner.sourceUrl} target="_blank">
            <img src={banner.imgUrl} alt="" />
          </a>
        </div>
      )
    })
    return (
      <div className="banner">
        <span
          onClick={self.slidePre}
          className="slide-pre">
          <i className="fa fa-chevron-left fa-2x fa-fw icon-chevron-left"></i>
        </span>
        <span
          onClick={self.slideNext}
          className="slide-next">
          <i className="fa fa-chevron-right fa-2x fa-fw icon-chevron-right"></i>
        </span>
        {silderEl}
      </div>
    )
  }

  slideNext = () => {
    const lastPage = this.props.banners.length - 1
    if (this.state.curpage < lastPage) {
      this.setState({
        curpage: this.state.curpage + 1
      })
    } else {
      this.setState({
        curpage: 0
      })
    }
  }
  slidePre = () => {
    const lastPage = this.props.banners.length - 1
    if (this.state.curpage > 0) {
      this.setState({
        curpage: this.state.curpage - 1
      })
    } else {
      this.setState({
        curpage: lastPage
      })
    }
  }
  autoSlide = () => {
    clearInterval(this.prevTid)
    this.prevTid = setInterval(() => {
      this.slideNext()
    }, 5000)
  }
}

export default Slider
