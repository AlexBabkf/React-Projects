import Accordion from "@/components/Accordion/Accordion";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import RandomColor from "@/components/Random-Color/RandomColor";
import StarRating from "@/components/StarRating/StarRating";

export default function Home() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </>
  );
}
