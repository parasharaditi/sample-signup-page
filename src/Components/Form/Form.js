import React from 'react';
import './style.css'
class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          gender: ""
        };
      }
     

    onNameChange=(event)=>{
        this.setState({
            name: event.target.value
          });
       

    };
    onMailChange=(event)=>{
        this.setState({
            email: event.target.value
          });
        
    };
    onPhoneChange=(event)=>{
        this.setState({
            phone: event.target.value
          });
        
    };
    onGenderChange=(event)=>{
        this.setState({
            gender: event.target.value
          });
        
    };
    onPassChange=(event)=>{
        this.setState({
            password: event.target.value
          });
        
    };
    onSubmit = () => {
        const data = `
        Name: ${this.state.name},
        Email: ${this.state.email},
        Phone: ${this.state.phone},
        Gender: ${this.state.gender},
        Password: ${this.state.password},
        `;
      
        window.alert(data);
        this.clearForm();
      };
     
      clearForm = () => {
        this.setState({
            name: "",
           email: "",
           phoneNumber: "",
           password: "",
           gender: ""
   });
 };

     
    

    render=() =>{

        return(
            <div className="form-container">
            <p className="title">Sign up here!</p>
            <input onChange={this.onNameChange} className="inputstyle" type="text" placeholder="Enter your name" />
            <input onChange={this.onMailChange} className="inputstyle" type="email" placeholder="Enter your email address" />
            <input onChange={this.onPhoneChange} className="inputstyle" type="text" placeholder="Enter your contact number" />
            <select onChange={this.onGenderChange} className="inputstyle">
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
                <option>Prefer not to say</option>
            </select>
            <input onChange={this.onPassChange} className="inputstyle" type="password" placeholder="Enter password" />

            <button onClick={this.onSubmit} className="btn">Submit</button>
            </div>

    )
    }

}
export default Form;