function checkImageSize() {
    const img = document.querySelector('img'); // 이미지 선택
    if (img) {
        img.addEventListener('load', () => { // 이미지 로드 완료 후 실행
            const width = img.offsetWidth; // 렌더링된 이미지 가로 크기
            const height = img.offsetHeight; // 렌더링된 이미지 세로 크기
            console.log(`이미지 사이즈: ${width}px x ${height}px`);
        });
    } else {
        console.log('이미지 요소를 찾을 수 없습니다!');
    }
}

// 초기 실행
checkImageSize();

// 이미지가 이미 로드된 상태 확인
function checkImageSizeDirect() {
    const img = document.querySelector('img');
    if (img && img.complete) { // 로드 상태 체크
        const width = img.offsetWidth;
        const height = img.offsetHeight;
        console.log(`이미지 사이즈(이미 로드됨): ${width}px x ${height}px`);
    } else {
        console.log('이미지가 아직 로드되지 않았습니다.');
    }
}

checkImageSizeDirect();
