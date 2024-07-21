import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HanlderProps {
  Img: any;
  name: string;
  path: string;
}

const Hanlder: React.FC<HanlderProps> = (props) => {
  const { Img, name, path } = props;

  return (
    <Link href={path}>
      <Image src={Img} className="w-[55px]" loading="lazy" alt={name} />
    </Link>
  );
};

export default Hanlder;
