# Exercice TypeScript : Classes, Interfaces & Décorateurs (RPG)

Bienvenue dans cet exercice de refactorisation et de typage.
Vous disposez d'un code "legacy" (fichier `src/index.ts`) écrit dans un style proche du JavaScript classique, mais placé dans un fichier TypeScript.
Votre objectif est de le transformer en code TypeScript robuste et strictement typé, en utilisant des Classes, des Interfaces et des Décorateurs.

## Pré-requis

- Node.js installé.
- Installation des dépendances : `npm install` (si nécessaire, ou juste avoir typescript accessible).
- Compilation et exécution (pour tester) :
  - `npx tsc` pour compiler.
  - `node dist/index.js` pour lancer.

## Objectifs de l'exercice

Le fichier `src/index.ts` contient des erreurs de compilation et des types manquants (`any` implicites). Suivez les étapes ci-dessous pour corriger le code.

### 1. Typage du Décorateur (`LogAction`)

La fonction `LogAction` est un décorateur de méthode.
- Typer les arguments `target` (utilisez `any` ou `Object`), `propertyKey` (string), et `descriptor` (`TypedPropertyDescriptor<any>`).
- Ce décorateur permet d'afficher un log chaque fois que la méthode décorée est appelée.

### 2. Définition des Types & Interfaces

- Créez un Type Alias nommé `Equipment` qui est une Union de chaînes de caractères littérales : `'Sword' | 'Staff' | 'Potion' | 'Shield'`.
- Créez une Interface `IInventoryHolder` qui force une classe à implémenter :
    - `addToInventory(item: Equipment): void`
    - `getInventory(): Equipment[]`

### 3. La Classe de base `Character`

- Transformez la classe `Character` en classe **abstraite** (`abstract`).
- Déclarez les propriétés `name` (string), `health` (number) et `maxHealth` (number).
- Utilisez les modificateurs d'accès :
    - `name` doit être `public` et `readonly`.
    - `health` et `maxHealth` doivent être `protected` (accessibles uniquement dans la classe et ses enfants).
- Mettez à jour le **constructor** pour initialiser ces valeurs.
- Ajoutez le décorateur `@LogAction` au dessus de la méthode `takeDamage`.
- Déclarez une méthode **abstraite** `attack(target: Character): void`.

### 4. La Classe `Warrior`

- Faites en sorte que `Warrior` hérite de `Character` (`extends`).
- Faites en sorte que `Warrior` implémente `IInventoryHolder` (`implements`).
- Ajoutez la propriété `inventory` (tableau d'`Equipment`) et initialisez-la.
- Implémentez le constructeur (appelez `super` avec un nom et une santé fixe, ex: 100).
- Implémentez les méthodes de l'interface (`addToInventory`, `getInventory`).
- Implémentez la méthode `attack` : elle doit infliger des dégâts fixes (ex: 10) à la cible.

### 5. La Classe `Mage`

- Faites en sorte que `Mage` hérite de `Character`.
- Ajoutez une propriété `mana` (number) qui est `private`.
- Implémentez le constructeur (appelez `super`, initialisez `mana`).
- Implémentez la méthode `attack` :
    - Vérifie si le mage a assez de mana (ex: cout 10).
    - Si oui, consomme le mana et inflige des dégâts magiques (ex: 20).
    - Sinon, affiche un message d'erreur.

### 6. Vérification

- Décommentez la partie "TEST" en bas du fichier.
- Vérifiez qu'il n'y a plus d'erreurs TypeScript (pas de soulignement rouge).
- Essayez d'ajouter un objet invalide à l'inventaire (ex: "MachineGun") et vérifiez que TypeScript le signale comme erreur.

Bon courage !
