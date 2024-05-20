import React from "react";

import Link from "../Link/Link";

const footer = () => {
  return (
    <footer className="">
      <div className="container text-light pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
            <div className="footer-title">
              <h6>동아리 소개</h6>
            </div>
            <div className="footer-content">
              <p>
                <small>청주대학교 디지털보안학과 프로그래밍 동아리</small>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
            <div className="footer-title">
              <h6>Quick Links</h6>
            </div>
            <div className="footer-content">
              <ul className="list-group quick-links">
                <li>
                  <Link target="home" offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target="about">소개</Link>
                </li>
                <li>
                  <Link target="services">기술과 서비스</Link>
                </li>
                <li>
                  <Link target="blog">구성원</Link>
                </li>
                {/* <li>
                  <Link target="contact">Contact</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>뉴스 & 소식</h6>
            </div>
            <div className="footer-content">
              <p>
                <small className=""></small>
              </p>
              <p>
                <small className="">
                  한국경제 - 해군 창업 경진대회 우승
                  <br />
                  <a
                    href="https://www.hankyung.com/article/202205276556i"
                    target="_blank"
                  >
                    (더보기)
                  </a>
                </small>
              </p>
              <p>
                <small className="">
                  국방일보 - 바다사랑 재단에 우승상금 기부 <br />
                  <a
                    href="https://kookbang.dema.mil.kr/newsWeb/m/20211216/6/BBSMSTR_000000010026/view.do"
                    target="_blank"
                  >
                    (더보기)
                  </a>
                </small>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Contact Us</h6>
            </div>
            <div className="footer-content">
              <p className="">
                <small>
                  Address : 청주대학교 융합관 (동방 없음 ㅋ)
                </small>
              </p>
              <p className="">
                <small>회장 : 서종찬</small>
              </p>
              <p className="">
                <small>이메일 : dswhdcks@naver.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer pt-3 pb-3 text-center">
        <small>© All Right Reserved. 2024 | NaN</small>
      </div>
    </footer>
  );
};

export default footer;
