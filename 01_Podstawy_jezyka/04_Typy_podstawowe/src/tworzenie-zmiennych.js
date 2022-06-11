/**
 * Poniższy przykład będzie używany w kilku zadaniach.
 * Upewnij się, że poprawnie rozwiązałeś poprzednie zadanie zanim przejdziesz do następnego -
 * będziesz używać tego samego kodu!
 */
let someCondition = true;
const x = {someValue: 0};

if (someCondition) {
  x.someValue = 123;
}
console.log(x.someValue);

x.someValue = 456;
console.log(x.someValue);
