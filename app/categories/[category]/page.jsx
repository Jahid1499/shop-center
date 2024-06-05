import Contact from "@/app/components/Contact";
import CustomLink from "@/app/components/CustomLink";
import Product from "@/app/components/Product";
import products from "@/app/data/products";

const CategoriesPage = async ({ params: { category } }) => {
  const categories = await products.reduce((acc, cur) => {
    if (!acc.includes(cur.category)) {
      acc.push(cur.category);
    }
    return acc;
  }, []);

  const categoriesProduct =
    category === "all"
      ? products
      : await products.filter((product) => product.category === category);

  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/assets/header.webp')]"></header>
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <CustomLink category={"all"} />
            {categories.map((category, index) => (
              <CustomLink key={index} category={category} />
            ))}
          </div>

          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {categoriesProduct.map((product) => (
              <Product key={product.id} details={product} />
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
};

export default CategoriesPage;
