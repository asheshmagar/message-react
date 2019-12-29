import React from 'react';
import {BrowserRouter,Route,Switch,Link,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import * as MessageActions from "./store/actions/messageActions"
import Auth from "./components/pages/Auth"
import "./assets/css/swag.css"
class  App extends React.Component {
  componentDidMount(){
    this.props.setupSocket();

  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              component={Auth}


            />
            <Route
              path="/signup"
              component={Auth}


            />
            <Route
              path="/"
              render={props =>{
                if(!this.props.token){
                  return (
                    <Redirect to="/login" />
                  )
                }else{
                  return(
                    <h1>Root</h1>
                  )
                }
                
              }}


            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}
const mapStateToProps =state=>({
  ...state.auth,
  ...state.message
})
const mapDispatchToProps = dispatch =>({
  setupSocket: () =>{
    dispatch(MessageActions.setupSocket());
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
