import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function App() {
  const [isScreenshotActive, setIsScreenshotActive] = useState<boolean>(false)
  const [imageSrc, setImageSrc] = useState()

  const webcamRef = useRef(null)

  const handleClick = () => {
    setIsScreenshotActive(!isScreenshotActive)
    if(isScreenshotActive) capture()
  }

  const capture = useCallback(
    () => {
      while(isScreenshotActive) {
        setInterval(() => setImageSrc(webcamRef.current.getScreenshot()), 1000)
      }
    }, [webcamRef, isScreenshotActive])

  return (
    <div className="App">
      <h1>Poc Tesseract</h1>
      <div>
        <Webcam mirrored/>
        <button onClick={handleClick}>{isScreenshotActive ? "Stop" : "Start"} screenshot</button>
      </div>
    </div>
  )
}
// https://blog.logrocket.com/using-react-webcam-capture-display-images/
// https://www.npmjs.com/package/react-webcam
// https://maheshrao98.hashnode.dev/building-a-real-time-video-text-recognition-app-using-tesseract-js-and-react
export default App
