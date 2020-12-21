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

- #0.2 The State of Fullstack
  - fullstack 수요 많음, 프론트/백엔드 경계 흐릿

- #0.3 Websites vs Webapps
  - 웹사이트 : 컨텐츠 소비를 위해 방문(뉴스 페이지, 레딧), 단순 소비
  - 웹 어플리케이션 : 움직이고 클릭, 발견, 검색
    - 넷플릭스 : 영화 보여지고, 필터링, 검색
    - 리액트 네이티브 - 구현 힘듦, 인터랙티브 요소 때문에(vanilla js)

- #1.0 What is NodeJS
  - Node.js : browser밖의 js
    - file system을 다룸
    - 서버 만듦
    - web scrapper 
=> browser와 별도로 작동하는 것을 만듦

- #1.1 Use Cases for NodeJS
  - why use Node.js?
    - 1. 백엔드, 프론트 엔드 둘다 js로 작성하고자 할 때
    - 2. 거의 모든 것을 customizing 할 수 있다. (아무 것도 없는 상태에서 만들기) Django, Lalavel은 어느 정도 갖춰저 있다.
    - 3. 동영상 처리 서버 저작권 등 확인 Node.js는 어려움 => js는 하드웨어 하드코드 처리를 위해 설계X
      - 인코딩 디코팅 데이터 저장 보여주고 삭제 => Node.js
      - 채팅 => python(X) 비동기 언어가 아님, 채팅은 Node.js
    - 4. 데이터 다루는 성능 높음 : 전송, 받기, 알림, 실시간 처리 등

- #1.2 Who Uses NodeJS
  - Node.js : 데이터를 다루기에 쓴다
  - 백엔드 : 언어 여러개 (ex. 넷플릭스 : 영상 압축과 영상 전송은 각각 다른 언어로 작성)

- #2.0 What is a Server
  - server
    - 인터넷에 연결된 컴퓨터
    - 인터넷에 연결된 한 덩어리의 코드
      - URL에 응답
      - 접속을 허락

- #2.1 What is Express
  - Express.js : Node.js' framwork
    - connection 열어주고
    - connection listen
    - 파일 처리
    - html 전송
    - 데이터 전송
    - Form에서 데이터 받아 오기

- #2.2 Installing Express with NPM
  - 설치 : 
    - wetube 디렉토리 만들어서 → index.js를 만들고 →
    - NPM.JS (Node Pakage Manager, 파일관리시스템) 즉, JS 파일(패키지)관리를 책임져 줌 ! →
    - npm init(NPM 적용하기) → pakage.json 파일이 생김 →
    - npm install express (NPM으로 Express 설치 !) → node modules 폴더 생성됨! →
    - npm install을 통해서, 필요한 것들을 한번에 다운로드 할 수 있음!

- #2.3 Your First Express Server
  - 서버만들기 (Nodejs&express) :
    - github Repo → gitignore (표준) → [README.md](http://readme.md) (기본설정)
    - require = 모듈을 가져오는 것.
    - app.listen(포트) = 포트설정
    - package.json : scripts 생성 (node index.js) = 시작설정하기
  - require : node module을 어딘가에서 가져오는 것

- #2.4 Handling Routes with Express
  - Routing :
    - GET = 단순히 페이지를 가져오는 것.
    - POST = 정보를 전달.

  - req & res
    - req = POST 로 전달한 정보를 요청해서, 정보를 받음 !
    - res = 정보를 응답! ( res.send )

- #2.5 ES6 on NodeJS using Babel
  - babel : 최신의 js코드를 무난난 예전의 js코드로 변환

  - * 바벨 설치 : npm install @babel/node
  - * 커맨드 라인 입력 : npm install @babel/preset-env
  - * 커맨드 라인 입력 : npm install @babel/core
  - * 커맨드 라인 입력 : npm install core-js@3

  - * .babelrc 파일을 만들어주세요
  - * .babelrc 파일에 아래 내용을 입력 후 저장해주세요:
  
  ``` javascript
  {
    [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs":3
        }
      ]
    ]
  }
  ```
  
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

- #2.6 Express Core: Middlewares
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

- #2.7 Express Core: Middlewares part Two
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

- #2.8 Express Core: Routing
  - router : 많은 route들이 담긴 파일
  - use : app.use("/user", userRouter); 
    - 누군가가 /user경로에 접속을 하면, userRouter 전체를 사용하겠다는 의미

- #2.9 MVC Pattern part One
  - M : data
  - V : How does the data look
  - C : function that looks for the data

- #2.13 Installing Pug
  - pug? 🐶
    - 템플릿 언어
    - express의 view engine

- #2.15 Partials with Pug
  - Partials?
    - 페이지의 일부분
    - ex. header.pug, footer.pug 등등...

- #2.16 Local Variables in Pug

- #2.17 Template Variables in Pug
  [Global Variables]

  전역적으로 변수를 사용할 수 있게 만들어주는 방법. (res.locals)

  1. 미들웨어를 생성한다.
  2. 미들웨어를 만들고, 내용으로 res.locals.변수명 << 을 이용해서, 변수를 생성할 수 있다.

  위와 같이 생성한, 변수는 어디에서나 사용할 수 있다.

  [Template Variables]

  각 템플릿에 해당하는 각각의 변수를 생성할 수 있다.

  1. Pug에서 원하는 변수를 원하는 위치에 적어준다 #{변수}
  2. 컨트롤러로 찾아간다 !
  3. res.render 에 첫번째 요소로 pug파일을 지정해줬다면, 두번째 요소로는 원하는 변수를 할당해줄 수 있다. ( JSON 형식 )

  **퍼그에서 가장 중요한건 띄어쓰기다 !!ㅠㅠ

- #2.18 Search Controller
  **queryString에 대하여..**

  사용자가 입력 데이터를 전달하는 방법중의 하나로, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다.

  1. HTML(PUG)에서 form + input 으로 정보를 보낸다. 여기서 form태그는 get방식이어야하며, input태그의 name값이 쿼리이름이 된다.
  2. Controller에서, req.query << 로 input의 name값으로 보낸 데이터를 받는다.
  3. 그리고 위 데이터를 다시 PUG로 전달해서 받아준다.

- #2.19 Join : Log In HTML
  **POST방식 데이터 전송하기**

  1. HTML(PUG)에서, form태그 method를 post로 설정해주고, input에 name속성을 추가해서 정보를 보낸다.
  2. 라우팅에서 기존에 사용하던 get이 아닌, post로 또다른 하나를 만들어 데이터를 받을 예정.

  헷깔렸던점,
  join과 login 왜 둘다 action을 'login'으로 잡지?
  왜 이걸 다 /logIn으로 보내주지?,,,


  -> 다음영상에서 해결됨.
  join 은 /join으로 보내준다. POST << 방식으로, 따라서 이 데이터를 받아 POST에서 처리해서 데이터를 받고, 회원가입을 진행
  login에서 받은 /login 또한 POST 방식으로 받아서, 데이터베이스를 검색하지 않을까?

- #2.20 Change Profile HTML
- #2.21 Home Controller
- #2.22 Home Controller part Two
- #2.23 Join Controller
- #2.24 Log In and User Profile Controller
- #2.25 More Controlers

- #3.0 MongoDB and Mongoose

## Review
- get vs use
- middlewares
- router vs controller

## Later to do
- [ ] buy the webcam 😝
- [ ] progress timeline : onseek
- [ ] capture image like youtube preview
