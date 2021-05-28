// import { projects } from "../../utils/projects.json";
import { Card, Row, Col } from "react-bootstrap";
import "./style.css";
import cacheapp from "../../imgs/CacheApp.png";
import alltrails from "../../imgs/alltrailsbanner.png";
import gbsearch from "../../imgs/gbsearch.png";
import commerce from "../../imgs/commerce.png";
import readme from "../../imgs/readme.jpg";

function Projects() {
  return (
    <Row xs={1} md={2} className="g-4" id="projects">
      <Col>
        <Card className="shadow-lg" bg="secondary" text="white">
          <Card.Img className="projectimg" variant="top" src={cacheapp} />
          <Card.Body>
            <Card.Title>CacheApp</Card.Title>
            <Card.Text>Financial budgeting App</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="cache-app-io.herokuapp.com/" className="text-warning">
              Deployed here
            </a>
          </Card.Footer>
        </Card>
        <Card className="shadow-lg" bg="secondary" text="white">
          <Card.Img className="projectimg" variant="top" src={alltrails} />
          <Card.Body>
            <Card.Title>AllTrails-And-Parks</Card.Title>
            <Card.Text>
              A map search tool to find local parks and trails
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://hdezbriant.github.io/AllTrails-AND-Parks/"
              className="text-warning"
            >
              Deployed here
            </a>
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card className="shadow-lg" bg="secondary" text="white">
          <Card.Img className="projectimg" variant="top" src={gbsearch} />
          <Card.Body>
            <Card.Title>Google Books Searchinator</Card.Title>
            <Card.Text>Search tool using Google Books API</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://google-books-searchinator.herokuapp.com/"
              className="text-warning"
            >
              Deployed here
            </a>
          </Card.Footer>
        </Card>
        <Card className="shadow-lg" bg="secondary" text="white">
          <Card.Img className="projectimg" variant="top" src={readme} />
          <Card.Body>
            <Card.Title>README Generator</Card.Title>
            <Card.Text>
              A CLI tool to generate README files for a project
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://github.com/hdezbriant/README-generator"
              className="text-warning"
            >
              Github Repository
            </a>
          </Card.Footer>
        </Card>
        <Card className="shadow-lg" bg="secondary" text="white">
          <Card.Img className="projectimg" variant="top" src={commerce} />
          <Card.Body>
            <Card.Title>E-Commerce Backend</Card.Title>
            <Card.Text>
              Starter code for an e-commerce app's SQL database
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://github.com/hdezbriant/E-Commerce-Starter-Backend"
              className="text-warning"
            >
              Deployed here
            </a>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Projects;
