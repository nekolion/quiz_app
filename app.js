const quiz =[
  {
    question : '作業を細分化し、階層構造にして管理する手法は？',
    answers : ['WBS','AWS','RHA','AES'],
    correct: 'WBS'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : '組織内データが外部に情報漏洩することを防ぐための製品の名称は？',
    answers : ['DMZ','DLP','BMP','DNP'],
    correct: 'DLP'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;


const $button = document.getElementsByTagName('button') //よく使う変数
const buttonLength = $button.length;

//変数の文字列をHTMLに反映させる
const setUpQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
 buttonIndex++;
} 
}
setUpQuiz();

//ボタンをクリックした時の正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    //問題があれば実行
    setUpQuiz();
  }else{
  //問題がなければ実行
  window.alert("終了です。あなたの正解数は"+score+"個です");
}};


let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
 handlerIndex++;
};
