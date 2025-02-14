// export default function ProductDetails({ params: { id } }) {
//   console.log("new");
//   //   console.log(products.slice(0, 2));
//   const product = products.filter((product) => product.id === id);
//   console.log(product);
//   return <div>product details page</div>;
// }

import RatingReview from "@/app/components/RatingReview";
import products from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = async ({ params: { id } }) => {
  console.log("new");
  const product = await products.find((product) => product.id == id);
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    images,
    thumbnail,
  } = product;
  console.log(product);
  return (
    <>
      <main className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                alt={title}
                title={title}
                width={100}
                height={100}
                src={thumbnail}
                className="w-[400px] h-[500px] mx-auto object-cover"
              />

              <div className="flex gap-4 mt-4">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    alt={title}
                    title={title}
                    width={100}
                    height={100}
                    src={image}
                    className="w-[100px] h-[100px] mx-auto border object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
              </h1>
              <span className="text-[#919090] my-3">
                <Link href={`/categories/${category}`}>({category})</Link>
              </span>
              <div className="mt-3 flex items-center justify-start gap-1">
                <RatingReview rating={rating} />
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <p className="my-3">
                  <span className="text-rose-600 opacity-60 line-through">
                    ${price}
                  </span>
                  <span className="font-bold text-2xl">
                    ${discountPercentage}
                  </span>
                </p>
              </div>
              <div>
                <p className="leading-7">{description}</p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${discountPercentage}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
