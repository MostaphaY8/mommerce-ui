import { useState } from "react";
import Navbar from "./Navbar";

type Props = {
  children: (selectedCard: string) => React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [selectedCard, setSelectedCard] = useState("default");

  return (
    <div className="min-h-screen">
      <Navbar selectedCard={selectedCard} onChangeCard={setSelectedCard} />

      <div className="p-4">{children(selectedCard)}</div>
    </div>
  );
};

export default Layout;
