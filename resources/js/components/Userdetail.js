import React, { Component } from "react";
import { useLocation, Link } from "react-router-dom";

class ViewUserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
      var path = this.pathname || window.location.pathname;
          var part = path.split('/').pop();
          console.log(part)
        axios.get(`http://localhost:8000/api/user0s/${part}`)
          .then(res => {
            this.setState({
              users: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })

          
          
      }
      
render(){
  return (
    <div>
     {this.state.users.fullname}
    </div>
  );
};
}

export default ViewUserDetails;
