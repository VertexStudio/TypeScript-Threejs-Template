import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import Lama from "../../../assets/models/lama.gltf"

// Main game class to render the canvas

class Game {
    
    private height: number = window.innerHeight
    private width: number = window.innerWidth
    private renderer: THREE.WebGLRenderer
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private object3D: THREE.Mesh
    private controls: OrbitControls

    constructor(){

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(this.width, this.height)
        // orbit controls
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(70, this.width/this.height,0.1,1000)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.object3D = this.addCube()

        //Attach liseteners
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

    public render(): void{
        this.object3D.rotation.x += 0.01
        this.object3D.rotation.y += 0.01
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }
}

export default Game