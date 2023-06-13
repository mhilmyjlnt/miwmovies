import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title text-center">SNEAKFLIX </div>
            <div className="subtitle">
              website nonton film gratis gak pake karcis{" "}
            </div>
            <div className="IntroButton mt-4 text-center">
              <Button variant="dark" href="#trending">
                Lihat Semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
