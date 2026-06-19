import type { Matchup, SynergyEntry } from "./schema.ts"

export const matchupOverrides: Record<string, Matchup[]> = {
  "shion": [
    {
      "target": "d-va",
      "rating": "bad",
      "body":
        "디바의 방어 매트릭스는 시온의 조이라이드를 제외한 모든 공격을 손쉽게 무력화시킨다. 처형과 광란의 살육은 모두 동작이 크고 선딜레이가 길어서, 디바가 방어 매트릭스만 켜고 있어도 시온은 아무것도 못한다.",
    },
    {
      "target": "domina",
      "rating": "bad",
      "body":
        "도미나가 날리는 광자 매그넘이나 수정 폭발을 시온은 손쉽게 피할 수 있지만, 정작 도미나가 구축한 방어 전선을 뚫으려면 맨몸으로 위험을 무릅써야 한다. 기껏 접근하고도 소닉 리펄서 탓에 벽에 밀쳐져서 기절당하거나, 판옵티콘을 직격으로 맞아서 꼼짝 없이 역공당할 수도 있다.",
    },
    {
      "target": "doomfist",
      "rating": "bad",
      "body":
        "수직 기동성이 거의 없다시피 한 시온 입장에서 매우 까다로운 상대다. 오버워치 최강의 기동성을 가진 둠피스트 상대로 도망칠 수 없고, 처형으로 딜을 넣으려 해도 모션이 매우 잘 보이는 관계로 파워 블락만 채워주는 꼴이다.",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
      "body":
        "라마트라는 변신한 동안 원거리 대응력이 전무해지므로 시온의 치고 빠지는 양각 괴롭히기에 그나마 가장 만만하게 당해주는 탱커다. 하지만 옴닉 폼에서 공허 가속기의 투사체 속도가 상당히 빠르기에 방심하다가는 거리를 좁히기도 전에 시온이 먼저 드러누우며, 탐식의 소용돌이를 터뜨려서 시온의 발을 묶으려 할 수도 있다.",
    },
    {
      "target": "reinhardt",
      "rating": "good",
      "body":
        "시온의 쌍권총은 보기보다 방벽 딜링이 빈약한 편이어서 라인하르트의 방벽을 굳이 치지 않고 무시하는 게 이득인데, 그런 움직임을 불편하게 여기는 쪽은 시온보다는 라인하르트다. 시온이 화염 강타를 운 나쁘게 2연타로 맞아서 즉사해버리거나, 대지분쇄의 사거리에 제 발로 들어가서 드러누워주는 실수만 하지 않으면 사실상 방벽 든 라인하르트 자체를 무시하고 다른 루트로 피해버려도 라인하르트는 이에 대응하지 못한다.",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
      "body":
        "얼굴 보러 쫓아가는 것도 벅차다. 레킹볼의 압도적인 이동 능력은 시온의 한시적인 기동력에 절대 거리를 내어주지 않으며, 수시로 각을 재다가 갑작스레 시온을 밀쳐서 전황을 엉망으로 만들어버리는 훼방에 시온은 일방적으로 당해야 한다. 그나마 레킹볼이 뿌린 지뢰를 잘 부수는 편이기는 하지만, 애초에 지뢰 자체의 설치 목적은 공격을 대신 받아 터지는 시점에서 달성되는 셈.",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
      "body":
        "갈고리에 잡히는 순간 무조건 죽는다. 서브 딜러들의 천적인 만큼 시온도 예외는 아니다. 시온의 스킬셋은 중거리 딜링과 고속 이동일 뿐 무적이 없으며, 회피로 갈고리를 피할 수는 있지만 호그가 회피를 먼저 빼고 갈고리 쓰면 그만이다. 오토바이도 갈고리에 잡히는 순간 그냥 취소되어 끌려가며, 광란의 살육 발동 중에도 갈고리에 걸리면 그냥 죽는다.",
    },
    {
      "target": "mauga",
      "rating": "bad",
      "body":
        "정화도 무적도 없는 시온은 순전히 무빙과 움직임으로 두부살을 커버하는 타입이라 적의 포킹에 오래 노출되면 위험한데, 마우가의 촉발 기관포는 그런 시온을 귀찮게 하기에 최적화되어있다. 누적 화염 게이지가 그 자체로 곧 시온에게 어서 자리를 피해야 한다는 압박인 것은 물론, 돌파의 발 구르기에 닿았다가는 회피를 쓰지도 못하고 쓰러져버릴 수도 있다. 특히 케이지 혈투에 붙잡히는 경우는 완벽한 외통수로, 시온은 케이지에서 탈출할 방법이 없다. 광란의 살육 제자리 난사로 재빨리 맞대응하여 마우가 자체나 케이지를 부숴버리는 게 유일한 선택지인데, 이것 마저 방사의 심한 선딜레이 때문에 스스로 마우가의 과녁이 되어주는 꼴이다.",
    },
    {
      "target": "sigma",
      "rating": "neutral",
      "body":
        "발사 속도도 투사체 속도도 느리기 짝이 없는 시그마의 공격은 시온이 충분히 회피할 수 있다. 그러나 정작 시그마가 설치한 실험용 방벽 때문에 시온의 활동에 시시각각 걸림돌이 밟히거나, 피하기의 경로를 예측한 강착 포커싱에 노출될 여지는 항상 있다. 중력 붕괴 역시 피하기로 즉시 범위를 벗어나지 못하면 시온은 꼼짝 없이 사망 확정.",
    },
    {
      "target": "orisa",
      "rating": "bad",
      "body":
        "무기 사거리에서부터 상대가 되지 않는다. 시온의 기동력이 오리사보다 월등히 높기는 하지만, 어차피 오리사는 일정 구역을 확보하고 지키는 것에 특화된 탱커여서 시온의 진입을 받아치며 격퇴하는 것에 전혀 어려움이 없다. 궁극기를 쓰는 도중의 시온은 피하기도 조이라이드도 봉인되므로 투창에 저지당하기 딱 좋은 상태가 되는 것도 떨떠름하다.",
    },
    {
      "target": "winston",
      "rating": "bad",
      "body":
        "시온은 확실한 생존기가 없어서 조이라이드가 없는 상황에서 윈스턴에게 물리면 자력으로 살아남기 힘들다. 시온은 윈스턴을 쫓아낼 강력한 폭딜이나 위협적인 CC기가 있는 것도 아니라서 맞싸움도 불리하다.",
    },
    {
      "target": "zarya",
      "rating": "bad",
      "body":
        "자리야와의 상성은 트레이서와 자리야의 상성과 비슷하다. 시온의 모든 공격은 방벽으로 방어가 가능하며, 그렇게 막아낸 공격은 고스란히 자리야의 공격력으로 돌아온다. 시온은 트레이서처럼 무적기가 있는 것도 아니다 보니 유의미한 딜교환을 보기 힘든 편.",
    },
    {
      "target": "junker-queen",
      "rating": "good",
      "body":
        "전면전으로는 정커퀸과 싸워본들 시온에게 득 될 게 없다. 톱니칼과 도륙의 사거리만 주의하면서 야금야금 적 팀의 자원을 갉아먹는 운용은 충분히 시도해볼 만 하지만, 구태여 정커퀀에게 시비를 걸면서 시온의 스킬이 빠지는 것은 거꾸로 손해에 가깝다. 퀸은 조이라이드의 투척 폭발을 가장 막아내기 어려워하는 탱커여서 각폭을 날릴 기회가 조금 더 잦다는 소소한 이점은 있다.",
    },
    {
      "target": "hazard",
      "rating": "bad",
      "body":
        "강제로 밀쳐내거나 고정시키는 판정의 기술을 둘둘 두르고 있어서 피하기나 조이라이드의 기동을 효과적으로 방해하기 때문에, 해저드의 시야에 포착되면 도주 루트를 미리 봐두는 게 좋다. 시온이 움직여야 할 경로에 가시벽이 돋아나서 길을 막아버리거나, 아예 가시 소나기로 속박당해버리면 시온은 속수무책이다.",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
      "body":
        "서브 딜러들의 천적답게 유리하지는 않은 편이다. 물몸이라서 한 방 한 방이 아프기도 하고 섬광탄을 맞은 순간 사실상 죽었다 봐도 무방하다. 캐서디가 있으면 근접하는 것 보다는 처형의 순간 폭딜로 승부를 봐야하며 캐서디는 물몸에 히트박스도 크기에 여타 섭딜들의 캐서디 상대법과 마찬가지로 먼저 교전을 걸기보다는 기회를 노리는 쪽이 좋다.",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
      "body":
        "히트스캔 무기를 가지고 있어서 다른 서브 딜러와 달리 유의미한 견제가 되고, 처형으로 파라를 녹일 수 있다. 다만 발당 딜이 낮고 거리 별 뎀감도 심하기에 어디까지나 견제가 되는 수준이고 적극적으로 킬을 내기에는 어렵다.",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
      "body":
        "젠야타는 시온의 공격에 저항할 수단이 없어 시온이 매우 유리하다. 머리가 커서 처형에 쉽게 원콤나는 건 물론이고 오토바이도 대처할 수단이 없으며 중거리에서 깔짝대는 시온에게 구슬 맞추기도 어렵고 발길질도 닿지 않는다. 단 궁 상성은 젠야타가 유리한데 광란의 살육의 애매한 광역 딜은 초월로 받아칠 수 있다.",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
      "body":
        "꽤 할만한 상대. 아무리 쌍권총의 거리 별 피해 감소가 심하다고 해도 대치는 히트스캔인 시온이 유리하고 근접전 상황에서도 회피로 거리 벌리거나 조이라이드로 역관광 먹일 수도 있다. 방울로 처형과 조이라이드 피해를 씹을 수는 있기는 한데 애초에 시온은 다른 서브 딜러들과 달리 근접해서 깽판치는게 아닌 중거리에서 간 보는 스타일이라서 벤처처럼 콤보가 막힌다고 위험해지는 경우는 잘 없다. 궁 상성도 괜찮은데 여우길 쓰면 적들이 모여드는 경우가 많다보니 살육으로 쓸어버릴 수 있다. 물론 리퍼처럼 피흡 같은 유지력이 있는 건 아니라서 아군 지원없이 냅다 들어가면 오히려 여우길 버프받은 적들에게 썰릴 수 있으니 주의해야 한다.",
    },
  ],
}

export const synergyOverrides: Record<string, SynergyEntry[]> = {
  "shion": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
      "body":
        "시온에게 공버프는 매우 반갑지만 궁합이 좋지는 못하다. 시온은 오토바이, 궁극기로 적에게 치고 빠지며 요리조리 움직이는데 메르시가 잘못하면 혼자 남겨져 끔살당하기 때문에 썩 좋지않다.",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
      "body":
        "광란의 살육과 나노 강화제와의 궁합이 그야말로 미쳤다. 시온의 진입을 CC기로 저지하지 못하면 비돌격군은 시온의 돌진 한 번에 전부 쓸려나간다.",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
      "body":
        "높은 곳을 제외한 포지셔닝은 시온 본인이 잘 가므로 딱히 기술 간 시너지가 없다. 그나마 운영 상 자주 겹칠 일이 잦은 게 위안점.",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
}
