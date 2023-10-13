import { FC } from "react";
import ImageGallery from "react-image-gallery";

type Images = {
  original: string;
  thumbnail: string;
};
const images: Images[] = [
  {
    original: "/1.jpg",
    thumbnail: "/1.jpg",
  },
  {
    original: "/2.jpg",
    thumbnail: "/2.jpg",
  },
  {
    original: "/3.jpg",
    thumbnail: "/3.jpg",
  },
];

const Men: FC = () => {
  return (
    <section className="men-women-section bg-neutral-800 min-h-[130vh] text-limon">
      <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-2xl">
        Dla mężczyzn proponuję rowery w eleganckich, ciemnych odcieniach.
        Rowery, które emanują siłą i charakterem, idealne dla nowoczesnych
        mężczyzn, którzy cenią sobie styl i wyraźną prezencję.
      </h2>
      <ImageGallery
        items={images}
      
      />
    </section>
  );
};

export default Men;
