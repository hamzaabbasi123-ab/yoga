       // scripts.js
       document.getElementById('menu-btn').addEventListener('click', function() {
        var navigation = document.getElementById('navigation');
        navigation.classList.toggle('active'); // Toggle the 'active' class on the navigation
    });
    function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
    document.addEventListener('DOMContentLoaded', () => {
        const image1 = document.querySelector('.image1');
        const image2 = document.querySelector('.image2');
      
        // Show the first image on page load
        setTimeout(() => {
          image1.classList.add('show');
        }, 1000);
      
        // Transition to the second image after a few seconds
        setTimeout(() => {
          image1.classList.remove('show');
          image2.classList.add('show');
        }, 5000); // 5 seconds delay
      });
      