const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

const shops = [
    "전체 몰",
    "네이버",
    "자사몰",
    "카카오",
    '쿠팡윙',
    "선물하기",
    "11번가",
    "ESM",
    "G마켓",
    "옥션",
    '인터파크',
    '위메프',
    '티몬',
    'CJmall',
    'SSG',
    '이마트몰',
    '온누리',
    '세이베베',
    '유선구매',
    '에코바이오텍'
]

const items = [
    '리노칼파 150g',
    '리노칼파 45g',
    '리노칼파 30g',
    '리노선물 1호',
    '리노선물 2호',
    '리노모팩 100g',
    '리노모팩 35g',
    '리노 살탈제',
    "그린칼파 150g",
    '그린칼파 5포',
    '그린칼파 30포',
    '그린 소독수',
    '리노칼파 전체',
    '리노모팩 전체',
    '그린칼파 전체'
]

app.get('/bbb', (req,res) => {
    res.render('bbb');
});

app.get('/Home', (req,res) => {
    res.render('home');
});

app.get('/POsales', (req, res) => {
    res.render('POsales');
});

app.get('/POgraph', (req, res) => {
    res.render('POgraph', {shops , items});
});

app.get('/POrepur', (req, res) => {
    res.render('POrepur');
});

app.get('/FBtable', (req,res) => {
    res.render('FBtable');
});

app.get('/FBchar', (req, res) => {
    res.render('FBchar');
});

app.get('/FBgraph', (req, res) => {
    res.render('FBgraph');
});


app.get('/NaverAdTotal', (req, res) => {
    res.render('NaverAdTotal');
});

app.get('/Smith', (req, res) => {
    // var d_list = Smith();
    // res.render('Smith', {data : d_list});
    res.render('Smith');
});

app.get('/Smith/:key', (req, res) => {
    key = req.params.key
    res.render('Smith_key', {keyword : key});
});

app.get('/Search', (req, res) => {
    res.render('Search_Naver');
});


app.get('/FB_CAFE', (req, res) => {
    res.render('FB_CAFE');
});


app.get('/NaverKey_Sales', (req, res) => {
    res.render('NaverKey_Sales');
});

app.get('/live', (req, res) => {
    res.render('live');
})

app.get('/updatePO', (req, res) => {
    res.render('updatePO');
})

app.get('/Az', (req, res) => {
    res.render('Az');
})

app.get('/Shopify', (req, res) => {
    res.render('Shopify');
})

app.listen(3000, '0.0.0.0', () => {
    console.log("App is listening on port 3000");
});