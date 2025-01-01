import '../style/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

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
const intro = new THREE.Group();
const loader = new STLLoader();

//////////////////////////////////////////////////////////////////////
// intro

let intro_0a, intro_0b;
loader.load('../res/3d/intro_0.stl', function (geometry) {
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
  intro_0a = new THREE.Mesh(geometry, material);
  intro_0a.position.setZ(-10);
  intro.add(intro_0a);

  intro_0b = new THREE.Mesh(geometry, material);
  intro_0b.position.setZ(- 138);
  intro_0b.rotateZ(Math.PI);
  intro.add(intro_0b);
});

let intro_1;
loader.load('../res/3d/intro_1.stl', function (geometry) {
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
  intro_1 = new THREE.Mesh(geometry, material);
  intro_1.position.setZ(55);
  intro.add(intro_1);
});

let intro_2;
loader.load('../res/3d/intro_2.stl', function (geometry) {
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
  intro_2 = new THREE.Mesh(geometry, material);

  intro_2.position.setZ(-40);
  intro.add(intro_2);
});

let intro_cyl_a = [];
let intro_cyl_b = [];
loader.load('../res/3d/intro_cyl.stl', function (geometry) {
  const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

  for (let i = 0; i < 3; i++) {
    let rad = i * 2 * Math.PI / 3 + Math.PI / 2;

    let x_offset = Math.cos(rad) * 40;
    let y_offset = Math.sin(rad) * 40;

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_offset, 38.4/2 + y_offset, 0);
    intro.add(mesh);

    intro_cyl_a.push(mesh);
  }

  for (let i = 0; i < 3; i++) {
    let rad = i * 2 * Math.PI / 3 - Math.PI / 2;

    console.log(rad);

    let x_offset = Math.cos(rad) * 40;
    let y_offset = Math.sin(rad) * 40;

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_offset, 38.4/2 + y_offset, -128);
    intro.add(mesh);

    intro_cyl_b.push(mesh);
  }
});

// intro.rotateY(Math.PI/6);
// intro.rotateY(Math.PI/6);
intro.rotateY(-Math.PI * 7/6);
intro.rotateX(-Math.PI/4);
intro.scale.set(0.035, 0.035, 0.035);
intro.position.set(0,1,0);

scene.add(intro);

//////////////////////


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);


// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

// Scroll Animation

// // Set up post-processing (EffectComposer)
// const composer = new EffectComposer(renderer);
// composer.addPass(new RenderPass(scene, camera));

// // Add the UnrealBloomPass (bloom effect)
// const bloomPass = new UnrealBloomPass(
//   new THREE.Vector2(window.innerWidth, window.innerHeight), // size of the canvas
//   0.5, // strength of the bloom
//   0.1, // radius of the bloom
//   0.85 // threshold for what should bloom
// );
// composer.addPass(bloomPass);


function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // jeff.rotation.y += 0.01;
  // jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01 + 10;
  camera.position.x = t * -0.0002 + 5;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  moon.rotation.x += 0.005;

  // controls.update();

  // composer.render();
  renderer.render(scene, camera);
}

animate();
