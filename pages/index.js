import { useCallback } from 'react';
import { Page } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Copyright from '../components/Copyright';
import CustomHead from '../components/CustomHead';
import { websiteInfo } from '../components/Constants';
import Gallery from "react-photo-gallery";
import Link from 'next/link';

export default function Home() {
  const photos = websiteInfo.imageCategories;

  const imageRenderer = useCallback(
    ({ index, photo }) => (
        <Link key={`category-${index}`} href={photo.url}>
          <div className="link-img-container">
            <img title="" alt="" {...photo} />
            <div className="category-title-container">{photo.title}</div>
          </div>
        </Link>
    ),
    []
  );

  return (
    <>
      <GeistNavbar page="Portfolio" />
      <CustomHead page="Portfolio" />
      <Page>
        <Gallery photos={photos} renderImage={imageRenderer} />
      </Page>
    </>
  );
}
