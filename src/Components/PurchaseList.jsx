import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import PurchaseCrad from "./PurchaseCrad";

function PurchaseList() {
  const [btnclick, setbtnclick] = useState(0);

  function hightUp() {
    document.getElementById("chartdiv").style.height = "800px";
    document.getElementById("chartdiv").style.overflow = "scroll";
    setbtnclick(1);
  }
  function hightDown() {
    document.getElementById("chartdiv").style.height = "180px";
    document.getElementById("chartdiv").style.overflow = "hidden";
    setbtnclick(0);
  }

  return (
    <Container className="card  px-5">
      <Row data-aos="zoom-in" className="small-heading mt-3">
        Purchases{" "}
      </Row>
      <hr data-aos="zoom-in" className="text-muted" />
      <div className="card-purchase" id="chartdiv">
        <div data-aos="zoom-in" className="account1 d-flex">
          <div className="Purchase-heading text-center">Package Name</div>
          <div className="Purchase-heading Purchase-hide text-center">
            Duration
          </div>
          <div className="Purchase-heading text-center">Purchase date</div>
          <div className="Purchase-heading Purchase-hide text-center">
            Revoked
          </div>
        </div>
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
        <PurchaseCrad />
      </div>

      <hr />
      <p className="text-center">
        <div id="chartdiv"></div>
        {btnclick === 0 && (
          <p onClick={hightUp} className="small-heading btn-see-purchase mb-3">
            See all Purchases <i class="fas fa-caret-down"></i>
          </p>
        )}
        {btnclick === 1 && (
          <p
            onClick={hightDown}
            className="small-heading btn-see-purchase mb-3"
          >
            Show less Purchases <i class="fas fa-caret-up"></i>
          </p>
        )}
      </p>
    </Container>
  );
}

export default PurchaseList;
