import React, {Component } from 'react';
import styles from './Search.module.css'
class Search extends Component {
  constructor (props) {
    super(props);
    this.state ={
      text : '' ,
    }
    this.input = React.createRef() ;
    
  }
  changeHandler = event => {
    this.setState({
      text : event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault()
  }
  

  render() { 
    return (
      <div onSubmit={this.submitHandler}>
         <div className={styles.containerS} >
           <h1>SEARCH</h1>
           <input  placeholder='SEARCH (just for design)' value={this.state.text} onChange={this.changeHandler} />
         </div>
      </div>
    );
  }
}
 
export default Search;