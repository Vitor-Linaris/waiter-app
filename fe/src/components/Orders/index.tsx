import { useEffect, useState } from "react";
import type { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get("/orders").then((data) => {
      setOrders(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em produção" orders={orders} />
      <OrdersBoard icon="✅" title="Pronto" orders={orders} />
    </Container>
  );
}
