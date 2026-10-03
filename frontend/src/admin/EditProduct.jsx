import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { useParams, useNavigate } from "react-router-dom";
// import { Package } from "lucide-react";
import {
  ArrowLeft,
  Package,
//   Package,
  Tag,
  IndianRupee,
  Boxes,
  FileText,
  ImagePlus,
  Upload,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const EditProduct = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setFormData({
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        stock: data.stock,
      });
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);

    if (image) {
      data.append("image", image);
    }

    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: data,
    });

    setLoading(false);

    if (res.ok) {
      alert("Product updated successfully!");
      navigate("/admin/products");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/admin/products")}
          className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#0F0B24]/55 transition hover:text-[#6C47FF]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>

        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F0B24] text-white shadow-sm">
                <Package className="h-4.5 w-4.5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#6C47FF]">
                Product Management
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#0F0B24] sm:text-3xl">
              Edit Product
            </h1>

            <p className="mt-1 text-sm text-[#0F0B24]/50">
              Update product details for your GenZVibe store.
            </p>
          </div>

          <div className="hidden rounded-xl border border-[#0F0B24]/8 bg-white px-4 py-3 shadow-sm sm:block">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F0B24]/40">
              Store
            </p>

            <p className="mt-0.5 text-sm font-extrabold">
              <span className="text-[#0F0B24]">Gen</span>
              <span className="text-[#6C47FF]">Vibe</span>
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FF4D2E]" />
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-[#0F0B24]/8 bg-white shadow-[0_10px_35px_-20px_rgba(15,11,36,0.35)]">

          {/* Card Header */}
          <div className="flex items-center gap-3 border-b border-[#0F0B24]/8 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F2FF]">
              <Package className="h-5 w-5 text-[#6C47FF]" />
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-[#0F0B24] sm:text-base">
                Product Information
              </h2>

              <p className="text-xs text-[#0F0B24]/45">
                Make changes to your product
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6">

            <div className="grid gap-5 lg:grid-cols-2">

              {/* Product Name */}
              <div className="lg:col-span-2">
                <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]">
                  Product Name
                </label>

                <div className="relative">
                  <Package className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/30" />

                  <input
                    type="text"
                    placeholder="Product Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-3 pl-10 pr-4 text-sm text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]">
                  Price
                </label>

                <div className="relative">
                  <IndianRupee className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/30" />

                  <input
                    type="number"
                    placeholder="Price"
                    required
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-3 pl-10 pr-4 text-sm text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
                  />
                </div>
              </div>

              {/* Stock */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]">
                  Stock
                </label>

                <div className="relative">
                  <Boxes className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/30" />

                  <input
                    type="number"
                    placeholder="Stock"
                    required
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stock: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-3 pl-10 pr-4 text-sm text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="lg:col-span-2">
                <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]">
                  Category
                </label>

                <div className="relative">
                  <Tag className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/30" />

                  <input
                    type="text"
                    placeholder="Category"
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-3 pl-10 pr-4 text-sm text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-2">
                <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]">
                  Description
                </label>

                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-[#0F0B24]/30" />

                  <textarea
                    placeholder="Description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    className="w-full resize-none rounded-xl border border-[#0F0B24]/10 bg-[#FAF9FF] py-3 pl-10 pr-4 text-sm leading-5 text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/30 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/10"
                  />
                </div>
              </div>

              {/* Replace Image */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-4">

                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100">
                      <ImagePlus className="h-4.5 w-4.5 text-orange-500" />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-[#0F0B24]">
                        Replace Product Image
                      </p>

                      <p className="text-xs text-[#0F0B24]/45">
                        Optional — leave empty to keep current image
                      </p>
                    </div>
                  </div>

                  <label className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-[#CDB9FF] bg-white px-4 py-3 transition hover:border-[#6C47FF] hover:bg-[#F5F2FF]">

                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F2FF] text-[#6C47FF] transition group-hover:bg-white">
                        <Upload className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#0F0B24]">
                          {image ? image.name : "Choose a new image"}
                        </p>

                        <p className="mt-0.5 text-[10px] text-[#0F0B24]/40">
                          PNG, JPG or WEBP
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-lg bg-[#0F0B24] px-3 py-2 text-[11px] font-bold text-white transition group-hover:bg-[#6C47FF]">
                      Browse
                    </span>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="hidden"
                    />
                  </label>

                  {image && (
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      New image selected
                    </div>
                  )}

                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col-reverse gap-2.5 border-t border-[#0F0B24]/8 pt-5 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => navigate("/admin/products")}
                className="rounded-xl border border-[#0F0B24]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#0F0B24]/65 transition hover:bg-[#F5F2FF] hover:text-[#0F0B24]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_-12px_rgba(224,48,122,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(224,48,122,0.8)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Package className="h-4 w-4" />
                    Update Product
                  </>
                )}
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

