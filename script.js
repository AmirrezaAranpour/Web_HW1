// Function to update the result based on input values and formula
function updateFormula() {
    const fee = parseFloat(document.getElementById('fee').value) || 0;
    const count = parseFloat(document.getElementById('count').value) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;
  
    const formulas = document.querySelectorAll('.formula');
    
    formulas.forEach(formula => {
      const evaluator = formula.getAttribute('evaluator');
      
      try {
        const expression = evaluator
          .replace('fee', fee)
          .replace('count', count)
          .replace('discount', discount);
          class FormulaEvaluator {
            constructor(formulaElement) {
              this.formulaElement = formulaElement;
              this.evaluator = formulaElement.getAttribute('evaluator');
            }
          
            // محاسبه نتیجه فرمول
            evaluate(fee, count, discount) {
              try {
                const expression = this.evaluator
                  .replace('fee', fee)
                  .replace('count', count)
                  .replace('discount', discount);
          
                const result = eval(expression);
                if (isNaN(result) || result === Infinity || result === -Infinity) {
                  this.formulaElement.textContent = 'Invalid Formula';
                } else {
                  this.formulaElement.textContent = result;
                }
              } catch (error) {
                this.formulaElement.textContent = 'Invalid Formula';
              }
            }
          }
          
          class InputHandler {
            constructor(inputs, formulas) {
              this.inputs = inputs;
              this.formulas = formulas;
              this.addInputListeners();
            }
          
            addInputListeners() {
              this.inputs.forEach(input => {
                input.addEventListener('input', () => this.updateFormulas());
              });
            }
          
            updateFormulas() {
              const fee = parseFloat(document.getElementById('fee').value) || 0;
              const count = parseFloat(document.getElementById('count').value) || 0;
              const discount = parseFloat(document.getElementById('discount').value) || 0;
          
              this.formulas.forEach(formula => {
                formula.evaluate(fee, count, discount);
              });
            }
          }
          
          const feeInput = document.getElementById('fee');
          const countInput = document.getElementById('count');
          const discountInput = document.getElementById('discount');
          
          const formulaElements = document.querySelectorAll('.formula');
          const formulaEvaluators = Array.from(formulaElements).map(el => new FormulaEvaluator(el));
          
          new InputHandler([feeInput, countInput, discountInput], formulaEvaluators);
          
        const result = eval(expression);
  
        if (isNaN(result) || result === Infinity || result === -Infinity) {
          formula.textContent = 'Invalid Formula';
        } else {
          formula.textContent = result;
        }
      } catch (error) {
        formula.textContent = 'Invalid Formula';
      }
    });
  }
  
  document.getElementById('fee').addEventListener('input', updateFormula);
  document.getElementById('count').addEventListener('input', updateFormula);
  document.getElementById('discount').addEventListener('input', updateFormula);
  
  updateFormula();
  