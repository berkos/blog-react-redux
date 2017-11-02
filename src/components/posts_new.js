import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
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
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    //console.log(values);
    // this === component
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;

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
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the input from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }

  if (!values.categories) {
    errors.categories = "Enter some category";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost})(PostsNew)

);
