import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  priority?: boolean;
  className?: string;
}

export default function Logo({ priority = false, className = "h-10 w-auto" }: LogoProps) {
  return (
    <Link href="/" className="flex w-fit items-center">
      <Image
        src="/ids-logo-black-full.png"
        alt="IDS - Império Dourado Soluções"
        width={180}
        height={60}
        priority={priority}
        className={`${className} dark:hidden`}
      />

      <Image
        src="/logoIDS-white.png"
        alt="IDS - Império Dourado Soluções"
        width={180}
        height={60}
        priority={priority}
        className={`hidden ${className} dark:block`}
      />
    </Link>
  );
}