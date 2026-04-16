export default function StorySection() {
  return (
    <section className="bg-surface-container-low py-32 px-8" id="story">
      <div className="max-w-2xl mx-auto">
        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
          Origins
        </span>
        <h2 className="font-headline text-5xl md:text-6xl italic mb-12">
          Our Story
        </h2>

        <div className="space-y-8 text-on-surface-variant leading-relaxed">
          <p className="text-lg">
            Born from a dream where the Indian Ocean meets Japanese tradition,
            Wasabi Vilanculos is more than a restaurant — it is a ritual.
          </p>

          <p className="text-lg">
            In 2023, we opened our doors on the pristine coast of Vilanculos,
            bringing the ancient art of sushi to the shores of Mozambique. Every
            ingredient tells a story: the prawns from Bazaruto, the spices from
            local markets, the precision of Japanese technique. Our chef trained
            across three continents, but found home in this small coastal town
            where simplicity meets elegance.
          </p>

          <p className="text-lg">
            The name "Wasabi" carries meaning—it's both the iconic Japanese
            condiment and a symbol of our commitment to authenticity. We don't
            cut corners. We don't rush. We honor the ocean, the season, and
            every person who walks through our door.
          </p>

          <p className="text-lg italic border-l-2 border-secondary pl-6 py-4">
            Here, luxury is not about excess. It is about the perfect bite, the
            perfect moment, the perfect silence between courses.
          </p>

          <p className="text-lg">
            Welcome to The Obsidian Ritual. Welcome home.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-headline text-primary mb-2">2023</p>
              <p className="text-sm text-on-surface-variant">Year Founded</p>
            </div>
            <div>
              <p className="text-3xl font-headline text-primary mb-2">20+</p>
              <p className="text-sm text-on-surface-variant">Years Chef Experience</p>
            </div>
            <div>
              <p className="text-3xl font-headline text-primary mb-2">100%</p>
              <p className="text-sm text-on-surface-variant">Local Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
