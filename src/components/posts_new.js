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
            label="Tags"
            name="tags"
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

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
