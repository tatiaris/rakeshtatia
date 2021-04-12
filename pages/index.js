import { useCallback } from 'react';
import { Page } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import { websiteInfo, imgDict } from '../components/Constants';
import Gallery from "react-photo-gallery";
import Link from 'next/link';

export default function Home() {
  const photos = websiteInfo.imageCategories;

  const imageRenderer = useCallback(({ index, photo }) => (
      <a key={`category-${index}`} href={photo.url}>
        <div className="link-img-container">
          <img title="" alt="" src={imgDict[photo.src]} height={photo.height} width={photo.width} />
          <div className="category-title-container">{photo.title}</div>
        </div>
      </a>
  ), []);

  return (
    <>
      <GeistNavbar page="Portfolio" />
      <CustomHead page="Portfolio" />
      <Page>
        <Gallery photos={photos} renderImage={imageRenderer} targetRowHeight={500} />
      </Page>
      <Footer/>
    </>
  );
}
