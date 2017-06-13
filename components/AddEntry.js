import React from 'react'
import style from '../stylesheets/addEntry.css'

export const AddEntry = React.createClass({
	
	getInitialState() {
	    return {
	      selectedOption: 'applied',
	      displayDate : true
	    };
	},

	submit(e){
		e.preventDefault();
		if(this.state.displayDate)
			var tempData = {
				company: this.refs.company.value,
				status: this.state.selectedOption,
				date: new Date(this.refs.date.value),
				notes: this.refs.notes.value			
			}
		else
			var tempData = {
				company: this.refs.company.value,
				status: this.state.selectedOption,
				notes: this.refs.notes.value			
			}

		this.props.addData(tempData);
		this.props.toggleForm();
	},

	radioChange(changeEvent){
		if(changeEvent.target.value == 'pending')
			var dateDisplay = false;
		else
			dateDisplay = true;
		this.setState({
		    selectedOption: changeEvent.target.value,
		    displayDate: dateDisplay
		});
	},

	render(){

		return(<div>
			<div id="addEntry">
				<form onSubmit={this.submit} className="add-entry-form">
					<label htmlFor="company">Company Name : </label>
					<input id="company" type="text" ref="company" required  /><br/><br/>

					<label htmlFor="Status">Application Status : </label>
					<div><hr/>
					<input type="radio" name="status" ref="status" value="applied" onChange={this.radioChange} checked={this.state.selectedOption === 'applied'} /> Applied<br/>
					<input type="radio" name="status" ref="status" value="scheduled"  onChange={this.radioChange} checked={this.state.selectedOption === 'scheduled'} /> Interview Scheduled<br/>
					<input type="radio" name="status" ref="status" value="pending" onChange={this.radioChange} checked={this.state.selectedOption === 'pending'} /> Need To Apply<br/><br/>
					</div>

					{(this.state.displayDate) ? 
					<div><label htmlFor="date">Date : </label>
					<input id="date" type="date" ref="date"  required/><br/><br/></div>
					: null }

					<label htmlFor="notes">Notes : </label>
					<textarea  id="notes" ref="notes" cols="20" rows="3"></textarea><br/><br/>

					<button>Add Entry</button>
				</form>
			</div></div>
			)
	}
})
