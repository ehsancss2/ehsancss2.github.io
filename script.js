<script>
  const modal = document.getElementById("phoneModal");
  const postAdBtn = document.getElementById("postAdBtn");

  // باز کردن مودال هنگام کلیک روی دکمه "ثبت آگهی"
  postAdBtn.onclick = function () {
    modal.style.display = "block";
  };

  // بستن مودال
  function closeModal() {
    modal.style.display = "none";
  }

  // بررسی شماره و reCAPTCHA
  function submitPhone() {
    const phone = document.getElementById("phoneNumber").value;

    // بررسی طول شماره
    if (phone.length < 10) {
      alert("لطفاً شماره معتبر وارد کنید.");
      return;
    }

    // بررسی گذر موفق reCAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
      alert("لطفاً تأیید کنید که ربات نیستید.");
      return;
    }

    // ذخیره شماره و ادامه به صفحه آگهی‌ها
    localStorage.setItem("userPhone", phone);
    window.location.href = "ads.html";
  }

  // انتخاب شهر
  function selectCity(city) {
    alert("شهر انتخاب شد: " + city);
    localStorage.setItem("selectedCity", city);
  }
</script>
