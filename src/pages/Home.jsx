import { use } from "react"
import NewFaces from "../components/NewFaces/NewFaces"
import NewsSlider from "../components/NewsSlider/NewsSlider"
import SecionHeader from "../components/sectionHeader/SecionHeader"

const Home = (params) => {


  return (
    <>
      <SecionHeader/>
      <NewsSlider/>
      <NewFaces/>
    </>
  )
}

export default Home