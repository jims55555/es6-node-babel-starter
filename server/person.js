function work(name) {
  return `${name} is still working and working`;
}

class Person {
  constructor(name) {
    this.name = name;
  }

  dowork() {
    return work(this.name);
  }
}

export { work, Person };
export default Person;
