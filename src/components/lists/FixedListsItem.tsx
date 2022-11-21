import Image from "next/image";
import Link from "next/link";

export default function FixedListsItem({image, name, link}: any) {
  return (
    <Link href={link} className="fixed-list">
        <Image src={image} width={72} height={72} alt="Bilim" />
        <span>{name}</span>
    </Link>
  )
}
