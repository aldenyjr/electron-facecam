window.onload = async function () {
  const srteam = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  document.querySelector("video").srcObject = srteam;
  console.log("OK");
};
