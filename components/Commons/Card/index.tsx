import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ data, index }: any): JSX.Element {
  return (
    <Link
      href="#"
      key={index}
      className="border border-slate-600 rounded overflow-hidden text-white hover:scale-105 transition"
    >
      <div className="flex items-center justify-between">
        <div className="mx-10">
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p className="pt-2 text-xs">{data.description}</p>
          <p className="text-xs mt-4">{data.date}</p>
        </div>
        <Image
          src={data.image}
          alt="blog logo"
          width={250}
          height={100}
          priority
        />
      </div>
    </Link>
  );
}
