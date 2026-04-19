import ProductDetailsBreadcrumb from "@/components/product/ProductDetailsBreadcrumb";
import ProductDetailsGallery from "@/components/product/ProductDetailsGallery";
import ProductDetailsSummary from "@/components/product/ProductDetailsSummary";
import ProductReviewsSummary from "@/components/product/ProductReviewsSummary";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: String(product.id),
  }));
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const normalizedProductId = Number(productId);

  if (!Number.isInteger(normalizedProductId)) {
    notFound();
  }

  const product = products.find((item) => item.id === normalizedProductId);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-270 flex-col gap-8 px-4 py-8 sm:px-8">
      <ProductDetailsBreadcrumb title={product.title} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <ProductDetailsGallery product={product} />
        <ProductDetailsSummary product={product} />
      </section>

      <ProductReviewsSummary product={product} />
    </main>
  );
}
