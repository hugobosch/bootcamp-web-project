import React, {Component} from 'react';
import CardComponents from 'components/cards';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

componentWillMount()
  fetch('https://randomuser.me/api/?results=10&seed=bootcamp').then(resp => resp.json()).then(r => {
    this.setState({people: r});
  })

class PersonCardComponent extends Component {

 constructor(props){
	 super(props);
	 this.state = {
		 people: {results:[]}
	 }
 }

  render(){
    let person = this.props.person;
	return (
	  <CardComponents/>
	  <div>{this.state.people.results.map( person => <PersonCardComponent person={person}/>)}</div>
    );
  }
}

export default PersonCardComponent;
