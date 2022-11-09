import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sklep</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat debitis quos cum cumque sit hic magni eveniet itaque maxime
          numquam suscipit iure doloremque, a quis natus, distinctio quae vero.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
