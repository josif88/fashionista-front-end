import { useEffect, useState } from "react";
import ComplexCard from "./complexCard";

export default function ComplexList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.complexes.data);
  }, []);

  return (
    <main className="content container">
      {items.map((item, index) => (
        <ComplexCard {...item} key={index} />
      ))}
    </main>
  );
}
