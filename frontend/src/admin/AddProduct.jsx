// import React, { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../context/Authcontext";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowLeft,
//   PackagePlus,
//   Tag,
//   IndianRupee,
//   Boxes,
//   ImagePlus,
//   Upload,
//   X,
//   CheckCircle2,
//   AlertCircle,
//   Loader2,
//   FileText,
// } from "lucide-react";

// /* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF, mist #F5F2FF
//    Tailwind classes only. No <style>, no inline styles. */

// const inputCls =
//   "w-full rounded-xl border border-[#0F0B24]/15 bg-white py-3 pl-10 pr-4 text-base text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/35 hover:border-[#0F0B24]/30 focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/15";
// const iconCls = "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40";

// const Field = ({ label, hint, children }) => (
//   <label className="block">
//     <span className="mb-1.5 flex items-baseline justify-between text-sm font-bold text-[#0F0B24]">
//       {label}
//       {hint && <span className="text-xs font-medium text-[#0F0B24]/45">{hint}</span>}
//     </span>
//     {children}
//   </label>
// );

// const AddProduct = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ name: "", description: "", price: "", category: "", stock: "" });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null); // { type: "error" | "success", text }
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     if (!user || user.role !== "admin") navigate("/");
//   }, [user, navigate]);

//   // Existing categories, shown as quick-pick chips so names stay consistent
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         if (Array.isArray(data)) setCategories([...new Set(data.map((p) => p.category).filter(Boolean))]);
//       } catch (error) {
//         console.error(error);
//       }
//     })();
//   }, []);

//   // Free the temporary image URL when it changes or the page closes
//   useEffect(() => () => preview && URL.revokeObjectURL(preview), [preview]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const pickImage = (file) => {
//     if (!file || !file.type.startsWith("image/")) return;
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//     setStatus(null);
//   };

//   const removeImage = () => {
//     setImage(null);
//     setPreview(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       setStatus({ type: "error", text: "Please add a product image first." });
//       return;
//     }

//     setLoading(true);
//     setStatus(null);

//     const data = new FormData();
//     Object.entries(formData).forEach(([k, v]) => data.append(k, v));
//     data.append("image", image);

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${user.token}` },
//         body: data,
//       });
//       const responseData = await res.json();

//       if (res.ok) {
//         setStatus({ type: "success", text: "Product published. Taking you to the shop..." });
//         setTimeout(() => navigate("/shop"), 1200);
//       } else {
//         setStatus({ type: "error", text: responseData.message || "Error creating product" });
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus({ type: "error", text: "Something went wrong. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user || user.role !== "admin") return null;

//   const priceNum = Number(formData.price);
//   const stockNum = Number(formData.stock);

//   return (
//     <div className="min-h-[calc(100vh-64px)] bg-[#F5F2FF] px-4 py-6 font-sans text-[#0F0B24] sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         <button
//           type="button"
//           onClick={() => navigate("/admin")}
//           className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#0F0B24]/60 transition hover:text-[#6C47FF]"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back to dashboard
//         </button>

//         <div className="mb-6 flex items-center gap-4">
//           <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F0B24] text-[#CDB9FF]">
//             <PackagePlus className="h-6 w-6" />
//           </span>
//           <div>
//             <h1 className="text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Add new product</h1>
//             <p className="text-sm text-[#0F0B24]/55">Fill in the details and check the live preview on the right.</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="grid items-start gap-6 lg:grid-cols-[1fr_380px]">
//           {/* ================= LEFT: DETAILS ================= */}
//           <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-5 sm:p-7">
//             <div className="space-y-5">
//               <Field label="Product name">
//                 <div className="relative">
//                   <PackagePlus className={iconCls} />
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Sony Alpha Mirrorless Camera" required className={inputCls} />
//                 </div>
//               </Field>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <Field label="Price" hint="in rupees">
//                   <div className="relative">
//                     <IndianRupee className={iconCls} />
//                     <input type="number" name="price" min="0" step="0.01" value={formData.price} onChange={handleChange} placeholder="0.00" required className={inputCls} />
//                   </div>
//                 </Field>
//                 <Field label="Stock" hint="units available">
//                   <div className="relative">
//                     <Boxes className={iconCls} />
//                     <input type="number" name="stock" min="0" value={formData.stock} onChange={handleChange} placeholder="0" required className={inputCls} />
//                   </div>
//                 </Field>
//               </div>

//               <div>
//                 <Field label="Category">
//                   <div className="relative">
//                     <Tag className={iconCls} />
//                     <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Accessories, Camera" required className={inputCls} />
//                   </div>
//                 </Field>
//                 {categories.length > 0 && (
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {categories.map((c) => (
//                       <button
//                         key={c}
//                         type="button"
//                         onClick={() => setFormData({ ...formData, category: c })}
//                         className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
//                           formData.category === c ? "bg-[#0F0B24] text-white" : "border border-[#0F0B24]/15 text-[#0F0B24]/70 hover:border-[#6C47FF] hover:text-[#6C47FF]"
//                         }`}
//                       >
//                         {c}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Field label="Description" hint={`${formData.description.length} characters`}>
//                 <div className="relative">
//                   <FileText className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#0F0B24]/40" />
//                   <textarea name="description" value={formData.description} onChange={handleChange} placeholder="What makes this product worth buying?" rows="5" required className={`${inputCls} resize-none leading-6`} />
//                 </div>
//               </Field>
//             </div>

