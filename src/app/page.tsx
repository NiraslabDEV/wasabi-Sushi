import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ChefSection from "@/components/sections/ChefSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ReservationSection from "@/components/sections/ReservationSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <MenuSection />
      <ExperienceSection />
      <ChefSection />
      <StorySection />
      <GallerySection />
      <ReviewsSection />
      <ReservationSection />
      <LocationSection />
    </main>
  );
}
}
