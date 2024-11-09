import { Navbar } from '@/components/Navbar';
import { Banner } from '@/components/Banner';
import { ProductCarousel } from '@/components/ProductCarousel';
import { Categories } from '@/components/Categories';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <ProductCarousel />
        <Categories />
      </main>
    </div>
  );
}