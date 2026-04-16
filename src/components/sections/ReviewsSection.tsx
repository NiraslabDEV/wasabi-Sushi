import Image from "next/image";

const reviews = [
  {
    text: "An experience that transcends dining. Every piece is a work of art, prepared with such precision and care. I'll be returning every time I'm in Vilanculos.",
    author: "Maria S.",
    title: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    text: "The best sushi I've had outside of Tokyo. The Bazaruto prawns are unforgettable, and the fusion with Mozambican flavors is genuinely inspired. Wasabi has set a new standard.",
    author: "James K.",
    title: "Food Critic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    text: "Wasabi Vilanculos redefines what luxury means on the African coast. Not just excellent food, but a complete sensory experience. The attention to detail is remarkable.",
    author: "Ana P.",
    title: "Lifestyle Magazine",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    text: "The Omakase Deck is a journey. Each piece was a revelation. We came as guests and left as devotees. The chef understands his craft at the highest level.",
    author: "Carlos M.",
    title: "Local Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-surface-container-low py-32 px-8" id="reviews">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            Voices
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col"
            >
              {/* Quote Mark */}
              <span className="text-secondary text-5xl font-headline leading-none mb-4">
                "
              </span>

              {/* Review Text */}
              <p className="text-on-surface italic mb-6 flex-grow leading-relaxed">
                {review.text}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-headline font-bold text-sm">
                      {review.author}
                    </p>
                    <p className="text-on-surface-variant text-xs">
                      {review.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
