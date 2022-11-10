import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 30px 0;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
export {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
};
