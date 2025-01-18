import ActiveProcess from "@/components/layout/Activeprocess";
import Bestfoodyproduct from "@/components/layout/Bestfoodproduct";
import Blog from "@/components/layout/Blog";
import Foodcatr from "@/components/layout/Foodcatr";
import HeroSection from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Ourmenu from "@/components/layout/Ourmenu";
import Review from "@/components/layout/Review";
import Testi from "@/components/layout/Testi";
import Whyus from "@/components/layout/Whyus";
import Chefs from "@/sanity/schemaTypes/chefs";

export default function Home() {
  return (
    <div className="bg-black">
     <Nav/>
     <HeroSection/>
     <Bestfoodyproduct/>
    <Foodcatr/>
    <Whyus/>
    <Review/>
    <Ourmenu/>
    <Testi/>
    <ActiveProcess/>
    <Blog/>

    </div>
  );
}
