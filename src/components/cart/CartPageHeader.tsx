export default function CartPageHeader({ itemCount }: { itemCount: number }) {
  return (
    <section>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7A93AF]">
        Cart
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[#142642] sm:text-4xl">
        Review your selected items
      </h1>
      <p className="mt-3 text-base leading-7 text-[#5F7896]">
        {itemCount} item{itemCount === 1 ? "" : "s"} ready for checkout.
      </p>
    </section>
  );
}
