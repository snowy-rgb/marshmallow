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

//함수만   *완료*
function onCheckImageSize() {
    const img = document.querySelector('img'); // 이미지 선택
    if (img) {
        img.addEventListener('load', () => { // 이미지 로드 완료 후 실행
            const width = img.offsetWidth; // 렌더링된 이미지 가로 크기
            const height = img.offsetHeight; // 렌더링된 이미지 세로 크기
            console.log(`${width}px x ${height}px`);
        });
    } else {
        console.log('이미지 요소를 찾을 수 없습니다!');
    }
}
//

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

//함수만  *완료*
function onCheckImageNonSizeDirect() {
    const img = document.querySelector('img');
    if (img && img.complete) { // 로드 상태 체크
        const width = img.offsetWidth;
        const height = img.offsetHeight;
        console.log('로드됨');
    } else {
        console.log('로드되지 않음');
    }
}
//

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

//함수만   *완료*
function onShowVhInnerSet() {
	console.log("innerHeight:", window.innerHeight);
}
function onShowVhInnerImageSet() {
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

	// 이미지 vh 업데이트
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


//이미지 경로로 이미지 찾기
function verifyImage(targetSrc) {
    const img = document.querySelector('img'); // 확인하려는 이미지 선택
    if (img) {
        const currentSrc = img.src; // 현재 이미지 경로
        if (currentSrc.includes(targetSrc)) {
            console.log('확인 완료: 올바른 이미지입니다.');
        } else {
            console.log('경고: 다른 이미지입니다!');
        }
    } else {
        console.log('이미지를 찾을 수 없습니다!');
    }
}

//함수만
function onVerifyImageIsCorrect(targetSrc) {
    const img = document.querySelector('img'); // 확인하려는 이미지 선택
    if (img) {
        const currentSrc = img.src; // 현재 이미지 경로
        if (currentSrc.includes(targetSrc)) {
            console.log('확인 완료: 올바른 이미지입니다.');
        } else {
            console.log('경고: 다른 이미지입니다!');
        }
    } else {
        console.log('이미지를 찾을 수 없습니다!');
    }
}
//

// 예제 실행
verifyImage('assets/images/start/erpin.gif'); // 확인하려는 이미지 파일 경로

//고유 alt나 id로 이미지 찾기
function verifyImageByAlt(targetAlt) {
    const img = document.querySelector('img');
    if (img) {
        const currentAlt = img.alt; // 이미지 alt 속성
        if (currentAlt === targetAlt) {
            console.log('확인 완료: 올바른 이미지입니다.');
        } else {
            console.log('경고: 다른 이미지입니다!');
        }
    }
}

//함수만
function onVerifyImageByAltIsCorrect(targetAlt) {
    const img = document.querySelector('img');
    if (img) {
        const currentAlt = img.alt; // 이미지 alt 속성
        if (currentAlt === targetAlt) {
            console.log('확인 완료: 올바른 이미지입니다.');
        } else {
            console.log('경고: 다른 이미지입니다!');
        }
    }
}
//

verifyImageByAlt('에르핀 냠냠<다시 로드해 주세요>'); // alt 텍스트


//이미지 로드 여부
const img = document.querySelector('img');
img.addEventListener('load', () => {
    console.log('이미지 로드 완료:', img.src);
});

//모바일 로그 메세지 태스트
function logMessage(message) {
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML += message + '<br>'; // 내용을 추가하며 새 줄로 표시
}

function allInfo() {
	//
	const loadImage = checkImageSizeDirect();
	const checkImgSize = onCheckImageSize();
	const backSize = onShowVhInnerSet();
	const imgSize = onShowVhInnerImageSet();
	const checkImgDir = onVerifyImageIsCorrect('assets/images/start/erpin.gif');
	const checkImgByAlt = onVerifyImageByAltIsCorrect('에르핀 냠냠<다시 로드해 주세요>');

	//
	const err = 0
	const sons = 0
	const IsErr = ''
	const nnLoad = ''

	//
	const lost = ''
	
	//
	console.log(`이미지 로드          : ${loadImage}`);
	console.log(`이미지 사이즈        : ${checkImgSize}`)
	console.log(`배경                : ${backSize}`)
	console.log(`이미지 사이즈 세팅   : ${imgSize}`)
	console.log(`이미지 경로          : ${checkImgDir}, assets/images/start/erpin.gif`)
	console.log(`이미지 alt          : ${checkImgByAlt}, 에르핀 냠냠<다시 로드해 주세요>`)
	console.log(``)
	
}

//
function showRelDir() {
	const imageUpload = document.getElementById('imageUpload');

	imageUpload.addEventListener('change', function(event) {
        	const file = event.target.files[0];
       		const img = new Image();

        	img.onload = function() {
       			const width = img.width;
       			const height = img.height;
        		const ratio = width / height;
	
               		console.log(`이미지 비율: ${ratio}`);
                	console.log(`너비: ${width}, 높이: ${height}`);
        	};

		if (file) {
	         	img.src = URL.createObjectURL(file);
	 	}
    	});

}


