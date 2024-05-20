import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/home_bg.jpg";
import Link from "../../UI/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          // style={{ backgroundImage: `url(${bgImage})` }}
          style={{ backgroundColor: "#040D12" }}
        >
          <div className="intro container text-left text-light">
            <h1 className="title">Not a Newbie</h1>
            <div class="sub">
              <span>청주대학교</span>
              <span>프로그래밍 동아리</span>
            </div>
            <div className="btns">
              <Link target="about" classes="btn btn-danger rounded-0 mr-2">
                더보기
              </Link>
              <a
                href="https://forms.gle/u3XM9JAdHKjt8HgY8"  // Replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"  // Add this for security reasons
                className="btn btn-light text-dark rounded-0"
              >
                가입 신청 <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
