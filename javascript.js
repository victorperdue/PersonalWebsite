console.log("Hello, World!")
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
      document.body.classList.add(currentTheme);
  
      if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
      }
    }
  
    toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });

  console.log("boom");
