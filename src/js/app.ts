import Game from "./Components/Game/Game"
import {Project} from "enable3d"


const main = () => {
    console.log("Typescript setup first!")

    const project = new Project({ scenes: [Game], antialias: true })
} 

window.onload = () => {
    main()
}