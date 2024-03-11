import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [textName, setTextName] = useState("");

  const SearchName = (event) => {
    event.preventDefault();
    dispatch({
      type: "SEARCH_NAME",
      payload: { textName },
    });
  };

  const textChange = (event) => {
    // console.log("@@@: ", event.target.value);
    setTextName(event.target.value);
  };

  return (
      <Form onSubmit={SearchName} className="SearchBox">
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              value={textName}
              onChange={textChange}
            />
          </Col>
          <Col lg={2}>
            <Button variant="primary" type="submit">
              찾기
            </Button>
          </Col>
        </Row>
      </Form>
  );
};

export default SearchBox;
