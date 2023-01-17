import Card from "@/components/Commons/Card";
import Layout from "@/components/Layout";
import React from "react";
import { data } from "../../data";

export default function Blog() {
  return (
    <Layout>
      <div className="mt-24">
        <div className="space-y-3 mb-10">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p>Simple blog with tailwind typography and mdx</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data.map((val, index) => {
            return <Card data={val} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
