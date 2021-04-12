import { GeistProvider, CssBaseline } from '@geist-ui/react'
import "../public/style/main.css"

function MyApp({ Component, pageProps }) {
  if (typeof document !== "undefined") {
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
  }
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
