import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "68cbb62f99a9b802c83c9f0a",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Coca cola",
          imagePath: "1758178610944-coca-cola.png",
          price: 7,
        },
        quantity: 1,
        _id: "68cbb62f99a9b802c83c9f0b",
      },
    ],
    createdAt: "2025-09-18T07:35:11.056Z",
    __v: 0,
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}
