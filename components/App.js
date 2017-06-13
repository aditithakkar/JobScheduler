import React from 'react';
import { AddEntry } from './AddEntry.js'
import { ApplicationList } from './ApplicationList.js'
import { Oops404 } from './Oops404.js'
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaHourglass2 from 'react-icons/lib/fa/hourglass-2';
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import style from '../stylesheets/app.css'
import FaEdit from 'react-icons/lib/fa/edit'

export const App = React.createClass({

	getInitialState(){
		return{
			formVisible: false,
			data:[
			     { 
			     	company:"Wipro",
				  	status:"applied",
				  	date: new Date("2017/06/10"),
				  	notes:"Software Dev Position"

				 },
				 {
				 	company:"Google",
				  	status:"scheduled",
				  	date: new Date("2017/08/29"),
				  	notes:"Front End Dev Position"
				 },
				 {
				 	company:"Microsoft",
				  	status:"pending",
				  	notes:"Full Stack Dev Position"
				 },
				 {
				    company:"IAC",
				  	status:"applied",
				  	date: new Date("2017/06/10"),
				  	notes:"Software Engg Position"
				 }
			]
		}
		this.addData = this.addData.bind(this)
	},

	addData(temp) {
		var tempData= this.state.data;
		tempData.push(temp);
		this.setState({
			data: tempData 
		});

	},

	toggleForm(){
		var changed=!this.state.formVisible;
		this.setState({
	      formVisible: changed
	    });
	},
	
	deleteData(index,status){
		var filtered=this.state.data.filter((item)=>item.status===status);
		filtered=this.state.data.filter((item)=>item!==filtered[index]);
	    this.setState({
	    	data: filtered
	    });
	},

	render(){

		var displayForm={display: this.state.formVisible ? 'block' : 'none'};

		return(
				<div> 
						<h1>Job Schedule Right  <FaEdit/></h1><hr/>
						<button onClick={this.toggleForm}><FaPlusSquare/> Add New</button>
						<div style={displayForm}>	
							<AddEntry addData={this.addData}
									  toggleForm={this.toggleForm}/>	
						</div>
						<div id="appListArea">
						<ApplicationList data={this.state.data}
										 deleteData={this.deleteData}/>
						</div>
				</div>
		)
	}
})
