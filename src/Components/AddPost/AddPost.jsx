import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AddPost.scss";

const AddPost = () => {
  return (
    <>
      <div className="AddContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add post</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Add here ..." />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Browse</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </div>
    </>
  );
};

export default AddPost;
