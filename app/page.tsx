import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 129,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Wireless Keyboard",
    price: 89,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 4,
    name: "Modern Camera",
    price: 599,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Featured Products
              </h2>

              <p className="mt-2 text-gray-600">
                Our most popular products
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}