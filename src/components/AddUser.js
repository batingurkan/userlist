import React , {Component} from "react";
import { BsEnvelopeOpenFill, } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";



class AddUser extends Component {

    state = {
        name :"",
        tel:"",
        email:""
    };
    onNameChange(e)
    {
      
        this.setState({
            [e.target.name] : e.target.value
        });
    } 

    onTelChange(e)
    {
     
        this.setState({
            [e.target.name] : e.target.value
        });
    }
     
    onEmailChange(e){
        var email =  e.target.value;
        console.log(email);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onAddSubmit(e){
        const {addUser}= this.props;
        const {name,email,tel} = this.state;


        e.preventDefault();
     //eğer değer yoksa alert   this.state('none')

     if(name,email,tel === ''){
        alert('Lütfen kutucukları boş bırakmayınız')
      return
    } ;
    if(email === ''){
        alert('Lütfen email adresinizi giriniz')
        return
      
    };
    if(name === ''){
        alert('Lütfen isim giriniz')
        
        return
  
    };
    if(tel === 0){

        alert('Lütfen telefon numaranızı giriniz')
        return
      
    };
  
     if(tel.length !== 11){
            alert('Lütfen 11 haneli bir telefon değeri giriniz')
            return
          
        };


        
        const newUser = {
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email
           
        };
        

        addUser(newUser); 

    }
   
    
    render(){ 
        const {name,tel,email} = this.state;

        //render için dönmesi gereken
        return (
            <div className="card">
                <h4 className="card-header">App New User</h4>
                <div className="card-body" id="todo">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group" id="Name-add">
                            <label htmlFor="name">Name<BsFillPersonFill/></label>
                            <input type="text"
                             name="name"
                              id="name"
                               placeholder="Enter Name"
                                className="form-control"
                                value = {name}
                                onChange={this.onNameChange.bind(this)}
                                ></input>
                        </div>
                        <div className="form-group" id="Tel-add">
                            <label htmlFor="name">Telephone Number <BsFillTelephoneFill/></label>
                            <input type="number"
                             name="tel"
                              id="tel"
                               placeholder="Telefon Numarası"
                                className="form-control"
                                value={tel}
                                onChange={this.onTelChange.bind(this)}
                                ></input>
                        </div>
                        <div className="form-group" id="Email-add">
                            <label htmlFor="name">Email <BsEnvelopeOpenFill/></label>
                            <input type="text"
                             name="email"
                              id="email"
                               placeholder="Enter Email"
                                className="form-control"
                                value={email}
                                onChange={this.onEmailChange.bind(this)}
                                ></input>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block buttons " id="buttons">
                            Add New User
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddUser;