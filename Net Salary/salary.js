// Calculates the net salary
function calculateNetSalary(basicSalary, benefits) {
  // Define tax rate (payee), NHIF rate, and NSSF rate (replace these with actual rates)
  const taxRate = 0.2; //  20% tax rate
  const nhifRate = 0.05; //  5% NHIF rate
  const nssfRate = 0.1; //  10% NSSF rate

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate payee (tax)
  const payee = grossSalary * taxRate;

  // Calculate NHIF deductions
  const nhifDeductions = grossSalary * nhifRate;

  // Calculate NSSF deductions
  const nssfDeductions = grossSalary * nssfRate;

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Return the calculated values
  return {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary,
  };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Salary Details:");
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
} else {
  console.log("Invalid input. Please enter valid numbers for basic salary and benefits.");
}


