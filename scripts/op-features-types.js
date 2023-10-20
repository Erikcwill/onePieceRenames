/*Hooks.on("init", function() {
  game.dnd5e.config.skills["tec"] = {
    label: "Tecnologia", // Nome da habilidade
    ability: "wis", // Habilidade associada (Inteligência)
  };
});


Hooks.on("createActor", (actor, data, options, userId) => {
  if (actor.data.type === "character") {
    // Certifique-se de que estamos adicionando o detalhe apenas a atores do tipo "character".
    actor.data.data.details.dreams = {
      label: "Sonhos",
      value: "", // Você pode definir um valor padrão aqui, se desejar.
    };
    actor.update(); // Isso salvará as alterações no ator.
  }
});
  */

Hooks.on("init", function () {
  game.dnd5e.config.featureTypes["personality"] = {
    label: "Personality",
    subtypes: {
      defect: "Defects",
      individuality: "individualitys",
    },
  };
});

Hooks.on("init", function () {
  game.dnd5e.config.featureTypes["race"] = {
    label: "Raça",
  };
});

Hooks.on("init", function () {
  game.dnd5e.config.featureTypes["akuma"] = {
    label: "Akuma no mi",
  };
});

Hooks.on("init", function () {
  game.dnd5e.config.featureTypes["energypoint"] = {
    label: "Energy Point",
  };
});
