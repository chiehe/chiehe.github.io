document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // 顯示成功訊息
    document.getElementById("successMessage").style.display = "block";

    // 清空表單
    document.getElementById("contactForm").reset();
});

document.addEventListener('DOMContentLoaded', function() {
    let isVarietyVisible = false; // 初始狀態為隱藏
    let isDramaVisible = false;

    $('#varietyshow').click(function() {
        const messageContainer = $('.varietymessage');

        // 如果近期片單的內容顯示，則隱藏它
        if (isDramaVisible) {
            $('.dramamessage').fadeOut(300, function() {
                $('.dramamessage').html(""); // 清空內容
                isDramaVisible = false; // 更新狀態
            });
        }

        if (isVarietyVisible) {
            // 隱藏內容，使用 fadeOut
            messageContainer.fadeOut(300, function() {
                messageContainer.html(""); // 清空內容
                isVarietyVisible = false;
            });
        } else {
            // 點擊後顯示內容，使用 fadeIn
            const req = new XMLHttpRequest();
            req.open("GET", 'varietyshow.json', true);
            req.send();
            req.onload = function() {
                if (req.status === 200) {
                    const json = JSON.parse(req.responseText);
                    let html = "";
                    json.forEach(function(val) {
                        html += "<div class='varietyshowimg'>";
                        html += `<img src="${val.image}" alt="image of variety show" style="width:200px; height:auto;">`;
                        html += `<p>${val.description}</p>`;
                        html += "</div><br>";
                    });
                    messageContainer.html(html).fadeIn(300); // 顯示內容
                    isVarietyVisible = true;
                } else {
                    console.error("Failed to load JSON data");
                }
            };
        }
    });

    $('#drama').click(function() {
        const messageContainer = $('.dramamessage');

        // 如果療癒綜藝片單的內容顯示，則隱藏它
        if (isVarietyVisible) {
            $('.varietymessage').fadeOut(300, function() {
                $('.varietymessage').html(""); // 清空內容
                isVarietyVisible = false; // 更新狀態
            });
        }

        if (isDramaVisible) {
            // 隱藏內容，使用 fadeOut
            messageContainer.fadeOut(300, function() {
                messageContainer.html(""); // 清空內容
                isDramaVisible = false;
            });
        } else {
            // 點擊後顯示內容，使用 fadeIn
            const req = new XMLHttpRequest();
            req.open("GET", 'drama.json', true);
            req.send();
            req.onload = function() {
                if (req.status === 200) {
                    const json = JSON.parse(req.responseText);
                    let html = "";
                    json.forEach(function(val) {
                        html += "<div class='dramaimg'>";
                        html += `<img src="${val.image}" alt="image of drama" style="width:200px; height:auto;">`;
                        html += `<p>${val.description}</p>`;
                        html += "</div><br>";
                    });
                    messageContainer.html(html).fadeIn(300); // 顯示內容
                    isDramaVisible = true;
                } else {
                    console.error("Failed to load JSON data");
                }
            };
        }
    });
});
