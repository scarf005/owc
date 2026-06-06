export type Role = "tank" | "damage" | "support"

export type Rating = "veryBad" | "bad" | "neutral" | "good" | "veryGood"

export type Hero = {
  id: string
  name: string
  role: Role
  avatar: string
  page: string
}

export type Matchup = {
  target: string
  rating: Rating
  note?: string
}

export const heroes: Hero[] = [
  {
    "id": "d-va",
    "name": "D.Va",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/hcHcenc9IqmSGIc-aMDvm2uo8JjxCooA_LuaGy--0YLiXUomTybEHD-yMsMDomFhIEK0ZK8_el9X5BfOhU9Zu6xP3zGQdmln7vDqqnGtN0AB6O98GTrzboS_dG4w2Sim78qhQdmnl3TF-OqiWGKl5w.webp",
    "page": "https://namu.wiki/w/D.Va",
  },
  {
    "id": "doomfist",
    "name": "둠피스트",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/VXXpq7iT5-TzBSkwQp_vIDFSQMVKbHLlWdrWExc6FOQsW3rtZKV2WHP-sxR07sknD3sHeHPWTIDhRE-pycKbp9pNqlmKUNzMSI13VO1NzQZoskl1_BXpJ5E0gQwe6lltUorOiUoiNRaaf2hD_Ov3EQ.webp",
    "page": "https://namu.wiki/w/%EB%91%A0%ED%94%BC%EC%8A%A4%ED%8A%B8",
  },
  {
    "id": "wrecking-ball",
    "name": "레킹볼",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/CclTX6UHldRAsMi_vb-zn7qQEBjEitTZY02h2oPf04iWE5-WoPuRSMONZ9pTnv3x7wq16b4qNj6Fa71jFQehj-24DXSDCqLNHfMA1aJOO7RKcoTcbaMjPMTJpgCdCe8F82cd_AyVgePLeeSkEmFymw.webp",
    "page":
      "https://namu.wiki/w/%EB%A0%88%ED%82%B9%EB%B3%BC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "winston",
    "name": "윈스턴",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/6v_gfGaBZ8LENdiPZyla3zpoHt1CTBCedgIDYxWZLLDTguFEj3oght-0QQJodwOa5j_o0m-oX4n0rmNLyCKSt6y7yuqL0cru9CwfbXnvlKb5zBX6APY1U0pdJT6UTWToAvIt_8JqA8eFqgx73kI8wA.webp",
    "page":
      "https://namu.wiki/w/%EC%9C%88%EC%8A%A4%ED%84%B4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "hazard",
    "name": "해저드",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/mLnGCDFH66F7tzK9ilsGi39HApWFZjIRNLFTjlN5lA1hfv6LiY8H7j2wyHnaGDnuw37RO5EEyIxI75G2SC7iHJVQ8K1fFZ6M4UFMy3b0sUSKL8YvZhBcddOx831hM79Fr-bmDDf2XPo1cAPnifIQbA.webp",
    "page": "https://namu.wiki/w/%ED%95%B4%EC%A0%80%EB%93%9C",
  },
  {
    "id": "roadhog",
    "name": "로드호그",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/Bu1JyNwx71m5f02pQX8B-2as8W2ZUd2Zj93qALH4yztjR2FGKNghD-PA4vJprpQb6pqxocw-HTWdm4txqI0OBoWuE84Iy_xx9tfKGuJ2S-tURI8ZgOa8WNgi3gYotKJdo0a2IpzmblCaoV_nOQJ7xw.webp",
    "page": "https://namu.wiki/w/%EB%A1%9C%EB%93%9C%ED%98%B8%EA%B7%B8",
  },
  {
    "id": "mauga",
    "name": "마우가",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/m8jypIKK2OILK_w8eqSOyMQ4sAAwQ3TfBTmCt5uUm-Ix9GA9jpXzeZVLMSJqLBJaAI-4VT5PzgA1snJg3YGxuiy0m215r3E89zXFtcjUA6ap9yOxrWEhesvBS9yfIBp5VhV37xya7MWW7ou4gDpPxg.webp",
    "page": "https://namu.wiki/w/%EB%A7%88%EC%9A%B0%EA%B0%80",
  },
  {
    "id": "orisa",
    "name": "오리사",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/MscaHtj-YmM4rPJFivOWhBr1xPzNaDPpTlWaoTNlbWs7av_wjMkdBbgHlnu1Jkx1GefIZ1AM2tLDILfUAwjVoPdFYtd_bOlVJ1qW7IWUVjJPbDSqUBk9afvO9VV4YnTJaKZU81RdxXPQdLqIl2cICQ.webp",
    "page": "https://namu.wiki/w/%EC%98%A4%EB%A6%AC%EC%82%AC",
  },
  {
    "id": "zarya",
    "name": "자리야",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/iGIf7KVBAlNhJi1RF7GKhRIL8kvo6EhA4oMyzWYupoWIj8_3uL21Y2ULf4t-2lhSfA_bfz6FWmUA9cHte8U7-KJV8QQeDi-fMRUsyTAZQiNxkkOBRBP1eVREZnd75POPAWJq90OHuZuSe6nAkG9HrA.webp",
    "page": "https://namu.wiki/w/%EC%9E%90%EB%A6%AC%EC%95%BC",
  },
  {
    "id": "domina",
    "name": "도미나",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/7JuHLhvunxwxGdUnHJ4bU9hTNtpqyo7oxv8GiwXd4uptS9Ta8GcxXhOfEqyPgS3mqCmhP8lZkaQ50lcm1MGNqyQs0K7KYMZ8EQHmOCoSamBhtjcmamHYqczuIGjycsD_-GuUZOv1xN5bZd9M_QUQCg.webp",
    "page": "https://namu.wiki/w/%EB%8F%84%EB%AF%B8%EB%82%98",
  },
  {
    "id": "ramattra",
    "name": "라마트라",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/XYrsj8kpLnWT0gnhbO9Lzunmt7UpUZ5sP2mbcF8DMRUFr5Eikm9Cmjna0xe-zif4ZSK-A9-qy8WkIF8VB_iIxaBQrJT76RXeocVfPxclfcYD8D8fvFnEL0iQoU1fasfIE-GQf9ZjhAE5ZX74ZasBLg.webp",
    "page": "https://namu.wiki/w/%EB%9D%BC%EB%A7%88%ED%8A%B8%EB%9D%BC",
  },
  {
    "id": "reinhardt",
    "name": "라인하르트",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/M0GZRvSelr3BAOwgDkCO1WNpjH2Gf5hQEuDPnt8u1xA41nN_Hc41TaAVrNg8S-92p1U-QpDYUPRH_YTPO6CD3s0MIARRypTFtZbIX78fSx6_JAE7Zf_oUK3zPCYVd5k1fR_79jn4X7q3giADaWH0-w.webp",
    "page":
      "https://namu.wiki/w/%EB%9D%BC%EC%9D%B8%ED%95%98%EB%A5%B4%ED%8A%B8(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "sigma",
    "name": "시그마",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/ueD1GK8sdSU5czUG3G0JImWrzp3zIqDbi3gA7BGBet7loP3AJZdI_z5nERmgDcPt2hHWYe2keERXah_xy_WJID4c50UGYzSirggbHluvu79C_UdUN4oZtgKpl6Yxj6g82AFLCXnAvTYNNuIvya2nTw.webp",
    "page":
      "https://namu.wiki/w/%EC%8B%9C%EA%B7%B8%EB%A7%88(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "junker-queen",
    "name": "정커퀸",
    "role": "tank",
    "avatar":
      "https://i.namu.wiki/i/1H-dyNQ4MomDY56rTnchnQGicIk9BoMSbk68kPNyUkXZRboEe2yNfd9G19Xi28pjMOmZE8_zQ0U6QTzdf_6lnBUDVIwhUkPEto6na74RdpGNBe5k_V2jT8FVvAkyiC24tnNL6Wrb2OOGw403rVbL3Q.webp",
    "page": "https://namu.wiki/w/%EC%A0%95%EC%BB%A4%ED%80%B8",
  },
  {
    "id": "mei",
    "name": "메이",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/Z8t9dAT1Z93Z32J8sHgxQKZg7Jqog4AdGfNROgRYJQ0_dJe--YW3zFYzHyttg8urH8B9Cljwb5FuupxWTqz1VKyYd-uFF1anfT6_yamKbRHhUEskSPRznZd10XyO_75HGFKNx45JqIY0yUikige_ZQ.webp",
    "page":
      "https://namu.wiki/w/%EB%A9%94%EC%9D%B4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "bastion",
    "name": "바스티온",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/3WgUtMOcbeaRFcrVBiPZSTg0jeBiULqlVbl8cJkGgxduSsEvzEgQL3V2FdJsixXnP-hKJLe-yKA9Mj8doV9QYn89leiJJiJwcWisIrMr6EmcSUwpizr5vIAVK6SFQKWxC0xZJgQxzgpN9EgJy4ey6w.webp",
    "page": "https://namu.wiki/w/%EB%B0%94%EC%8A%A4%ED%8B%B0%EC%98%A8",
  },
  {
    "id": "soldier-76",
    "name": "솔저: 76",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/-4R5JasxMIyO8W0wnKKOHx-TomvB9wWQo0bZ6iJI2ezGmQi59Y5ti5s1mQuaRbf40DiN1h0oitJSJsUIC3aOEU-C7eULZsofylx19QUl6BErXVk_6bcDRt79Pk8in8DuMOaOiTuQCA6Gxjf3nYEbuQ.webp",
    "page": "https://namu.wiki/w/%EC%86%94%EC%A0%80:%2076",
  },
  {
    "id": "symmetra",
    "name": "시메트라",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/E19xPJXpgWur-E79xY6FQ0Z28aa_xT_fMsJFnIaqGTsKUV6wXmGqzfnRHDtpQS5Py2zSprZpITHhLsmZxbPkfXLhqbv3G9cotT9B50RFHUKTgQnjGY29EfHK7qSzKtCCcayl2J0XjqYP3detyIx2eQ.webp",
    "page": "https://namu.wiki/w/%EC%8B%9C%EB%A9%94%ED%8A%B8%EB%9D%BC",
  },
  {
    "id": "emre",
    "name": "엠레",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/rrYqy5GKy1K7W9Gj33GTJuPVmrck1HWfwI105_4m-g-pqpXkGGjoHBXb8JezkHhzJ_divIe2rK4dxeXyf6kIqnpZIhhLCSGhDxJQJZxS-3pePxpsn9ALTU15G3v2LVQ4_HI-wAJTq-UXU3LXufSOdA.webp",
    "page":
      "https://namu.wiki/w/%EC%97%A0%EB%A0%88(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "junkrat",
    "name": "정크랫",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/z9h4R6IsTfYbpggTifVEHlP6vR2aX_BxDzhKzKrtx-UsniT8soLLGbMiYcnzP2Pujwybg3-aAVEvA8Twz42aYl2eXPykh7AduZiH9OkVkTMdgxkda3Ufpm0wRUNhVh74x7eSaedaf3GtiqI9N5R16w.webp",
    "page": "https://namu.wiki/w/%EC%A0%95%ED%81%AC%EB%9E%AB",
  },
  {
    "id": "torbjorn",
    "name": "토르비욘",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/RXry6SIvaGEE-DD3SE6OVbVQ5e26JsBDjJ3rm7AQtzfNyBa2nZdE6yNf_JvcLWvgQxKN-wL1iUbnLR9ikruWVguQcPGynkl69qdwUi77Kjqk9LOMjsxGzD7YyD4XkGwN1R2UfxhX5yqVETgDv2TxHg.webp",
    "page": "https://namu.wiki/w/%ED%86%A0%EB%A5%B4%EB%B9%84%EC%9A%98",
  },
  {
    "id": "sombra",
    "name": "솜브라",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/kBU9T7UEz1VvQIEZTmQ2frD73LHxvcWJhwHwl9ELnPbFEhCSXLwTAo0oHSbVu7y2G_jBdTIzcN_9T_TABVB4gtXS2YSRcWBtp7BU6j64vj-4zxI0BQicDHDQxG7m7xt3_fHjfOuUnrjPknjU--eAQA.webp",
    "page": "https://namu.wiki/w/%EC%86%9C%EB%B8%8C%EB%9D%BC",
  },
  {
    "id": "sierra",
    "name": "시에라",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/r-ZHy0Y81A13vIsV7KbjdSIW1R-C-ZD67CsqkuuSsngdM8m1GMAo6f77NOrFI_6heOCibUWAQOJx2Fy7_YHI_ktyJUGccP3uHuyQCdUN7aou1mDjSty15pw1ykNAxyyJwNHrdwXU0D-rAaJN95j83Q.webp",
    "page":
      "https://namu.wiki/w/%EC%8B%9C%EC%97%90%EB%9D%BC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "echo",
    "name": "에코",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/UdKo2aCWHBMUgzyp0sf8rqoOr7zSCym6lmuHj_h0ctSpbSXowq_Hggb0gf_pM1Od-mxPGOK5ukwM-DQhPkHTk5oGUucubZKSnTZmAiDQgAeCcnWtMnaH8RCgdwizO4SCOfIVEoiPW2Iv7LGzQtpahA.webp",
    "page":
      "https://namu.wiki/w/%EC%97%90%EC%BD%94(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "pharah",
    "name": "파라",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/zNXYCXy5BEHx4funa7G1cH0YaxOi7GzrtTvAq1X4AXM04JeEnw8QVN-AbMp7Xmk3kuBByvGSwDCg1KVPbIAD0NnOVmuhLl2Dmtg4OJFkt7dsbNCtVKC9RaDOQ5M3-lf3V6cdF7E5OcC_jCI6gVTUVg.webp",
    "page":
      "https://namu.wiki/w/%ED%8C%8C%EB%9D%BC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "freja",
    "name": "프레야",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/mi1FWYyxowsHocXPKN67Sa_ky1PxMFqCL3krqqdshC68krpOwfKV7QkwoZ26RYWkmEuyrS_d69XUAEIXa6FjghRWj6XOEB5IMJtSCFooawNTWyzIM8FhRkCuAcwUj8n9EtXn8DXNaaEGX0bP_Ob8sQ.webp",
    "page": "https://namu.wiki/w/%ED%94%84%EB%A0%88%EC%95%BC",
  },
  {
    "id": "genji",
    "name": "겐지",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/UeeeyTBmYAiPKtUd029Lciy7BBbRNmE1RbulfrK-GbucnbQ7YVgd5FeVFMQwcBmjnxuWt2GHcY541sj4sDTDSVRlEfT2nWTyWIoR2umEhJ7Sy-G8tJAmOjkSJBhrVJXo3vVqyAZrfo4R4hmk_VADvQ.webp",
    "page":
      "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "reaper",
    "name": "리퍼",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/uSMvSMmwyyFAX_NXJ3NavfkkH4eRd8g0w1-MGrWXDVbpvOo2GMulf6WXZyXoH4AplX3DubmpNMmKToxINIaJ-KWw88NhFYRbtMYtxXlcQF3qRRxXgWyvp73rGF0_2Gg8M1O3bfq2j7oWyf-SIXr1Hg.webp",
    "page":
      "https://namu.wiki/w/%EB%A6%AC%ED%8D%BC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "vendetta",
    "name": "벤데타",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/3hMyi563yrRGysH2ikGDyrJs6kqnbt8UacQqGkTubStxV3gJ3FLY2xo5_92JtlzVfvD0HG6chbdjyWzvp2PXgBUNAfnFCoz1Gv1mv59SflMMSDXWA5JXh1j__NwO4hnoX0Hwzno16LNzcQBIBKwB7w.webp",
    "page":
      "https://namu.wiki/w/%EB%B2%A4%EB%8D%B0%ED%83%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "venture",
    "name": "벤처",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/130C_ARghsLt5UxJaIOpTZ5y74E61IgF9L7DjTIdkq_V090ehTj2lLfKWq2f-g1vfXTOJUVed0OrOBdBcRdN1UfHUYQe2X6MbUINB46koncF5-Hvhewyrhg6cvyX-h4DHOGX0KdfoZdlARRLw5K0rQ.webp",
    "page":
      "https://namu.wiki/w/%EB%B2%A4%EC%B2%98(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "anran",
    "name": "안란",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/wl38cXJMFfaDg8N7QtXlAlP7z-g_BhRevW57RtF9jtEROCQEdSutTa2ghSzIAgwHYmUViwoyZZxtuzm6_fSRtPqJEn0drFFkjBGrAThuChYpoUJIxU3weqRuYLuwyQLJnF2psaejN3Xobuqdtl_Spg.webp",
    "page": "https://namu.wiki/w/%EC%95%88%EB%9E%80",
  },
  {
    "id": "tracer",
    "name": "트레이서",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/qsIOwFIwnNCts-ehZIro4BSFQMaKZh8gz-zRCvue8tKaqwlfeX4erMRsbQMFqJN5LS_tPoE8mHQvnLICqEbNg69Qecs6cans0I9KzTaCCa9sQlnentBoN7wJMRubHqAWNFaCfqdgEOMARzhlHlaE1Q.webp",
    "page":
      "https://namu.wiki/w/%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%84%9C(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "sojourn",
    "name": "소전",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/L7afFhzX0K79g_PPBnZ9bsXY-2idckJk0kqSobtqURMefFvt9-cOl3CTcE07nr70kFK-iVLInPxYPtwNUD4fT4BJlPR_uljSV509c4PJ8iktJWw9dK2DWNTeUxPaJPjkPt6C44tXYgsSdqBa3_3dow.webp",
    "page":
      "https://namu.wiki/w/%EC%86%8C%EC%A0%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "ashe",
    "name": "애쉬",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/jV1rA3SzPacJSJcmzCQbfMIPB8hbR6ltyZx34og2DkfBL__zKF0jN4SZTI1vZXDiGHk-0O-fjBLSseGD1lHrXKhXxpjaPsQstMMcYxCTFi_pYnMr9s4n1jEM1Ch-H2hQqFzRF52TcL-R6rFeO8CKaw.webp",
    "page":
      "https://namu.wiki/w/%EC%95%A0%EC%89%AC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "widowmaker",
    "name": "위도우메이커",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/GEJqaCRzhJTQ0f26gSLGVOfuoFzIAt9YFh-ou-M271dQGlwTi5qPJ5EZnu2uMPFBpuzi-4ulLdhPvoAhTsQ2StlrYfDpz_5MQxOAHnoL5-eRFNCOvhgkWGN6ZKdfzHcm8vzWUHG8xYeVl9DcKUBTRg.webp",
    "page":
      "https://namu.wiki/w/%EC%9C%84%EB%8F%84%EC%9A%B0%EB%A9%94%EC%9D%B4%EC%BB%A4",
  },
  {
    "id": "cassidy",
    "name": "캐서디",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/KhnQ7QpNdES0xEXlKITQhJC9DSIeXD0uP0rFPtbsnvKxKGOp-9Js6ikDnYsV9SKwKyLmNIOuptBEq-3p3wFnLTu0gU_fNBVce7Yu7uJ4fWi29It7f2ZAozR6-XyZ9KqiIzS73KdyNaD4vZAK3NtdHA.webp",
    "page": "https://namu.wiki/w/%EC%BA%90%EC%84%9C%EB%94%94",
  },
  {
    "id": "hanzo",
    "name": "한조",
    "role": "damage",
    "avatar":
      "https://i.namu.wiki/i/5NWlcLsVstpYC9ipog3GP_J5P-hOnkJq0fa4GYi-Lh5eW_NQjSQ8ow2MdLVvZB2Dr85FHgv_cnShwvH4OJedWc7skqzB0HP1iCiWu8K_DImcrvhCjPihVC00KxbZrx6UBWmFHo5ilx4oilwwtgfDMg.webp",
    "page":
      "https://namu.wiki/w/%ED%95%9C%EC%A1%B0(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "lucio",
    "name": "루시우",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/HJTEAfEVmUFuAPwD_08F6pOqVioykctQ3-AVoR_8UgyOsMOxleOmhBW3uZ8uoSW60MvV-ZTs59ObQWrJhjCoEg3YysmGv_nYQudlDJ-Q_WdX_4kLO-KfzJdFEQBZi0uV691zu_stGcd4ATxHp4GODw.webp",
    "page":
      "https://namu.wiki/w/%EB%A3%A8%EC%8B%9C%EC%9A%B0(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "baptiste",
    "name": "바티스트",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/BnGwA-_q6dymP-HhjqkJnRQQn0q6wreRBkOMf6j1KIG0VoYHDS_hLHTcbUtZfJ9xKloeJ7dUkWURlGz96qlhIyW8NSaBkPVhWQ8pERpRaEsIxvxFDkexzA0TeqJoBYvtHeT2r9BvGR57nk_wEyh2Zg.webp",
    "page":
      "https://namu.wiki/w/%EB%B0%94%ED%8B%B0%EC%8A%A4%ED%8A%B8(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "ana",
    "name": "아나",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/AKKBjMuempA9nwdeYyNikm0Gq4FDp-Vf4vuH_mcPX7KLSmmrLHvxSZQ9UN-X9S-mLEZ8x8c0_xRAOCQ_gjUAefwTi-j-QKrA7LH2q_o9b_sotYtHEoBIIyG8I6diXLAfvM97MqREVaa519NqXZZYvQ.webp",
    "page":
      "https://namu.wiki/w/%EC%95%84%EB%82%98(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "jetpack-cat",
    "name": "제트팩 캣",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/j298S16Boi4lsG7yvQDoVrZ1oQIJSQD-bi-mvgnVktMswc6OMUbGaL0WXQXA9suwA-mNm2C07kPRMERCNL4uT-X8G3bqHNqDpyq6b6W8Kb8AiL9RHRhZEotNc04XaqISwaeZjACKYJYqvN7bNHM3fQ.webp",
    "page": "https://namu.wiki/w/%EC%A0%9C%ED%8A%B8%ED%8C%A9%20%EC%BA%A3",
  },
  {
    "id": "zenyatta",
    "name": "젠야타",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/2bJ9h6KHFTUEFyDzGm1iO16SMEd2emdJQOsi_G_FMBBCSZX1GA9IWKoo67Ioc-050zNXCRnzc1hQnRiE8Q3ag1XfFI-aqNJR5I7hdKnQpXfLnKqgM1UNsVZIWx7G-xeT4udrt0R02twAJ0d9Br0tBg.webp",
    "page": "https://namu.wiki/w/%EC%A0%A0%EC%95%BC%ED%83%80",
  },
  {
    "id": "lifeweaver",
    "name": "라이프위버",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/IbSXsg_egswgxNkAQfFwASq3_D7T5EC7WTEabGIqV9e3RFDckVT_pcjwYfwyxg5RNyaEDPBgENS3W096CwlAAaOcBW1NQkhZUZcYRHbHD6d3iafnNkoOGihbgpLRNARLwW2pWon_K_vLzEx32a3mfg.webp",
    "page": "https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%ED%94%84%EC%9C%84%EB%B2%84",
  },
  {
    "id": "mercy",
    "name": "메르시",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/QFYJ37iBX_AdSVFiX9ByVDv_c5Lskhc6ZOxQW0srAjXmT0Avzc3x4zas_KqKbu30F9_wPO3zsDkLg-3hDJUlzSlJ_4ky2hopH7Cru0Co703GE9sS369eXtWeeCtF8pmhTg3AchiT3vbv711xcgb04A.webp",
    "page": "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%8B%9C",
  },
  {
    "id": "moira",
    "name": "모이라",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/bh2kl29PBb9sFQ1QeZBEc63vrG5UT3UzunUyLhpfDybjjob0KbF9WGCd2F_wCtHCQtdO0e0XTGmEAMD0k5IIDn1WGMQEtXNIcnanoVSyVQyTtXTxcUuZJEGYcOaAgakjF9Fm199C1Se5A2u84nDqOg.webp",
    "page":
      "https://namu.wiki/w/%EB%AA%A8%EC%9D%B4%EB%9D%BC(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "kiriko",
    "name": "키리코",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/HBxEg_j3BriNlRePnDAVpBOcONiV29aaKt3OsWDmdUkCjN_OiNOYMFyaJUjL6aWoQiRnU4j1hLpXeyua5rh63ts6r4DOsUTdEBvKP7causuUD4XHzpmau4tBBlF6by5CqYYn8QHIqCZQI7vrpVudAQ.webp",
    "page":
      "https://namu.wiki/w/%ED%82%A4%EB%A6%AC%EC%BD%94(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "mizuki",
    "name": "미즈키",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/T4VGzbcN_HfOd-kCGimJZetNYtp5Ink9P_Qdo0w5CdWc3jmaEH801b_Xa_0cjS43CC_1d2zw2968IRlf2VlNNlmq6M6uGCFfmwqcY9xkgbmRuBiAJiD4jtABthBwkC1aW5Pl-Uel8MnaHnUgn3XEQw.webp",
    "page":
      "https://namu.wiki/w/%EB%AF%B8%EC%A6%88%ED%82%A4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
  {
    "id": "brigitte",
    "name": "브리기테",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/7Xey6Iz8AbXMEn_nGrxIblwU5u1yenLkmFMF5YejtdKXzAm5gEouo9ZcGgHlpLptC7fzksAK1K_KldIoBJbvg4QasIH48UbBRC9xAdB2XTI9O51Y8PC_BueF1pt_h9ZxMxyj6PBlabwRFaZDrmiKeQ.webp",
    "page": "https://namu.wiki/w/%EB%B8%8C%EB%A6%AC%EA%B8%B0%ED%85%8C",
  },
  {
    "id": "wuyang",
    "name": "우양",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/d-qV52ryehY_dvoHMl_rc-W5l9d1jZAdHE2v00-KjCVQgwYyMwnc3EkFtD4-UK8A-hbcCanWuOCbhmEMC-KkyzK153uN6p15l7XBqvUbGWiRNP9kxwcIfNUe4oWiSIKY0yg8M1bC5uO6OedjoS9hTg.webp",
    "page": "https://namu.wiki/w/%EC%9A%B0%EC%96%91",
  },
  {
    "id": "illari",
    "name": "일리아리",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/8n90BPXFJNNHRoSTmOWTV7blkpdL-d6ex7KGESHFzOsm1iY_exUogEIDE6_EYz06_WI66F5ruLlo0h1fNb3V9Wf_QrtSQMz_-FqfURRAhMyoYXIGKOTh1F5orqfc0HRyru4dmNvCPR6goxP_QYpVFA.webp",
    "page": "https://namu.wiki/w/%EC%9D%BC%EB%A6%AC%EC%95%84%EB%A6%AC",
  },
  {
    "id": "juno",
    "name": "주노",
    "role": "support",
    "avatar":
      "https://i.namu.wiki/i/dCij6ywOiNwviw3bIh-Ckp99__1Dqqmhjhrl5WEuoP535Jce5nEum1wcw0jkq9OcLA931K_HcSx7paTVBwbXE8JZN4lf7VrVlJP_Wpmgprd3cK4ovTzmqvgzeZM441DSWfI0U6ugqCacCS-DX4H8Nw.webp",
    "page":
      "https://namu.wiki/w/%EC%A3%BC%EB%85%B8(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
  },
]

export const matchups: Record<string, Matchup[]> = {
  "d-va": [
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "veryBad",
    },
    {
      "target": "venture",
      "rating": "veryBad",
    },
    {
      "target": "sojourn",
      "rating": "good",
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
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "veryGood",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "veryGood",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "good",
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
      "rating": "veryGood",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryGood",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "doomfist": [
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "veryBad",
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
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "wrecking-ball": [
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "veryGood",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "winston": [
    {
      "target": "d-va",
      "rating": "bad",
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
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "hazard": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "veryGood",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "roadhog": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryGood",
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
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryGood",
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
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
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
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "mauga": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
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
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "veryBad",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
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
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "orisa": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
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
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "zarya": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "domina": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryBad",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "veryBad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
  ],
  "ramattra": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "reinhardt": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
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
  "sigma": [
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
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
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "junker-queen": [
    {
      "target": "roadhog",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
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
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "mei": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "veryBad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "bastion": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryBad",
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
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
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
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "soldier-76": [
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "veryBad",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
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
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryGood",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "symmetra": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "veryBad",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryBad",
    },
    {
      "target": "venture",
      "rating": "veryBad",
    },
    {
      "target": "sojourn",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "emre": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
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
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryGood",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "junkrat": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "torbjorn": [
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "sombra": [
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryGood",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "veryBad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "sierra": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "echo": [
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "pharah": [
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "sierra",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "veryBad",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "freja": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "anran",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "veryGood",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "genji": [
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "veryBad",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
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
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "veryBad",
    },
    {
      "target": "ashe",
      "rating": "veryGood",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "good",
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
      "rating": "veryGood",
    },
    {
      "target": "moira",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "reaper": [
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
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
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "vendetta": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "veryGood",
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
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryGood",
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
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "venture": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
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
      "rating": "veryGood",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "anran": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
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
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "veryBad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "veryGood",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "veryGood",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "tracer": [
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "anran",
      "rating": "veryBad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryGood",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
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
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "sojourn": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "ashe": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "bad",
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
      "rating": "good",
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
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "widowmaker": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
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
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "cassidy": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryBad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "veryBad",
    },
    {
      "target": "anran",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "veryGood",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "veryGood",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "hanzo": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
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
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
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
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "lucio": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
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
  "baptiste": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "ana": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
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
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryBad",
    },
  ],
  "jetpack-cat": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "sierra",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "veryBad",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "veryBad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "zenyatta": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryGood",
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
  "lifeweaver": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
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
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lucio",
      "rating": "bad",
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
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
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
  "mercy": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
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
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
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
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "moira": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
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
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "kiriko": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
  ],
  "mizuki": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "brigitte": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryBad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "veryBad",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "wuyang": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "illari": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
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
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "juno": [
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "bad",
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
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryGood",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
}
