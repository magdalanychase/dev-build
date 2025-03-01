import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dev-Build" },
    { name: "description", content: "A Web Development Environment" },
  ];
};

export default function Page() {
  return (
    <>
    <Link to="/blah">Go to Blah</Link>
    </>
  );
}