import Image from 'next/image'

export default function ShipAerial() {
  return (
    <div style={{ width: '100%', lineHeight: 0 }}>
      <Image
        src="/ship-aerial.png"
        alt="Aerial view of cruise ship"
        width={1920}
        height={600}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  )
}
