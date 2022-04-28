import React, {Component} from 'react';
import mainLogo from '../../img/logo.png';
import Swal from 'sweetalert2';

class Regis extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullname: '',
            username:'',
            password: ''
        }

    }
    handleFullname(e){
        this.setState({fullname: e.target.value})
    }
    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePassword(e){
        this.setState({password: e.target.value})
    }
    handleRegis(e){
        e.preventDefault()
        const user = {
         fullname: this.state.fullname,
         username: this.state.username,
         password: '1',
         password0: this.state.password
       };
       axios.post('http://localhost:8000/api/user0s/', user)
         .then(res => console.log(res.data));
       // console.log(`Expense successfully created!`);
       // console.log(`Name: ${this.state.name}`);
       // console.log(`Amount: ${this.state.amount}`);
       // console.log(`Description: ${this.state.description}`);
       Swal.fire(
     'Good job!',
     'Expense Added Successfully',
     'success'
   )
    }
    render(){
        return(
            <div>
                <form>
                    <img src={mainLogo}/>
                    <div>Đăng ký để xem ảnh và video từ bạn bè</div>
                    <input placeholder='Tên đầy đủ' onChange={(e) => this.handleFullname(e)}/>
                    <input placeholder='Tên người dùng' onChange={(e) => this.handleUsername(e)}/>
                    <input placeholder='Mật khẩu' type="password" name="password" onChange={(e) => this.handlePassword(e)}/>
                    <button onClick={(e) => this.handleRegis(e)}>Đăng ký</button>
                    <div>Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.</div>
                </form>
            </div>
        )
    }
}

export default Regis;