<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>暗記用クイズゲーム</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    
    <div class="jumbotron mt-5">
      <div class="d-flex justify-content-center">
        <div id="js-question" class="alert alert-primary" role="alert">
          JSうまく読み込めてないよ。
        </div>
      </div>
      
      <div id="js-items" class="d-flex justify-content-center">
        <div class="m-2">
          <button type="button" id="js-btn-1" class="btn btn-primary">読み込めてないよ</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-2" class="btn btn-primary">読み込めてないよ</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-3" class="btn btn-primary">読み込めてないよ</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-4" class="btn btn-primary">読み込めてないよ</button>
        </div>
      </div>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
