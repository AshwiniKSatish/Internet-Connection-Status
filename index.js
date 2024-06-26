window.addEventListener('load', function () {
    var status = document.getElementById('status');
  
    function updateOnlineStatus(event) {
      var condition = navigator.onLine ? 'online' : 'offline';
      status.textContent = 'You are currently ' + condition;
    }
  
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  
    updateOnlineStatus(); 
  });
