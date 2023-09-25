
function calculateDeductions(basicSalary, benefits) {
    const taxRates = {
      lowestRate: 0.1,
      mediumRate: 0.30,
      highRate: 0.35,
    };
  
    const nhifRates = {
      lowestRate: 1000,
      mediumRate: 2000,
      highRate: 2500,
    };
  
    const nssfRate = 0.06;
  

    const grossSalary = basicSalary + benefits;

    let paye = 0;
  
    if (grossSalary <= 24000) {
      paye = grossSalary * taxRates.lowestRate;
    } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * taxRates.mediumRate;
    } else {
      paye = 2400 + 1649.95 + (grossSalary - 32333) * taxRates.highRate;
    }
  
    let nhifDeduction = 0;
  
    if (grossSalary <= 5999) {
      nhifDeduction = nhifRates.lowestRate;
    } else if (grossSalary <= 7999) {
      nhifDeduction = nhifRates.mediumRate;
    } else {
      nhifDeduction = nhifRates.highRate;
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
