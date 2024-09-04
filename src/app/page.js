import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Frontend Mentor</h1>
      <p>A portfolio of Frontend Mentor challenges</p>
      <ul>
        <li>
          <Link href={'./qr-code/'}>QR code component</Link>
        </li>
        <li>
          <Link href={'./blog-preview-card/'}>Blog preview card</Link>
        </li>
        <li>
          <Link href={'./social-link-profiles/'}>Social link profiles</Link>
        </li>
      </ul>
    </div>
  );
}
