import React from 'react';
import ReactDom from 'react-dom';
import {form,FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

window.onscroll=function(){
  var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
  var bignav = document.getElementById("bignav");//获取到导航栏id
  if(topScroll > 50){ //当滚动距离大于250px时执行下面的东西
    bignav.style.position = 'fixed';
    bignav.style.top = '0';
    bignav.style.zIndex = '9999';
  }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
    bignav.style.position = 'static';
  }
}

class BlogSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value:''
    }
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  render(){
    return (
      <div id="bignav" className="blog-search">
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default BlogSearch;
