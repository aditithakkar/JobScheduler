import React from 'react';
import { AddEntry } from './AddEntry.js'
import { SearchList } from './SearchList.js'
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
			searchAreaVisible: false,
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
			],
			searchedData:[]
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

	handleSearch(){
		var tempData= this.state.data;
		var val=this.refs.search.value.toLowerCase();
		var res=[];
		for(let x in tempData){
			if(tempData[x].company.toLowerCase().includes(val))
			res.push(tempData[x]);
		}
		this.setState({
			searchedData: res
		});
	},

	toggleForm(){
		var changed=!this.state.formVisible;
		this.setState({
	      formVisible: changed
	    });
	},

	toggleSearch(){
		var changed=!this.state.searchAreaVisible;
		this.setState({
	      searchAreaVisible: true
	    });
	},

	closeSearch(){
		var changed=!this.state.searchAreaVisible;
		this.setState({
	      searchAreaVisible: false
	    });
	},

	deleteData(index,status){
		var filteredSearch=this.state.searchedData.filter((item)=>item.status===status);
		filteredSearch=this.state.searchedData.filter((item)=>item!==filteredSearch[index]);

		var filtered=this.state.data.filter((item)=>item.status===status);
		filtered=this.state.data.filter((item)=>item!==filtered[index]);
	    this.setState({
	    	data: filtered,
	    	searchedData:filteredSearch
	    });
	},

	render(){

		var displayForm={display: this.state.formVisible ? 'block' : 'none'};
		var displaySearch={display: this.state.searchAreaVisible ? 'block' : 'none'};
		return(
				<div> 
						<h1>Job Schedule Right  <FaEdit/></h1><hr/>

						<button onClick={this.toggleForm}><FaPlusSquare/> Add New</button>
						<input id="searchBar" type="text" ref="search" onFocus={this.toggleSearch} onChange={this.handleSearch} placeholder="Search Company Name"></input>
						<div style={displayForm}>	
							<AddEntry addData={this.addData}
									  toggleForm={this.toggleForm}/>	
						</div>
						<div style={displaySearch}>
							<SearchList data={this.state.searchedData}
									 	deleteData={this.deleteData}
									 	closeSearch={this.closeSearch}/>
						</div>
						<div id="appListArea">
						<ApplicationList data={this.state.data}
										 deleteData={this.deleteData}/>
						</div>
				</div>
		)
	}
})
