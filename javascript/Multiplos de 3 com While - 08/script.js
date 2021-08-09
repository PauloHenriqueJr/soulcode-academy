//Crie um script que exiba todos os múltiplos de 3, de 1 até 100, usando laço while.

count = 0;

while (count < 100) {
  if(count % 3 == 0)
  document.write(count, "</br>");

  count++; 
}

// ou assim

count = 0;

while (count < 100) {
  document.write(count, "</br>");

  count += 3; 
}