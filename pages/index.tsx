import React from "react";
import Dashboard from "../components/Dashboard";
import Inventory from "../components/Inventory";
import { Context } from "../context/context";
import api from "../services/api";
import { Container } from "./styles";

export default function Home() {
  const { page } = React.useContext(Context)
  const [items, setItems] = React.useState([]);

    interface IHashPages {
    [key: number]: JSX.Element
  }


  const HashPages: IHashPages = {
    0: <Dashboard />,
    1: <Inventory/>,
    2: <>caixa</>,
  }

    React.useMemo(async () => {
      try {
        const response = await api.get(`item`);
        setItems(response.data);
      } catch (error) {
        console.log('error: ', error);
      }
    
    }, []);
  return (
    <Container>
      {HashPages[page]}
    </Container>
  )
}

