/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      var form = document.getElementById("paymentForm");
      form.addEventListener(
        "submit",
        function(event) {
          event.preventDefault();
          event.stopPropagation();
          var isValid = true;
          var inputs = form.querySelectorAll("input, select, textarea");
          inputs.forEach(function(input) {
            if (!input.checkValidity()) {
              isValid = false;
              input.classList.add("invalid-input");
            } else {
              input.classList.remove("invalid-input");
            }
          });
          if (isValid) {
            document.getElementById("alert").classList.add("d-none");
          } else {
            document.getElementById("alert").classList.remove("d-none");
          }
          form.classList.add("was-validated");
        },
        false
      );
    },
    false
  );
})();
