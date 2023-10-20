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
