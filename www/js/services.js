angular.module('starter.services', [])

.factory('Alcohols', function() {
  var capacity = null;
  var drinks = {'소주': [
    {"name":"참이슬 -오리지널","degree":20.1*50},
    {"name":"참이슬 - 프레쉬","degree":18.51*50},
    {"name":"처음처럼","degree":19.5*50},
    {"name":"처음처럼 cool","degree":16.8*50},
    {"name":"C1","degree":19.8*50},
    {"name":"좋은데이","degree":16.9*50},
    {"name":"청하","degree":13*50},
    {"name":"백세주","degree":12.5*50},
    {"name":"산사춘","degree":14*50},
    {"name":"매화수","degree":14.01*50},
    {"name":"봄봄","degree":16.7*50},
    {"name":"잎새주","degree":19.51*50},
    {"name":"J제이","degree":18.5*50},
    {"name":"참소주","degree":19.7*50},
    {"name":"하이트소주","degree":21*50},
    {"name":"산소 (O2)","degree":19.51*50},
    {"name":"화이트","degree":19.9*50},
    {"name":"한라산","degree":21.01*50},
  ], '사케': [
    {"name":"간바레 오또상","degree":14.5*50},
    {"name":"준마이 750","degree":15.6*50},
    {"name":"나마죠조","degree":14*50},
    {"name":"호린","degree":16.7*50},
    {"name":"쿠보타 만쥬","degree":15.5*50},
    {"name":"핫까이산 혼죠조","degree":15.51*50},
  ], '맥주': [
    {"name":"카스 (후레쉬)","degree":4.5*285},
    {"name":"하이트","degree":4.501*285},
    {"name":"OB (골든라거) ","degree":4.8*285},
    {"name":"칭따오","degree":4.7*285},
    {"name":"기린 - 캔","degree":5.5*285},
    {"name":"아사히 - 캔","degree":4.2*285},
    {"name":"산미구엘","degree":5*285},
    {"name":"기네스","degree":4.201*285},
    {"name":"맥스 - 캔","degree":4.502*285},
    {"name":"스타우트","degree":5.01*285},
    {"name":"버드와이저","degree":5.02*285},
    {"name":"산토리","degree":5.501*285},
    {"name":"밀러","degree":4.6*285},
    {"name":"호가든","degree":4.9*285},
    {"name":"코로나","degree":4.601*285},
    {"name":"레드락","degree":5.03*285},
    {"name":"하이네켄","degree":5.04*285},
  ], '막걸리': [
    {"name":"우국생","degree":6*200},
    {"name":"이동막걸리","degree":8*200},
    {"name":"포천막걸리","degree":6.01*200},
    {"name":"대박 (국순당)","degree":6.02*200},
  ], '양주': [
    {"name":"호세쿠에르보","degree":38*30},
    {"name":"예거","degree":35*30},
    {"name":"로얄살루트 -21","degree":40*30},
    {"name":"윈저","degree":40.01*30},
    {"name":"임페리얼","degree":40.02*30},
    {"name":"아그와","degree":30*30},
    {"name":"앱솔루트","degree":40.03*30},
    {"name":"봄베이 사파이어","degree":47*30},
    {"name":"조니워커 블루 라벨","degree":43*30},
    {"name":"발렌타인 17년","degree":43.01*30},
    {"name":"잭다니엘스","degree":40.04*30},
    {"name":"스미노프","degree":37.5*30},
    {"name":"스카치블루","degree":40.05*30},
  ], '와인': [
  ]};

  return {
    drinkTypes: [
      {name: '소주', enName: 'soju'},
      {name: '사케', enName: 'sake'},
      {name: '맥주', enName: 'beer'},
      {name: '막걸리', enName: 'makgeolli'},
      {name: '양주', enName: 'vodka'},
      {name: '와인', enName: 'wine'},
    ],
    drinks: drinks,
    capacity: capacity,
  };
})
.factory('Games', function() {
  var games = [
    {name: '폭탄 돌리기', enName: 'bomb'},
    {name: '시장게임', enName: 'go_market'},
    {name: '훈민정음', enName: 'good_korean'},
    {name: '손병호 게임', enName: 'mr_song'},
    {name: '스핀 게임', enName: 'spin'},
    {name: '전국노래자랑', enName: 'world_sing'},
  ];
  return {
    all: function() {
      return games;
    },
    find: function(enName) {
      var greps = $.grep(games, function(e) { return e.enName == enName});
      return greps[0];
    }
  };
})

.factory('Settings', function() {
  var menus = [
    {name: '주량 설정하기', enName: 'capacity'},
    {name: '팀 소개', enName: 'team'},
  ];
  return {
    menus: menus,
  };
});
