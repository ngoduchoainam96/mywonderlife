import React, {Component} from 'react';
import mainLogo from '../../img/logo.png';
import Cookies from 'js-cookie';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";
import House from "@mui/icons-material/House"
import TextField from '@mui/material/TextField';
import Login from './Login';
import { Link, browserHistory } from 'react-router';
import { ThirtyFpsSelect } from '@mui/icons-material';
import { result } from 'lodash';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: Cookies.get('user'),
      loginun: Cookies.get('username'),
      posts: [],
      login: true,
      showoption: false,
      id: Cookies.get('id'),
      user: [],
      search: '',
      searchid: '',
      result: ''
   }
  }
  handleClick(e){
    Cookies.set('login','falsee');
    this.setState({
      login: Cookies.get('login')
    })  
  }
  componentDidUpdate(){
      
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/posts/')
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:8000/api/user0s/')
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  handleChange(e) {
    this.setState({username: e.target.value});
  }
  handleOption(e){
    this.setState({showoption: true})
  }
  handleLogout(e){
    this.setState({login: false})
  }
  async handleSearch(e) {
    await this.setState({
      result: e.target.value
    })
    console.log(this.state.result)
      for(var i = 0; i < this.state.user.length; i++)
    {
        if(this.state.user[i].fullname == this.state.result){
            this.setState({search: this.state.result});
            this.setState({searchid: this.state.user[i].id})
            
        }
    }
    
  }
   
  render(){
    if(this.state.login === true)
    return (
      <div>    
        <div className='content'>
          <nav className='top-menu'>
            <a href = '/'>
              <img src={mainLogo} id="mainlogo" />
            </a>
            
            <form>
              <TextField
                label="Tìm kiếm"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                onChange = {(e) => {this.handleSearch(e)}}
              /> 
              <div >
              <Link to={"userdetail/"+this.state.searchid} id='search_result'>{this.state.search}</Link>
              
            </div>             
            </form>
            
            <div id='top-option'>
              <a href="#"><House /></a>
                <Link to={"userdetail/"+this.state.id} className="btn btn-primary">Edit</Link>
              
              <div id='test'>
                <div onClick={(e) => this.handleOption(e)}>
                  {this.state.loginun?
                  <div>{this.state.loginun}</div>:
                   <div>{this.state.username}</div>
                }
                   
                </div>
              {this.state.showoption ? <div id='per-option'>
                <a href='/personal-page'>Trang cá nhân</a><br />
                <a onClick={(e) => this.handleLogout(e)}>Đăng xuất</a>
              </div>:null   }   
              </div> 
            </div>              
          </nav>
        </div>
        <hr/> 
        <div className='content'>         
          <section className='main-container'>     
          {
            this.state.posts.length > 0 ? (
              this.state.posts.map((post) => (
                <div key={post.id} id="post">
                  <img src={ "http://localhost:8000/uploads/" + post.image_name } id="main-img"/>
                  <div>{post.description}</div>
                </div>
              ))
            ) : (
              <h6 className="text-danger text-center">No Image Found </h6>
                )
          }    
          </section>
        </div>
      </div>
    )
    else 
    return(
      <Login />
    )
  }
}
export default Home;
