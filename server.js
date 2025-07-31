
    function handleLogin(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const cityData = {
        vizag: 'Vizag: 5 tons of plastic waste in water this month.',
        goa: 'Goa: 3.2 tons of plastic waste in water this month.',
        mumbai: 'Mumbai: 8 tons of plastic waste in water this month.',
        hyd: 'Hyderabad: 4.5 tons of plastic waste in water this month.',
        delhi: 'Delhi: 6.1 tons of plastic waste in water this month.'
      };
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('city-result').innerText = cityData[city] || 'Data not available.';
    }

    window.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => {
        observer.observe(section);
      });
    });
  