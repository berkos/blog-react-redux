import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
      return (
        <div className="form-group">
          <label>{field.label}:</label>
          <input
            className="form-control"
            //instead of
            // onChange={field.input.onChange}
            // onFocus={field.input.onFocus}
            // this wires up everything
            type="text"
            {...field.input}
          />
          {field.meta.error}
        </div>
      );
  }

  onSubmit(values) {
    // this === component
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />

          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />

          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors  = {};

  // Validate the input from 'values'
  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }

  if(!values.categories) {
    errors.categories = "Enter some category";
  }

  if(!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
