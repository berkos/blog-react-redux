import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
      return (
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            //instead of
            // onChange={field.input.onChange}
            // onFocus={field.input.onFocus}
            // this wires up everything
            type="text"
            {...field.input}
          />
        </div>
      );
  }

  renderTagsField(field) {
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
        </div>
      );
  }

  render() {
    return (
      <div>
        <form>
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
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);
