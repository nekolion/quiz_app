// const quiz =[
//   {
//     question : '悪意ある目的で高い技術力を活かす人を別名なんと言うか',
//     answers : ['クラッカー','スクリプトキティ','ハッカー','故意犯'],
//     correct: 'クラッカー'
//   },
//   {
//     question : 'ハッカーの説明で正しいものは？',
//     answers : ['悪意があって攻撃してくる人','善悪かかわらず高い技術を持つ人','システムを破壊しようとしてくる人','パソコンに詳しい人'],
//     correct: '善悪かかわらず高い技術を持つ人'
//   },
//   {
//     question : 'いたずら目的などで既存のツールを使ってサイバー攻撃する攻撃者は？',
//     answers : ['クラッカー','スクリプトキティ','愉快犯','ハッカー'],
//     correct: 'スクリプトキティ'
//   },
//   {
//     question : '利用者の意図しない動作をするソフトウェア全般の総称をなんという？',
//     answers : ['ワーム','トロイの木馬','コンピューターウイルス','マルウェア'],
//     correct: 'マルウェア'
//   },
//   {
//     question : 'コンピューターウイルス次の機能を一つ以上持つ、発病機能、潜伏機能、あと一つは何か',
//     answers : ['自己伝染機能','自己分身機能','破壊機能','不正アクセス機能'],
//     correct: '自己伝染機能'
//   },
//   {
//     question : 'コンピューターウイルスの潜伏機能で正しいものはどれ？',
//     answers : ['脆弱性を悪用して侵入してくる機能','ファイルの破壊を行う機能・意図しない動作をする機能','条件が整うまで発病しない機能','プログラムやファイルにウイルスを感染していく機能'],
//     correct: '条件が整うまで発病しない機能'
//   },
//   {
//     question : '次の連想で、正しいものを選べ。<br>1.単体プログラムである。<br>2.別のプログラムを使わず自身を増殖させられる。<br>3.セキュリティホール（脆弱性）を悪用して侵入するケースが多い',
//     answers : ['ワーム','コンピューターウイルス','トロイの木馬','BOT'],
//     correct: 'ワーム'
//   },
//   {
//     question : 'トロイの木馬について間違っているものを一つ選びなさい<br>1.潜入しすぐ破壊活動を開始する<br>2.他のプログラムに伝染し、システムを破壊する<br>3.潜伏し時間が経ってから発症する<br>4.ほかのコンピューターが乗っ取るための窓口として機能する',
//     answers : ['1','2','3','4'],
//     correct: '2'
//   },
//   {
//     question : '次の連想で、正しいものを選べ。<br>1.攻撃するためのプログラムを外部からダウンロードするマルウェアです<br>2.ネットから不正にプログラムをダウンロードし、実行することで攻撃します。<br>3.ウイルス対策ソフトのパターンマッチング法では発見されにくいです。',
//     answers : ['ワーム','ドロッパ','バックドア','ダウンローダ'],
//     correct: 'ダウンローダ'
//   },
//   {
//     question : '次の連想で、正しいものを選べ<br>攻撃するためのプログラムを内部に隠し持つマルウェア。<br>感染後：内部にある不正プログラムを取り出し、実行することで攻撃する',
//     answers : ['ダウンローダ','コンピューターウイルス','ワーム','ドロッパ'],
//     correct: 'ドロッパ'
//   },
//   {
//     question : '攻撃者が特殊な裏口を作るので発見が難しい<br>一度アクセスできたコンピューターに対して、再び侵入するために仕掛ける裏口の事をなんというか',
//     answers : ['ワーム','ドロッパ','C&Cサーバ','バックドア'],
//     correct: 'バックドア'
//   },
//   {
//     question : '攻撃者（ボットハーダー）が、【　　　　】（命令を送り、遠隔操作するためのサーバ）経由で<br>ボットネット内のボットに対して指令を出し、遠隔操作されたボットが様々な攻撃を行う',
//     answers : ['Webサーバ','データベースサーバー','DNSサーバー','C&Cサーバ'],
//     correct: 'C&Cサーバ'
//   },
//   {
//     question : '次の連想で当てはまるものを選びなさい<br>ソフトウェアやハードウェアの脆弱性を悪用するために作成されたプログラム→攻撃コードとも呼ぶ<br>本来の目的：発見された脆弱性を検証・分析するために使われていた<br>近年は悪用されることが増えている',
//     answers : ['エクスプロイトコード','クロスサイトスクリプティング','クリプトジャッキング','エクスプロイトキット'],
//     correct: 'エクスプロイトコード'
//   },
//   {
//     question : '感染したコンピュータ内部の利用者の個人情報などを収集するソフトウェアは次のうちどれか',
//     answers : ['遠隔操作型ウイルス','アドウェア','ランサムウェア','スパイウェア'],
//     correct: 'スパイウェア'
//   },
//   {
//     question : 'ソフトウェアを無償提供する代わりに、利用者に広告を見させる目的のソフトウェアで、<br>通常は無害だが、利用者の承諾なく個人情報を収集するスパイウェアもあるマルウェアは次のうちどれか',
//     answers : ['スパイウェア','ランサムウェア','アドウェア','マルウェア'],
//     correct: 'アドウェア'
//   },
//   {
//     question : '【　A　】<br>コンピュータのファイルやシステムを使用不能にし、その復旧と引き換えに【　B　】を要求するソフトウェア<br>代表例：Wanna Cryptor・WannaCry',
//     answers : ['A:ランサムウェア/B:金銭','A:アドウェア/B:金銭','A:ランサムウェア/B:パスワード','A:アドウェア/B:パスワード'],
//     correct: 'A:ランサムウェア/B:金銭'
//   },
//   {
//     question : '次の手順で金銭をだまし取るウィルスはどれか<br>1.正規のセキュリティ対策ソフトを思わせる画面に<br>「マルウェアを検出」「ウイルスに感染している」などと表示する<br>2.「解決するために有償版の製品が必要」と偽のメッセージを表示し、セキュリティ対策ソフトを押し売りする<br>結果：購入画面で利用者にクレジットカード番号を入力させ金銭をだまし取る',
//     answers : ['ポリモーフィック型ウイルス','押し売り型セキュリティウイルス','遠隔操作型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
//     correct: '偽セキュリティソフト対策ソフト型ウイルス'
//   },
//   {
//     question : '情報機器に感染すると、掲示板サイトにマルウェアへと誘導するリンクを書き込む動作を行うマルウェア。<br>【　　　　　】：マルウェアに感染した攻撃者とは無関係の情報機器が掲示板サイトに書き込むため証拠が残りにくく、攻撃者の追跡が難しくなる<br>通常の場合は、攻撃者が自らリンクを書き込み動作を行うため、攻撃者を特定する手掛かりが残る',
//     answers : ['ポリモーフィック型ウイルス','コンピューターウイルス','遠隔操作型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
//     correct: '遠隔操作型ウイルス'
//   },
//   {
//     question : '感染のたびに異なる方式で自身のウイルスコードを暗号化するウイルス<br>・ウイルス対策ソフトのパターンマッチング法によるウイルス検出を免れる目的<br><br>検出するには：<br>プログラムが行う危険な行動（振る舞い）を検出した時点でウイルス対策ソフトはウイルスに感染したと判断するビヘイビア法を使う必要がある。',
//     answers : ['コンピューターウイルス','遠隔操作型ウイルス','ポリモーフィック型ウイルス','偽セキュリティソフト対策ソフト型ウイルス'],
//     correct: 'ポリモーフィック型ウイルス'
//   },
//   {
//     question : 'パスワードに単語を使う人が多い事を悪用し、辞書の単語を利用しパスワードを推察する方法<br>例：12345,Password,qwerty（キーの並び）,login<br>総当たり攻撃に比べ見破るまでの効率が良いため、総当たり攻撃の前にまずは【　　　】でパスワードの見破りを試す',
//     answers : ['パスワードリスト攻撃','辞書攻撃','リバースブルートフォース攻撃','DoS攻撃'],
//     correct: '辞書攻撃'
//   },
//   {
//     question : '利用者ID・パスワードを使いまわす利用者が多いので<br>あるWebサイトやシステムから流出した利用者IDとパスワードのリストを使って<br>別のWebサイトやシステムへの不正ログインを試みる攻撃<br>不正ログインされるWebサイトや、システムに脆弱性がなくても攻撃が成功する。',
//     answers : ['パスワードリスト攻撃','辞書攻撃','リバースブルートフォース攻撃','ブルートフォース攻撃'],
//     correct: 'パスワードリスト攻撃'
//   },
//   {
//     question : 'パスワードをもとに利用者IDを試す攻撃方法は？',
//     answers : ['パスワードリスト攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'リバートブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : '予想したパスワードをもとに求められたハッシュ値と利用者用パスワードのハッシュ値を照合し、パスワードを見破る方法で<br>パスワードは通常そのまま保存されないが<br>パスワードを元にハッシュ関数により計算されたハッシュ値が保存されている。<br>予想したパスワードのハッシュ値の一覧表と、利用者のパスワードのハッシュ値を比較することで、パスワードを特定する攻撃は？',
//     answers : ['ブルートフォース攻撃','レインボー攻撃','DDoS攻撃','第三者攻撃'],
//     correct: 'レインボー攻撃'
//   },
//   {
//     question : 'パスワードクラックへの対策で間違っているものを選べ<br>1.類推攻撃・辞書攻撃への対策は、意味のある単語をパスワードに使わない<br>2.ブルートフォース攻撃への対策は、パスワードに使用する文字の種類を増やす・長くする<br>3.パスワードリスト攻撃への対策は、パスワードを使いまわさない<br>4.ブルートフォース攻撃への対策はセキュリティソフトなどを入れて脅威への対策を行う',
//     answers : ['1','2','3','4'],
//     correct: '4'
//   },
//   {
//     question : 'フットプリンティングについて正しいものを選びなさい<br>攻撃者がサイバー攻撃の前に行う【　　　　　】のこと',
//     answers : ['情報収集','プログラムの作成','迷惑行為','インストール'],
//     correct: '情報収集'
//   },
//   {
//     question : '不正アクセスとは、<br>ネットワークを通じ、機器に接続し、本来認められていない操作を行う事で<br>【　　　】：ソフトウェアの脆弱性を悪用し、コンピューターに不正侵入すること<br>【　　　】：攻撃者が正規の利用者ID・パスワードを悪用し、正規の利用者になりすますこと',
//     answers : ['侵入行為/なりすまし','ハッカー/なりすまし','侵入行為/BOT','ハッカー/BOT'],
//     correct: '侵入行為/なりすまし'
//   },
//   {
//     question : '不正アクセスを行う前に、接続先の【　　】番号に抜け穴があるかを調べる行為<br>・サイバー攻撃の手法として【　　】スキャン行う<br>・システム管理者が自衛のために自分のネットワークの脆弱性を調べる目的でも行う<br>【　　】スキャンを行うためのツール→【　　】スキャナ',
//     answers : ['ポート','IP','DNS','TCP'],
//     correct: 'ポート'
//   },
//   {
//     question : 'サイバーキルチェーンとは<br>サイバー攻撃の段階を説明した代表的なモデルで<br>サイバー攻撃を【　】段階に区分し、攻撃者の考え方・行動を理解することを目的としている。<br>このうちのどこかの段階でチェーン（負の連鎖）を断ち切れば、被害が防げる',
//     answers : ['7','8','10','11'],
//     correct: '7'
//   },
//   {
//     question : '1.偵察：対象者に関する情報を事前調査・情報収集する。<br>2.【　】：エクスプロイトコード（攻撃コード）・マルウェアの作成する。添付ファイルに格納する。<br>3.配送：添付ファイルを含むメールを対象者へ送付する<br>4.攻撃実行：添付ファイルを実行させる<br>5.インストール：対象者のPCがマルウェアに感染する<br>6.【　】：C&Cサーバ経由でマルウェアを操作し内部情報を収集する<br>7.目的の実行：内部情報を圧縮・暗号化した後、持ち出す<br><br>1.武器化/探索<br>2.計画実行/探索<br>3.計画実行/遠隔制御<br>4武器化/遠隔制御',
//     answers : ['1','2','3','4'],
//     correct: '4'
//   },
//   {
//     question : '一般的な検索サイトには表示されず、かつ専用のWebブラウザでのみ接続可能なWebサイトの総称をなんというか',
//     answers : ['ダークウェブ','Pornhub','裏サイト','ダークネット'],
//     correct: 'ダークウェブ'
//   },
//   {
//     question : 'インターネット上の未使用のIPアドレス空間の事をなんというか？',
//     answers : ['ダークウェブ','闇サイト','ローカルエリアネットワーク','ダークネット'],
//     correct: 'ダークネット'
//   },
//   {
//     question : 'ゴミ箱を漁り、パスワードのメモ書きや秘密情報が印刷された破棄書類を盗み出す方法。<br>企業のごみ置き場の廃棄書類を物色することが、企業から秘密情報を奪う常套手段とも言われている。<br>別名トラッシングいう行為は次のうちどれか？',
//     answers : ['ソーシャルエンジニアリング','スミッシング','スキャベンジング','スニッフィング'],
//     correct: 'スミッシング'
//   },
//   {
//     question : '無防備な無線LAN親機（アクセスポイント）を自動車で移動しながら探し回る行為で<br>強力なアンテナを持つ無線LAN子機を装備し、セキュリティ設定が甘く、かつ外部に漏れ出た電波を求めて、オフィス街を徘徊する。<br>また、無線LAN環境に不正アクセスする攻撃の例は次の通り<br><br>・社内ネットワーク内にある重要な情報を奪う。<br>・インターネット接続を無断で利用する。<br>・社内ネットワーク内で送受信されている通信データを盗聴する',
//     answers : ['スキャベンジング','不正アクセス','ウォードライビング','FreeWifi'],
//     correct: 'ウォードライビング'
//   },
//   {
//     question : 'Webサイトを閲覧しただけでマルウェアをWEB閲覧者のコンピュータにダウンロードさせる攻撃<br><br>主にWebブラウザやOSの脆弱性が悪用される',
//     answers : ['ドライブバイダウンロード','ドロッパ','ウォードライビング','ダウンローダ'],
//     correct: 'ドライブバイダウンロード'
//   },
//   {
//     question : '平文をハッシュ関数で計算して、【　　】を作る。<br>ハッシュ値、フィンガプリントともいう。<br>語源は平文＋要約から',
//     answers : ['メッセージダイジェスト','EV証明書','公開鍵','秘密鍵'],
//     correct: 'メッセージダイジェスト'
//   },
//   {
//     question : 'コンピューターのディスプレイから発する微弱な電磁波を傍受し、表示内容を盗み見する事は次のうちどれか',
//     answers : ['ウォードライビング','スキャベンジング','テンペスト','クリプトジャッキング'],
//     correct: 'テンペスト'
//   },
//   {
//     question : '暗号装置が発する電磁波・熱・消費電力・処理時間などを外部から観測し、暗号の手掛かりにする方法',
//     answers : ['スニッフィング','テンペスト','スキャベンジング','サイドチャネル'],
//     correct: 'サイドチャネル'
//   },
//   {
//     question : 'インターネット上の未次の連想から正しい答えを選びなさい。<br>通信を行う二者の間に割り込み、両者が交換する情報を自分のものとすり替える事によって誰にも気づかれることなく盗聴すること。<br>別名：MITM（Man-In-The-Middleの略）使用のIPアドレス空間の事をなんというか？',
//     answers : ['中間者攻撃','第三者攻撃','踏み台','第三者中継'],
//     correct: '中間者攻撃'
//   },
//   {
//     question : '踏み台について【　】部分に正しい言葉を入れなさい<br>サイバー攻撃の攻撃者は自身が犯人であることを隠すために証拠を残さないよう【　　】して攻撃をしかける。<br>踏み台とは：中継点となる第三者のこと、<br>さらに攻撃者が踏み台に指示し、踏み台を足掛かりにさらにその踏み台が別の踏み台に指示して攻撃する。',
//     answers : ['第三者を経由','なりすまし','プロキシサーバを経由','IPスプーフィング'],
//     correct: '第三者を経由'
//   },
//   {
//     question : '第三者のメールサーバを不正に中継し、身元を偽ってメールを送信することで<br>攻撃例は次の通り<br>・迷惑メール送信の踏み台にする<br>・【　　】が可能なサイトを、ブラックリストとして公開する<br>その結果：迷惑メール対策として、そのアドレスからのメールを<br>受信拒否にするメールサーバが出てくる。',
//     answers : ['第三者経由','第三者中継','パスワードリスト攻撃','標的型攻撃'],
//     correct: '第三者中継'
//   },
//   {
//     question : 'スニファと呼ばれる機器やソフウェアを使い、ネットワークを流れる通信データを監視・記録する盗聴行為をなんというか？',
//     answers : ['スニッフィング','ウォードライビング','ポートスキャン','フットプリンティング'],
//     correct: 'スニッフィング'
//   }, 
//   {
//     question : '次の攻撃方法から連想する答えを選択してください。<br>攻撃方法は次の通り<br>・外部からの不正アクセスを、内部IPアドレスからの通信に偽装し、なりすましする。<br>・DoS攻撃の攻撃者や、踏み台の身元を隠す目的で、別のIPアドレスからの通信に偽装する。',
//     answers : ['IPスプーフィング','中間者攻撃','ポートスキャン','標的型攻撃'],
//     correct: 'IPスプーフィング'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
//   {
//     question : 'パスワードの可能な組み合わせをすべて試す総当たり攻撃と呼ばれるものは？',
//     answers : ['類推攻撃','レインボー攻撃','ブルートフォース攻撃','リバートブルートフォース攻撃'],
//     correct: 'ブルートフォース攻撃'
//   },
// ]

import { quiz } from "./quiz.js";

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
