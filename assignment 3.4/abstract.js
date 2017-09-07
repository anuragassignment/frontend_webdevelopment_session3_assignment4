var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department's name is " + this.name);
    };
    ;
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    AccountingDepartment.prototype.printMeeting = function (day) {
        console.log(this.name + " Departemnt's meeting is on " + day);
    };
    return AccountingDepartment;
}(Department));
var FinanceDepartment = (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment(name) {
        return _super.call(this, name) || this;
    }
    FinanceDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    FinanceDepartment.prototype.printMeeting = function (day) {
        console.log(this.name + " Department's Meeting is on " + day);
    };
    FinanceDepartment.prototype.noOfEployees = function (no) {
        console.log(this.name + " Department has " + no + " Employees");
    };
    return FinanceDepartment;
}(Department));
var Accounting = new AccountingDepartment("Accounting");
Accounting.printName();
Accounting.printMeeting("Monday");
var Finance = new FinanceDepartment("Finance");
Finance.printName();
Finance.printMeeting("Tuesday");
Finance.noOfEployees(43);
//# sourceMappingURL=abstract.js.map