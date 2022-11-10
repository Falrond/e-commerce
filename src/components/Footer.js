import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sklep</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat debitis quos cum cumque sit hic magni eveniet itaque maxime
          numquam suscipit iure doloremque, a quis natus, distinctio quae veroo.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          622 Dexie Path, South Dacota 98546
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          111-111-111
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> lorem@gmail.com
        </ContactItem>
        {/* <Payment src="https://i.bb.co/Qfvn4z6/payment.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
