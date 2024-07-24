import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import heroImage from '../../assets/images/hero.svg'
import HeroBox from "../HeroBox/HeroBox";
import { FaUserAlt,FaCode} from "react-icons/fa"
import { MdArticle} from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Hero() {
useEffect( ()=>{
AOS.init()
},[])

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-items-center">
            <Col className="col-12 col-md-6 p-5" data-aos="zoom-in">
              <img src={heroImage} className="heroImg  img-fluid" />
            </Col>
            <Col className="col-12 col-md-6" data-aos="zoom-in">
              <h2 className="heroTitle">آمارها باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2  gy-4">
                <Col>
                  <HeroBox title={"تعداد دانشجو"} count={3500}>
                    <FaUserAlt size="30px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"تعداد مقاله"} count={690}>
                    <MdArticle size="30px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"تعداد دوره"} count={19}>
                    <ImBooks size="30px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title={"پروژه موفق"} count={15}>
                    <FaCode size="30px" />
                  </HeroBox>
                </Col>
              </Row>
              <p className="startLearning">
                <b>شروع آموزش</b>
                <BsFillSkipStartFill size="40px" />
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #719192"
          fill-opacity="1"
          d="M0,32L48,32C96,32,192,32,288,42.7C384,53,480,75,576,101.3C672,128,768,160,864,154.7C960,149,1056,107,1152,74.7C1248,43,1344,21,1392,10.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
