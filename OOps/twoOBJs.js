class Emp {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  showDetails() {
    console.log(this.name);
    console.log(this.dept);
  }
}

class Manager extends Emp {
  constructor(name, dept, role) {
    super(name, dept);
    this.role = role;
  }

  showDetails() {
    super.showDetails();
    console.log(this.role);
  }
}

// const emp = new Emp("ak", "IT");
// emp.showDetails();

const m = new Manager("ak", "IT", "SDE");
m.showDetails();
