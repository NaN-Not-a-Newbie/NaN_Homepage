import React from "react";

import Section from "../../../HOC/Section";

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>동아리 </span>활동
          </h3>
          <center>
            <h6 className="section-subtitle">
              NaN 동아리에 가입하게 될 시 주어지는 해택과 활동은 다음과 같습니다. <br />

            </h6>
          </center>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex align-items-center">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-briefcase"></i>
                    </span>
                    동아리 서버 대여{" "}
                  </h5>
                  <p className="service-description">
                    동아리 서버를 통해 요금 걱정 없이 24시간 서버를 운영할 수 있습니다. <br/>
                    DNS, HTTPS 등 다양한 설정을 직접 해볼 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    {" "}
                    <span>
                      <i className="fas fa-chart-bar" />
                    </span>{" "}
                    다양한 프로젝트 경험{" "}
                  </h5>
                  <p className="service-description">
                    프로젝트 시작부터 관리, 발표 등 개발 뿐만 아니라 프로젝트에 대한 전반적인 이해를 위해 다양한 멘토링과 프로젝트 활동을 진행하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-fist-raised" />
                    </span>
                    프로그래밍 스터디
                  </h5>
                  <p className="service-description">
                    코딩 할 줄 몰라도 설치법 부터 알려줍니다.<br></br>
                    그냥 따라하면서 감을 잡고 프로그래밍에 재미를 느껴보세요.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="far fa-paper-plane" />
                    </span>
                    대외 활동 스터디
                  </h5>
                  <p className="service-description">
                    차세대 보안 리더 양성 프로그램, SW 마에스트로, S 개발자 등 다양한 대외활동에 참여하고 싶은데 어떻게 준비해야 할 지 모르는 사람들을 위해 별도의 서류, 면접 준비를 도와드립니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-gem" />
                    </span>
                    학부 연구생 모집
                  </h5>
                  <p className="service-description">
                    다양한 정부 과제를 수주 받고 일정의 인건비를 받을 수 있습니다. 
                    <br/>
                    보통 R&D 개발을 합니다. 연구와 개발을 통해 다양한 경험을 쌓고 역량을 강화할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    {" "}
                    <span>
                      {" "}
                      <i className="far fa-life-ring" />
                    </span>
                    다양한 스터디 지원
                  </h5>
                  <p className="service-description">
                    백엔드, 프론트엔드 스터디 뿐만 아니라 CJU 학습 동아리, 다양한 공모전과 대회를 준비하면서 스터디를 진행합니다. 아직 동아리방이 없긴한데 강의실 제공은 가능해서 별도의 스터디를 진행하고 있습니다. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
