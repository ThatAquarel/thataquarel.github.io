import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

export class Intro {
    constructor(scene) {
        const intro = new THREE.Group();
        const loader = new STLLoader();
        
        // let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

        let material = new THREE.MeshPhongMaterial({
            color: 0xaaaaaa,
            transparent: true,
            opacity: 1.0,
          });

        loader.load('../res/3d/intro_0.stl', (geometry) => {
          this.intro_0a = new THREE.Mesh(geometry, material);
          this.intro_0a.position.setZ(-10);
          intro.add(this.intro_0a);
        
          this.intro_0b = new THREE.Mesh(geometry, material);
          this.intro_0b.position.setZ(- 138);
          this.intro_0b.rotateZ(Math.PI);
          intro.add(this.intro_0b);

          this.intro_0c = new THREE.Mesh(geometry, material);
          this.intro_0c.position.setZ(- 266);
          this.intro_0c.rotateZ(Math.PI);
          intro.add(this.intro_0c);
        });

        loader.load('../res/3d/intro_1.stl', (geometry) => {
          this.intro_1 = new THREE.Mesh(geometry, material);
          this.intro_1.position.setZ(55);
          intro.add(this.intro_1);
        });

        loader.load('../res/3d/intro_2.stl',  (geometry) => {
          this.intro_2 = new THREE.Mesh(geometry, material);
        
          this.intro_2.position.setZ(-40);
          intro.add(this.intro_2);
        });


        loader.load('../res/3d/intro_cyl.stl', (geometry) => {        
          this.intro_cyl_a = [];
          this.intro_cyl_b = [];
          this.intro_cyl_c = [];

          for (let i = 0; i < 3; i++) {
            let rad = i * 2 * Math.PI / 3 + Math.PI / 2;
        
            let x_offset = Math.cos(rad) * 40;
            let y_offset = Math.sin(rad) * 40;
        
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x_offset, 38.4/2 + y_offset, 0);
            intro.add(mesh);
        
            this.intro_cyl_a.push(mesh);
          }

          for (let i = 0; i < 3; i++) {
            let rad = i * 2 * Math.PI / 3 - Math.PI / 2;
        
            console.log(rad);
        
            let x_offset = Math.cos(rad) * 40;
            let y_offset = Math.sin(rad) * 40;
        
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x_offset, 38.4/2 + y_offset, -128);
            intro.add(mesh);
        
            this.intro_cyl_b.push(mesh);
          }

          for (let i = 0; i < 3; i++) {
            let rad = i * 2 * Math.PI / 3 - Math.PI / 2;
        
            console.log(rad);
        
            let x_offset = Math.cos(rad) * 40;
            let y_offset = Math.sin(rad) * 40;
        
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x_offset, 38.4/2 + y_offset, -256);
            intro.add(mesh);
        
            this.intro_cyl_c.push(mesh);
          }
        });

        intro.scale.set(0.035, 0.035, 0.035);
        intro.position.set(1,-0.3,0);
        
        this.intro = intro;
        this.scene = scene;

        this.scene.add(this.intro);

        this.material = material;
    }

    update(t) {
        if (this.intro_0a == undefined){
            return;
        }

        if (this.intro_0b == undefined){
            return;
        }

        if (this.intro_1 == undefined){
            return;
        }

        if (this.intro_2 == undefined){
            return;
        }

        if (this.intro_cyl_a == undefined){
            return;
        }

        if (this.intro_cyl_b == undefined){
            return;
        }

        this._update(t);
    }

    _update(t) {
        t = 0.8 * t;

        this.material.opacity = Math.max(1 + t /2500);
    

        this.intro.rotation.x = t * 0.0010;
        this.intro.rotation.y = t * -0.00025;
        this.intro.rotation.z = t * 0.003;

        this.intro_0a.position.z = t*t* 0.000025 - 10;
        this.intro_0b.position.z = t*t* -0.00003 - 138;
        this.intro_0c.position.z = t*t* -0.00007 - 266;

        this.intro_1.position.z = t*t* 0.000075 + 55;
        this.intro_2.position.z = t*t* 0.0001 - 40;

        this.intro_cyl_a.forEach((intro_cyl) => {
            intro_cyl.position.setZ(t*t* 0.00005);
        });

        this.intro_cyl_b.forEach((intro_cyl) => {
            intro_cyl.position.setZ(t*t* -0.00001  - 128);
        });

        this.intro_cyl_c.forEach((intro_cyl) => {
            intro_cyl.position.setZ(t*t* -0.00005  - 256);
        });
    }
}