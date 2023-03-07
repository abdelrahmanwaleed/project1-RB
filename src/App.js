import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container id="main-container" className="h-100">
      <Form id="asi-form" className="text-center fs-3 w-100">
        <h1>Please Sign In</h1>
        <Form.Group>
          <Form.Control
            type="email"
            size="large"
            placeholder="Email address"
            autoComplete="username"
            className="mb-3"
          ></Form.Control>
          <Form.Control
            type="password"
            size="large"
            placeholder="password"
            autoComplete="username"
            className="mb-3"
          ></Form.Control>
          <Button className="m-2">Login</Button>
          <Button className="m-2">Register</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
