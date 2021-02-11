import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import store from '../../redux/store';
import { getUserData } from '../../redux/actions/app-actions';


const LoginForm = (props) => {

 // console.log(props);

    return (
      <>
        <form onSubmit={props.handleSubmit} >
          <div>
          <Field className="login-input input" placeholder={"login"} name="login" component={"input"}/>
          </div>
          <div>
          <Field className="password-input input" placeholder={"password"} name="password" type="password" component={"input"}/>
          </div>
          <div>
          <Field  type={"checkbox"} name="rememberMe" component={"input"}/>remember me
          </div>
          <div>
          <button >Login</button>
          </div>
        </form>
         
      </>
    );
}


const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)


class  Login extends React.Component {
 
  render(){
    const onSubmit = (formData) =>{
      console.log(formData);
      this.props.getUserData(formData)
    }
    return (
        <div style={{padding:"15px"}}>
          <LoginReduxForm onSubmit={onSubmit}/>
        </div>
      );
  }
  
}

const mapStateToProps = (state) =>state.appReducer; 

const mapDispatchToProps = (dispatch) =>({
  getUserData: (data) => dispatch(getUserData(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);