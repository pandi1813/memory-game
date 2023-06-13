import ImageComponent from './ImageComponent'
import './game-page.css'

const GamePage = () => {
  let imageArray: string[] = ["./images/chewbacca.jpeg", "./images/hansolo.jpg", "./images/kenobi.jpg", "./images/luke.jpg", "./images/Padme.jpeg", "./images/Princess_Leia.jpg", "./images/Qui-Gon_Jinn.png", "./images/vader.jpg", "./images/yoda.jpg"]
  function randomizeImages(array:string[]) {
    
  }

  return (
    <>
      <h2>GamePage</h2>
      <section className='flex-container'>
        {imageArray.map(image => <ImageComponent src={image}/>)}
        
      </section>
    </>
  )
}

export default GamePage