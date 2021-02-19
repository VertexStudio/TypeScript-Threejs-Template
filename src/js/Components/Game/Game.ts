// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {ExtendedObject3D, Project, Scene3D} from "enable3d"

// Main game class to render the canvas

class Game extends Scene3D{
    
    // private height: number = window.innerHeight
    // private width: number = window.innerWidth
    // private renderer: THREE.WebGLRenderer
    // private scene: THREE.Scene
    // private camera: THREE.PerspectiveCamera
    // private object3D: THREE.Mesh
    // private controls: OrbitControls

    private box: ExtendedObject3D | undefined 

    constructor(){
        super({key: "MainScene", enableXR: false})
    }

    async init(){
        console.log("Preloading phase")
    }

    async create(){
        this.warpSpeed()

        //this.physics.debug?.enable()

        this.camera.position.set(10,10,20)

        this.box = this.add.box({ y: 2 }, { lambert: { color: 'deepskyblue' } })
        //this.physics.add.box({ y: 10 }, { lambert: { color: 'hotpink' } })
    }

    update(){
        if (this.box) {
            this.box.rotation.x += 0.01
            this.box.rotation.y += 0.01
        }
    }


    // constructor(){

    //     this.renderer = new THREE.WebGLRenderer()
    //     this.renderer.setSize(this.width, this.height)
    //     // orbit controls
    //     this.scene = new THREE.Scene()
    //     this.camera = new THREE.PerspectiveCamera(70, this.width/this.height,0.1,1000)
    //     this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    //     this.object3D = this.addCube()

    //     //Attach liseteners
    //     // resize listener
    //     document.body.appendChild(this.renderer.domElement)
    // }

    // addCube(): THREE.Mesh {
    //     const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
    //     const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    //     const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
    //     this.scene.add(cube)
    //     this.camera.position.z = 2
    //     return cube
    // }

    // public render(): void{
    //     this.object3D.rotation.x += 0.01
    //     this.object3D.rotation.y += 0.01
    //     this.controls.update()
    //     this.renderer.render(this.scene, this.camera)
    // }
}

export default Game