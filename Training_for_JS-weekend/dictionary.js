function getDictionary() {
  let word = document.getElementById("word-input").value;
  let result = document.getElementById("result");

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) throw new Error("Word not found");
      return response.json();
    })

    .then((data) => {
      let entry = data[0];
      let meaning = entry.meanings[0];
      let definition = meaning.definitions[0].definition;
      let example = meaning.definitions[0].example  || 'Example not availible';
      let part = meaning.partOfSpeech;
      let audioUrl = entry.phonetics.find(p => p.audio) ?.audio || null  ;

      result.innerHTML = `
        <h2>Word:           ${entry.word}</h2>
        <p>Defination:      ${definition}</p>
        <p>Example:         ${example}</p>
        <p>Part of speech   ${part}</p>
        ${audioUrl ? `<button onclick="playAudio('${audioUrl}')">Play Audio</button> `: 'No Audio availible'}
        `;
    }) 
        .catch((error) => {
        result.innerHTML = `<p>${error.message}</p>`
    })
}

function playAudio(url){
    let audio = new Audio(url);
    audio.play();
}

