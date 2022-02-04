import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ButtonFlat from "../Utils/ButtonFlat";
import Fade from "react-reveal/Fade";
import axios from "axios";
import bgGif from "../Assets/bggif1.gif";

function OurServers() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.craftingstore.net/v7/payments/";
    axios({
      method: "get",
      url: apiUrl,
      data: {},
      headers: {
        token: "PFyU8gPyRYO2onZFQHcmQwLBha9bJIGDvgszHOhJPcFC3V5aVM",
        "Access-Control-Allow-Origin": true,
      },
    }).then((repos) => {
      console.log(repos);
      setAppState({ loading: false, repos: repos });
    });
  }, [setAppState]);

  return (
    <div className="OurServers" id="ourServers">
      <Container>
        <div className="heading OurServers2 pb-1">OUR SERVERS</div>
        <Fade bottom cascade>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <Card className="text-center">
                <Card.Header>Affinity Main | NA</Card.Header>
                <Card.Body className="text-muted">
                  <Card.Text>
                    <div className="points">
                      <ul className="p-0 pb-1 m-0">
                        <li className="text-center">
                          <div className="point ">
                            <p>2X</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>Gameplay Rules</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>High pop</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <ButtonFlat
                    href="steam://connect/142.252.252.240:28015"
                    content="Connect"
                  ></ButtonFlat>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <Card className="text-center">
                <Card.Header>Affinity Mondays | NA</Card.Header>
                <Card.Body className="text-muted">
                  <Card.Text>
                    <div className="points">
                      <ul className="p-0 pb-1 m-0">
                        <li className="text-center">
                          <div className="point ">
                            <p>2X</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>Gameplay Rules</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>High pop</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <ButtonFlat
                    href="steam://connect/142.252.252.240:28017"
                    content="Connect"
                  ></ButtonFlat>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <Card className="text-center">
                <Card.Header>Affinity Main | SEA</Card.Header>
                <Card.Body className="text-muted">
                  <Card.Text>
                    <div className="points">
                      <ul className="p-0 pb-1 m-0">
                        <li className="text-center">
                          <div className="point ">
                            <p>2X</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>Gameplay Rules</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>High pop</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <ButtonFlat
                    href="steam://connect/103.107.199.82:28015"
                    content="Connect"
                  ></ButtonFlat>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {" "}
              <Card className="text-center">
                <Card.Header>Affinity Mondays | SEA</Card.Header>
                <Card.Body className="text-muted">
                  <Card.Text>
                    <div className="points">
                      <ul className="p-0 pb-1 m-0">
                        <li className="text-center">
                          <div className="point ">
                            <p>2X</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>Gameplay Rules</p>
                          </div>
                        </li>
                        <li className="text-center">
                          <div className="point ">
                            <p>High pop</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <ButtonFlat
                    href="steam://connect/103.107.198.70:28017"
                    content="Connect"
                  ></ButtonFlat>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default OurServers;
