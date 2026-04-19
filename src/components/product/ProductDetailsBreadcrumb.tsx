import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProductDetailsBreadcrumb({
  title,
}: {
  title: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-[#5F7896]"
    >
      <Link href="/" className="transition hover:text-[#0856AA]">
        Products
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-[#142642]">{title}</span>
    </nav>
  );
}
