import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Hero from '../../components/hero/Hero'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperButton from "../../components/swiperButton/SwiperButton";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((response) => setArticles(response.data));
  }, []);


        

  return (
    <div>
      <MyNavbar />
      <Hero />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        {/* <Row className="row-cols-1 row-cols-md-2  row-cols-lg-3  row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row> */}
        <Row className="py-3"></Row>
        <Swiper
        className='customSwiperStyle'
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         
          spaceBetween={30}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 1,
            },
          }}
        >

<div className="swiperTopSection">
  <h2 className="sectionTitle">
جدیدترین مقالات
  </h2>
  <SwiperButton />
</div>




          <SwiperSlide>
            <ArticleItem {...articles[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleItem {...articles[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleItem {...articles[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleItem {...articles[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleItem {...articles[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleItem {...articles[5]} />
          </SwiperSlide>
        </Swiper>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
