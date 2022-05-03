import * as THREE from "./js/three.js";
import {GLTFLoader} from "./js/GLTFLoader.js";
import {OrbitControls} from "./js/OrbitControls.js"

const loader = new GLTFLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

var pot;
loader.load('models/pot/scene.gltf',
  function(gltf){
    pot = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    pot.position.x = -0.37;
    pot.position.y = 0.65;
    pot.position.z = 0.15;


  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var bigpot;
loader.load('models/bigpot/scene.gltf',
  function(gltf){
    bigpot = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    bigpot.scale.set(0.007, 0.007, 0.007);

    bigpot.position.x = 0.37;
    bigpot.position.y = 0.65;
    bigpot.position.z = 0.15;


  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var stove;
loader.load('models/stove/scene.gltf',
  function(gltf){
    stove = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    controls.target = stove.position;


  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var room;
loader.load('models/room/scene.gltf',
  function(gltf){
    room = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.receiveShadow = true;
      }
    });

    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    room.position.z = 2.2;
    room.position.y = -0.3;


  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


var studio_light1;
loader.load('models/light1/scene.gltf',
  function(gltf){
    studio_light1 = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    studio_light1.position.x = -1.3;
    studio_light1.position.y = -0.26;
    studio_light1.position.z = 1.93;
    studio_light1.rotateY(2.80);
    studio_light1.scale.set(0.5, 0.5, 0.5);



  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

var studio_light2;
loader.load('models/light2/scene.gltf',
  function(gltf){
    studio_light2 = gltf.scene;

    gltf.scene.traverse(function(node){
      if(node.isMesh){
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });


    scene.add(gltf.scene);
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

    studio_light2.position.x = 1.36;
    studio_light2.position.y = -0.26;
    studio_light2.position.z = 2.01;
    studio_light2.rotateY(3.7);
    studio_light2.scale.set(0.5, 0.5, 0.5);


  },
  function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


 // const geometry = new THREE.SphereGeometry(0.2, 32, 16);
 // const material = new THREE.MeshBasicMaterial({color: 0xF0F0F0});
 // const bulb = new THREE.Mesh(geometry, material);
 // bulb.position.set(0, 1, 1);
 // scene.add(bulb);

camera.position.x = 0;
camera.position.y = 1.06;
camera.position.z = 2.58;
camera.lookAt(-.37, .65, .15);

// const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.4);
// scene.add(ambLight);

const light1 = new THREE.SpotLight(0xf9f9d0, 0.5, 0, 3.14, 0.8);
light1.position.set(-1.22, 0.82, 1.71);

light1.castShadow = true;
light1.shadow.mapSize.width = 512;
light1.shadow.mapSize.height = 512;
light1.shadow.camera.near = 0.5;
light1.shadow.camera.far = 500;
light1.shadow.camera.focus = 1;

scene.add(light1);


const light2 = new THREE.SpotLight(0xf9f9d0, 0.5, 0, 3.14, 0.8);
light2.position.set(1.23, 0.82, 1.81);

light2.castShadow = true;
light2.shadow.mapSize.width = 512;
light2.shadow.mapSize.height = 512;
light2.shadow.camera.near = 0.5;
light2.shadow.camera.far = 500;
light2.shadow.camera.focus = 1;

scene.add(light2);

const light3 = new THREE.SpotLight(0xf9f9d0, 0.35, 0, 3.14, 0.8);
light3.position.set(0.0, 1.6, 0.0);

light3.castShadow = true;
light3.shadow.mapSize.width = 512;
light3.shadow.mapSize.height = 512;
light3.shadow.camera.near = 0.5;
light3.shadow.camera.far = 500;
light3.shadow.camera.focus = 1;

scene.add(light3);


const light4 = new THREE.PointLight(0xf9f9d0, 0.4);
light4.position.set(0.0, 0.5, 3.0);

light4.castShadow = true;
light4.shadow.mapSize.width = 512;
light4.shadow.mapSize.height = 512;
light4.shadow.camera.near = 0.5;
light4.shadow.camera.far = 500;
light4.shadow.camera.focus = 1;

scene.add(light4);




// const spotLightHelper = new THREE.SpotLightHelper( light3 );
// scene.add( spotLightHelper );

// const helper = new THREE.CameraHelper(light1.shadow.camera);
// scene.add(helper);

function test(){
  alert("TEST");
}


let current_object = pot;
document.onkeydown = function (e) {
  console.log(e.keyCode);
  const move_amt = 0.01;
  switch (e.keyCode) {
    case 87:
      current_object.position.z -= move_amt;
      break;
    case 65:
      current_object.position.x -= move_amt;
      break;
    case 83:
      current_object.position.z += move_amt;
      break;
    case 68:
      current_object.position.x += move_amt;
      break;
    case 82:
      current_object.rotation.y += move_amt * 2;
      break;
    case 32:
      console.log(current_object == pot);
      if(current_object == pot){
        current_object = bigpot;
        document.getElementById("selector").innerHTML = "Moving Cast Iron Pot";
      }
      else{
        current_object = pot;
        document.getElementById("selector").innerHTML = "Moving Copper Pot";
      }
    // case 76:
    //   console.log("BALL POS: ", bulb.position);
    //   break;
    }
};


function animate(){
  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
}
animate();
