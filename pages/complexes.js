import Header from "../components/header";
import Footer from "../components/footer";
import ComplexList from "../components/complexList";

export default function Complexes(props) {
  return (
    <div>
      <Header pageTitle={"Complexes"} />
      <ComplexList {...props} />
      <Footer />
    </div>
  );
}

//get latest items data and pass it to item list components
export async function getServerSideProps() {
  const resp = await fetch(`https://fashionista.fans/api/complexes`);
  const complexes = await resp.json();
  return {
    props: {
      complexes,
    },
  };
}
