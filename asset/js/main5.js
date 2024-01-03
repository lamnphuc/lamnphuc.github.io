document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.overlay');
    var popupContent = document.querySelector('.popup-content');
    var continueButton = document.querySelector('.click-me');
    var closeButtons = document.querySelectorAll('.fa-times, .close-btn');
  
    continueButton.addEventListener('click', function() {
      showPopup();
    });
  
    closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        hidePopup();
      });
    });
  
    function showPopup() {
      overlay.style.display = 'block';
      popupContent.style.display = 'block';
    }
  
    function hidePopup() {
      overlay.style.display = 'none';
      popupContent.style.display = 'none';
    }
});
