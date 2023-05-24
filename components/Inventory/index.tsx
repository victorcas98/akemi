import React from "react";
import { Context } from "../../context/context";
import SearchInput from "../Inputs/SearchInput";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

import {
  Container,
  Item,
  Line,
  List,
  Amount,
  Title,
  PaginationContainer,
  Arrow,
  ItemLine,
  Button
} from "./styles";
import { MaskAmountInput } from "../../helpers/MaskAmountInput";
import RegiterProductModal from "../Modals/RegiterProductModal";

const Inventory: React.FC = () => {
  const { values } = React.useContext(Context);

  const [page, setPage] = React.useState<number>(0);
  const numberOfPages = 7;
  const invetoryItems = [
    { name: "OYASUMI", size: "M", amount: 5, price: 40 },
    { name: "BOYASUMI", size: "M", amount: 2, price: 40 },
    { name: "COYASUMI", size: "G", amount: 3, price: 40 },
    { name: "DOYASUMI", size: "M", amount: 0, price: 40 },
    { name: "EOYASUMI", size: "M", amount: 7, price: 40 },
    { name: "FOYASUMI", size: "M", amount: 13, price: 40 },
    { name: "GOYASUMI", size: "M", amount: 20, price: 40 },
  ];
  const [openRegister, setOpenRegister] = React.useState<boolean>(false)

  const list = React.useMemo(() => {
    return invetoryItems.map(({ name, size, amount, price }, index) => {
      return (
        <ItemLine key={index}>
          <Item>{name}</Item>
          <Item>{size}</Item>
          <Amount
            almostFinishing={amount <= 3 && amount != 0}
            finished={amount === 0}
          >
            {amount}
          </Amount>
          <Item>{MaskAmountInput(price)}</Item>
        </ItemLine>
      );
    });
  }, []);
  return (
    <Container>
      <RegiterProductModal isOpen={openRegister} setIsOpen={setOpenRegister} />
      <SearchInput />
      <Button onClick={()=> setOpenRegister(true)}>Cadastrar novo produto</Button>
      <List>
        <Line>
          <Title>Nome</Title>
          <Title>Tamanho</Title>
          <Title>Quantidade</Title>
          <Title>Preço</Title>
        </Line>
        {list}
      </List>

      <PaginationContainer>
        <Arrow
          onClick={() => {
            page !== 0 ? setPage((formerValue) => formerValue - 1) : {};
          }}
        >
          <BiLeftArrowCircle />
        </Arrow>
        {page}
        <Arrow
          onClick={() => {
            page !== numberOfPages ? setPage((formerValue) => formerValue + 1) : {};
          }}
        >
          <BiRightArrowCircle />
        </Arrow>
      </PaginationContainer>
    </Container>
  );
};
export default Inventory;
