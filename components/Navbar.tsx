import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <Link href="/" className="text-2xl font-bold">
          NextShop
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm hover:text-blue-600">
            Home
          </Link>

          <Link href="/products" className="text-sm hover:text-blue-600">
            Products
          </Link>

          <Link href="/categories" className="text-sm hover:text-blue-600">
            Categories
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
          >
            Cart
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}