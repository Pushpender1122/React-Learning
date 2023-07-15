import './App.css';
import Navbar from './Pc-components/navbar';
import Content from './Pc-components/pc-part';
// import Navbar from './Components/navbar'
// import TextArea from './Components/textarea';
function App() {
  return (
    <>
      <Navbar />
      <Content name="Motherboard" price="11,450" item_name='MSI B550M Pro-Vdh WiFi '
        processer="Processor" pro_price="₹12,499" pro_name="AMD Ryzen™ 5 5600G"
        ram="Ram" ram_price='₹1600' ram_name='XPG ADATA GAMMIX D30 '
        power="Power supply" pow_price="₹3700" pow_name="GIGABYTE GP-P550B"
        ssd='SSD' ssd_price='₹1,638' ssd_name='SN350 NVMe 240GB'
        cabinet='cabinet' cabinet_price='₹3,200' cabinet_name='Ant Esports 220 Cabinet'
      />
    </>
  );
}

export default App;
