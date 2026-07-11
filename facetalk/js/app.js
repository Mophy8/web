/*
 Jasmine 3D
 第1章
 基礎初始化
*/


// ==========================
// Three.js 基本設定
// ==========================


const scene = new THREE.Scene();


scene.background =
new THREE.Color(0x050505);



const camera =
new THREE.PerspectiveCamera(

45,

window.innerWidth /
window.innerHeight,

0.1,

1000

);



camera.position.z = 5;



const renderer =
new THREE.WebGLRenderer({

antialias:true

});



renderer.setSize(

window.innerWidth,

window.innerHeight

);



renderer.setPixelRatio(

window.devicePixelRatio

);



document
.getElementById("viewer")
.appendChild(renderer.domElement);




// ==========================
// 光源
// ==========================


const light =
new THREE.AmbientLight(

0xffffff,

1

);


scene.add(light);




const pointLight =
new THREE.PointLight(

0xffffff,

2

);


pointLight.position.set(

3,
3,
3

);


scene.add(pointLight);




// ==========================
// 測試模型
// 第2章會替換成真正3D人物
// ==========================


const geometry =
new THREE.BoxGeometry(

1,
1,
1

);



const material =
new THREE.MeshStandardMaterial({

color:0xff88bb

});



const cube =
new THREE.Mesh(

geometry,

material

);



scene.add(cube);





// ==========================
// 動畫循環
// ==========================


function animate()
{


requestAnimationFrame(animate);



cube.rotation.x +=0.01;


cube.rotation.y +=0.01;



renderer.render(

scene,

camera

);


}



animate();




// ==========================
// 圖片上傳
// ==========================


let uploadImage=null;



const upload =
document
.getElementById("imageUpload");



upload.addEventListener(

"change",

function(event)
{


const file =
event.target.files[0];



if(!file)
return;



const img =
new Image();



img.onload=function()
{


uploadImage=img;



document
.getElementById("status")
.innerHTML=

"圖片載入完成，等待建立3D人物";



};



img.src =
URL.createObjectURL(file);



}

);





// ==========================
// 建立人物按鈕
// ==========================


document
.getElementById("createAvatar")
.onclick=function()
{


if(!uploadImage)
{

alert(
"請先上傳圖片"
);

return;

}



document
.getElementById("status")
.innerHTML=

"下一章開始建立AI人物模型";


};




// ==========================
// 語音測試
// ==========================


document
.getElementById("speak")
.onclick=function()
{


const text =
"你好，我是茉莉，歡迎來到三D點陣世界";



const speech =
new SpeechSynthesisUtterance(text);



speech.lang="zh-TW";



speech.rate=0.9;



window
.speechSynthesis
.speak(speech);



};





// ==========================
// 視窗調整
// ==========================


window.addEventListener(

"resize",

()=>{


camera.aspect =

window.innerWidth /

window.innerHeight;



camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,

window.innerHeight

);



}

);
