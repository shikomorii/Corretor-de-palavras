document.body.addEventListener('input', function (e) {
  console.log('ue', e)
  
  if (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'textarea' || e.target.contentEditable === 'true') {
      const originalText = e.target.innerText || e.target.value;

      let correctedText = originalText.replace("Ruth's", 'my');

     
      correctedText = correctedText.replace(/Dog/i, 'ferret');

      if (e.target.tagName.toLowerCase() === 'textarea') {
          e.target.value = correctedText;
      } else {
          e.target.innerText = correctedText;
      }
  }
});

const apiURL = '';


async function getCorrectedText(text) {
try {
 
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': '',
      'Authorization': '',
    },
    body: JSON.stringify({
      input: text,
      model: 'text-embedding-ada-002',
      encoding_format: 'float',
    }),
  });

  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

 
  const data = await response.json();
  const correctedText = data.choices[0].text;

 
  return correctedText;

} catch (error) {
  
  console.error('Error correcting text:', error);
  return text;
}
}



document.getElementById("correctButton").onclick= async ()=>{
  const correctedText = await getCorrectedText('wather');
  const myTextArea = document.getElementById("textToCorrect");
myTextArea.value = correctedText; 
}

/* document.body.addEventListener('input', async function (e) {
  console.log('ue', e)
  if (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'textarea' || e.target.contentEditable === 'true') {
      const originalText = e.target.innerText || e.target.value;

      // Chamada à função assíncrona para obter o texto corrigido
      const correctedText = await getCorrectedText(originalText);

      // Atualiza o texto do elemento com o texto corrigido
      if (e.target.tagName.toLowerCase() === 'textarea') {
          e.target.value = correctedText;
      } else {
          e.target.innerText = correctedText;
      }
  }
}); */