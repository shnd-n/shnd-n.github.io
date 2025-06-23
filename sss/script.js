// 각 과목의 시간 정보를 객체에 저장
const times = {
  '국어': '12:00 - 13:00',
  '수학': '14:00 - 15:30',
  '영어': '16:00 - 19:50'
};

// 클릭된 과목에 해당하는 시간 보여주는 함수
function showTime(subject) {
  const time = times[subject];
  // HTML에서 결과를 표시할 div에 시간 정보 업데이트
  document.getElementById('output').innerText = `${subject} 수업 시간: ${time}`;
}
