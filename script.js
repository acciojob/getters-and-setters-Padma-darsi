//complete this code
class Person {
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get names()
	{
		return `my name is ${this.name}`;
	}
	set age(age)
	{
		this.age=age;
	}
}

class Student extends Person {
	study()
	{
		return `${this.name} is studying`;
	}
}

class Teacher extends Person {
	teach()
	{
		return `${this.name} is teaching`;
	}
}

const p1=new person("padma",22);
console.log(p1.names);
person.age=23;
const s1=new student("sita",22);
student.study;
const t1=new Teacher("gita",29);
Teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
