Hooks.on("renderActorSheet", (app, html, data) => {
  // Função para extrair valor de um campo dinâmico (ex: "bond", "flaw", "ideal")
  function extractValue(fieldName) {
    const fieldValue = data.actor.data.data.details[fieldName];

    // Use uma expressão regular para extrair o valor do campo.
    const fieldMatch = fieldValue.match(/<p>(.*?)<\/p>/);

    if (fieldMatch) {
      return fieldMatch[1];
    }

    return "";
  }

  const bondValue = extractValue("bond");
  const flawValue = extractValue("flaw");
  const idealValue = extractValue("ideal");

  // URL da imagem que você fez o upload.
  const imagePath = "modules/op-dnd-replacements/assets/icons/belly-simbol.png";

  // Define o tamanho da imagem (largura e altura) em pixels.
  const imageSizeHeight = "14px"; // Ajuste para a altura desejada.
  const imageSizeWidth = "14px"; // Ajuste para a largura desejada.
  const imageSizeHeightInventory = "30px"; // Ajuste para a altura desejada.
  const imageSizeWidthInventory = "18px"; // Ajuste para a largura desejada.

  // Crie um novo <span> com o valor de "bond".
  const bondSpan = `<span class="origin-summary-text" data-tooltip="bond" data-placeholder="Bond"><h4>${bondValue}</h4></span>`;

  // Crie um novo <span> com o valor de "flaw" e uma imagem dentro dele.
  const flawSpan = `<span class="origin-summary-text" data-tooltip="flaw" data-placeholder="Flaw">
    <img src="${imagePath}" class="custom-image" style="width: ${imageSizeWidth}; height: ${imageSizeHeight}; margin-right:3px">
    <h4>${flawValue}</h4>
  </span>`;

  // Crie um novo <span> com o valor de "ideal".
  const idealSpan = `<span class="origin-summary-text" data-tooltip="ideal" data-placeholder="Ideal"><h4>${idealValue}</h4></span>`;

  // Selecione o elemento <ul> com a classe "origin-summary".
  const originSummary = html.find(".origin-summary");

  // Selecione a primeira <li> dentro da <ul> "origin-summary".
  const firstLi = originSummary.find("li:first");

  // Adicione os novos elementos (imagem e spans) à primeira <li> dentro da <ul> "origin-summary".
  firstLi.append(idealSpan);
  firstLi.append(flawSpan);

  const customImageLi = `<li class="custom-image-li" style="width: ${imageSizeWidthInventory}; height: ${imageSizeHeightInventory}; margin-right:8px;"><img src="${imagePath} "></li> `;

  // Encontre a última <li> dentro da classe "currency".
  const currencyList = html.find("ol.currency");
  const lastCurrencyItem = currencyList.find("li:last");

  // Verifique se a última <li> foi encontrada.
  if (lastCurrencyItem.length > 0) {
    // Insira o novo elemento <li> antes da última <li>.
    lastCurrencyItem.before(customImageLi);
  }
});
