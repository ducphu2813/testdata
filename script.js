// Lấy thẻ a trong DOM
var aTag = document.querySelector('.data');

var plusBtn = document.querySelector('.plus');
var minusBtn = document.querySelector('.minus');

// Tạo đối tượng XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Xử lý sự kiện khi tải xong tập tin
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Lấy nội dung từ tập tin
    var content = xhttp.responseText;

    // Hiển thị nội dung trong thẻ a
    aTag.innerText = content;
  }
};

function updateValue(change) {
    // Lấy giá trị hiện tại của con số trong thẻ a
    var currentValue = parseInt(aTag.innerText);
  
    // Thay đổi giá trị con số
    var newValue = currentValue + change;
  
    // Cập nhật giá trị mới trong thẻ a
    aTag.innerText = newValue;
    console.log(newValue)
    // Lưu giá trị mới vào tập tin data.txt
    xhttp.open("GET", "update_data.php?value=" + newValue, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
  }

  // Xử lý sự kiện khi bấm nút cộng
plusBtn.addEventListener('click', function() {
    updateValue(1);
  });
  
  // Xử lý sự kiện khi bấm nút trừ
  minusBtn.addEventListener('click', function() {
    updateValue(-1);
  });

// Mở tập tin data.txt
xhttp.open("GET", "data.txt", true);

// Gửi yêu cầu để tải tập tin
xhttp.send();
