
window.onload = function() {
  const liffClient = setLiffClient()

  // setup をする
  liffClient(() => { if(!liff.isLoggedIn())liff.login(); })
  getProfile(liffClient)
};

const setLiffClient = () => {
  return (func) => { liff.init({ liffId: LIFF_ID }).then(func) }
};

const getProfile = async (liffClient) => {
  liffClient(() => {
    liff.getProfile().then((profile) => {
      // 02. プロフィールにユーザー名を表示してみよう
      document.getElementById('user-name').innerText = profile.displayName
      document.getElementById('icon').src = profile.pictureUrl
      document.getElementById('user_id').innerText = profile.userId
      let userid = profile.userId
      let displayname =profile.displayName
    })
  })
};

const mustScrollElements = document.querySelectorAll(".must-scroll");
for(i=0;i<mustScrollElements.length;i++){
  const textarea = mustScrollElements[i].querySelector("textarea");
  const checkbox = mustScrollElements[i].querySelector("input[type='checkbox']");
  const button = mustScrollElements[i].querySelector("input[type='button']");
  const label = mustScrollElements[i].querySelector("label");

  let buttonFor
  if(button&&button.hasAttribute("for")){
    buttonFor = button.attributes["for"].value;
  }

  let scrolled = false;
  if(textarea){
    textarea.addEventListener("scroll", func=()=>{
      if(!scrolled && Math.abs(textarea.scrollHeight-textarea.clientHeight-textarea.scrollTop)<1){
        scrolled = true;
        if(checkbox){checkbox.disabled=false;}
        if(label){label.classList.remove("disabled");}
        if(!buttonFor){
          if(button){button.disabled=false;}
        }
      }
    });
  }
  if(buttonFor){
    const mustCheck = document.querySelector("input#" + buttonFor);
    mustCheck.addEventListener("click", func=()=>{
      button.disabled = !mustCheck.checked;
    });
  }
};
