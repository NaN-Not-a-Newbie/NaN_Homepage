import React, { useState, useEffect } from "react";
import Link from "../Link/Link";
import IconImage from "../../../assets/img/icon.png";
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from "react-bootstrap";

const Nav = () => {
  const [navClass, setNavClass] = useState("");
  const [toggeledNav, settoggeledNav] = useState(false);
  const [msg, setMsg] = useState("");
  const [joinData, setJoinData] = useState({
    username: "",
    password: "",
    chkpassword: "",
    email: "",
    comment: "",
  });
  // 모달 표시 여부를 위한 상태값 추가
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let navClass = "";
      if (window.scrollY >= 200) {
        navClass = "scrolled";
      }
      setNavClass(navClass);
    });
  }, []);

  // 모달을 표시하거나 숨기는 함수
  const handleShowModal = () => setShowModal(!showModal);

  const handleValue = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setJoinData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleJoin = (e) => {
    e.preventDefault();  // Prevent the default form submission
    setMsg("");  // Clear previous messages

    if (joinData.password !== joinData.chkpassword) {
      setMsg("비밀번호가 일치하지 않습니다!");
      return;  // Exit if validation fails
    }


    fetch('/api/user/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joinData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setShowModal(false);  
      })
      .catch((error) => {
        console.error('Error:', error);
        setMsg("회원 가입에 실패했습니다. 다시 시도해 주세요.");  
      });
  }

  return (
    <>
      <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
        <div className="container">
          <a className="navbar-brand" href="!#">
            <img
              src={IconImage}
              width={"40"}
              height={"40"}
              style={{ marginBottom: "5px", marginRight: "10px" }}
            ></img>
            <span
              style={{
                fontFamily: "Noto sans KR, sans-serif",
                color: "black",
                fontStyle: "bold",
              }}
            >
              Na
            </span>
            <span
              style={{
                fontFamily: "Noto sans KR, sans-serif",
                color: "#d53232",
                fontStyle: "bold",
              }}
            >
              N
            </span>
          </a>

          <div
            className={`collapse navbar-collapse ${toggeledNav ? "show" : ""}`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link target="home" offset={-120} classes="nav-link">
                  홈
                </Link>
              </li>
              <li className="nav-item">
                <Link target="about" classes="nav-link">
                  소개
                </Link>
              </li>
              <li className="nav-item">
                <Link target="services" classes="nav-link">
                  동아리 활동
                </Link>
              </li>
              <li className="nav-item">
                <Link target="blog" classes="nav-link">
                  프로젝트
                </Link>
              </li>
              <li className="nav-item">
                <Link target="map" classes="nav-link">
                  지도
                </Link>
              </li>
            </ul>
          </div>

          <div className={`collapse navbar-collapse justify-content-end ${toggeledNav ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link target="/login" classes="nav-link">
                  로그인
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={handleShowModal}>
                  회원가입
                </div>
              </li>
            </ul>
          </div>

          <div
            className={`navbar-toggler nav-icon ${toggeledNav ? "open" : ""}`}
            onClick={toggleNav}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleShowModal} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>회원 가입</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleJoin}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="username"
                autoFocus
                autoComplete='off'
                value={joinData.username}
                onChange={handleValue}
                required
              />
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="password"
                value={joinData.password}
                onChange={handleValue}
                required
              />
              <Form.Label>비밀번호 재확인</Form.Label>
              <Form.Control
                name="chkpassword"
                type="password"
                placeholder="password"
                value={joinData.chkpassword}
                onChange={handleValue}
                required
              />
              <Form.Label>이메일</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete='off'
                value={joinData.email}
                onChange={handleValue}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>한줄 소개</Form.Label>
              <Form.Control
                name="comment"
                type="text"
                placeholder="간단하게 나를 표현하자면?"
                value={joinData.comment}
                onChange={handleValue}
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <div className="w-100 d-flex justify-content-between">
              <span style={{ color: 'red' }}>{msg}</span>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Nav;
