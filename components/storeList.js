import StoreCard from "./storeCard";

export default function StoreList(props) {

  return (
    <main className="content container">
      {props.storeList.map((item, index) => (
        <StoreCard {...item} key={index} />
      ))}
    </main>
  );
}
