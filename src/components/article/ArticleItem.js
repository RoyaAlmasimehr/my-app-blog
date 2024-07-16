import "./ArticleItem.css";
import { IoTimeOutline } from "react-icons/io5";
import { TiArrowLeftThick } from "react-icons/ti";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ArticleItem(props) {
     console.log(props.image);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="py-2">{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Link to={`/article/${props.id}`}>
            <span className="read-more">
              <span>ادامه مقاله</span>
              <TiArrowLeftThick size="25px" />
            </span>
          </Link>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center py-3">
          <span> نویسنده:{props.writter}</span>
          <span>
            <IoTimeOutline />
            {props.readingTime} دقیقه
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ArticleItem;
