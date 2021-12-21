# 홈체크 이벤트 랜딩페이지 (동행, 인테리어)

## 개발 프레임워크

Next.js (Typescript)

## 개발 환경 설정

```sh
$ yarn
$ yarn dev
```

개발 환경에서는 URL path에 따라 동행, 인테리어 서비스 콘텐츠를 각각 확인할 수 있습니다.

- 동행: `localhost:3000/dongheng`
- 인테리어: `localhost:3000/interior`

## 운영 빌드

```sh
// 동행
$ yarn export-dongheng
```

```sh
// 인테리어
$ yarn export-interior
```

운영 버전 빌드는 위 스크립트로 생성할 수 있습니다. 아웃풋 폴더는 루트에 다음 이름으로 생성됩니다.

- 동행: `dongheng`
- 인테리어: `interior`

## 데이터 수정

텍스트 및 이미지 수정 방법은 다음과 같습니다.

- 텍스트: `src/data` 폴더 하위의 json 파일에서 수정
- 이미지: `public` 폴더 하위의 이미지 파일명 유지하여 수정

수정한 후에는 반드시 운영 버전을 재빌드하여 호스팅 서버에 업로드 해주세요.

## 유의 사항

개발 환경과 운영 빌드시에 `pages/index.tsx` 파일에서 서버 사이드 prop 생성 로직을 필요에 따라 교체해야 합니다. 텍스트, 이미지 수정은 이와 별도로 진행할 수 있기 때문에 그 외에 코드 수정을 해야 할 경우에만 신경 써 주시면 됩니다.

- 개발 환경: `getStaticProps` 사용 (26번째 줄)
- 운영 빌드: `getInitialProps` 사용 (63번째 줄)
