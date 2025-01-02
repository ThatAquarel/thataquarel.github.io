import '../style/style.css';
import * as THREE from 'three';
import {Intro} from "./elements/intro.js"

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 ); // the default

renderer.render(scene, camera);



const intro = new Intro(scene);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

let camera_shift = 5;
if (window.innerWidth < 900) {
  camera_shift = 0;
}
  

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;


  intro.update(t);

  // camera.position.z = t * -0.005 + 10;
  // camera.position.x = t * -0.00005 + 5;

  camera.position.z = t * -0.0015 + 10;
  camera.position.x = t * 0.0003 + camera_shift;
  // camera.rotation.y = -Math.PI/2;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  // controls.update();

  renderer.render(scene, camera);
}

animate();
