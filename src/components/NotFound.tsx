import Image from "next/image";

export default function NotFound({ children, image, title }: any) {
  return (
    <div className="not-found">
      <Image src={image} alt="Not found" width={336} height={168} />
      <div className="content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
