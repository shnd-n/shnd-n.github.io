// 각 과목의 시간 정보를 객체에 저장
const times = {
  '국어': '12:00 - 13:00',
  '수학': '14:00 - 15:30',
  '영어': '16:00 - 19:50'
};

// 클릭된 과목에 해당하는 시간 보여주는 함수
const container = document.getElementById("time-box");

// 내용 초기화
container.innerHTML='';// 기존 "times" 텍스트 제거

//각 과목 시간표를 출력
for(let subject in times){
  const p=document.createElement('p');
  p.textContent='${subject}: ${times[subject]}';
  container.appendChild(p);
}