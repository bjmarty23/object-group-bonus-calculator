const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);
console.log(baseBonus);
console.log(salaryAdjustment(60000));

let bonusPercentage = baseBonus(scout.reviewRating) +
lengthOfServiceBonus(scout.employeeNumber) +
salaryAdjustment(scout.annualSalary);

console.log(bonusPercentage);
let finalBonus = finalAdjustment(bonusPercentage);
console.log(finalBonus);


class Employee {
  constructor (emp){
    this.name = nameIn;
    this.employeeNumber = employeeNumberIn;
    this.annualSalary = emp.annualSalary;
    this.reviewRating = emp.reviewRating;
    this.bonusPercentage = bonusPercentageIn;
    this.totalCompensation = calculate(emp);
    this.totalBonus = bonusTotal(emp);
  }
  finalAdjustment(bonusPercentage){
    if(bonusPercentageIN > 0.13) {
      return 0.13;
    }else if (bonusPercentage<0){
      return 0;
    }else {
      return 
    }
  }
}
for (employee of employeeWithBonus) {
  console.log (employees);
  let name = employee.name
  let bonusPercentage = baseBonus(scout.reviewRating) +
                        lengthOfServiceBonus(scout.employeeNumber) +
                        salaryAdjustment(scout.annualSalary);
  let totatlBonus = employee.annualSalary * bonusPercentage;
  let actualBonusInDollars = employee.annualSalary * finalBonus;
  let Compensation = actualBonusInDollars + parseInt(employee.actualSalary);
  compensation = compensation.toFixed(0);

const employeeWithBonus =new Employee(nameIn, finalBonus, totalCompensation);
}


$ (document).ready (function(){
}

function cashMoney () {
  let outputElement = $('#cashMoney');
  for (bonus of Employee){
    outputElement.append('<li>' + emp.reviewRating + ' ' + emp.name + ' ' + emp.totalCompensation + '</li>');
  }//end for of
}//end cashMoney
