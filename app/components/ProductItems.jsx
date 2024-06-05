import { Suspense } from "react";
import products from "../data/products";
import Product from "./Product";

export default function ProductItems() {
  return (
    <>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          <Suspense fallback={<h1>Loading ......</h1>}>
            {products.map((product) => (
              <Product key={product.id} details={product} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  );
}
