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

    //확대 방지 테그
	document.addEventListener('gesturestart', function (e) {
    	e.preventDefault();
	});
	document.addEventListener('touchmove', function (e) {
    	if (e.scale !== 1) {
        	e.preventDefault();
    	}
	}, { passive: false });
    
    //이미지 고정 <1>
    function updateVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('load', updateVH);
    window.addEventListener('resize', updateVH);
    window.addEventListener('orientationchange', () => {
        setTimeout(updateVH, 100); // 회전 직후 약간의 시간 후 다시 계산
    });
    
    //이미지 강제 제정렬<2>
    function fixImagePosition() {
        const erpin = document.querySelector("img");
        erpin.style.left = "50%";
        erpin.style.top = "50%";
        erpin.style.transform = "translate(-50%, -40%) scale(3.5)";
    }

    window.addEventListener("orientationchange", () => {
        setTimeout(() => {
            updateVH();
            fixImagePosition();
        }, 200); // 리플로우 후 실행
    });
	    
    //vh 크기 검사 및 적용

	function setRealVh() {
	  const vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	
	window.addEventListener('load', setRealVh);
	window.addEventListener('resize', setRealVh);
	window.addEventListener('orientationchange', () => {
	  setTimeout(setRealVh, 200);
	});

	let timeout;
	function setRealVhDebounced() {
	    clearTimeout(timeout);
	    timeout = setTimeout(() => {
	        setRealVh();
	    }, 200);
	}
	window.addEventListener('resize', setRealVhDebounced);

	showVhSet(); // --vh 크기 확인

	function showVhSet() {
		console.log("innerHeight:", window.innerHeight);
 		console.log("--vh:", document.documentElement.style.getPropertyValue('--vh'));
	}

	function waitForValidVh() {
	    const interval = setInterval(() => {
	        const vh = window.innerHeight * 0.01;
	        if (vh > 0) { // 실수 값이 나오면 실행
	            document.documentElement.style.setProperty('--vh', `${vh}px`);
	            console.log(`--vh updated: ${vh}px`);
	            clearInterval(interval); // 설정 완료 후 멈춤
	        }
	    }, 100); // 100ms 간격으로 실행
	}
	
	waitForValidVh();

	// 이미지 vh 업로드
	function updateImageStyle() {
	    const img = document.querySelector('img');
	    if (img) {
	        const vh = window.innerHeight * 0.01; // 최신 높이 계산
	        img.style.top = `${vh * 50}px`; // 동적으로 top 설정
	    }
	}
	
	updateImageStyle();
	window.addEventListener('resize', updateImageStyle);
	window.addEventListener('orientationchange', () => {
	    setTimeout(updateImageStyle, 200);
	});

	
