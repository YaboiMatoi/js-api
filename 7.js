fetch('https://api.example.com/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: 'ข้อมูลสำหรับ POST' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("เกิดข้อผิดพลาด:", error));