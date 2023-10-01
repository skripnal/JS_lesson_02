function task1 (){
    let user = {};
    user.name = "ПИЛИП";
    user.surname = "ШЕВЧЕНКО";
    
    console.log(user);
    
    user.name = "СЕРГІЙ";
    
    console.log(user);
    
    delete user.name;
    
    console.log(user);
    
}

function task2(){
    let employeeSalaries = {"1": 10000, "2": 20000, "3": 15000, "4": 18000};
    console.log(employeeSalaries);
    let count = 0;
    for (let sallary in employeeSalaries){
        count += employeeSalaries[sallary];
    }
    
    console.log(count);
}

function task_maximum(num1, num2, operation){
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Обидва аргументи повинні бути числами');
    }
    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        throw new Error('Непідтримувана операція. Ви можете використовувати +, -, *, /');
    }
    switch (operation){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                throw new Error('Ділення на нуль неможливе');
            }
            return num1 / num2;
        default:
            throw new Error('Непередбачена помилка');
    }

    
}


task1();
task2();
try {
    const result = task_maximum(10, 2, '*');
    console.log('Результат: ' + result);
  } catch (error) {
    console.error('Помилка: ' + error.message);
  }
  