import { useEffect, useState } from "react";
import ItemCard from "./itemCard";

export default function Items(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items.data);
  }, []);

  return (
    <main className="content container">
      {items.map((item, index) => (
        <ItemCard {...item} key={index} />
      ))}
    </main>
  );
}
