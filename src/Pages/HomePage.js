import React from "react";
import HomePageNavBar from "../Components/HomePageNavBar";
import mainBannerLeft from "../Assets/main bannerLogo.png";
import mainBannerRight from "../Assets/mainBannerImage.png";
import features from "../Assets/features.png";
import test1 from "../Assets/list.png";

export default function HomePage() {
  return (
    <div>
      <HomePageNavBar />
      <div className="mainBanner">
        <div className="container">
          <div className="row">
            <div class="col-md-7">
              <div class="p-3">
                <div className="mainbanner-left">
                  <img src={mainBannerLeft} className="mainBannerLeft" />
                  <h2>Sample Text</h2>
                  <p>
                    These are short, famous texts in English from classic
                    sources like the Bible or Shakespeare. Some texts have word
                    definitions and explanations to help you.
                  </p>
                  <button>Button</button>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="p-3">
                <img src={mainBannerRight} className="mainBannerRight" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="my-5">
              <hr />
            </div>
            <div class="col-md-6">
              <h1>Features</h1>
              <img className="features" src={features} alt="features" />
            </div>
            <div class="col-md-6">
              <ul className="pt-5">
                <li>Feature 1 will be here</li>
                <li>Feature 1 will be here</li>
                <li>Feature 1 will be here</li>
                <li>Feature 1 will be here</li>
                <li>Feature 1 will be here</li>
              </ul>
            </div>
            <div className="my-5">
              <hr />
            </div>
            <div class="col-md-6">
              <h1>Test Case 01</h1>
              <p className="testcase">
                Some description on the test case will be here. <br />
                These are short, famous texts in English from classic sources
                like the Bible or Shakespeare. Some texts have word definitions
                and explanations to help you.
              </p>
              <a href="/test1">Try Test Case</a>
            </div>

            <div class="col-md-6 ">
              <img className="test1" src={test1} alt="test1" />
            </div>
            <div className="mt-5">
              <hr />
            </div>
            <div class="col-md-6">
              <h1>Test Case 02</h1>
              <p className="testcase">
                Some description on the test case will be here. <br />
                These are short, famous texts in English from classic sources
                like the Bible or Shakespeare. Some texts have word definitions
                and explanations to help you.
              </p>
              <a href="/test2">Try Test Case</a>
            </div>

            <div class="col-md-6 ">
              <img className="test1" src={test1} alt="test1" />
            </div>
            <div className="mt-5">
              <hr />
            </div>
            <div class="col-md-6">
              <h1>Test Case 03</h1>
              <p className="testcase">
                Some description on the test case will be here. <br />
                These are short, famous texts in English from classic sources
                like the Bible or Shakespeare. Some texts have word definitions
                and explanations to help you.
              </p>
              <a href="/test3">Try Test Case</a>
            </div>

            <div class="col-md-6 ">
              <img className="test1" src={test1} alt="test1" />
            </div>
            <div className="mt-5">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
