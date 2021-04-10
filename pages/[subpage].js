import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import { Button, Page, Text, Image } from '@geist-ui/react';
import GeistNavbar from '../components/GeistNavbar';
import Copyright from '../components/Copyright';
import CustomHead from '../components/CustomHead';
import Gallery from "react-photo-gallery";
import { allPhotos } from '../components/Constants';
import Carousel, { Modal, ModalGateway } from "react-images";

export default function Subpage() {
  const router = useRouter()
  const { subpage } = router.query
  const photos = allPhotos[subpage] || []

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
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Page>
    </>
  );
}
