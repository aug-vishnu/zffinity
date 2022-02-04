import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import ProfileCard from "../../Components/ProfileCard";
import PurchaseList from "../../Components/PurchaseList";

function Profile() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <hr />
        <Row className="profileSection">
          <div className="heading">Profile & Purchase History</div>
          <Col>
            <ProfileCard></ProfileCard>
          </Col>
          <Col>
            <PurchaseList></PurchaseList>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
