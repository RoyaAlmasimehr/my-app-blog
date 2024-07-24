import MyNavbar from "../../components/navbar/MyNavbar";
import "./Articles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import Footer from "../../components/footer/Footer";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earlist");

  useEffect(() => {
    if (sortType == "earlist") {
      getArticlesByOrder("desc", "id");
    } else if (sortType == "shortest") {
      getArticlesByOrder("asc", "readingTime");
    } else if (sortType == "longest") {
      getArticlesByOrder("desc", "readingTime");
    } else if (sortType == "latest") {
      getArticlesByOrder("asc", "id");
    }
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getArticlesByOrder = (order, column) => {
    axios
      .get(`http://localhost:3000/articles/?order=${order}&column=${column}`)
      .then((response) => setArticles(response.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
          <div className="searchBoxContainer">
            <input className="searchInput" type="text" />
            <button className="searchButton">جستجو</button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      name="sort"
                      id="earlist"
                      label="جدیدترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      id="latest"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      id="longest"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      name="sort"
                      id="shortest"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <BiSolidCategory size="20px" />

                  <b>دسته بندی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2  row-cols-xl-3   gy-4 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Articles;
