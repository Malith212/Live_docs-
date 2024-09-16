import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";

const Header = ({ Children }: HeaderProps) => {
  return (
    <div className="Header">
      <Link href="/" className="md:flex-1">
        <Image 
          src="/assets/images/logo.svg"
          alt="logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/images/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {Children}
    </div>
  );
};

export default Header;
