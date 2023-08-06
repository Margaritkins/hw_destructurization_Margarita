//Створити змінні для року народження, імені другої дитини, робочого телефону, вулиця та номер будинку.
// Використовуючи одну деструктуризацію.

const user = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12Avenu",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "actor",
};

const {
  privateInfo: {
    bday: { year: bYear },
    children: [, secondChild],
  },
  contactInfo: {
    phone: { work },
    adress: { street, house },
  },
} = user;

console.log(house);
