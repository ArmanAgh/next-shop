import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            New Collection
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Discover products you love.
          </h1>

          <p className="mt-6 max-w-lg text-gray-600">
            Shop the latest products with a simple and modern shopping
            experience.
          </p>

          <div className="mt-8">
            <Link
              href="/products"
              className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex h-80 items-center justify-center rounded-2xl bg-gray-200">
          <span className="text-gray-500">
            Product Image
          </span>
        </div>
      </div>
    </section>
  );
}