import { imgDict, allPhotos } from "./Constants"

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const mapAllPhotosSrc = () => {
  let allPhotosMapped = {}
  for (let cat in allPhotos) {
    allPhotosMapped[cat] = []
    allPhotos[cat].map((p, i) => {
      allPhotosMapped[cat].push({
        src: imgDict[p.src],
        width: p.width,
        height: p.height
      })
    })
  }
  return allPhotosMapped;
}