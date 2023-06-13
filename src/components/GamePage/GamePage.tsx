import ImageComponent from './ImageComponent'
import './game-page.css'

const GamePage = () => {
  let imageArray: string[] | number[] = ["./images/chewbacca.jpeg", "./images/hansolo.jpg", "./images/kenobi.jpg", "./images/luke.jpg", "./images/Padme.jpeg", "./images/Princess_Leia.jpg", "./images/Qui-Gon_Jinn.png", "./images/vader.jpg", "./images/yoda.jpg"]
  function randomizeImages(array:string[] |number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]]
      
    }
    console.log(array)
    return array
  }
// let test:number[] | string[] = [1, 2, 3, 4, 5]
  randomizeImages(imageArray)
  return (
    <>
      <h2>GamePage</h2>
      <section className='flex-container'>
        {imageArray.map(image => <ImageComponent src={image} />)}
        
      </section>
    </>
  )
}

export default GamePage