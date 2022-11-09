import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "../components/styles/Newsletter.styled";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
