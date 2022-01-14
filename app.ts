enum GenderType {
  Male='male',
  Female='female',
  GenderNeutral='genderNeutral'
}

let studentID:number = 12345;
let studentName:string = 'Jennay Kim';
let age:number = 21;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted:boolean = false;

interface Student {
  studentID:number;
  studentName:string;
  age?:number;
  gender:'male' | 'female' | 'genderNeutral';
  subject:string;
  courseCompleted:boolean;
  addComment?:(comment:string) => string;
}

function getStudentDetails(studentID:number):Student {
  return {
    studentID:12345,
    studentName:'Mark Jacobs',
    gender:'male',
    subject:'Node JS',
    courseCompleted:false
  };
}


let price: number | string = 5;
price = 'free';
//price = true;

type StrOrNum = number | string;
let itemPrice: number;

const setItemPrice = (price: StrOrNum):void => {
  if(typeof price === 'string') {
    itemPrice = 0;
  }else {
    itemPrice = price;
  }
}


function sendGreeting(message = 'Hello', userName = 'there'): void {
  console.log(`${message}, ${userName}`);
}
//선택적 매개변수는 필수 매개변수 뒤에 위치
//기본 매개변수를 사용할때는 타입지정을 안해도 됨 (타입추론)

sendGreeting('Hello'); //Hello there
sendGreeting(); //Hello there
sendGreeting('Good morning'); //Good morning there
sendGreeting('Good afternoon', 'Jenny'); //Good afternoon Jenny


//화살표 함수(Arrow Function)
const sendGreeting2 = (message = 'Hello', userName = 'there'): void => {
  console.log(`${message}, ${userName}`);
}


class Employee {
  fullName: string = '';
  age: number = 0;
  jobTitle: string = '';
  hourlyRate: number = 0;
  workingHoursPerWeek: number = 0;

  constructor(fullName: string, age: number, jobTitle: string, hourlyRate: number, workingHoursPerWeek: number) {
    this.fullName = fullName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.hourlyRate = hourlyRate;
    this.workingHoursPerWeek = workingHoursPerWeek;
  }

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 
    일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`);
  }
}

let employee1 = new Employee('민수', 25, '주니어 개발자', 40, 35);
employee1.printEmployeeDetails();