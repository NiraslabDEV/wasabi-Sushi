import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1553909092-d9eae28fcf81?w=400&h=300&fit=crop",
    alt: "Sushi preparation",
    className: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    alt: "Restaurant ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1686897962111-a50b2b32b18b?w=400&h=300&fit=crop",
    alt: "Sushi plating",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    alt: "Fresh ingredients",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1553911120-55408e9b91d7?w=400&h=300&fit=crop",
    alt: "Interior design",
  },
  {
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    alt: "Signature dish",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    alt: "Dining experience",
    className: "col-span-2",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-surface py-32 px-8" id="gallery">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            Atmosphere
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic">
            The Gallery
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                img.className || ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded font-bold tracking-[0.1em] uppercase text-sm hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
