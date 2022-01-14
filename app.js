var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var studentID = 12345;
var studentName = 'Jennay Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'Mark Jacobs',
        gender: 'male',
        subject: 'Node JS',
        courseCompleted: false
    };
}
var price = 5;
price = 'free';
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
function sendGreeting(message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    console.log("".concat(message, ", ").concat(userName));
}
//선택적 매개변수는 필수 매개변수 뒤에 위치
//기본 매개변수를 사용할때는 타입지정을 안해도 됨 (타입추론)
sendGreeting('Hello'); //Hello there
sendGreeting(); //Hello there
sendGreeting('Good morning'); //Good morning there
sendGreeting('Good afternoon', 'Jenny'); //Good afternoon Jenny
//화살표 함수(Arrow Function)
var sendGreeting2 = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    console.log("".concat(message, ", ").concat(userName));
};
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.fullName = '';
        this.age = 0;
        this.jobTitle = '';
        this.hourlyRate = 0;
        this.workingHoursPerWeek = 0;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \n    \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    return Employee;
}());
var employee1 = new Employee('민수', 25, '주니어 개발자', 40, 35);
employee1.printEmployeeDetails();
