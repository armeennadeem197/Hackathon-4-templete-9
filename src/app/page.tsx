import ActiveProcess from "@/components/layout/Activeprocess";
import Bestfoodyproduct from "@/components/layout/Bestfoodproduct";
import Blog from "@/components/layout/Blog";
import Foodcatr from "@/components/layout/Foodcatr";
import HeroSection from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Review from "@/components/layout/Review";
import Testi from "@/components/layout/Testi";
import Whyus from "@/components/layout/Whyus";

export default function Home() {
  return (
    <div className="bg-black">
     <Nav/>
     <HeroSection/>
     <Bestfoodyproduct/>
    <Foodcatr/>
    <Whyus/>
    <Review/>
    <Testi/>
    <ActiveProcess/>
    <Blog/>

    </div>
  );
}
