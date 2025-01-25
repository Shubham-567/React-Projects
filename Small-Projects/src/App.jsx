import Accordion from "./Components/1-Accordion/Accordion.jsx";
import RandomColorGenerator from "./Components/2-Random-Color-Generator/RandomColorGenerator.jsx";
import StarRating from "./Components/3-Star-Rating/StarRating.jsx";
import ImageSlider from "./Components/4-Image-Slider/ImageSlider.jsx";

function App() {

  return (
    <>
      {/* <Accordion />
      <hr />
      <RandomColorGenerator />
      <hr />
      <StarRating noOfStars={10} />
      <hr /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  )
}

export default App
