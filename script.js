const modal = document.getElementById("phoneModal");
const postAdBtn = document.getElementById("postAdBtn");

postAdBtn.onclick = function() {
  modal.style.display = "block";
};

function closeModal() {
  modal.style.display = "none";
}

function submitPhone() {
  const phone = document.getElementById("phoneNumber").value;
  if (phone.length >= 10) {
    // ذخیره شماره در localStorage برای استفاده احتمالی
    localStorage.setItem("userPhone", phone);
    window.location.href = "ads.html"; // انتقال به صفحه آگهی
  } else {
    alert("لطفا شماره معتبر وارد کنید");
  }
}

function selectCity(city) {
  alert("شهر انتخاب شد: " + city);
}
