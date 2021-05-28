import NavBar from "../nav/nav";
import gears from "../../imgs/gears.png";
import self from "../../imgs/self.jpg";
import Card from "react-bootstrap/Card";
import "./style.css";

function Header() {
  return (
    <>
      <NavBar />
      <header
        className="App-header"
        style={{ backgroundImage: `url(${gears})` }}
      >
        <Card
          bg="secondary"
          style={{ width: "75%" }}
          className="shadow-lg rounded"
        >
          <Card.Header className="bg-dark" as="h2">
            Brian Hernandez
          </Card.Header>
          <div>
            <Card.Body>
              <img
                className="bannerSelfie shadow-lg"
                src={self}
                alt="Brian's portrait"
              />
              <div>
                <Card.Text className="display-block">
                  Hello! My name is Brian. I am a developer with aspirations to
                  play my part in helping our world become more optimized. I
                  hope to make things easier for us humans to allow us more time
                  to focus on things that really matter.
                </Card.Text>
              </div>
            </Card.Body>
          </div>
        </Card>
      </header>
    </>
  );
}

export default Header;