//             {status && (
//               <div
//                 role="status"
//                 className={`mt-5 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold ${
//                   status.type === "error" ? "bg-[#FF5C39]/10 text-[#C23A1A]" : "bg-emerald-50 text-emerald-700"
//                 }`}
//               >
//                 {status.type === "error" ? <AlertCircle className="h-4 w-4 shrink-0" /> : <CheckCircle2 className="h-4 w-4 shrink-0" />}
//                 {status.text}
//               </div>
//             )}

//             <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#0F0B24]/10 pt-5 sm:flex-row sm:justify-end">
//               <button
//                 type="button"
//                 onClick={() => navigate("/admin")}
//                 className="rounded-full border border-[#0F0B24]/20 px-6 py-3 text-sm font-bold text-[#0F0B24]/70 transition hover:bg-[#F5F2FF] hover:text-[#0F0B24]"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] px-8 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(224,48,122,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                     Publishing...
//                   </>
//                 ) : (
//                   <>
//                     <PackagePlus className="h-4 w-4" />
//                     Publish product
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* ================= RIGHT: IMAGE + LIVE PREVIEW ================= */}
//           <div className="space-y-5 lg:sticky lg:top-24">
//             <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-5">
//               <h2 className="mb-3 text-sm font-bold">Product image</h2>

//               {!preview ? (
//                 <label
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                     setDragging(true);
//                   }}
//                   onDragLeave={() => setDragging(false)}
//                   onDrop={(e) => {
//                     e.preventDefault();
//                     setDragging(false);
//                     pickImage(e.dataTransfer.files[0]);
//                   }}
//                   className={`flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 text-center transition ${
//                     dragging ? "border-[#6C47FF] bg-[#6C47FF]/10" : "border-[#CDB9FF] bg-[#F5F2FF] hover:border-[#6C47FF]"
//                   }`}
//                 >
//                   <ImagePlus className="h-8 w-8 text-[#6C47FF]" />
//                   <p className="mt-2 text-sm font-bold">Drop an image here, or click to browse</p>
//                   <p className="mt-1 text-xs text-[#0F0B24]/50">PNG, JPG or WEBP</p>
//                   <input type="file" accept="image/*" onChange={(e) => pickImage(e.target.files[0])} className="hidden" />
//                 </label>
//               ) : (
//                 <div className="flex items-center gap-3 rounded-2xl border border-[#0F0B24]/10 bg-[#F5F2FF] p-3">
//                   <img src={preview} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
//                   <div className="min-w-0 flex-1">
//                     <p className="flex items-center gap-1.5 truncate text-sm font-semibold">
//                       <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
//                       <span className="truncate">{image?.name}</span>
//                     </p>
//                     <p className="mt-0.5 text-xs text-[#0F0B24]/50">Ready to upload</p>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={removeImage}
//                     aria-label="Remove image"
//                     className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0F0B24] transition hover:bg-[#FF5C39] hover:text-white"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               )}
//               <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#0F0B24]/50">
//                 <Upload className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6C47FF]" />
//                 Uploaded securely and stored through Cloudinary.
//               </p>
//             </div>

//             {/* Live preview, styled like the real product card */}
//             <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-5">
//               <h2 className="mb-3 flex items-center justify-between text-sm font-bold">
//                 Live preview
//                 <span className="rounded-full bg-[#CDB9FF] px-2.5 py-0.5 text-[11px] font-bold">as shown in shop</span>
//               </h2>

//               <div className="mx-auto w-full max-w-[260px]">
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e4dff5]">
//                   {preview ? (
//                     <img src={preview} alt="" className="h-full w-full object-cover" />
//                   ) : (
//                     <div className="flex h-full items-center justify-center text-[#6C47FF]/40">
//                       <ImagePlus className="h-10 w-10" />
//                     </div>
//                   )}
//                   {(stockNum > 0 && stockNum <= 5) || (formData.stock !== "" && stockNum === 0) || formData.category ? (
//                     <span
//                       className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
//                         formData.stock !== "" && stockNum === 0
//                           ? "bg-[#0F0B24] text-white"
//                           : stockNum > 0 && stockNum <= 5
//                           ? "bg-[#FF5C39] text-[#0F0B24]"
//                           : "bg-[#CDB9FF] text-[#0F0B24]"
//                       }`}
//                     >
//                       {formData.stock !== "" && stockNum === 0
//                         ? "Sold out"
//                         : stockNum > 0 && stockNum <= 5
//                         ? `Only ${stockNum} left`
//                         : formData.category}
//                     </span>
//                   ) : null}
//                 </div>

