document.getElementById('password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const website = document.getElementById('website').value;
    const password = document.getElementById('password').value;
    
    if (website && password) {
      addPassword(website, password);
      clearForm();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
  
  function addPassword(website, password) {
    const passwordList = document.getElementById('passwords');
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${website}:</span> ${password}`;
    
    passwordList.appendChild(listItem);
  }
  
  function clearForm() {
    document.getElementById('website').value = '';
    document.getElementById('password').value = '';
  }
  