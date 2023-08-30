import React from "react";
import navbarImage from "../Assets/productNavbarLogo.png";

export default function HomePageNavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <div className="row">
          <div class="col-md-7">
            <div class="p-3">
              <img src={navbarImage} alt="navbar image" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="p-3">
              <div className="d-flex justify-content-end">
                <a href="/admin">Admin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
