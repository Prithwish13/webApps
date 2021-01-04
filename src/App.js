import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [iscross, setIscross] = useState(false);
  const [winner, setWinner] = useState("");
  const reloadGame = () => {
    setIscross(false);
    setWinner("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinner(`${itemArray[0]} won`);
      return;
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinner(`${itemArray[3]} won`);
      return;
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinner(`${itemArray[6]} won`);
      return;
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinner(`${itemArray[0]} won`);
      return;
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinner(`${itemArray[1]} won`);
      return;
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinner(`${itemArray[2]} won`);
      return;
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinner(`${itemArray[0]} won`);
      return;
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinner(`${itemArray[2]} won`);
      return;
    } else if (!itemArray.includes("empty")) {
      setWinner("math draw");
    }
  };

  const changeItem = itemNumber => {
    if (winner) {
      return toast(winner, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = iscross ? "cross" : "circle";
      setIscross(!iscross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="buttom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winner ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winner}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {iscross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                color="warning"
                onClick={() => {
                  changeItem(index);
                }}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
