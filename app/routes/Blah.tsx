import { Link } from "@remix-run/react";

export default function Blah() {
  return(
    <div>
      <h1>Blah</h1>
      <p>This is a test</p>
      <Link to= "/">Go Home</Link>
    </div>
  )
}