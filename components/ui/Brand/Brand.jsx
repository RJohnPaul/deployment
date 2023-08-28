import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logoforweb.svg"
        alt="Tulip logo"
        {...props}
        width={90}
        height={50}
        priority
    />
)
export default Brand