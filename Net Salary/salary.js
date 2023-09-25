function calculateDeductions(basicSalary, benefits) {
    const taxRates = {
      low: 0.1,
      medium: 0.15,
      high: 0.3,
    };
  
    const nhifRates = {
      low: 1500,
      medium: 2000,
      high: 2500,
    };
  
    const nssfRate = 0.06;
  

    const grossSalary = basicSalary + benefits;

    let paye = 0;
  
    if (grossSalary <= 24000) {
      paye = grossSalary * taxRates.low;
    } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * taxRates.medium;
    } else {
      paye = 2400 + 1649.95 + (grossSalary - 32333) * taxRates.high;
    }
  
    let nhifDeduction = 0;
  
    if (grossSalary <= 5999) {
      nhifDeduction = nhifRates.low;
    } else if (grossSalary <= 7999) {
      nhifDeduction = nhifRates.medium;
    } else {
      nhifDeduction = nhifRates.high;
    }
  
    const nssfDeduction = grossSalary * nssfRate;
  
    return {
      grossSalary,
      paye,
      nhifDeduction,
      nssfDeduction,
      netSalary: grossSalary - paye - nhifDeduction - nssfDeduction,
    };
  }
  
  module.exports = calculateDeductions;
