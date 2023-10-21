/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard.
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp.
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/
var Wizard = /** @class */ (function () {
    function Wizard(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error("Level too low");
        }
    }
    Wizard.prototype.introduce = function (phrase) {
        console.log(phrase + ", " + this.name);
    };
    Wizard.prototype.castSpell = function () {
        console.log("Casting a spell, behold my power!");
    };
    Wizard.prototype.levelUp = function () {
        this.level++;
        console.log("Level up! New level is ".concat(this.level));
    };
    return Wizard;
}());
