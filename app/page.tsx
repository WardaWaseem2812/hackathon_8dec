import BlueHeader from "./components/BlueHeader";
import Carousel from "./components/Carousel";
import Editors from "./components/Editors";
import Footer from "./components/Footer";
import GreenDiv from "./components/GreenDiv";
import LastDiv from "./components/LastDiv";
import Navbar from "./components/Navbar";
import ProductsCard from "./components/ProductsCard";
import WhiteDiv from "./components/WhiteDiv";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carousel/>
      <Editors/>
      <ProductsCard/>
      <GreenDiv/>
      <WhiteDiv/>
      <LastDiv/>
      <Footer/>
           
    </div>
  )
}