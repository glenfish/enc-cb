// referrer-check.js
(function() {
    const referrer = document.referrer;
  
    // Allow only if referrer contains "clickbank.net"
    const isValidReferrer = referrer && referrer.includes('clickbank.net');
  
    if (!isValidReferrer) {
      document.addEventListener("DOMContentLoaded", function() {
        window.location.href = "https://encryptfire.com/access-denied.html";
      });
    }
  })();
  