# WeTube

Cloning Youtube with Vanilla and NodeJS

## Pages:

- [ ] Home
- [ ] Join
- [ ] Login
- [ ] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

## Comments

- #0.2
  - fullstack 수요 많음, 프론트/백엔드 경계 흐릿

- #0.3
  - 웹사이트 : 컨텐츠 소비를 위해 방문(뉴스 페이지, 레딧), 단순 소비
  - 웹 어플리케이션 : 움직이고 클릭, 발견, 검색
    - 넷플릭스 : 영화 보여지고, 필터링, 검색
    - 리액트 네이티브 - 구현 힘듦, 인터랙티브 요소 때문에(vanilla js)

- #1.0
  - Node.js : browser밖의 js
    - file system을 다룸
    - 서버 만듦
    - web scrapper 
=> browser와 별도로 작동하는 것을 만듦

- #1.1
  - why use Node.js?
    - 1. 백엔드, 프론트 엔드 둘다 js로 작성하고자 할 때
    - 2. 거의 모든 것을 customizing 할 수 있다. (아무 것도 없는 상태에서 만들기) Django, Lalavel은 어느 정도 갖춰저 있다.
    - 3. 동영상 처리 서버 저작권 등 확인 Node.js는 어려움 => js는 하드웨어 하드코드 처리를 위해 설계X
      - 인코딩 디코팅 데이터 저장 보여주고 삭제 => Node.js
      - 채팅 => python(X) 비동기 언어가 아님, 채팅은 Node.js
    - 4. 데이터 다루는 성능 높음 : 전송, 받기, 알림, 실시간 처리 등

- #1.2
  - Node.js : 데이터를 다루기에 쓴다
  - 백엔드 : 언어 여러개 (ex. 넷플릭스 : 영상 압축과 영상 전송은 각각 다른 언어로 작성)

- #2.1
  - Express.js : Node.js' framwork
    - connection 열어주고
    - connection listen
    - 파일 처리
    - html 전송
    - 데이터 전송
    - Form에서 데이터 받아 오기

- #2.2
  - 설치 : 
    - wetube 디렉토리 만들어서 → index.js를 만들고 →
    - NPM.JS (Node Pakage Manager, 파일관리시스템) 즉, JS 파일(패키지)관리를 책임져 줌 ! →
    - npm init(NPM 적용하기) → pakage.json 파일이 생김 →
    - npm install express (NPM으로 Express 설치 !) → node modules 폴더 생성됨! →
    - npm install을 통해서, 필요한 것들을 한번에 다운로드 할 수 있음!

- #2.3
  - 서버만들기 (Nodejs&express) :
    - github Repo → gitignore (표준) → [README.md](http://readme.md) (기본설정)
    - require = 모듈을 가져오는 것.
    - app.listen(포트) = 포트설정
    - package.json : scripts 생성 (node index.js) = 시작설정하기
  - require : node module을 어딘가에서 가져오는 것

- #2.4
  - Routing :
    - GET = 단순히 페이지를 가져오는 것.
    - POST = 정보를 전달.

  - req & res
    - req = POST 로 전달한 정보를 요청해서, 정보를 받음 !
    - res = 정보를 응답! ( res.send )

- #2.5
  - babel : 최신의 js코드를 무난난 예전의 js코드로 변환

  - * 바벨 설치 : npm install @babel/node
  - * 커맨드 라인 입력 : npm install @babel/preset-env
  - * 커맨드 라인 입력 : npm install @babel/core
  - * 커맨드 라인 입력 : npm install core-js@3

  - * .babelrc 파일을 만들어주세요
  - * .babelrc 파일에 아래 내용을 입력 후 저장해주세요:<br>
  {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"presets": [<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"@babel/preset-env",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"useBuiltIns": "entry",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"corejs":3<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>
  &nbsp;&nbsp;&nbsp;&nbsp;]<br>
  }<br>

  - *package.json : dependencies
    - 프로젝트가 실행되려면 필요한 것
    - 만약 개발자에게 도움이 될 만한 걸 설치하고 싶다면 좀 더 편하게 해줄만한 걸 설차할려고 하는 것 'nodemon'
    - dependencies에 포함하려는 게 아니라
    - 프로젝트를 실행하는데 필요한 게 아니니까
    - 프로그래머에게 필요한 거니까
    - npm install nodemon
    - 반영하려면 뒤에다가 대문자로 -D

  - devDependency 
    - 개발자에게 필요한 것 프로젝트에 필요한 게 아님

- #2.6
  - 라우팅 후, 콜백함수 사이에서 동작할 함수. 즉, 사이에 있는 함수.
  - 주의 : next()가 꼭 필요하다 !! 안그럼 다음에 실행할 콜백함수가 실행하지 못할거야!!
  - 각개적용 = 라우팅 - 콜백 사이에 직접 위치해줌.
  - 모두적용 = app.use () 로 적용해주고, 해당 코드 아래에 있는 모든 코드에 적용됨

  - Middleware : 유저와 마지막 응답 사이에 존재하는 것
  - 1. 처리가 끝날 때까지 연결되어 있는 것
    - 시작 : browser에서 접속하려 할 때 그때가 "시작"
      - index 파일 실행
        - route가 존재하는지 살펴봄(/)
        - route 찾음 => handleHome 실행
        - handleHome 응답을 전송

- #2.7
  - morgan : logging
    - 무슨 일이 어디서 일어났는지를 기록

  - 미들웨어란 ? 라우트(유저)와 실행하는 콜백함수(응답) 사이에서 동작하는 함수.
  - 적용방법은, 전역으로 적용하는 = app.use() ;
  - 각각 적용하는 = 라우팅 과 콜백함수 사이에 쓰는방법; 두가지.

  - 모든 미들웨어함수는 유저- 응답 사이에서 동작하므로 미들웨어가 끝나고 난 뒤, 응답(콜백함수)를 실행하기 위해서 next() 가 필수적임. 혹은 미들웨어에서 중단시킬 수 있음.

  - 주요 미들웨어로는
    - Morgan - 로그를 남겨줌
    - helmet - 기초보안담당함
    - cookieParser - 쿠키를 다룰 수 있음
    - bodyParser - form데이터를 서버로 받아와서 활용가능함.
