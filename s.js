spd = 0.005;
var spr = scene.getObjectByName("spr", true);
var ctr = scene.getObjectByName("ctr", true);
var ax2 = scene.getObjectByName("ax2", true);
spr.position.copy(
  new THREE.Vector3().crossVectors(
    new THREE.Vector3().subVectors(ax2.position, ctr.position),
    new THREE.Vector3().subVectors(spr.position, ctr.position)
  )
);
function update(event) {
  var quaternion = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3().subVectors(ax2.position, ctr.position),
    spd
  );
  scene.add(
    new THREE.ArrowHelper(
      new THREE.Vector3().subVectors(ax2.position, ctr.position),
      spr.position
    )
  );
  spr.position.copy(
    new THREE.Vector3()
      .subVectors(spr.position, ctr.position)
      .normalize()
      .multiplyScalar(10)
      .applyQuaternion(quaternion)
  );
}
