import React from 'react';

  

class DemoForm extends React.Component {

    constructor() {

    super();

    this.state = {

      input: {},

      errors: {}

    };

     

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

     

  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;
    this.setState({

      input

    });

  }

    

 
     

  render() {

    return (

      <div>

        <h1>React Form Validation Example - HDTuto.com</h1>

        <form onSubmit={this.handleSubmit}>

  

          <div class="form-group">

            <label for="name">Name:</label>

            <input 

              type="text" 

              name="name" 

              value={this.state.input.name}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Enter name" 

              id="name" />

  

              <div className="text-danger">{this.state.errors.name}</div>

          </div>

  

          <div class="form-group">

            <label for="email">Email Address:</label>

            <input 

              type="text" 

              name="email" 

              value={this.state.input.email}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Enter email" 

              id="email" />

   

              <div className="text-danger">{this.state.errors.email}</div>

          </div>

  

          <div class="form-group">

            <label for="comment">Comment:</label>

            <textarea 

              name="comment"

              value={this.state.input.comment} 

              onChange={this.handleChange}

              placeholder="Enter comment"

              class="form-control" />

  

              <div className="text-danger">{this.state.errors.comment}</div>

          </div>

             

          <input type="submit" value="Submit" class="btn btn-success" />

        </form>

      </div>

    );

  }

}

  

export default DemoForm;{
    let { formErrors,formDetail } = this.state;
      var pattern = new RegExp(/^[a-z][a-zA-Z_]*(\.[a-zA-Z][a-zA-Z_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/);;
    if ( !pattern.test( formDetail.Email ) )
    {
      formErrors.Email = "Enter Valid Email";
          
    }      
}