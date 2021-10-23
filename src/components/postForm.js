import React, { Component } from "react";
import { Link } from "@reach/router";

import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

class PostForm extends Component{

	constructor(props) {
	    super(props);
	    this.state = {};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	async handleSubmit(event) {
		event.preventDefault();
		// console.log(this.state);

	    const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(this.state)
    	};

	    const resp = await fetch('https://cloudflare-general-assignment.dhara30a.workers.dev/posts', requestOptions);

	    if (resp.status === 200){
	    	this.setState({})
        	alert('New Post Added Successfully');
	    } else{
			alert('An Error occured!!! Please try again.');    	
	    }
	}

	render(){
		return (
			<div className="container">
				<div>
					<Link to="/">Go Back</Link>
				</div>

			<div className="newPost">
				<h2>Add new Post</h2>
				<form id="add-post" onSubmit={this.onSubmit}>
			    <div>
			    	<TextField name="title" id="standard-basic" label="Title" variant="standard" value={this.state.value} onChange={this.handleChange} />
			    </div>
				<br/>
			    <div>
			    	<TextField name="username" id="standard-basic" label="Username" variant="standard" value={this.state.value} onChange={this.handleChange} />
			    </div>
				<br/>
			    <div>
			    	<label>Content:</label><br/>
					<TextareaAutosize
						name="content"
						value={this.state.value} 
						onChange={this.handleChange}
							aria-label="minimum height"
							minRows={10}
							placeholder="Enter post body"
							style={{ width: 400 }}
						/>
				
			    </div>
				<br/>
				<div>
					<Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
				</div>
				</form>
			</div>
			</div>
			)
	}
}

export default PostForm