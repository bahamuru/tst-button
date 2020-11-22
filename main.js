async function main() {
  const button = document.getElementById("button");
  const ledView = document.getElementById("ledView");
  const gpioAccess = await navigator.requestGPIOAccess();
  const ledPort = gpioAccess.ports.get(26); // LED の GPIO ポート番号
  await ledPort.export("out");

  let lit = false;

  button.onclick = async function () {
    lit = !lit;

    const color = lit ? "red" : "black";
    ledView.style.backgroundColor = color;
    const led = lit ? 1 : 0;
    await port.write(led); // LED を点灯

}

main();