import React from 'react'
import DomeGallery from '../components/DomeGallery';


const Home = () => {
  return (
    <div className="">
        <div style={{ width: '100vw', height: '100vh' }}>
            <DomeGallery
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={0}
                segments={34}
                dragDampening={2}
                grayscale = {false}
            />
        </div>
    </div>
  )
}

export default Home
