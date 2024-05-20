import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Section from "../../../HOC/Section";
import aboutImage1 from "../../../assets/img/about1.jpg";
import aboutImage2 from "../../../assets/img/about2.jpg";
import aboutImage3 from "../../../assets/img/about3.jpg";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>NaN </span>Programing Club
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                {/* <img src={aboutImage} alt="about company" /> */}
                <Carousel>
                  <Carousel.Item>
                    <img src={aboutImage1} alt="about company" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={aboutImage2} alt="about company" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={aboutImage3} alt="about company" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                 
                </Carousel>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">About us</h3>
              <div className="about-description">
                <p>저희는 청주대학교 디지털보안학과의 프로그래밍 동아리 입니다.</p>
                <p>
                  컴퓨터를 좋아하는 사람들, 컴퓨터와 친해지고 싶은 사람들이 모여 뭔가 재밌는 걸 만드는 동아리 입니다.
                </p>
                <p>
                  저희는 각종 대회와 다양한 프로젝트를 만들고, 새로운 기술을 배우며 IT 전반적인 트렌드를 따라가려고 노력하고 있습니다.
                  꼭 세상을 바꿀 대단한 프로그램을 만들지 않아도 내가 붙으면 남이 떨어지는 경쟁을 하지 않아도 프로그래밍이라는 것 자체는 정말 재미있습니다. 
                  기술과 지식을 공유하며 뭐가 됐든 일단 만들고 보는 프로그래밍 동아리를 찾고 있다면 지금 바로 가입하세요.
                </p>
                <strong>
                  본 소개 메세지는 자체 개발 LLM에 의해 생성되었습니다_
                </strong>
                <br />
                <br />
                <button className="btn btn-danger rounded-0">동아리 연혁 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
