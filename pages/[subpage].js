import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Page } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { mapAllPhotosSrc } from '../components/Helper';

export default function Subpage() {
  const router = useRouter()
  const { subpage } = router.query
  let allPhotosMapped = mapAllPhotosSrc()
  let photos = allPhotosMapped[subpage] || []

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <GeistNavbar page={subpage} />
      <CustomHead page={subpage} />
      <Page>
        <Gallery photos={photos} targetRowHeight={600} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => {
                  console.log(x);
                  return ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                    })
                })}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Page>
      <Footer/>
    </>
  );
}
