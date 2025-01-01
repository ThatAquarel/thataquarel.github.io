import '../style/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import {Intro} from "./elements/intro.js"

const scene = new THREE.Scene();

const width = window.innerWidth;
const height = window.innerHeight;
// const aspect = width / height;
// const scale = 5;

// let left = width / scale;
// let right = width / scale;

// if (aspect > 1) {
//   const location = 0.3;

//   left =  left * location * 2;
//   right = right * (1-location) * 2;
// }

// const camera = new THREE.OrthographicCamera( -left, right, height / scale, height / - scale, -1000, 1000 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 ); // the default

renderer.render(scene, camera);


//////////////////////

const intro = new Intro(scene);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // jeff.rotation.y += 0.01;
  // jeff.rotation.z += 0.01;

  intro.update(t);

  camera.position.z = t * -0.01 + 10;
  camera.position.x = t * -0.0002 + 5;
  camera.rotation.y = t * -0.0002;
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
