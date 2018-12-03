videojs.registerPlugin("listenForParent", function() {
  var myPlayer = this;
  // This method called when postMessage sends data into the iframe
  function controlVideo(evt) {
    alert('hello!');
    if (evt.data === "toggleMute") {
      myPlayer.muted(false);
    }
  }
  // Listen for the message, then call controlVideo() method when received
  window.addEventListener("message", controlVideo);
});
