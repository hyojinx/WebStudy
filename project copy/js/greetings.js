const KEY='name';
const loginForm=$('#login-form');
const greeting=$('#greeting');
const loginInput=$('#login-form input');
const savedUsername=localStorage.getItem(KEY)
if(savedUsername===null){
    $(loginForm).removeClass('d-none');
    loginForm.on('submit',loginSubmit);
}
else{
    printGreeting(savedUsername);
}
function printGreeting(username){
    greeting.text(`안녕하세요.${username}`);
    greeting.removeClass('d-none');
}
function loginSubmit(event){
    const username=loginInput.val();
    localStorage.setItem(KEY,username)
}
//webstorage localstorage 를 활용
//class 를 활용해서 display:none을 적용했다가 안했다가 방식
//해당 이름의 저장여부를 확인해서 없으면 로그인으로 이름을 입력받고
//있으면 안녕하세요.누구 라고 출력