//                 <div className="flex items-start justify-between gap-3 px-1 pt-3">
//                   <div className="min-w-0">
//                     <p className="truncate text-base font-extrabold tracking-[-0.03em]">{formData.name || "Product name"}</p>
//                     <p className="mt-0.5 truncate text-xs text-[#0F0B24]/55">{formData.description || "Short description"}</p>
//                   </div>
//                   <p className="shrink-0 rounded-full bg-[#FF5C39] px-3 py-1 text-xs font-extrabold">
//                     ₹{priceNum > 0 ? priceNum.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;



















import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  PackagePlus,
  Tag,
  IndianRupee,
  Boxes,
  ImagePlus,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
} from "lucide-react";

/* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF, mist #F5F2FF
   Tailwind classes only. No <style>, no inline styles. */

const inputCls =
  "w-full rounded-xl border border-[#0F0B24]/15 bg-white py-2.5 pl-10 pr-4 text-base text-[#0F0B24] outline-none transition placeholder:text-[#0F0B24]/35 hover:border-[#0F0B24]/30 focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/15";
const iconCls = "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40";

const Field = ({ label, hint, children }) => (
  <label className="block">
    <span className="mb-1.5 flex items-baseline justify-between text-sm font-bold text-[#0F0B24]">
      {label}
      {hint && <span className="text-xs font-medium text-[#0F0B24]/45">{hint}</span>}
    </span>
    {children}
  </label>
);

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", description: "", price: "", category: "", stock: "" });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "error" | "success", text }
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!user || user.role !== "admin") navigate("/");
  }, [user, navigate]);

  // Existing categories, shown as quick-pick chips so names stay consistent
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) setCategories([...new Set(data.map((p) => p.category).filter(Boolean))]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // Free the temporary image URL when it changes or the page closes
  useEffect(() => () => preview && URL.revokeObjectURL(preview), [preview]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const pickImage = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setStatus(null);
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setStatus({ type: "error", text: "Please add a product image first." });
      return;
    }

    setLoading(true);
    setStatus(null);

    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));
    data.append("image", image);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
        body: data,
      });
      const responseData = await res.json();

      if (res.ok) {
        setStatus({ type: "success", text: "Product published. Taking you to the shop..." });
        setTimeout(() => navigate("/shop"), 1200);
      } else {
        setStatus({ type: "error", text: responseData.message || "Error creating product" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.role !== "admin") return null;

  const priceNum = Number(formData.price);
  const stockNum = Number(formData.stock);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F5F2FF] px-4 py-4 font-sans text-[#0F0B24] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#0F0B24]/60 transition hover:text-[#6C47FF]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </button>

        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CDB9FF] text-[#0F0B24]">
              <PackagePlus className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">Add new product</h1>
              <p className="text-xs text-[#0F0B24]/55 sm:text-sm">Fill in the details, the preview updates live.</p>
            </div>
          </div>
          <div className="shrink-0 rounded-xl border border-[#0F0B24]/10 bg-white px-3.5 py-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F0B24]/40">Store</p>
            <p className="text-base font-extrabold tracking-[-0.04em]">
              GenZ<span className="text-[#6C47FF]">Vibe</span>
              <span className="text-[#FF5C39]">.</span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid items-start gap-4 lg:grid-cols-[1fr_360px]">
          {/* ================= LEFT: DETAILS ================= */}
          <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-4 sm:p-5">
            <div className="space-y-4">
              <Field label="Product name">
                <div className="relative">
                  <PackagePlus className={iconCls} />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Sony Alpha Mirrorless Camera" required className={inputCls} />
                </div>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Price" hint="in rupees">
                  <div className="relative">
                    <IndianRupee className={iconCls} />
                    <input type="number" name="price" min="0" step="0.01" value={formData.price} onChange={handleChange} placeholder="0.00" required className={inputCls} />
                  </div>
                </Field>
                <Field label="Stock" hint="units available">
                  <div className="relative">
                    <Boxes className={iconCls} />
                    <input type="number" name="stock" min="0" value={formData.stock} onChange={handleChange} placeholder="0" required className={inputCls} />
                  </div>
                </Field>
              </div>

              <div>
                <Field label="Category">
                  <div className="relative">
                    <Tag className={iconCls} />
                    <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Accessories, Camera" required className={inputCls} />
                  </div>
                </Field>
                {categories.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: c })}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                          formData.category === c ? "bg-[#0F0B24] text-white" : "border border-[#0F0B24]/15 text-[#0F0B24]/70 hover:border-[#6C47FF] hover:text-[#6C47FF]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Field label="Description" hint={`${formData.description.length} characters`}>
                <div className="relative">
                  <FileText className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#0F0B24]/40" />
                  <textarea name="description" value={formData.description} onChange={handleChange} placeholder="What makes this product worth buying?" rows="3" required className={`${inputCls} resize-none leading-6`} />
                </div>
              </Field>
            </div>

            {status && (
              <div
                role="status"
                className={`mt-4 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold ${
                  status.type === "error" ? "bg-[#FF5C39]/10 text-[#C23A1A]" : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {status.type === "error" ? <AlertCircle className="h-4 w-4 shrink-0" /> : <CheckCircle2 className="h-4 w-4 shrink-0" />}
                {status.text}
              </div>
            )}

            <div className="mt-4 flex flex-col-reverse gap-3 border-t border-[#0F0B24]/10 pt-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="rounded-full border border-[#0F0B24]/20 px-6 py-3 text-sm font-bold text-[#0F0B24]/70 transition hover:bg-[#F5F2FF] hover:text-[#0F0B24]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] px-8 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(224,48,122,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <PackagePlus className="h-4 w-4" />
                    Publish product
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ================= RIGHT: IMAGE + LIVE PREVIEW ================= */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-4">
              <h2 className="mb-3 text-sm font-bold">Product image</h2>

              {!preview ? (
                <label
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    pickImage(e.dataTransfer.files[0]);
                  }}
                  className={`flex min-h-[130px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 text-center transition ${
                    dragging ? "border-[#6C47FF] bg-[#6C47FF]/10" : "border-[#CDB9FF] bg-[#F5F2FF] hover:border-[#6C47FF]"
                  }`}
                >
                  <ImagePlus className="h-8 w-8 text-[#6C47FF]" />
                  <p className="mt-2 text-sm font-bold">Drop an image here, or click to browse</p>
                  <p className="mt-1 text-xs text-[#0F0B24]/50">PNG, JPG or WEBP</p>
                  <input type="file" accept="image/*" onChange={(e) => pickImage(e.target.files[0])} className="hidden" />
                </label>
              ) : (
                <div className="flex items-center gap-3 rounded-2xl border border-[#0F0B24]/10 bg-[#F5F2FF] p-3">
                  <img src={preview} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 truncate text-sm font-semibold">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="truncate">{image?.name}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-[#0F0B24]/50">Ready to upload</p>
                  </div>
                  <button
                    type="button"
                    onClick={removeImage}
                    aria-label="Remove image"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0F0B24] transition hover:bg-[#FF5C39] hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#0F0B24]/50">
                <Upload className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6C47FF]" />
                Uploaded securely and stored through Cloudinary.
              </p>
            </div>

            {/* Live preview, styled like the real product card */}
            <div className="rounded-3xl border border-[#0F0B24]/10 bg-white p-4">
              <h2 className="mb-3 flex items-center justify-between text-sm font-bold">
                Live preview
                <span className="rounded-full bg-[#CDB9FF] px-2.5 py-0.5 text-[11px] font-bold">as shown in shop</span>
              </h2>

              <div className="mx-auto w-full max-w-[190px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e4dff5]">
                  {preview ? (
                    <img src={preview} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#6C47FF]/40">
                      <ImagePlus className="h-10 w-10" />
                    </div>
                  )}
                  {(stockNum > 0 && stockNum <= 5) || (formData.stock !== "" && stockNum === 0) || formData.category ? (
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                        formData.stock !== "" && stockNum === 0
                          ? "bg-[#0F0B24] text-white"
                          : stockNum > 0 && stockNum <= 5
                          ? "bg-[#FF5C39] text-[#0F0B24]"
                          : "bg-[#CDB9FF] text-[#0F0B24]"
                      }`}
                    >
                      {formData.stock !== "" && stockNum === 0
                        ? "Sold out"
                        : stockNum > 0 && stockNum <= 5
                        ? `Only ${stockNum} left`
                        : formData.category}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-start justify-between gap-3 px-1 pt-3">
                  <div className="min-w-0">
                    <p className="truncate text-base font-extrabold tracking-[-0.03em]">{formData.name || "Product name"}</p>
                    <p className="mt-0.5 truncate text-xs text-[#0F0B24]/55">{formData.description || "Short description"}</p>
                  </div>
                  <p className="shrink-0 rounded-full bg-[#FF5C39] px-3 py-1 text-xs font-extrabold">
                    ₹{priceNum > 0 ? priceNum.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;