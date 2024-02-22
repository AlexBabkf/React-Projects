import { useEffect, useState } from "react";
import style from "./imageSlider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({
  url = "https://picsum.photos/v2/list",
  limit = 10,
  page = 1,
}) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImages();
  }, [url, limit, page]);

  console.log(currentImage);

  return (
    <section>
      <h1>Image Slider</h1>
      <div className={style.container}>
        <BsArrowLeftCircleFill
          className={`${style.arrow} ${style.left}`}
          onClick={() =>
            setCurrentImage(currentImage > 0 ? currentImage - 1 : currentImage)
          }
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={`${style.image} ${
                  currentImage === index ? null : style.hidden
                }`}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className={`${style.arrow} ${style.right}`}
          onClick={() =>
            setCurrentImage(
              currentImage < images.length - 1 ? currentImage + 1 : currentImage
            )
          }
        />
        <span className={style.indicators}>
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={`${style.currentIndicator} ${
                    currentImage === index ? null : style.inactiveIndicator
                  }`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </section>
  );
}
