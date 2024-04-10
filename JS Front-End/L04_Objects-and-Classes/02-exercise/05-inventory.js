function solve(input) {
    const heroes = [];
  
    for (let i = 0; i < input.length; i++) {
      const [name, level, itemsStr] = input[i].split(" / ");
      const items = itemsStr ? itemsStr.split(", ") : [];
      heroes.push({ name, level: Number(level), items });
    }
  
    const sortedHeroes = heroes.sort((a, b) => a.level - b.level);
  
    const output = sortedHeroes.map(hero => {
      return `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`;
    }).join("\n");
  
    return output;
  }
  