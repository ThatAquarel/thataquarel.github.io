import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

export class Intro {
    constructor(scene) {
        const intro = new THREE.Group();
        const loader = new STLLoader();

        loader.load('../res/3d/intro_0.stl', (geometry) => {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
          this.intro_0a = new THREE.Mesh(geometry, material);
          this.intro_0a.position.setZ(-10);
          intro.add(this.intro_0a);
        
          this.intro_0b = new THREE.Mesh(geometry, material);
          this.intro_0b.position.setZ(- 138);
          this.intro_0b.rotateZ(Math.PI);
          intro.add(this.intro_0b);
        });

        loader.load('../res/3d/intro_1.stl', (geometry) => {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
          this.intro_1 = new THREE.Mesh(geometry, material);
          this.intro_1.position.setZ(55);
          intro.add(this.intro_1);
        });

        loader.load('../res/3d/intro_2.stl',  (geometry) => {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
          this.intro_2 = new THREE.Mesh(geometry, material);
        
          this.intro_2.position.setZ(-40);
          intro.add(this.intro_2);
        });


        loader.load('../res/3d/intro_cyl.stl', (geometry) => {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
        
          this.intro_cyl_a = [];
          this.intro_cyl_b = [];

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
        });

        intro.rotateY(-Math.PI * 7/6);
        intro.rotateX(-Math.PI/4);
        intro.scale.set(0.035, 0.035, 0.035);
        intro.position.set(0,1,0);
        
        this.intro = intro;
        this.scene = scene;

        this.scene.add(this.intro);
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
        this.intro.rotateZ(Math.abs(t) * 0.0001)

        this.intro_0a.position.z = t*t* 0.001 - 10;
        this.intro_0b.position.z = t*t* -0.001 - 138;
    }
}