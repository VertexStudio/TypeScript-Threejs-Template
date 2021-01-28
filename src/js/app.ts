import Game from "./Components/Game/Game"



const main = () => {
    console.log("Typescript setup first!")

    const myGame: Game = new Game()

    function animate(){
        requestAnimationFrame(animate)
        myGame.render()
    }

    animate()
} 

window.onload = () => {
    main()
}