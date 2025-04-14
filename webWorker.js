let i = 0;

function timedCount() {
  i++;
  postMessage(i);               // → an index.html senden
  setTimeout(timedCount, 1000); // → alle 1 Sekunde erneut aufrufen
}

timedCount();
