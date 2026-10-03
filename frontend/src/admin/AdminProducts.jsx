
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  Search,
  Pencil,
  Trash2,
  ArrowLeft,
  Boxes,
  IndianRupee,
  Tag,
  RefreshCw,
  PackageOpen,
} from "lucide-react";

const AdminProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you strictly sure you want to delete this?")) {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
      }
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/admin"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F0B24]/55 transition hover:text-[#6C47FF]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F0B24] text-white shadow-sm">
                <Package className="h-4.5 w-4.5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#6C47FF]">
                Product Management
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F0B24] sm:text-4xl">
              Manage Products
            </h1>

            <p className="mt-1.5 text-sm text-[#0F0B24]/50 sm:text-base">
              View, edit and manage all products in your GenZVibe store.
            </p>
          </div>

          {/* Add Product */}
          <Link
            to="/admin/add-product"
            className="group flex w-fit items-center gap-2 rounded-xl bg-gradient-to-br from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-12px_rgba(224,48,122,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(224,48,122,0.8)]"
          >
            <Plus className="h-4 w-4 transition group-hover:rotate-90" />
            Add Product
          </Link>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-[#0F0B24]/8 bg-white shadow-[0_10px_35px_-20px_rgba(15,11,36,0.35)]">

          {/* Card Header */}
          <div className="flex flex-col gap-4 border-b border-[#0F0B24]/8 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F2FF]">
                <Package className="h-5 w-5 text-[#6C47FF]" />
              </div>

              <div>
                <h2 className="text-base font-extrabold text-[#0F0B24]">
                  All Products
                </h2>

                <p className="text-xs text-[#0F0B24]/45">
                  {products.length} products in your store
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/30" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-2.5 pl-10 pr-4 text-sm text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#0F0B24]/8 bg-[#FAF9FF]">
                  <th className="px-6 py-4 text-left text-[11px] font-extrabold uppercase tracking-wider text-[#0F0B24]/45">
                    Product
                  </th>

                  <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wider text-[#0F0B24]/45">
                    Price
                  </th>

                  <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wider text-[#0F0B24]/45">
                    Category
                  </th>

                  <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wider text-[#0F0B24]/45">
                    Stock
                  </th>

                  <th className="px-6 py-4 text-right text-[11px] font-extrabold uppercase tracking-wider text-[#0F0B24]/45">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr
                      key={product._id}
                      className="group border-b border-[#0F0B24]/6 transition hover:bg-[#FAF9FF]"
                    >

                      {/* Product */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">

                          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#0F0B24]/8 bg-[#F5F2FF]">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <Package className="h-5 w-5 text-[#6C47FF]/50" />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-extrabold text-[#0F0B24]">
                              {product.name}
                            </p>

                            <p className="mt-0.5 text-[11px] text-[#0F0B24]/35">
                              ID: {product._id.substring(0, 8)}...
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1 text-sm font-extrabold text-[#0F0B24]">
                          <IndianRupee className="h-3.5 w-3.5 text-[#6C47FF]" />
                          {Number(product.price).toFixed(2)}
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F2FF] px-3 py-1.5 text-xs font-bold text-[#6C47FF]">
                          <Tag className="h-3 w-3" />
                          {product.category}
                        </span>
                      </td>

                      {/* Stock */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
                            product.stock > 10
                              ? "bg-green-100 text-green-700"
                              : product.stock > 0
                              ? "bg-orange-100 text-orange-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          <Boxes className="h-3.5 w-3.5" />
                          {product.stock}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">

                          <Link
                            to={`/admin/edit-product/${product._id}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#0F0B24]/10 bg-white px-3 py-2 text-xs font-bold text-[#0F0B24]/65 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#6C47FF]"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDelete(product._id)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-16 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F2FF]">
                        <PackageOpen className="h-7 w-7 text-[#6C47FF]" />
                      </div>

                      <h3 className="mt-4 text-base font-extrabold text-[#0F0B24]">
                        No products found
                      </h3>

                      <p className="mt-1 text-sm text-[#0F0B24]/45">
                        Try another search or add a new product.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-4"
                >

                  <div className="flex items-start gap-3">

                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Package className="h-5 w-5 text-[#6C47FF]/50" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-extrabold text-[#0F0B24]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-[#6C47FF]">
                        ₹{Number(product.price).toFixed(2)}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#F5F2FF] px-2.5 py-1 text-[10px] font-bold text-[#6C47FF]">
                          {product.category}
                        </span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            product.stock > 10
                              ? "bg-green-100 text-green-700"
                              : product.stock > 0
                              ? "bg-orange-100 text-orange-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          Stock: {product.stock}
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="mt-4 flex gap-2 border-t border-[#0F0B24]/8 pt-3">

                    <Link
                      to={`/admin/edit-product/${product._id}`}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#0F0B24]/10 bg-white py-2 text-xs font-bold text-[#0F0B24]/65 transition hover:bg-purple-50 hover:text-[#6C47FF]"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-red-50 py-2 text-xs font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>

                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F2FF]">
                  <PackageOpen className="h-7 w-7 text-[#6C47FF]" />
                </div>

                <h3 className="mt-4 font-extrabold text-[#0F0B24]">
                  No products found
                </h3>

                <p className="mt-1 text-sm text-[#0F0B24]/45">
                  Try another search or add a new product.
                </p>
              </div>
            )}

          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-[#0F0B24]/8 bg-[#FAF9FF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Package className="h-4 w-4 text-green-600" />
              </div>

              <p className="text-xs font-semibold text-[#0F0B24]/50">
                {products.length} total products
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#0F0B24]/10 bg-white px-4 py-2 text-xs font-bold text-[#0F0B24]/60 transition hover:bg-[#F5F2FF] hover:text-[#6C47FF]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
