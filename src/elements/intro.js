class Intro {
    constructor(scene) {
        const intro = new THREE.Group();
        const loader = new STLLoader();

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

        this.intro_0a = intro_0a;
        this.intro_0b = intro_0b;

        let intro_1;
        loader.load('../res/3d/intro_1.stl', function (geometry) {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
          intro_1 = new THREE.Mesh(geometry, material);
          intro_1.position.setZ(55);
          intro.add(intro_1);
        });

        this.intro_1 = intro_1;

        let intro_2;
        loader.load('../res/3d/intro_2.stl', function (geometry) {
          const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
          intro_2 = new THREE.Mesh(geometry, material);
        
          intro_2.position.setZ(-40);
          intro.add(intro_2);
        });

        this.intro_2 = intro_2;

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

          this.intro_cyl_a = intro_cyl_a;
          this.intro_cyl_b = intro_cyl_b;
        
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

        if (this.intro_cyl_a.length == 0){
            return;
        }

        if (this.intro_cyl_b.length == 0){
            return;
        }

        this._update(t);
    }

    _update(t) {
        this.intro_0a.position.z = t* -1 - 10;
    }
}