btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
btn2 = document.getElementById("rireki-btn");
btn2.setAttribute('onclick', 'pushButton2()');
function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    let order_number= document.getElementById("order_number");
    let order_numbertext= order_number.value;
    let shipping_number= document.getElementById("shipping_number");
    let shipping_numbertext= shipping_number.value;
    let item_count= document.getElementById("item_count");
    let item_counttext= item_count.value;    
    let package= document.getElementById("package");
    let packagetext= package.value;    
    let shipping_select= document.getElementById("shipping_select");
    let shipping_selecttext= shipping_select.value;            
    let option= document.getElementById("option");
    let optiontext= option.value;



    
    let resurl=(`${REQUEST_URL}?&userid=${userid}&displayname=${displayname}&url=${urltext}&order_number=${order_numbertext}&shipping_numbertext=${shipping_numbertext}&item_count=${item_counttext}
    &package=${packagetext}&shipping_select=${shipping_selecttext}&option=${optiontext}`)
    let res_text=(`${displayname}${urltext}已收到您的訂單`)
         alert(res_text);
        const res = fetch(resurl);
        console.log(res);
        liff.sendMessages([{
            'type': 'text',
            'text': urltext + "の代収をリクエストしました。"
          }]).then(function() {
            // document.getElementById('log').value += 'sendMessagesText completed\n';
          }).catch(function(error) {
            // document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
          });
    };


function pushButton2() {
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    location.href=(`https://warm-oasis-25284.herokuapp.com/mercari/${userid}`)
     
    };


    
