import Header from "../components/header";
import Footer from "../components/footer";
import Items from "../components/items";



export default function Home(props) {
 return (
    <div>
      <Header pageTitle={"Whats New"} />
      <Items {...props} />
      <Footer />
    </div>
  );
}


//get latest items data and pass it to item list components
export async function getServerSideProps() {
  const resp = await fetch(`http://fashionista.fans/api/user/wishList`);
  const items = await resp.json();
  return {
    props: {
      items,
    },
  };
}

