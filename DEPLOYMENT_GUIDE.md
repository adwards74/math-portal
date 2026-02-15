# 🌐 Sabrina's Math Portal: Deployment Guide

이 포털은 별도의 서버 없이 브라우저에서 바로 실행되는 정적 웹사이트(Static Site)입니다. 아래의 무료 서비스를 이용하면 iPad, 스마트폰 등 어디서든 접속할 수 있는 URL을 가질 수 있습니다.

---

## 1. Netlify Drop (가장 쉬운 방법 - 드래그 앤 드롭)
별도의 회원가입 없이도 즉시 배포가 가능하며, 가장 직관적입니다.

1.  **[Netlify Drop](https://app.netlify.com/drop)** 사이트에 접속합니다.
2.  현재 프로젝트의 `portal` 폴더 전체를 웹페이지 중앙의 업로드 영역으로 **드래그 앤 드롭**합니다.
3.  몇 초 뒤 배포가 완료되며, 상단에 생성된 `https://random-name.netlify.app` 링크를 통해 접속할 수 있습니다.
4.  *Tip: 계정을 생성하면 URL 이름을 `sabrina-math.netlify.app` 등으로 변경할 수 있습니다.*

---

## 2. GitHub Pages (추천 - 사용자님 전용 가이드)
공부한 기록을 코드로 남기면서 배포할 수 있는 표준적인 방법입니다.

1.  **새 리포지토리 생성**: [github.com/new](https://github.com/new)에서 이름을 `math-portal`로 지정하고 생성합니다.
2.  **파일 업로드**:
    - 리포지토리 페이지에서 'uploading an existing file'을 클릭합니다.
    - `G:\Sabrina MATH\portal` 폴더 내의 모든 파일을 드래그해서 올립니다.
3.  **Pages 활성화**:
    - **Settings -> Pages** 메뉴로 이동합니다.
    - Branch를 `main`으로 설정하고 **Save**를 누릅니다.
4.  **최종 주소**: 약 1분 뒤 **`https://adwards74.github.io/math-portal/`** 주소로 전 세계 어디서든 접속이 가능해집니다!

---

## 3. Vercel (강력하고 빠른 성능)
고성능 로딩과 쉬운 도메인 연결을 제공합니다.

1.  **[Vercel](https://vercel.com/)** 사이트에 가입합니다.
2.  **Add New -> Project**를 클릭합니다.
3.  GitHub 계정을 연결하거나, 프로젝트 파일을 직접 업로드할 수 있습니다 (GitHub 연결 권장).
4.  자동으로 환경을 감지하여 배포하며, 최상위급 속도를 보장합니다.

---

### 💡 주의사항
- **업데이트**: 코드를 수정했다면 위 과정을 다시 반복(업로드)하면 링크 주소는 그대로 유지된 채 내용만 갱신됩니다.
- **모바일 접속**: 생성된 URL은 스마트폰이나 태블릿 브라우저(Safari, Chrome)에서 완벽하게 작동합니다.

배포 과정에서 어려움이 생기면 언제든 말씀해 주세요!
