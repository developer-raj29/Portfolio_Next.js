import Link from "next/link";
import React from "react";

interface FootlinkProps {
  path: string;
  icon: any;
  name: string;
}

const FootLink: React.FC<FootlinkProps> = (props) => {
  const { path, icon, name } = props;

  return (
    <Link
      href={path}
      className="flex items-center font-bold sm:text-[16px] text-[14px] gap-2"
    >
      {icon} {name}
    </Link>
  );
};

export default FootLink;
