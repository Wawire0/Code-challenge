
const readline = require('readline');
const calculateDeductions = require('./netSalaryCalculator'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter basic salary: ', (basicSalaryInput) => {
  rl.question('Enter benefits: ', (benefitsInput) => {
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    if (!isNaN(basicSalary) && !isNaN(benefits)) {
      const deductions = calculateDeductions(basicSalary, benefits);
      console.log('Deductions:');
      console.log(`Gross Salary: ${deductions.grossSalary}`);
      console.log(`PAYE (Tax): ${deductions.paye}`);
      console.log(`NHIF Deductions: ${deductions.nhifDeduction}`);
      console.log(`NSSF Deductions: ${deductions.nssfDeduction}`);
      console.log(`Net Salary: ${deductions.netSalary}`);
    } else {
      console.log('Invalid input. Please enter valid numbers for basic salary and benefits.');
    }

    rl.close();
  });
});