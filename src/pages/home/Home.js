import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const[articles,setArticles]=useState([])

    useEffect( ()=>{
        axios
          .get("http://localhost:3000/articles")
          .then((response) => setArticles(response.data));

    },[])

  return (
    <div>
      <MyNavbar />
      <Container>
        <h1     style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2  row-cols-lg-3  row-cols-xl-4 gy-4 py-3">
          
          {articles.map((article) =>(
<Col>
  <ArticleItem  {...article}/>
</Col>
         
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;


