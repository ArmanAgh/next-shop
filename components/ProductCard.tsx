import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white">
      <Link href={`/products/${id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold hover:text-blue-600">
            {name}
          </h3>
        </Link>

        <p className="mt-2 text-lg font-bold">
          ${price}
        </p>

        <button className="mt-4 w-full rounded-lg bg-black py-2 text-sm text-white hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}