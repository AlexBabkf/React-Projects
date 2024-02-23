import Accordion from "@/components/Accordion/Accordion";
import DarkMode from "@/components/DarkMode/DarkMode";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import LoadMore from "@/components/LoadMore/LoadMore";
import RandomColor from "@/components/Random-Color/RandomColor";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";
import StarRating from "@/components/StarRating/StarRating";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <main>
        <Accordion />
        <RandomColor />
        <StarRating />
        <ImageSlider />
        <LoadMore />
        <DarkMode />
      </main>
    </>
  );
}
