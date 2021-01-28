

// Main game class to render the canvas

class Game {
    private canvas: HTMLCanvasElement
    private context : CanvasRenderingContext2D | null
    private height: number = window.innerHeight
    private width: number = window.innerWidth

    constructor(){
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.context = this.canvas.getContext("2d")
    }

    public render(): void{
        console.log("rendering")
    }
}

export default Game