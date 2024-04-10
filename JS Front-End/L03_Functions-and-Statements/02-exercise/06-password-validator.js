function checkPasswordValidity(password) {
    const length = password.length;
    const digits = password.replace(/\D/g, "").length;
    const alphanumeric = /^[a-zA-Z0-9]+$/.test(password);
  
    if (length >= 6 && length <= 10 && alphanumeric && digits >= 2) {
      console.log("Password is valid");
    } else {
      if (length < 6 || length > 10) {
        console.log("Password must be between 6 and 10 characters");
      }
      if (!alphanumeric) {
        console.log("Password must consist only of letters and digits");
      }
      if (digits < 2) {
        console.log("Password must have at least 2 digits");
      }
    }
  }
  