document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    // 顯示成功訊息
    document.getElementById("successMessage").style.display = "block";

    // 清空表單
    document.getElementById("contactForm").reset();
});
