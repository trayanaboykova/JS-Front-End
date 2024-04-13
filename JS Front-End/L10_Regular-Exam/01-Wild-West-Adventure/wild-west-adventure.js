function wildWestAdventure(input) {
    const posse = {};

    function Character(name, hp, bullets) {
        this.name = name;
        this.hp = hp;
        this.bullets = bullets;
    }

    function fireShot(character, target) {
        if (character.bullets > 0) {
            character.bullets--;
            console.log(`${character.name} has successfully hit ${target} and now has ${character.bullets} bullets!`);
        } else {
            console.log(`${character.name} doesn't have enough bullets to shoot at ${target}!`);
        }
    }

    function takeHit(character, damage, attacker) {
        character.hp -= damage;
        if (character.hp > 0) {
            console.log(`${character.name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
        } else {
            console.log(`${character.name} was gunned down by ${attacker}!`);
            delete posse[character.name];
        }
    }

    function reload(character) {
        if (character.bullets < 6) {
            const bulletsReloaded = 6 - character.bullets;
            character.bullets = 6;
            console.log(`${character.name} reloaded ${bulletsReloaded} bullets!`);
        } else {
            console.log(`${character.name}'s pistol is fully loaded!`);
        }
    }

    function patchUp(character, amount) {
        if (character.hp === 100) {
            console.log(`${character.name} is in full health!`);
        } else {
            const recovered = Math.min(100 - character.hp, amount);
            character.hp += recovered;
            console.log(`${character.name} patched up and recovered ${recovered} HP!`);
        }
    }
    const n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
        const [name, hp, bullets] = input[i].split(' ');
        posse[name] = new Character(name, parseInt(hp), parseInt(bullets));
    }
    for (let i = n + 1; i < input.length; i++) {
        const [action, characterName, ...args] = input[i].split(' - ');
        const character = posse[characterName];
        switch (action) {
            case 'FireShot':
                fireShot(character, args[0]);
                break;
            case 'TakeHit':
                takeHit(character, parseInt(args[0]), args[1]);
                break;
            case 'Reload':
                reload(character);
                break;
            case 'PatchUp':
                patchUp(character, parseInt(args[0]));
                break;
        }
    }
    for (const characterName in posse) {
        const character = posse[characterName];
        console.log(`${character.name}\n  HP: ${character.hp}\n  Bullets: ${character.bullets}`);
    }
}



