const quiz =[
  {
    question : '悪意ある目的で高い技術力を活かす人を別名なんと言うか',
    answers : ['クラッカー','スクリプトキティ','ハッカー','故意犯'],
    correct: 'クラッカー'
  },
  {
    question : 'ハッカーの説明で正しいものは？',
    answers : ['悪意があって攻撃してくる人','善悪かかわらず高い技術を持つ人','システムを破壊しようとしてくる人','パソコンに詳しい人'],
    correct: '善悪かかわらず高い技術を持つ人'
  },
  {
    question : 'いたずら目的などで既存のツールを使ってサイバー攻撃する攻撃者は？',
    answers : ['クラッカー','スクリプトキティ','愉快犯','ハッカー'],
    correct: 'スクリプトキティ'
  },
  {
    question : '利用者の意図しない動作をするソフトウェア全般の総称をなんという？',
    answers : ['ワーム','トロイの木馬','コンピューターウイルス','マルウェア'],
    correct: 'マルウェア'
  },
  {
    question : 'コンピューターウイルス次の機能を一つ以上持つ、発病機能、潜伏機能、あと一つは何か',
    answers : ['自己伝染機能','自己分身機能','破壊機能','不正アクセス機能'],
    correct: '自己伝染機能'
  },
  {
    question : 'コンピューターウイルスの潜伏機能で正しいものはどれ？',
    answers : ['脆弱性を悪用して侵入してくる機能','ファイルの破壊を行う機能・意図しない動作をする機能','条件が整うまで発病しない機能','プログラムやファイルにウイルスを感染していく機能'],
    correct: '条件が整うまで発病しない機能'
  },
  {
    question : '次の連想で、正しいものを選べ。<br>1.単体プログラムである。<br>2.別のプログラムを使わず自身を増殖させられる。<br>3.セキュリティホール（脆弱性）を悪用して侵入するケースが多い',
    answers : ['ワーム','コンピューターウイルス','トロイの木馬','BOT'],
    correct: 'ワーム'
  },
  {
    question : 'トロイの木馬について間違っているものを一つ選びなさい<br>1.潜入しすぐ破壊活動を開始する<br>2.他のプログラムに伝染し、システムを破壊する<br>3.潜伏し時間が経ってから発症する<br>4.ほかのコンピューターが乗っ取るための窓口として機能する',
    answers : ['1','2','3','4'],
    correct: '2'
  },
  {
    question : '次の連想で、正しいものを選べ。<br>1.攻撃するためのプログラムを外部からダウンロードするマルウェアです<br>2.ネットから不正にプログラムをダウンロードし、実行することで攻撃します。<br>3.ウイルス対策ソフトのパターンマッチング法では発見されにくいです。',
    answers : ['ワーム','ドロッパ','バックドア','ダウンローダ'],
    correct: 'ダウンローダ'
  },
  {
    question : '次の連想で、正しいものを選べ<br>攻撃するためのプログラムを内部に隠し持つマルウェア。<br>感染後：内部にある不正プログラムを取り出し、実行することで攻撃する',
    answers : ['ダウンローダ','コンピューターウイルス','ワーム','ドロッパ'],
    correct: 'ドロッパ'
  },
  {
    question : '攻撃者が特殊な裏口を作るので発見が難しい<br>一度アクセスできたコンピューターに対して、再び侵入するために仕掛ける裏口の事をなんというか',
    answers : ['ワーム','ドロッパ','C&Cサーバ','バックドア'],
    correct: 'バックドア'
  },
  {
    question : '攻撃者（ボットハーダー）が、【　　　　】（命令を送り、遠隔操作するためのサーバ）経由で<br>ボットネット内のボットに対して指令を出し、遠隔操作されたボットが様々な攻撃を行う',
    answers : ['Webサーバ','データベースサーバー','DNSサーバー','C&Cサーバ'],
    correct: 'C&Cサーバ'
  },
  {
    question : '次の連想で当てはまるものを選びなさい<br>ソフトウェアやハードウェアの脆弱性を悪用するために作成されたプログラム→攻撃コードとも呼ぶ<br>本来の目的：発見された脆弱性を検証・分析するために使われていた<br>近年は悪用されることが増えている',
    answers : ['エクスプロイトコード','クロスサイトスクリプティング','クリプトジャッキング','エクスプロイトキット'],
    correct: 'エクスプロイトコード'
  },
  {
    question : '感染したコンピュータ内部の利用者の個人情報などを収集するソフトウェアは次のうちどれか',
    answers : ['遠隔操作型ウイルス','アドウェア','ランサムウェア','スパイウェア'],
    correct: 'スパイウェア'
  },
  {
    question : 'ソフトウェアを無償提供する代わりに、利用者に広告を見させる目的のソフトウェアで、<br>通常は無害だが、利用者の承諾なく個人情報を収集するスパイウェアもあるマルウェアは次のうちどれか',
    answers : ['スパイウェア','ランサムウェア','アドウェア','マルウェア'],
    correct: 'アドウェア'
  },
  {
    question : '【　A　】<br>コンピュータのファイルやシステムを使用不能にし、その復旧と引き換えに【　B　】を要求するソフトウェア<br>代表例：Wanna Cryptor・WannaCry',
    answers : ['A:ランサムウェア/B:金銭','A:アドウェア/B:金銭','A:ランサムウェア/B:パスワード','A:アドウェア/B:パスワード'],
    correct: 'A:ランサムウェア/B:金銭'
  },
  {
    question : '次の手順で金銭をだまし取るウィルスはどれか<br>1.正規のセキュリティ対策ソフトを思わせる画面に<br>「マルウェアを検出」「ウイルスに感染している」などと表示する<br>2.「解決するために有償版の製品が必要」と偽のメッセージを表示し、セキュリティ対策ソフトを押し売りする<br>結果：購入画面で利用者にクレジットカード番号を入力させ金銭をだまし取る',
    answers : ['ポリモーフィック型ウイルス','押し売り型セキュリティウイルス','遠隔操作型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
    correct: '偽セキュリティソフト対策ソフト型ウイルス'
  },
  {
    question : '情報機器に感染すると、掲示板サイトにマルウェアへと誘導するリンクを書き込む動作を行うマルウェア。<br>【　　　　　】：マルウェアに感染した攻撃者とは無関係の情報機器が掲示板サイトに書き込むため証拠が残りにくく、攻撃者の追跡が難しくなる<br>通常の場合は、攻撃者が自らリンクを書き込み動作を行うため、攻撃者を特定する手掛かりが残る',
    answers : ['ポリモーフィック型ウイルス','コンピューターウイルス','遠隔操作型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
    correct: '遠隔操作型ウイルス'
  },
  {
    question : '感染のたびに異なる方式で自身のウイルスコードを暗号化するウイルス<br>・ウイルス対策ソフトのパターンマッチング法によるウイルス検出を免れる目的<br><br>検出するには：<br>プログラムが行う危険な行動（振る舞い）を検出した時点でウイルス対策ソフトはウイルスに感染したと判断するビヘイビア法を使う必要がある。',
    answers : ['コンピューターウイルス','遠隔操作型ウイルス','ポリモーフィック型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
    correct: 'ポリモーフィック型ウイルス'
  },
  {
    question : 'パスワードに単語を使う人が多い事を悪用し、辞書の単語を利用しパスワードを推察する方法<br>例：12345,Password,qwerty（キーの並び）,login<br>総当たり攻撃に比べ見破るまでの効率が良いため、総当たり攻撃の前にまずは【　　　】でパスワードの見破りを試す',
    answers : ['パスワードリスト攻撃','辞書攻撃','リバースブルートフォース攻撃','DoS攻撃'],
    correct: '辞書攻撃'
  },
  {
    question : '利用者ID・パスワードを使いまわす利用者が多いので<br>あるWebサイトやシステムから流出した利用者IDとパスワードのリストを使って<br>別のWebサイトやシステムへの不正ログインを試みる攻撃<br>不正ログインされるWebサイトや、システムに脆弱性がなくても攻撃が成功する。',
    answers : ['パスワードリスト攻撃','辞書攻撃','リバースブルートフォース攻撃','ブルートフォース攻撃'],
    correct: 'パスワードリスト攻撃'
  },
  {
    question : 'パスワードをもとに利用者IDを試す攻撃方法は？',
    answers : ['パスワードリスト攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'リバートブルートフォース攻撃'
  },
  {
    question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
    answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
    correct: 'ブルートフォース攻撃'
  },
  {
    question : '予想したパスワードをもとに求められたハッシュ値と利用者用パスワードのハッシュ値を照合し、パスワードを見破る方法で<br>パスワードは通常そのまま保存されないが<br>パスワードを元にハッシュ関数により計算されたハッシュ値が保存されている。<br>予想したパスワードのハッシュ値の一覧表と、利用者のパスワードのハッシュ値を比較することで、パスワードを特定する攻撃は？',
    answers : ['ブルートフォース攻撃','レインボー攻撃','DDoS攻撃','第三者攻撃'],
    correct: 'レインボー攻撃'
  },
  {
    question : 'パスワードクラックへの対策で間違っているものを選べ<br>1.類推攻撃・辞書攻撃への対策は、意味のある単語をパスワードに使わない<br>2.ブルートフォース攻撃への対策は、パスワードに使用する文字の種類を増やす・長くする<br>3.パスワードリスト攻撃への対策は、パスワードを使いまわさない<br>4.ブルートフォース攻撃への対策はセキュリティソフトなどを入れて脅威への対策を行う',
    answers : ['1','2','3','4'],
    correct: '4'
  },
  {
    question : 'フットプリンティングについて正しいものを選びなさい<br>攻撃者がサイバー攻撃の前に行う【　　　　　】のこと',
    answers : ['情報収集','プログラムの作成','迷惑行為','インストール'],
    correct: '情報収集'
  },
  {
    question : '不正アクセスとは、<br>ネットワークを通じ、機器に接続し、本来認められていない操作を行う事で<br>【　　　】：ソフトウェアの脆弱性を悪用し、コンピューターに不正侵入すること<br>【　　　】：攻撃者が正規の利用者ID・パスワードを悪用し、正規の利用者になりすますこと',
    answers : ['侵入行為/なりすまし','ハッカー/なりすまし','侵入行為/BOT','ハッカー/BOT'],
    correct: '侵入行為/なりすまし'
  },
  {
    question : '不正アクセスを行う前に、接続先の【　　】番号に抜け穴があるかを調べる行為<br>・サイバー攻撃の手法として【　　】スキャン行う<br>・システム管理者が自衛のために自分のネットワークの脆弱性を調べる目的でも行う<br>【　　】スキャンを行うためのツール→【　　】スキャナ',
    answers : ['ポート','IP','DNS','TCP'],
    correct: 'ポート'
  },
  {
    question : 'サイバーキルチェーンとは<br>サイバー攻撃の段階を説明した代表的なモデルで<br>サイバー攻撃を【　】段階に区分し、攻撃者の考え方・行動を理解することを目的としている。<br>このうちのどこかの段階でチェーン（負の連鎖）を断ち切れば、被害が防げる',
    answers : ['7','8','10','11'],
    correct: '7'
  },
  {
    question : '1.偵察：対象者に関する情報を事前調査・情報収集する。<br>2.【　】：エクスプロイトコード（攻撃コード）・マルウェアの作成する。添付ファイルに格納する。<br>3.配送：添付ファイルを含むメールを対象者へ送付する<br>4.攻撃実行：添付ファイルを実行させる<br>5.インストール：対象者のPCがマルウェアに感染する<br>6.【　】：C&Cサーバ経由でマルウェアを操作し内部情報を収集する<br>7.目的の実行：内部情報を圧縮・暗号化した後、持ち出す<br><br>1.武器化/探索<br>2.計画実行/探索<br>3.計画実行/遠隔制御<br>4武器化/遠隔制御',
    answers : ['1','2','3','4'],
    correct: '4'
  },
  {
    question : '一般的な検索サイトには表示されず、かつ専用のWebブラウザでのみ接続可能なWebサイトの総称をなんというか',
    answers : ['ダークウェブ','Pornhub','裏サイト','ダークネット'],
    correct: 'ダークウェブ'
  },
  {
    question : 'インターネット上の未使用のIPアドレス空間の事をなんというか？',
    answers : ['ダークウェブ','闇サイト','ローカルエリアネットワーク','ダークネット'],
    correct: 'ダークネット'
  },
  {
    question : 'ゴミ箱を漁り、パスワードのメモ書きや秘密情報が印刷された破棄書類を盗み出す方法。<br>企業のごみ置き場の廃棄書類を物色することが、企業から秘密情報を奪う常套手段とも言われている。<br>別名トラッシングいう行為は次のうちどれか？',
    answers : ['ソーシャルエンジニアリング','スミッシング','スキャベンジング','スニッフィング'],
    correct: 'スキャペンジング'
  },
  {
    question : '無防備な無線LAN親機（アクセスポイント）を自動車で移動しながら探し回る行為で<br>強力なアンテナを持つ無線LAN子機を装備し、セキュリティ設定が甘く、かつ外部に漏れ出た電波を求めて、オフィス街を徘徊する。<br>また、無線LAN環境に不正アクセスする攻撃の例は次の通り<br><br>・社内ネットワーク内にある重要な情報を奪う。<br>・インターネット接続を無断で利用する。<br>・社内ネットワーク内で送受信されている通信データを盗聴する',
    answers : ['スキャベンジング','不正アクセス','ウォードライビング','FreeWifi'],
    correct: 'ウォードライビング'
  },
  {
    question : 'Webサイトを閲覧しただけでマルウェアをWEB閲覧者のコンピュータにダウンロードさせる攻撃<br><br>主にWebブラウザやOSの脆弱性が悪用される',
    answers : ['ドライブバイダウンロード','ドロッパ','ウォードライビング','ダウンローダ'],
    correct: 'ドライブバイダウンロード'
  },
  {
    question : '平文をハッシュ関数で計算して、【　　】を作る。<br>ハッシュ値、フィンガプリントともいう。<br>語源は平文＋要約から',
    answers : ['メッセージダイジェスト','EV証明書','公開鍵','秘密鍵'],
    correct: 'メッセージダイジェスト'
  },
  {
    question : 'コンピューターのディスプレイから発する微弱な電磁波を傍受し、表示内容を盗み見する事は次のうちどれか',
    answers : ['ウォードライビング','スキャベンジング','テンペスト','クリプトジャッキング'],
    correct: 'テンペスト'
  },
  {
    question : '暗号装置が発する電磁波・熱・消費電力・処理時間などを外部から観測し、暗号の手掛かりにする方法',
    answers : ['スニッフィング','テンペスト','スキャベンジング','サイドチャネル'],
    correct: 'サイドチャネル'
  },
  {
    question : 'インターネット上の未次の連想から正しい答えを選びなさい。<br>通信を行う二者の間に割り込み、両者が交換する情報を自分のものとすり替える事によって誰にも気づかれることなく盗聴すること。<br>別名：MITM（Man-In-The-Middleの略）使用のIPアドレス空間の事をなんというか？',
    answers : ['中間者攻撃','第三者攻撃','踏み台','第三者中継'],
    correct: '中間者攻撃'
  },
  {
    question : '踏み台について【　】部分に正しい言葉を入れなさい<br>サイバー攻撃の攻撃者は自身が犯人であることを隠すために証拠を残さないよう【　　】して攻撃をしかける。<br>踏み台とは：中継点となる第三者のこと、<br>さらに攻撃者が踏み台に指示し、踏み台を足掛かりにさらにその踏み台が別の踏み台に指示して攻撃する。',
    answers : ['第三者を経由','なりすまし','プロキシサーバを経由','IPスプーフィング'],
    correct: '第三者を経由'
  },
  {
    question : '第三者のメールサーバを不正に中継し、身元を偽ってメールを送信することで<br>攻撃例は次の通り<br>・迷惑メール送信の踏み台にする<br>・【　　】が可能なサイトを、ブラックリストとして公開する<br>その結果：迷惑メール対策として、そのアドレスからのメールを<br>受信拒否にするメールサーバが出てくる。',
    answers : ['第三者経由','第三者中継','パスワードリスト攻撃','標的型攻撃'],
    correct: '第三者中継'
  },
  {
    question : 'スニファと呼ばれる機器やソフウェアを使い、ネットワークを流れる通信データを監視・記録する盗聴行為をなんというか？',
    answers : ['スニッフィング','ウォードライビング','ポートスキャン','フットプリンティング'],
    correct: 'スニッフィング'
  }, 
  {
    question : '次の攻撃方法から連想する答えを選択してください。<br>攻撃方法は次の通り<br>・外部からの不正アクセスを、内部IPアドレスからの通信に偽装し、なりすましする。<br>・DoS攻撃の攻撃者や、踏み台の身元を隠す目的で、別のIPアドレスからの通信に偽装する。',
    answers : ['IPスプーフィング','中間者攻撃','ポートスキャン','標的型攻撃'],
    correct: 'IPスプーフィング'
  },
  {
    question : 'Webサイト提供者とWeb閲覧者とのセッションを、攻撃者が盗聴し、正規のWeb閲覧者になりすまし不正アクセスする攻撃<br>1. Web閲覧者→パスワードを使ってログイン<br>2.Webサイト提供者→Web閲覧者をセッションで識別<br>3.攻撃者→セッションさえ盗聴すればパスワードが不明でも正規のパスワードでログイン済みのWeb閲覧者になりすますことができるのはどれか',
    answers : ['セッション固定攻撃','ハッキング','セッションハイジャック','ドメイン名ハイジャック'],
    correct: 'セッションハイジャック'
  },
  {
    question : '以下の攻撃が行われたが、考えられるのはどれか<br>攻撃者が正規のWeb閲覧者になりすました攻撃の例は次の通り<br>・正規のWeb閲覧者の個人情報を盗んだり、内容を改ざんしたりする<br>・商品をなりすまして注文したり、犯人を特定されにくいため、購入者をだます目的でオークションサイトに不正出品したりする',
    answers : ['ドメイン名ハイジャック','なりすまし','セッションハイジャック','セッション固定攻撃'],
    correct: 'セッションハイジャック'
  },
  {
    question : '以下の攻撃は次のうちどれか<br>Webサイト提供者とWeb閲覧者との間のセッションを、攻撃者が用意したセッションにすり替え、<br>正規のWeb閲覧者になりすまして不正アクセスする攻撃',
    answers : ['標的型攻撃','なりすまし','セッションハイジャック','セッション固定攻撃'],
    correct: 'セッション固定攻撃'
  },
  {
    question : 'Webサイト提供者とWeb閲覧者との間のセッションを、攻撃者が用意したセッションにすり替え、正規のWeb閲覧者になりすまして不正アクセスする攻撃で、<br>攻撃者が上位に位置するDNSサーバ（権威DNSサーバ）を改ざんし<br>偽の権威DNSサーバを参照さえ、利用者がWebサイトを開く際<br>偽のWebサイトに接続させることで、利用者をだます攻撃で下記のような特徴がある<br><br>特徴：<br>・パスワードを盗んだり、システムの脆弱性を突いたりして、管理者になりすまして改ざんする<br>・アクセス数が多い著名なドメイン名が狙われる',
    answers : ['ショルダハッキング','セッションハイジャック','ドメイン名ハイジャック','クリックジャッキング'],
    correct: 'ドメイン名ハイジャック'
  },
  {
    question : 'Webサイト閲覧者を視覚的にだまし、一見正規に見えるWebページをクリックさせることで<br>実際にはWeb閲覧者が意図しない操作をさせる攻撃<br>攻撃方法：<br>・Webサイト上の非公開のブログや個人情報を公開させる。<br>・意図しない情報を登録させる。',
    answers : ['標的型攻撃','クリックジャッキング','セッションハイジャック','ドメイン名ハイジャック'],
    correct: 'クリックジャッキング'
  },
  {
    question : '【　　　】の透明度を変更する機能と、【　　　】を複数重ね合わせる機能を悪用して実現する<br>例：<br>1. SNS個人情報の設定の【　　　】をあえて透明表示する<br>2.その背面（真下）にWeb閲覧者をクリックさせるためのおとり【　　　　】を重ね合わせる<br>閲覧者はおとりページをクリックしたつもりだが、全面にある個人情報を設定する【　　　】をクリックしているので、意図せず個人情報を公開してしまう。',
    answers : ['HTML','Webページ','画像','CSS'],
    correct: 'Webページ'
  },
  {
    question : '肩越しに、PCの画面や入力作業をのぞき見すること。<br>※銀行のATMなどにバックミラーがついてるのは【　　　】の対策です。',
    answers : ['ショルダハッキング','スニッフィング','フィンガプリント','スキャペンジング'],
    correct: 'ショルダハッキング'
  },
  {
    question : 'ハッカーが行う行為の総称は？',
    answers : ['ハッキング','不正アクセス','DoS攻撃','犯罪'],
    correct: 'ハッキング'
  },
  {
    question : '次の連想から選びなさい。<br>何度も連続してサーバに通信を行い、サーバをパンク状態にしてサービスを停止させる攻撃<br>語源：Denial Of Service(サービス妨害)<br>個別の手法ではなく、様々な攻撃手法の総称である。<br>攻撃側1台から、相手側1台に対して攻撃が行われる。<br>つまり攻撃側と相手側は1対1の関係。',
    answers : ['DoS攻撃','DDoS攻撃','標的型攻撃メール','標的型攻撃'],
    correct: 'DoS攻撃'
  },
  {
    question : '次の連想から選びなさい。<br>何度も連続してサーバに通信を行い、サーバをパンク状態にしてサービスを停止させる攻撃<br><br>個別の手法ではなく、様々な攻撃手法の総称である。<br>・攻撃側複数台から、相手側1台に対して攻撃が行われる<br>攻撃側と相手側は多数対１の関係である<br>攻撃側の台数が、数千・数万台にもおよび、数多いことから、そのすべてを発見することは困難である。<br>マルウェアの一つであるボットに感染して乗っ取られたシステム（踏み台）から攻撃が行われることが多い。',
    answers : ['DoS攻撃','標的型攻撃メール','DDoS攻撃','標的型攻撃'],
    correct: 'DDoS攻撃'
  },
  {
    question : '以下の攻撃が2件あったが、考えられるのはどれか<br>1. カード会社を装った「カード番号を改めて確認したい」という内容のメールを送る<br>2.攻撃者がでっちあげた偽のWebサイト上で、クレジットカード番号を盗む<br>1. 「評価が上がった」という内容の偽メールを送り<br>2. オークションサイトのログインページに見せかけた偽のWebサイト上でパスワードを盗む',
    answers : ['フィッシング','スミッシング','ファーミング','ファジング'],
    correct: 'フィッシング'
  },
  {
    question : 'フィッシングの説明であってるのはどれ？<br>ア.有名企業や金融機関などを装った偽のメールを送り付け、偽のWebサイトに誘導し、個人情報を入力させてだまし取る行為<br>イ.システム設定ファイルを改ざんし、Web閲覧者が正しいドメイン名を入力しても、偽のWebサイトに誘導する攻撃<br>ウ.Webサイトの画像をクリックしただけで、料金を請求される手口<br>エ.Webサイト閲覧者を視覚的にだまし、一見正規に見えるWebページをクリックさせることで<br>実際にはWeb閲覧者が意図しない操作をさせる攻撃',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ア'
  },
  {
    question : 'フィッシングの発展版で、システム設定ファイルを改ざんし、Web閲覧者が正しいドメイン名を入力しても、偽のWebサイトに誘導する攻撃は次のうちどれか',
    answers : ['フィッシング','スミッシング','ファーミング','ファジング'],
    correct: 'ファーミング'
  },
  {
    question : 'SMSを利用して、企業や金融機関等を装ったメッセージを送り付けフィッシングサイトに誘導する攻撃は？',
    answers : ['スキャベンジング','スニッフィング','ファーミング','スミッシング'],
    correct: 'スミッシング'
  },
  {
    question : '組み込み機器や、ソフトウェアを対象にバグ・未知の脆弱性を検出するためのセキュリティテストです。',
    answers : ['ファーミング','ファジング','スミッシング','ペネトレーションテスト'],
    correct: 'ファジング'
  },
  {
    question : 'fuzz（問題を引き起こしそうなデータ）を大量に送り付けることから語源になった<br>問題を引き起こしそうな細工を施したデータを検査対象に送り、異常な動作の有無を検査すること',
    answers : ['ファジング','ファーミング','ペネトレーションテスト','インシデント'],
    correct: 'ファジング'
  },
  {
    question : '仮想通貨を得るために、他人のコンピュータを乗っ取り、仮想通貨の取引で必要となる計算処理を勝手に行う攻撃の事',
    answers : ['クリプトジャッキング','クリックジャッキング','フィッシング','スキニング'],
    correct: 'クリプトジャッキング'
  },
  {
    question : '検索結果の上位サイトをクリックしがちだったり、検索結果の上位サイトは安全なサイトだと思いがちなどといったWeb閲覧者の心理をついた手口は次のうちどれでしょう',
    answers : ['SEOポイズニング','DNSキャッシュポイズニング','ワンクリック詐欺','フィッシング詐欺'],
    correct: 'SEOポイズニング'
  },
  {
    question : '攻撃者がDNSサーバに偽の情報を覚えこませて、利用者がWebサイトを開く際偽のWebサイトに接続させることで、利用者を騙す攻撃で<br>以下の攻撃例がある<br><br>攻撃例：正規ドメインを表示させたまま、利用者を悪意のあるWebサイトに誘導し、金銭を奪ったり個人情報を漏洩させたりする。',
    answers : ['DNSハイジャック','SEOポイズニング','DNSキャッシュポイズニング','クリプトジャッキング'],
    correct: 'DNSキャッシュポイズニング'
  },
  {
    question : '攻撃方法<br>1. Web閲覧者より入力された内容を画面表示するWebページで、攻撃者が入力内容に罠（スクリプト）を混ぜ込む<br>2.別のWebサイトを表示し、Web閲覧者に個人情報などを遅らせてしまう<br><br>攻撃例<br>・正規のWebサイト上に偽のページを表示させる→結果、偽情報により混乱が生じる<br>・URLは本物であるのに、表示内容は偽物のため、フィッシング詐欺に悪用する',
    answers : ['クリプトジャッキング','レインボー攻撃','クロスサイトスクリプティング(XSS)','クロスサイトリクエストフォージェリ(CSRF)'],
    correct: 'クロスサイトスクリプティング(XSS)'
  },
  {
    question : '攻撃者がWebサイトに罠を仕掛け、それをログイン中のWeb閲覧者に閲覧させ<br>別のWebサイトでWeb閲覧者を偽って意図しない操作を行わせる<br><br>攻撃例<br>・公開範囲を一部に限っていたブログや個人情報をすべて公開に勝手に改ざんする<br>・ショッピングサイトで送り先住所を勝手に改ざんした後、買い物する→結果、被害者は商品が届かないのに代金だけ請求される',
    answers : ['クリプトジャッキング','クロスサイトスクリプティング(XSS)','DNSキャッシュポイズニング','クロスサイトリクエストフォージェリ(CSRF)'],
    correct: 'クロスサイトリクエストフォージェリ(CSRF)'
  },
  {
    question : 'XSSとCSRFは両者ともに「クロスサイト」がつくが、異なる点は実行する場所である。<br>クロスサイトスクリプティング：【　　　】で悪意のあるスクリプトを実行する<br>クロスサイトリクエストフォージェリ：【　　　　】で悪意ある処理を実行する<br><br>ア.Webブラウザ/電子メール<br>イ.電子メール/Webサイト（Webサーバ）<br>ウ.Webサイト（Webサーバ）/Webブラウザ<br>エ.Webブラウザ/Webサイト（Webサーバ）',
    answers : ['ア','イ','ウ','エ'],
    correct: 'エ'
  },
  {
    question : 'データベースのデータを操作するWebサイト<br>文字を巧みに入力し、データを盗み見・改ざんする攻撃で、<br>悪用されると、表示してはならないデータの表示・削除・追加・変更が行われてしまう',
    answers : ['IDS','SQLインジェクション','OSコマンドインジェクション','ディレクトリリスティング'],
    correct: 'SQLインジェクション'
  },
  {
    question : 'Webサイトの入力欄にOSの操作コマンドを埋め込みで、Webサーバに送信し、Webサーバを不正に操作する攻撃<br><br>Webサイトのデータを改ざん・破壊、重要情報を漏洩させたり、<br>ほかのWebサイトへの攻撃の踏み台にする。',
    answers : ['DNSハイジャック','SQLインジェクション','OSコマンドインジェクション','ディレクトリリスティング'],
    correct: 'OSコマンドインジェクション'
  },
  {
    question : 'Webサーバ内の、ファイル一覧やディレクトリ（フォルダ）一覧を表示する機能で<br>無効化にしない場合は、悪用され攻撃者にファイルを盗まれる危険性がある',
    answers : ['ルートディレクトリ','ディレクトリトラバーサル','ディレクトリリスティング','オプトイン方式'],
    correct: 'ディレクトリリスティング'
  },
  {
    question : '攻撃者が相対パス記法を悪用して、Webサイト内にあるインターネット上では非公開のファイルを閲覧・削除・改ざんする攻撃<br><br>相対パス記法では、「../」が上位ディレクトリ（親フォルダ）へ移動することを意味する<br>これらを巧みに組み合わせて、本来はインターネット上に非公開のファイルを見つけ出し、閲覧・削除・改ざんする<br>攻撃方法<br>・インターネット上では非公開であるはずのファイルを閲覧する。<br>・Webサーバの特定情報や公開されたファイルを削除したり、改ざんしたりする。',
    answers : ['カレントディレクトリ','ディレクトリトラバーサル','ルートディレクトリ','ディレクトリリスティング'],
    correct: 'ディレクトリトラバーサル'
  },
  {
    question : 'スクリプト攻撃の対策で<br>WebブラウザからWebサイトへの送信する文字に含まれる特殊文字を悪用されない形式に事前変換する処理。<br>文字を無害化する【サニタイジング（無害化）】の手段の一つ',
    answers : ['エスケープ処理','ケーブルに電磁波を通させない素材を巻く','プレースホルダ','チャレンジレスポンス認証'],
    correct: 'エスケープ処理'
  },
  {
    question : 'WebブラウザからWebサイトへ送信する文字を、あとで埋め込むための仕組みで<br>送信文字に悪意あるスクリプトが含まれていても、あくまで埋め込むための文字だと解釈し、命令とは解釈しないため誤って実行することがない',
    answers : ['ペネトレーションテスト','コンテンツフィルタリング','CSA','プレースホルダ'],
    correct: 'プレースホルダ'
  },
  {
    question : '特定の組織に狙いを定めて行うサイバー攻撃の総称<br>不特定を対象としたマルウェアとは対照的に、攻撃対象の脆弱性を事前にフットプリンティングし、その脆弱性を突く攻撃をしかけて機密情報を奪い取る。<br><br>特徴<br>攻撃対象のために作られた、新種や亜種のマルウェアを使うため、ウイルスソフトでは検知されにくい<br>攻撃対象が少数のため、発見が遅く、ウイルス対策ソフトのウイルス定義ファイルの対応が遅くなる',
    answers : ['標的型攻撃','やり取り型攻撃','水飲み場型攻撃','標的型攻撃メール'],
    correct: '標的型攻撃'
  },
  {
    question : '事前に問い合わせを行ったりしながら、辻褄の合う内容のメールを何度かやり取りを行い、受信者を信頼させた後にマルウェアを添付したメールを送り付ける攻撃をなんというか',
    answers : ['標的型攻撃','やり取り型攻撃','標的型攻撃メール','水飲み場型攻撃'],
    correct: 'やり取り型攻撃'
  },
  {
    question : '標的となる組織がよく利用するWebサイトに、マルウェアを埋め込み、その組織が接続したときだけマルウェア感染させる攻撃<br><br>特徴<br>・IPアドレスから接続元を解析し、標的となる組織から接続された時だけ攻撃する<br>・攻撃対象を標的となる組織だけに限定することで、攻撃の発覚を遅らせ、攻撃の成功率を高める',
    answers : ['水飲み場型攻撃','標的型攻撃','標的型攻撃メール','クロスサイトスクリプティング'],
    correct: '水飲み場型攻撃'
  },
  {
    question : '次の連想で当てはまるものを選べ<br>特定の組織に絞る<br>信頼できそうな組織や人物<br>受信者に関係が深そうな話題を送ってくる<br>ほとんど検出不可。<br>少数にしか送信がされないため、発見が遅く、ウイルス対策ソフトの対応が間に合わない。',
    answers : ['迷惑メール','標的型攻撃メール','ワンクリック詐欺','標的型攻撃'],
    correct: '標的型攻撃メール'
  },
  {
    question : '次の連想で当てはまるものを選べ<br>不特定多数にばらまく<br>誰にでも関係のある話題<br>ウイルスソフトでは大半は検出できる。<br>芸能人を装ったり、エロサイトを誘導してくる',
    answers : ['迷惑メール','標的型攻撃メール','変態メール','チェーンメール'],
    correct: '迷惑メール'
  },
  {
    question : '次の連想で当てはまるものを選べ<br>処理速度：速い<br>鍵の数：多人数の場合、必要な鍵の数が多くなる。<br>合計ｎ人が利用する場合の鍵の数：n(n-1)/2<br>鍵の配布：鍵の配布が手間<br>鍵の配布方法：電子メール・電話・手紙など<br>特徴：手軽で少人数での利用に向く',
    answers : ['共通鍵暗号方式',' ハイブリッド暗号','秘密鍵暗号方式','公開鍵暗号方式'],
    correct: '共通鍵暗号方式'
  },
  {
    question : '次の連想で当てはまるものを選べ<br>処理速度：遅い<br>鍵の数：多人数であっても、必要な鍵の数は1人につき二つだけ。<br>合計ｎ人が利用する場合の鍵の数：2n<br>鍵の配布：鍵の配布が容易<br>鍵の配布方法：PGP・PKI（公開鍵基盤）<br>特徴：環境構築に手間がかかるが、多数での利用に向く',
    answers : ['ハイブリッド暗号','公開鍵暗号方式','共通鍵暗号方式','秘密鍵暗号方式'],
    correct: '公開鍵暗号方式'
  },
  {
    question : '共通鍵暗号方式は、暗号化と復号で、【　　】を使う暗号方式',
    answers : ['共通鍵','秘密鍵','RSA','公開鍵'],
    correct: '共通鍵'
  },
  {
    question : '公開鍵は、不特定多数の利用者に公開する。では、秘密鍵は？',
    answers : ['誰にも公開しない','相手に公開する','条件によっては教えてあげる。','そんなものは存在しない'],
    correct: '誰にも公開しない'
  },
  {
    question : '共通鍵暗号方式の代表格の暗号技術で、<br>鍵の長さは56ビットです。<br>NIST（米国国立標準技術研究所）が米国標準暗号方式として制定<br>現在は解読の可能性があるという理由で危殆化した。',
    answers : ['CSA','DES','RSA','AES'],
    correct: 'DES'
  },
  {
    question : '通鍵暗号方式の代表格の暗号技術で、<br>鍵の長さは128ビット・192ビット・256ビットから選べる<br>NISTが米国標準暗号方式として制定<br>別の暗号方式の代表格の暗号技術の危殆化に伴い、後継の暗号技術を一般公募し、安全面と実装面で最も優れた暗号技術が採用され、【　　】と名付けられた。',
    answers : ['RSA','AES','DES','CSA'],
    correct: 'AES'
  },
  {
    question : '公開鍵暗号方式の代表格の暗号技術<br>非常に大きな数の素因数分解が困難なことを利用している。',
    answers : ['RSA','AES','DES','CSA'],
    correct: 'RSA'
  },
  {
    question : 'ハッシュ関数とは<br>【　　　】を確かめるために使う計算方法で、ディジタル署名の中で使われる<br>ハッシュ化：平文をハッシュ関数で計算し、メッセージダイジェスト（ダイジェスト）を作る。<br>・異なる平文から、同一のダイジェストになることは、計算上ありえない<br>・平文からダイジェストは作れるが、逆にダイジェストは作れない【　　　　】と表現する<br>・ダイジェストにより、ファイル内容をすべて見比べなくてもファイル内容が同一だと確かめられる<br>・ダイジェストは、平文のファイルサイズにかかわらず、一定のサイズになる<br><br>ア.改ざんなし/一方向性または不可逆性<br>イ.なりすましなし/一方向性または不可逆性<br>ウ.改ざんなし/多方向性または可逆性<br>エ.なりすましなし/多方向性または可逆性',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ア'
  },
  {
    question : '【　　　　　　　　】の手順<br>1.送信者→平文のハッシュ化→[送信者ダイジェスト]を作る。 …ハッシュ化<br>2.送信者は[送信者のダイジェスト]自体を平文し[送信者の秘密鍵]を使用→暗号化[暗号ダイジェスト]を作る(署名する) …公開鍵暗号方式<br>3.送信者は1の平文、2の[暗号ダイジェスト]を受信者に送る<br>4.受信者は[送信者の公開鍵]を使用→2の[暗号ダイジェスト]を複合→[送信者のダイジェスト]を取り出す(これを検証するという)<br>5.受信者は受信した1の平文をハッシュ化→[受信者のダイジェスト]を作る …ハッシュ化<br>6.受信者は4の[送信者ダイジェスト]と5の[受信者のダイジェスト]を比較し、同一であればなりますなし、改ざんなしを確かめられる',
    answers : ['ディジタル証明書','公開鍵暗号方式','ディジタル署名','共通鍵暗号方式'],
    correct: 'ディジタル署名'
  },
  {
    question : '公開鍵暗号方式の暗号化と逆の手順を踏むことで、なりすましと改ざんなしを確かめられるディジタル署名とは何か',
    answers : ['証明書の電子版','署名の電子版','セキュリティ認証','Web認証'],
    correct: '署名の電子版'
  },
  {
    question : 'ディジタル署名とはなりすましなし、改ざんなしを確かめられる<br>署名の電子版ですが、なりすましなしで確実に本人のものであると第三者機関が認証するディジタル証明書とは次のうちどれもあたるものでしょうか。<br>ア.身分証明・印鑑証明などの証明書の電子版<br>イ.署名・印鑑などの署名の電子版<br>ウ.自宅などに入る鍵のようなものの電子版<br>エ.警備などのセキュリティ対策の電子版',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ア'
  },
  {
    question : '【　　　　】の手順：<br>1.送信者は[公開鍵]と[秘密鍵]を作成し、認証局にディジタル署名の公開鍵と身分証明書を提出して登録申請する<br>2.認証局は内容を承認、提出されたディジタル署名の公開鍵を入れたディジタル証明書を発行する<br>3.送信者は受信者にメール本文、ディジタル署名の公開鍵・認証局のディジタル証明書を送る。<br>4.受信者は認証局を信頼し、認証局が送信者を認証するのであれば、受信者は送信者を信頼できる。',
    answers : ['ディジタル証明書','ディジタル署名','公開鍵暗号方式','共通鍵暗号方式'],
    correct: 'ディジタル証明書'
  },
  {
    question : 'ルート(root)認証局とは、【　A　】に位置する認証局で、<br>１つの認証局がすべてのディジタル証明書を発行することは困難であることから、認証局が多数必要となる<br>その一方で数が多すぎると煩雑になるため、認証局を断層構造にし、【　B　】の認証局が【　C　】の認証局を認証するようにする<br>ルート認証局の特徴<br>・送信者から受け取ったディジタル証明書が、信頼のおけるルート認証局により認証し、【　C　】の認証局が発行したものであれば、そのディジタル証明書のなりすましなしを確かめられる<br>・ルート認証局は、認証局運用規定（CPS）を公開し、厳正な監査基準を満たす必要がある。<br>ア.A/下位、B/上位、C/最上位<br>イ.A/上位、B/最上位、C/下位<br>ウ.A/最上位、B/上位、C/下位<br>エ.A/下位、B/上位、C/最上位',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ウ'
  },
  {
    question : '【　　　】とは、有効期限内にもかかわらず、失効したディジタル証明書のシリアル番号と失効した日時の一覧で、身近な例ではブラックリストに似ている。<br><br>有効期限・証明書の署名などはディジタル証明書で確認できる<br>ディジタル証明書だけでは確認できないため、【　　】を使う。<br>例：ディジタル証明書が悪用されたり、秘密鍵を紛失した場合<br>その旨を申請すれば【　　】に掲載され、認証局（CA）により発行される<br>Webブラウザでは、【　　】をダウンロードし、【　　】に掲載されていれば、そのディジタル証明書を無効と判断する',
    answers : ['CRL','URL','DES','AES'],
    correct: 'CRL'
  },
  {
    question : 'MACと呼ばれる通信データの改ざんなしを確かめるために作る符号データで、共通鍵暗号方式、ハッシュ関数を使うものは？',
    answers : ['メッセージ認証符号','タイムスタンプ','ワンタイムパスワード','PIN'],
    correct: 'メッセージ認証符号'
  },
  {
    question : 'なりすましを防ぐため、複数の認証方法（知的認証・所有物認証・生体認証）を組み合わせることは？',
    answers : ['2段階認証','多要素認証','多層防御','2要素認証'],
    correct: '多要素認証'
  },
  {
    question : '入口対策では、攻撃者をネットワークやシステムに不正侵入させない<br>内部対策では、ネットワークやシステムの内部に不正侵入された後に被害を拡大させない<br>出口対策では、情報を外部に送出させないなどありますが、<br><br>入口対策、内部対策、出口対策のように複数の対策を多くの階層・段階で行うことはなんというか',
    answers : ['出口対策','内部対策','多層防御','入口対策'],
    correct: '多層防御'
  },
  {
    question : '【　　】：異なる認証お方法を二つ組み合わせる方法<br>【　　】：同一の認証を二つ組み合わせる方法<br>ア.二段階認証/二要素認証<br>イ.二段階認証/多要素認証<br>ウ.二要素認証/多要素認証<br>エ.二要素認証/二段階認証',
    answers : ['ア','イ','ウ','エ'],
    correct: 'エ'
  },
  {
    question : '1回限り有効な使い捨てパスワードで。<br>認証の度にパスワードを作成、時間が経過すると無効になるもの。<br>仮に盗聴されても次回は異なるパスワードになるため、不正利用が防止できるものは？',
    answers : ['知識認証','ワンタイムパスワード','シングルサインオン','所有物認証'],
    correct: 'ワンタイムパスワード'
  },
  {
    question : '一度あるシステムで、利用者認証が通れば、ほかのシステムで改めて認証することなく認証が通る、<br>利用者の利便性向上に繋がる技術ですが、<br>一度不正アクセスされると被害が利用者の別のシステムにも及ぶ危険がある技術の事をなんというか',
    answers : ['ワンタイムパスワード','二要素認証','シングルサインオン','二段階認証'],
    correct: 'シングルサインオン'
  },
  {
    question : '経営層<br>組織に対して経営責任を持つ人々で、社長、取締役、役員などの事さす。<br>【　　　】ともいう。',
    answers : ['トップダウン','トップマネジメント','CEO','CIO'],
    correct: 'トップマネジメント'
  },
  {
    question : 'PDCAサイクルにおけるISMSの中核となる考え方で、ISMSの段階と合っているものを選びなさい<br>ア P:ISMSの維持・改善/D:ISMSの導入・運用/C:ISMSの監視・見直し/A:ISMSの確立<br>イ P:ISMSの維持・改善/D:ISMSの監視・見直し/C:ISMSの導入・運用/A:ISMSの確立<br>ウ P:ISMSの確立/D:ISMSの導入・運用/C:ISMSの監視・見直し/A:ISMSの維持・改善<br>エ P:ISMSの導入・運用/D:ISMSの確立/C:ISMSの監視・見直し/A:ISMSの維持・改善',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ウ'
  },
  {
    question : '組織の運営が求められる【　】に当てはまる文字を選べ<br>【　　　　】の管理体制を構築する<br>・担当者任せでなく、全社で意思統一し実施するために経営層の積極的関与が欠かせない。',
    answers : ['トップダウン','トップマネジメント','PDCAサイクル','ISMS'],
    correct: 'トップダウン'
  },
  {
    question : '組織の運営が求められる【　】に当てはまる文字を選べ<br>各個人の役割と責任を明示する<br>・誰がいつ何を行い、内容をどこまで評価し、誰が見直すのかを明記する。<br>監査する人と監査される人とは【　　】になるように役割を分離する。',
    answers : ['同じ人','違う人','管理者','経営層'],
    correct: '違う人'
  },
  {
    question : '組織の運営が求められる【　】に当てはまる文字を選べ<br>ルールを策定し、周知徹底をする<br>情報セキュリティポリシをはじめとしたルールを策定し、教育や訓練で周知徹底する。<br>違反を早期に発見し、【　A　】するための組織体制を組み込む<br>故意によるルール違反では、【　B　】を適用するように就業規則に記載する<br>ア A.処罰/B.罰則<br>イ A.再発防止/B.罰則<br>ウ A.対処/B.罰則<br>エ A.再発防止/B.処罰',
    answers : ['ア','イ','ウ','エ'],
    correct: 'イ'
  },
  {
    question : '組織の運営が求められる【　】に当てはまる文字を選べ<br>【　　　】を設ける。<br>情報セキュリティの各種ルール・規程を厳密に運用しすぎると、業務に支障をきたすことがある。<br>情報セキュリティ管理自体を目的化せず、業務を進める上で必要になることをふまえ、緊急時には柔軟に対応できる【　　　】を準備する',
    answers : ['抜け道','裏口','規則','例外措置'],
    correct: '例外措置'
  },
  {
    question : '基本方針とは、<br>なぜ情報セキュリティに取り組むのか？という社会的背景、法令順守の観点からその必要性を説く宣言文であり、<br>目的・方針・適用範囲・体制などを明記する<br>そのため、外部の公開は【　　】、頻繁に【　　】<br>ア 行う/改訂する<br>イ 行わない/改訂しない<br>ウ 行う/改訂しない<br>エ 行わない/改訂する',
    answers : ['ア','イ','ウ','エ'],
    correct: 'ウ'
  },
  {
    question : '対策基準とは、<br>なぜ実施するか？という守るべきルール、規程で<br>情報セキュリティ対策基準・事故への対応規程・文書管理規程など<br>そのため、外部の公開は【　　】、頻繁に【　　】<br>ア 行う/数年にごと<br>イ 行わない/ほぼ毎年<br>ウ 行う/ほぼ毎年<br>エ 行わない/数年ごと',
    answers : ['ア','イ','ウ','エ'],
    correct: 'エ'
  },
  {
    question : '実施手順とは、<br>どのように実施するか？というもので<br>マニュアル文書や利用手順書のことである。<br>そのため、外部の公開は【　　】、頻繁に【　　】<br>ア 行う/数年にごと<br>イ 行わない/ほぼ毎年<br>ウ 行う/ほぼ毎年<br>エ 行わない/数年ごと',
    answers : ['ア','イ','ウ','エ'],
    correct: 'イ'
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

]

// import { quiz } from "./quiz.js";

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;


const $button = document.getElementsByTagName('button') //よく使う変数
const buttonLength = $button.length;

//変数の文字列をHTMLに反映させる
const setUpQuiz = () => {
document.getElementById('js-question').innerHTML = quiz[quizIndex].question;
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
    window.alert('正解！超天才！かっこいい///');
    score++;
  }else{
    window.alert('不正解だよｗｗｗｗばーかばーかｗｗｗｗ');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    //問題があれば実行
    setUpQuiz();
  }else{
  //問題がなければ実行
  window.alert("終了です。あなたの正解数は"+quizLength+"個中　"+score+"個です");
}};


let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  })
 handlerIndex++;
};
