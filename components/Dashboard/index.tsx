import React from "react";
import { Context } from "../../context/context";
import { MaskAmountInput } from "../../helpers/MaskAmountInput";

import {
  Container,
  Card,
  CardNumber,
  CardText,
  CardTitle,
  CardContent,
} from "./styles";

const Dashboard: React.FC = () => {
  const { values } = React.useContext(Context);

  return (
    <Container>
      <Card>
        <CardTitle>Vendas neste mês</CardTitle>
        <CardContent>
          <CardNumber>50</CardNumber>
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Vendas na semana</CardTitle>
        <CardContent>
          <CardNumber>50</CardNumber>
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Valores</CardTitle>
        <CardContent>
          <CardText color='blue'>{MaskAmountInput(5000)}</CardText>
          <CardText color='purple'>{MaskAmountInput(3300)}</CardText>
          <CardText color='success'>{MaskAmountInput(1750)}</CardText>
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Vendas no último mês</CardTitle>
        <CardContent>
          <CardNumber color='success'>60</CardNumber>
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Itens em baixa no estoque</CardTitle>
        <CardContent>
          <CardText>Nenhum item em baixa</CardText>
        </CardContent>
      </Card>

      <Card>
        <CardTitle>Itens mais vendido no mês</CardTitle>
        <CardContent>
          <CardText>OYASUMI - M</CardText>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Dashboard;
