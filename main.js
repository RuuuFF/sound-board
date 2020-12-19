// array para cara item de áudio
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// para cada item dentro de "sounds"
sounds.forEach(sound => {
  // cria um botão
  const btn = document.createElement('button');
  // adiciona a classe "btn" ao botão
  btn.classList.add('btn');
  
  // adiciona a string do momento no botão
  btn.innerText = sound;
  
  // para cada botão ele adiciona um ouvidor de eventos
  btn.addEventListener('click', () => {
    // chama a função "stopSongs"
    stopSongs();
    
    // da play no áudio do item
    document.getElementById(sound).play()
  });
  
  // adiciona os botões criados dentro da div "buttons"
  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  // para cada elemento dentro de sounds
  sounds.forEach(sound => {
    // pega o id de cada áudio
    const song = document.getElementById(sound);
    
    // pausa o som
    song.pause();
    // coloca o tempo da mesma em 0
    song.currentTime = 0;
  });
}