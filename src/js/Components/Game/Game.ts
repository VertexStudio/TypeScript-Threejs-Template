import * as THREE from 'three';
import {notice} from '@pnotify/core';

// Main game class to render the canvas

class Game {
    
    private height: number = window.innerHeight
    private width: number = window.innerWidth
    private renderer: THREE.WebGLRenderer
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private object3D: THREE.Mesh

    constructor(){

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(this.width, this.height)
        // orbit controls
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(70, this.width/this.height,0.1,1000)
        this.object3D = this.addCube()

        //Attach liseteners
        this.attachListeners()
        // resize listener
        document.body.appendChild(this.renderer.domElement)
    }

    addCube(): THREE.Mesh {
        const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
        const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
        const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
        this.scene.add(cube)
        this.camera.position.z = 2
        return cube
    }

    attachListeners(): void {
        window.addEventListener("click", async ()=>{
            console.log("Yeah!")
            const myNotice = notice({
                text: "I'm a notice."
            })
            
        }, false)
    }

    public render(): void{
        this.object3D.rotation.x += 0.01
        this.object3D.rotation.y += 0.01
        this.renderer.render(this.scene, this.camera)
    }
}

export default Game