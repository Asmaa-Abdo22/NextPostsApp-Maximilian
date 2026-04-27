import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <div className="container nav-inner">
        <div className="brand">
          <Link href="/">
            <Image src={logo} width={100} height={100} priority  alt="App logo" />
          </Link>
          <Link href="/">
            <h1>NextPosts</h1>
          </Link>
        </div>

        <nav>
          <div className="nav-links" aria-hidden>
            <Link href="/">Home</Link>
            <Link href="/feed">Feed</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </div>

          <details className="menu">
            <summary className="menu-toggle">Menu</summary>
            <div className="nav-links-mobile">
              <Link href="/">Home</Link>
              <Link href="/feed">Feed</Link>
              <Link href="/explore">Explore</Link>
              <Link href="/profile">Profile</Link>
              <Link className="cta-link" href="/new-post">
                New Post
              </Link>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
