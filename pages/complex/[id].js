import { Tabs } from "antd";
import Footer from "../../components/footer";
import Header from "../../components/header";
import StoreList from "./../../components/storeList";
import { useState } from "react";
import { useEffect } from "react";

const { TabPane } = Tabs;

const ComplexPage = (props) => {
  const [complex, setComplex] = useState({});
  const [storeList, setStoreList] = useState([]);
  
  useEffect(() => {
    setComplex(props.complex.data);
    setStoreList(props.complex.data.stores);
  }, []);

  return (
    <div>
      <Header pageTitle={complex.name} />
      <main className="content container">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Stores" key="1">
            <StoreList storeList={storeList} />
          </TabPane>
          <TabPane tab="Info" key="2">
            {complex.name}
          </TabPane>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

//get latest items data and pass it to item list components
export async function getServerSideProps({ params }) {
  let complexUid = params.id;
  const resp = await fetch(
    `https://fashionista.fans/api/complex/${complexUid}`
  );
  const complex = await resp.json();
  return {
    props: {
      complex,
    },
  };
}

export default ComplexPage;