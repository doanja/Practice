import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

class Books extends Component {
  state = {
    books: [],
    title: '',
    author: '',
    synopsis: ''
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data, title: '', author: '', synopsis: '' }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlesubmit = e => {
    e.preventDefault();
    API.saveBook({
      title: this.state.title,
      author: this.state.title,
      synopsis: this.state.synopsis
    })
      .then(res => {
        this.loadBooks();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.tiel}
                placeholder='Title (required)'
                type='text'
                name='title'
                className='form-control'
                onChange={e => this.handleChange(e)}
              />
              <Input
                value={this.state.author}
                placeholder='Author (required)'
                type='text'
                name='author'
                className='form-control'
                onChange={e => this.handleChange(e)}
              />
              <TextArea
                value={this.state.synopsis}
                placeholder='Synopsis (Optional)'
                name='synopsis'
                type='text'
                name='synopsis'
                className='form-control'
                onChange={e => this.handleChange(e)}
              />
              <FormBtn onClick={this.handlesubmit}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size='md-6 sm-12'>
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={'/books/' + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
