import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

export default function Page({ meta, ...props }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <div className={`page-inner ${!isIndexPage ? 'with-margin' : ''}`}>
            <Meta {...meta} />
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
