chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "corrigirTexto") {
        // Lógica para correção de texto
        const textoCorrigido = request.texto.replace(/erro/gi, "correção");
        sendResponse({textoCorrigido: textoCorrigido});
      }
    }
  );
  