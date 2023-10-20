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
});

Hooks.on("renderSomeSheet", (app, html, data) => {
  // Encontre o elemento <i> com a classe "fas fa-coins".
  const coinsIcon = html.find(".currency-header i.fas.fa-coins");

  // Verifique se o ícone padrão foi encontrado.
  if (coinsIcon.length > 0) {
    // Substitua o ícone padrão pelo seu ícone personalizado.
    const customIconPath = "modules/op-dnd-replacements/assets/icons/belly-simbol.png"; // Atualize o caminho do ícone personalizado.
    coinsIcon.attr("class", "fas fa-custom-icon"); // Substitua a classe de ícone para seu ícone personalizado.
    coinsIcon.css("background-image", `url("${customIconPath}")`);
  }
});
