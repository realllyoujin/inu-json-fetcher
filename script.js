document.getElementById('fetchButton').addEventListener('click', function() {
    //서버로부터 데이터 가져오기
    fetch('http://localhost:3000/web')
        .then(response => response.json()) //응답을 JSON 형태로 변환하기
        .then(data => {
            // 데이터를 localStorage에 저장하기
            localStorage.setItem('webData', JSON.stringify(data));

            // localStorage에서 데이터 불러오기
            const storedData = JSON.parse(localStorage.getItem('webData'));

            // 화면에 데이터 출력하기
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = JSON.stringify(storedData, null, 2); // JSON 출력
        })
        .catch(error => console.error('Error fetching data:', error)); // 오류발생시 출력
});
