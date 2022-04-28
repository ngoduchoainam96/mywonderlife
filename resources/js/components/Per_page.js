import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Swal from 'sweetalert2';
import Images from "./Images";
import Cookies from 'js-cookie';
import img from '../../img/default.jpg';
import avaimg from '../../img/avatarimg.png'

export default class CreateExpense extends Component {
  constructor(props) {
    super(props)
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: Cookies.get('user'),
      name: '',
      description: '',
      amount: '',
      img: '',
      coverimg: '',
      avatarimg: '',
      topimg: '',
      botimg: '',
      responseMsg: {
        status: "",
        message: "",
        error: "",
      },
    }
  }

  onChangeExpenseName(e) {
    this.setState({name: e.target.value})
  }

  onChangeExpenseAmount(e) {
    this.setState({amount: e.target.value})
  }

  onChangeExpenseDescription(e) {
    this.setState({description: e.target.value})
  }

  onChangeImg(e) {
    this.setState({img: e.target.files[0]})
  }
  onSubmit(e) {
    e.preventDefault();
    var FormData = require('form-data');
    const data = new FormData();
    data.append('description',this.state.description);
    data.append('images[]', this.state.img);
    axios.post('http://localhost:8000/api/posts/', data)
      .then(res => console.log(res.data));
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
    )
    this.setState({name: '', amount: '', description: ''})
  }
  onChangeCoverimg(e){
    this.setState({coverimg: e.target.files[0]})
  }
  handleCoverImg(e){
    e.preventDefault();
    var FormData = require('form-data');
    const data = new FormData();
    data.append('user_name',"nam");
    data.append('images[]', this.state.coverimg);
    axios.post('http://localhost:8000/api/coverimgs/', data)
      .then(res => console.log(res.data));
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
    )
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/coverimgs/')
      .then(res => {
        this.setState({
          topimg: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:8000/api/avatarimgs/')
      .then(res => {
        this.setState({
          botimg: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeAvatarimg(e){
    this.setState({avatarimg: e.target.files[0]})
  }
  handleAvatarImg(e){
    e.preventDefault();
    var FormData = require('form-data');
    const data = new FormData();
    data.append('user_name',this.state.username);
    data.append('images[]', this.state.avatarimg);
    axios.post('http://localhost:8000/api/avatarimgs/', data)
      .then(res => console.log(res.data));
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
    )
  }
  render() {
    return (
      <div className="per-main">
          <div>
          {
            this.state.topimg.length > 0 ? (
              this.state.topimg.map((timg) => (
                <div key={timg.id}>
                {
                  timg.user_name === this.state.username?(
                    <div>
                    <img src={ "http://localhost:8000/uploads/" + timg.image_name } id="cover-img"/>
                  
                  </div>
                  ) : null
                }
                  
                </div>
              ))
            ) : (
              <div>
                <img src={img} />
              <form>
              <label htmlFor="filePicker" style={{ background:"grey", padding:"5px 10px" }}>
                Thêm ảnh bìa
              </label>
              <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => this.onChangeCoverimg(e)}/>
              <button onClick={(e) => this.handleCoverImg(e)}>Lưu ảnh</button>
            </form>   
            </div>   
                )
          }    
               
          </div>
          <div>
            {
            this.state.botimg.length > 0 ? (
              this.state.botimg.map((bimg) => (
                <div key={bimg.id}>
                {
                  bimg.user_name === this.state.username?(
                    <div>
                    <img src={ "http://localhost:8000/uploads/" + bimg.image_name } className="avatar-img"/>
                  
                  </div>
                  ) : null
                }
                  
                </div>
              ))
            ) : (
              <div>
                <img src={avaimg} className="avatar-img"/>
              <form>
              <label htmlFor="filePicker" style={{ background:"grey", padding:"5px 10px" }}>
                Thêm ảnh đại diện
              </label>
              <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => this.onChangeAvatarimg(e)}/>
              <button onClick={(e) => this.handleAvatarImg(e)}>Lưu ảnh</button>
            </form>   
            </div>   
                )
          }    
          </div>
          <Form onSubmit={this.onSubmit} encType="multipart/form-data">
            <Form.Group controlId="description">
              <Form.Control as="textarea" type="textarea" value={this.state.description} 
              placeholder="Bạn đang nghĩ gì"
              onChange={this.onChangeExpenseDescription}/>
            </Form.Group>
            <Form.Group controlId="img">
              <Form.Label>Tải ảnh lên</Form.Label>
              <input type="file" onChange={this.onChangeImg} name="img"></input>
            </Form.Group>      
            <Button variant="primary" size="lg" block="block" type="submit">
              Đăng
            </Button>
          </Form>
          <Images ref="child" />
      </div>);
  }
}
