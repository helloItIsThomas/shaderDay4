document.addEventListener("DOMContentLoaded", function () {
  const c = document.getElementById("glslCanvas");
  var sandbox = new GlslCanvas(c);

  let frameCount = 0;

  function updateFrameCount() {
    frameCount++;
    requestAnimationFrame(updateFrameCount);
  }

  updateFrameCount();

  fetch("shaders/shader.frag")
    .then((response) => response.text())
    .then((data) => {
      sandbox.load(data);
      sandbox.setUniform("u_resolution", [c.width, c.height]);
    })
    .catch((error) => console.error("Error loading shader:", error));
});
