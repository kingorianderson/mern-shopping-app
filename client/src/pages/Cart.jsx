 
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { tablet } from '../responsive';
import { medium } from '../responsive';
import { large } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  
  ${mobile({padding: "10px"}) }
  ${tablet({padding: "10px"}) }
  ${tablet({margin: "30px"}) }
  ${medium({margin: "20px"}) }
  ${large({margin: "50px"}) }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  
  border-color: black;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
                    props.type === "filled" ? "black" : "transparent"};
  color:            ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product =styled.div`
  display: flex;
  margin-bottom: 3%;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const ProductDetail =styled.div`
  flex: 2;
  display: flex;
`;
const Image =styled.img`
width: 200px;
${mobile({ width: "150px" })}
${tablet({ width: "170px" })}
`;
const Details =styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName =styled.span``;
const ProductId =styled.span``;

const ProductColor =styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
`;
const ProductSize =styled.span``;
const PriceDetail =styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ flexDirection: "column" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })} 
`;

const Hr = styled.hr`
  background-color: #4d4d4d;
  border: none;
  height: 1px;
  width: 98%;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-size: ${props=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  
`;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;

const Cart = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag (2)</TopText>
                      <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                <Info>
                <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/kgkSXyj/air-jordan-13-court-purple.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> AIR JORDAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="#52307C" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Kes 4500</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/4WZWcLK/product2.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> GORILLA AFRICA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Kes 550</ProductPrice>
              </PriceDetail>
            </Product>
                </Info>
                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>Kes 5050</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>Kes 200</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>Kes -200</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem  type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>Kes 5050</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
                </Summary>
              </Bottom>
          </Wrapper>

          <Footer/>
      </Container>
  )
};

export default Cart;
