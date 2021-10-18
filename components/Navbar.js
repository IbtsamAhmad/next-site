import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <h1>My Logo</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
