// ---------------------------------------------------------------------------
// PARTIE 1 : Décorateurs
// ---------------------------------------------------------------------------

// Ce décorateur est censé logger l'appel d'une méthode.
// TODO: Typer correctement les arguments (target, propertyKey, descriptor).
// Astuce: descriptor est de type TypedPropertyDescriptor<any>
function LogAction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        console.log(`[LOG] Action: ${propertyKey} appelée avec les arguments : ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// ---------------------------------------------------------------------------
// PARTIE 2 : Types & Interfaces
// ---------------------------------------------------------------------------

// TODO: Créer un type "Equipment" qui est une Union de chaines de caractères :
// 'Sword' | 'Staff' | 'Potion' | 'Shield'


// TODO: Créer une interface "IInventoryHolder"
// Elle doit obliger la classe à avoir :
// - une méthode "addToInventory(item: Equipment): void"
// - une méthode "getInventory(): Equipment[]"


// ---------------------------------------------------------------------------
// PARTIE 3 : Classes
// ---------------------------------------------------------------------------

// TODO:
// 1. Rendre cette classe Abstraite pour qu'on ne puisse pas l'instancier directement.
// 2. Typer les propriétés (name, health, maxHealth).
// 3. Rendre "health" et "maxHealth" accessibles uniquement depuis cette classe et ses enfants (protected).
// 4. Rendre "name" accessible en lecture seule (readonly) et public.
// 5. Créer une méthode abstraite "attack(target: Character): void".
class Character {
    
    // name; 
    // health;
    // maxHealth;

    // TODO: Initialiser les propriétés dans le constructeur avec les modificateurs d'accès
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
    }

    // TODO: Utiliser le décorateur @LogAction ici
    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
        console.log(`${this.name} prend ${amount} dégâts. Vie restante: ${this.health}`);
    }

    get isAlive() {
        return this.health > 0;
    }
}

// TODO:
// 1. Faire hériter Warrior de Character.
// 2. Implémenter l'interface IInventoryHolder.
// 3. Implémenter la méthode abstraite attack.
class Warrior {
    // inventory = [];

    constructor(name) {
        // Appeler le constructeur parent avec 100 PV
        // super(name, 100);
        this.inventory = [];
    }

    // TODO: Typer 'item' avec le type 'Equipment'
    addToInventory(item) {
        this.inventory.push(item);
    }

    getInventory() {
        return this.inventory;
    }

    // TODO: Implémenter attack. 
    // Un guerrier attaque avec une valeur fixe (ex: 10).
    // Si target n'est pas mort, il subit des dégâts.
    attack(target) {
        console.log(`${this.name} frappe ${target.name} avec son épée !`);
        target.takeDamage(10);
    }
}

// TODO:
// 1. Faire hériter Mage de Character.
// 2. Le Mage a une propriété 'mana' (number).
class Mage {
    // mana;

    constructor(name, mana) {
        // super(name, 50); // 50 PV pour le mage
        this.mana = mana;
    }

    // Le mage attaque en utilisant 10 de mana pour infliger 20 dégâts.
    // S'il n'a pas assez de mana, il ne fait rien (loggez un message).
    attack(target) {
        if (this.mana >= 10) {
            console.log(`${this.name} lance une boule de feu sur ${target.name} !`);
            this.mana -= 10;
            target.takeDamage(20);
        } else {
            console.log(`${this.name} n'a plus assez de mana...`);
        }
    }
}


// ---------------------------------------------------------------------------
// TEST (Ne pas modifier, sauf pour décommenter)
// ---------------------------------------------------------------------------

// const garen = new Warrior("Garen");
// const lux = new Mage("Lux", 50);

// garen.addToInventory("Sword");
// garen.addToInventory("Potion");
// // garen.addToInventory("MachineGun"); // Ceci doit provoquer une erreur TypeScript

// console.log("--- Début du combat ---");
// garen.attack(lux);
// lux.attack(garen);
// garen.attack(lux);
// lux.attack(garen);
// garen.attack(lux); // Le coup de grâce ?

