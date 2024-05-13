
document.querySelector('.skills').addEventListener('click', function() {
    const skillsList = document.querySelector('.skills ul');
    skillsList.classList.toggle('show');
  });
  

  document.querySelectorAll('.skills li').forEach(function(skill) {
    skill.addEventListener('click', function() {
      const skillName = this.textContent;
      const skillDescription = this.nextElementSibling.textContent;
      alert(You clicked on ${skillName} with description: ${skillDescription});
    });
  });