window.addEventListener('load', draw);

function draw() {
  let width  = window.innerWidth;
  let height = window.innerHeight * 0.85;
  
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true,
    devicePixelRatio: window.devicePixelRatio
  });
  
  renderer.setClearColor(0xffffff);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0xffffff, 50, 2000);

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1200);

  const group = new THREE.Group();
  scene.add(group);
  
  var loader = new THREE.FontLoader();
  loader.load( 'js/helvetiker_regular.typeface.json', function ( font ) {
    let fontSize = 80;
    let fontHeight = 16;
    let fontCurveSegments = 20;
    let itemCount = 90;
    
    const materialP = new THREE.MeshStandardMaterial({
      color: 0xff6060
    });
    
    const geometryP = new THREE.TextBufferGeometry( 'P', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryP, materialP);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }

    const materialO = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa
    });
    
    const geometryO = new THREE.TextBufferGeometry( 'O', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryO, materialO);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
    
    const materialR = new THREE.MeshStandardMaterial({
      color: 0xaf60ff
    });
    
    const geometryR = new THREE.TextBufferGeometry( 'R', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryR, materialR);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
    
    const materialT = new THREE.MeshStandardMaterial({
      color: 0x60ffff
    });
    
    const geometryT = new THREE.TextBufferGeometry( 'T', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryT, materialT);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
    
    const materialF = new THREE.MeshStandardMaterial({
      color: 0x60ff60
    });
    
    const geometryF = new THREE.TextBufferGeometry( 'F', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryF, materialF);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
    
    const materialL = new THREE.MeshStandardMaterial({
      color: 0xffff60
    });
    
    const geometryL = new THREE.TextBufferGeometry( 'L', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryL, materialL);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
    
    const materialI = new THREE.MeshStandardMaterial({
      color: 0xffaf60
    });
    
    const geometryI = new THREE.TextBufferGeometry( 'I', {
      font: font,
      size: fontSize,
      height: fontHeight,
      curveSegments: fontCurveSegments,
    } );

    for (let i = 0; i < itemCount; i++) {
      const mesh = new THREE.Mesh(geometryI, materialI);
      mesh.position.x = (Math.random() - 0.5) * 2000;
      mesh.position.y = (Math.random() - 0.5) * 2000;
      mesh.position.z = (Math.random() - 0.5) * 2000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      group.add(mesh);
    }
  } );

  scene.add(new THREE.DirectionalLight(0xffffff, 1.5));
  scene.add(new THREE.AmbientLight(0xffffff, 1.5));

  
  var speedY = 0.0005;
  var speedX = 0.0005;
  var speedZ = 0;
  tick();

  function tick() {
    group.rotateY(speedY);
    group.rotateX(speedX);
    group.rotateZ(speedZ);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  
  let links = document.getElementsByClassName('link_list');
  
  links[0].addEventListener('mouseenter', function(){
    speedY -= 0.002
  });
  links[0].addEventListener('mouseleave', function(){
    speedY += 0.002
  });
  
  links[1].addEventListener('mouseenter', function(){
    speedX -= 0.002
  });
  links[1].addEventListener('mouseleave', function(){
    speedX += 0.002
  });
  
  links[2].addEventListener('mouseenter', function(){
    speedZ -= 0.002
    speedX += 0.002
  });
  links[2].addEventListener('mouseleave', function(){
    speedZ += 0.002
    speedX -= 0.002
  });
  
  links[3].addEventListener('mouseenter', function(){
    speedX += 0.0002
    speedY += 0.0005
    speedZ -= 0.002
  });
  links[3].addEventListener('mouseleave', function(){
    speedX -= 0.0002
    speedY -= 0.0005
    speedZ += 0.002
  });
  
  var setTime = false;
  
  window.addEventListener('resize', function(){
    if (setTime !== false) {
      clearTimeout(setTime);
    }
    setTime = setTimeout(function() {
    let newWidth  = window.innerWidth;
    let newHeight = window.innerHeight;
    renderer.setSize(newWidth, newHeight);
    location.reload();
    }, 20 );
	});
}
