import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import login_theme from '../../img/login_theme.jpg';
import mainLogo from '../../img/logo.png';
import { SocialIcon } from 'react-social-icons';
import '../../css/app.css';
import { Link, browserHistory } from 'react-router';
import Home from './Home';
import Cookies from 'js-cookie';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: [],
            inputun: '',
            inputpwd: '',
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/user0s/')
          .then(res => {
            this.setState({
              user: res.data,
            });
          })
          .catch((error) => {
            console.log(error);
          })
          
      }
      
    handleLogin(e){
        e.preventDefault();
        var us = this.state.inputun;
        var pwd = this.state.inputpwd;
        for(var i = 0; i < this.state.user.length; i++)
        {
            if(this.state.user[i].username == us && this.state.user[i].password0 == pwd){
                Cookies.set('username',this.state.user[i].username);
                Cookies.set('id',this.state.user[i].id)
                browserHistory.push('/');
            }
        }
        
    }
    render(){
         return (
            <div className='container'>
                <div className='login_dis'>
                    <img src={login_theme} />
                    <div>
                        <form id='login_form' onSubmit={(e) => this.handleLogin(e)}>
                            <img src={mainLogo}/><br />
                            <input placeholder='Số điện thoại, tên người dùng hoặc email' 
                            className='user_acc' id='user_acc' onChange={(e)=>{this.setState({inputun: e.target.value})}}/><br />
                            <input placeholder='Mật khẩu' className='user_acc' id='pwd' onChange={(e)=>{this.setState({inputpwd: e.target.value})}}/><br />
                            <button id='login-btn' type='submit'>Đăng nhập</button><br />
                            <div style={{display:"flex"}}><hr />HOẶC<hr /></div>
                            
                            <a href="redirect/facebook"><SocialIcon network="facebook" /><b>Đăng nhập bằng Facebook</b></a>
                        </form>
                        <div>
                            <span>Bạn chưa có tài khoản ư?</span>
                            <a href='dang-ky'>Đăng ký</a>
                        </div>
                    </div>             
                </div>               
            </div>
        )
    }
}

export default Login;
 