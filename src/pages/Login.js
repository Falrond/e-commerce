import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "../pages/styles/Login.styled";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
