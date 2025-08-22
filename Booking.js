document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      package: this.package.value,
      date: this.date.value,
      time: this.time.value,
      notes: this.notes.value
    };
  
    fetch("https://script.google.com/macros/s/AKfycbxugPqRnFMGBg-IkjHFGUHNtNpHOhzSqIclGeewtr_NlJ6e2QNt8wBYKVMKYGnfGfgtyQ/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === "success") {
        alert("Booking confirmed! We will contact you soon.");
        this.reset();
      } else {
        console.error("Booking error:", data.message);
        alert("Booking failed. Check console for details.");
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Booking failed. Check console for details.");
    });
  });
  