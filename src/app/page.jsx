import Banner from "@/componets/home/Banner";
import Content from "@/componets/home/Content";
import NewRoom from "@/componets/home/NewRoom";
import NewSectionns from "@/componets/home/NewSectionns";
import Footer from "@/componets/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Banner />

      <Content />

      <NewRoom />
      
      <NewSectionns />
      
      <Footer />
      
    </div>
  );
}
