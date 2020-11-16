import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    const catList = this.props.catPics.map(( catPic, i) =>{
      console.log(i, ': ', catPic)
      return (
        <img src={catPic.url} key={catPic.id} />
      )
    })
    return (
      <div>
        {catList}
      </div>
    )
  }
}
