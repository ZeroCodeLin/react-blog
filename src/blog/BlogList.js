import React from 'react'
import {Pagination} from 'react-bootstrap'
var $ = require('jquery')
import Blog from './Blog'
import request from "../util/request";

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

class BlogList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        isPage:true,
        activePage:1,
        page:1,
        data:[]
    }

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
      console.log(eventKey);
      let data = {
          page:eventKey,
          num:10,
      }
      request('/api/blog/lists',data).then((data) => {
          this.setState({
              data: data.data.data,
              page:data.data.totalPage,
              activePage:eventKey
          });
      });
  }

  componentDidMount (){
      let searchText = getQueryString('text');
      if(searchText){
          request('/api/blog/search',{text:getQueryString('text')}).then((data) => {
              this.setState({
                  data: data.data.data,
                  isPage:false,
              });
          });
      }else{
          let data = {
              page:1,
              num:10,
          }
          request('/api/blog/lists',data).then((data) => {
              this.setState({
                  data: data.data.data,
                  page:data.data.totalPage,
              });
          });
      }
  }
  render(){
      let data = this.state.data;
    return (
      <div>
        {data.map(function(data){
          return <Blog blogData={data} key={data.id} />
        })}

        {
            this.state.isPage?<div className="blog-Page">
                <Pagination
                    prev
                    next
                    ellipsis
                    boundaryLinks
                    items={this.state.page}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
            </div>:""
        }

      </div>

    )
  }
}

export default BlogList;
