import React from "react";
import Section from "../../../HOC/Section";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import ceo from "../../../assets/img/p1.png";
import hong from "../../../assets/img/p2.jpg";
import seo from "../../../assets/img/seo.png";
import han from "../../../assets/img/han.png";
import lee from "../../../assets/img/lee.png";
import woo from "../../../assets/img/wo.png";
import son from "../../../assets/img/son.png";
import kim from "../../../assets/img/kim.png";

const Blog = () => {
  return (
    <Section id="blog">
      <div className="section-header pt-5 pb-5 text-center">
        <h3 className="section-title">
          <span>쇼 케이스 </span>
        </h3>
        <center>
          <h6 className="section-subtitle">
            프로젝트 현황입니다.
          </h6>
        </center>
      </div>
      <Splide aria-label="My Favorite Images" options={{

      }}>
        <SplideSlide>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={ceo} width={300}></img>
            <div style={{ justifyContent: 'center' }}>
              <h3>프로젝트 이름</h3>
              <p>설명</p>
            </div>

          </div>

        </SplideSlide>
        <SplideSlide>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={hong} width={300}></img>
            <div style={{ justifyContent: 'center' }}>
              <h3>프로젝트 이름</h3>
              <p>설명</p>
            </div>

          </div>
        </SplideSlide>
      </Splide>
    </Section>
  );
};

export default Blog;
