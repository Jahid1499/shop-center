import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          className="h-10 w-auto"
          src="/assets/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
