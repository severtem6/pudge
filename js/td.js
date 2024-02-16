function showNamePrompt() {
    var name = prompt("Пожалуйста, введите ваше имя:", "");
    if (name != null && name != "") {
      return name;
    }
    return null;
  }
  

  function showGreeting() {
    var userName = showNamePrompt();
    if (userName) {
      alert("Привет, " + userName + "!");
    }
  }
  

showGreeting();