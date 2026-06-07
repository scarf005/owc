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
      "target": "domina",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
      "note":
        "특히 마이크로 미사일은 캔슬 불가한 공격이라서 파워 블락 충전을 괜히 떠먹여주게 된다. 최대한 다른 곳으로 고개를 돌리는 게 최선이다.",
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
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
      "note":
        "이 때문에 윈스턴을 빠르게 처치하지 못하면 부스터로 밀치는 등 소극적인 대응 밖에 할 수 없으며 이 마저도 쿨타임이라면 아군이 죽는 것을 지켜볼 수밖에 없다. 특히 나노 강화제를 받은 윈스턴은 더더욱.",
    },
    {
      "target": "zarya",
      "rating": "bad",
      "note":
        "특히 마이크로 미사일은 중간에 캔슬도 안되는지라 에너지를 상납당하기 딱좋다.\n오히려 자리야에게 방벽이 2개 있었다면 에너지 80을 거저 채울 수 있다. 자폭은 무조건 방벽이 다 빠진 걸 확인하고 쓸 것.\n자리야 방벽은 225 이상의 딜을 맞으면 깨진다.",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
      "note":
        "일방적인 딜교환이라고 하기에는 날카로운 저항은 디바의 떡장갑에 큰 타격을 못주며, 융합포는 무한 탄창이고 날카로운 저항은 최대 3초 지속이니 실질적으로 이런 상황이 나오면 해저드가 더 손해본다.",
    },
    {
      "target": "genji",
      "rating": "veryBad",
      "note":
        "겐지의 실력이 좋다면 고에너지 자리야나 시메트라, 벤데타보다 더한 카운터로 D.Va에게 불편한 상대다. 튕겨내기 중간 해제 기능도 한몫하지만, 그나마 자리야나 시메트라는 자가 회복과 지속 기동성이라도 빈약하지 겐지는 디바가 유일하게 먹을 수 있는 평타 의존도도 낮은데, 그 평타를 먹어주지 않으면 불합리한 포지션에서 들어오는 견제를 끊임없이 맞다가 뒷라인이 터지기 때문에 메트릭스 게이지 관리부터 박살이 난다. 거기에 더해 자가 회복 특전에 지속&순간 기동성까지 고성능으로 발휘한다.\n린드홀름 폭발물 튕겨내기는 2방이지만 엠레궁 튕겨내기는 1방이며, 겐지가 나노 강화제를 받은 상태라면 둘 다 1방이다.",
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
      "note":
        "강습 모드는 6초고 방어 매트릭스는 3초니 전탄을 받아낼 수는 없다. 벽과 부스터를 이용해서 피해를 줄여야 된다.",
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
      "note":
        "특히 공격력이 최대 1000을 자랑하는 자폭조차 광자 방벽을 4분의 1밖에 못깎는다.",
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
      "note":
        "이건 상대 정크랫 실력이 보통일 때 얘기이고, 고수 정크랫은 메카가 터지는 순간 송하나의 탈출방향을 예측해서 덫 깔아놓는다.\n과거에는 타이어에 한 방이었지만 지금은 메카의 체력이 늘어나서 체력 600이하일 경우에나 한 방이다.",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
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
      "note":
        "방어도 200 탓에 5발 외 한 발을 더 맞춰야 한다.\n포화의 지속 시간은 2.5초, 매트릭스의 지속 시간은 3초로 매트릭스 게이지가 꽉 찬 상태가 아니어도 거의 다 먹을 수 있다.\n파르시 조합은 의외로 자폭에 취약하다. 파라의 제트 추진기는 평면형 기동성이 낮아서 자폭 범위에서 벗어나기 쉽지 않기에 급속 추진이 빠졌을 때 자폭이 날아오면 파라는 무조건 죽으며, 운 좋으면 메르시까지 덩달아 죽여서 한타를 통째로 가져올 수도 있다.",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
      "note":
        "설령 킬교환이 난다고 해도 5대5라면 탱커와 힐러의 교환은 탱커팀의 압도적 손해고 6대6일 경우에는 낮아진 탱커의 스펙으로 더 많아진 화망을 뚫고 라이프위버를 물 수가 없다.",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "veryGood",
      "note":
        "저격수 포지션에 속하는 지원가인 아나를 제외하면 모두 수비 영웅이다.",
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
      "target": "baptiste",
      "rating": "bad",
      "note":
        "하지만 대부분의 바티스트는 자폭 터지기 직전에 딱 불사 장치 던져서 높은 확률로 막히니 자폭쓰기 전에 불사 장치부터 소비시키자.",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
      "note":
        "브리기테의 수리팩, 격려 모두 차단이 불가능하고 도리깨는 근접 공격 판정이라서 평타, 방밀도 차단할 수 없다. 그나마 브리기테에게 날아오는 회복 투사체는 방해할 수 있지만 기본적으로 괴물같이 단단한 브리기테라서 매트릭스로 힐을 차단해봤자 스킬 교환으로 이득을 보기는 어렵다.",
    },
    {
      "target": "ana",
      "rating": "veryGood",
      "note": "B.O.B, 용검 상태의 겐지 등.",
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
      "note":
        "사실 펄사 어뢰가 주노의 핵심 스킬인데 이걸 디바가 먹어버리면 궁게이지가 늦게차고. 아군 세이브도 못한다.",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "doomfist": [
    {
      "target": "d-va",
      "rating": "neutral",
      "note":
        "디바의 마이크로 미사일은 고작 1.6초밖에 발사하지 못하며, 쿨타임도 7초로 파워 블락과 쿨타임이 같다. 또한 파워 블락의 지속시간은 2.5초로 안정적으로 마이크로 미사일 콤보를 막아낼 수 있다.\n하지만 디바의 자폭은 1000이라는 막대한 피해를 보유하고 있어서, 파워 블락의 데미지 감소율은 75%이기 때문에 250이라는 큰 피해가 들어온다. 따라서 반피 이상이 그냥 깎여버린다는 소리이며, 이 때문에 파워 블락으로 막아도 되지만 가급적이면 피하는 것이 좋다.",
    },
    {
      "target": "domina",
      "rating": "veryGood",
      "note":
        "거기에다 도미나의 방벽은 225짜리 방벽을 여러 개 늘어놓는 것이라서 4발뿐인 철권포로도 어느 정도 뚫어 줄 수 있다. 타 탱커들의 방벽에는 둠피스트가 쏘는 게 손해여서 우회하는 게 기본이지만, 도미나의 방벽은 막기 좋은 자리에 구멍이 나면 유지력이 떨어지니 아군이 쏘기좋게 구멍내주는 것도 한 방법.\n도미나의 판옵티콘은 5초, 파멸의 일격은 4초이기 때문에 판옵티콘을 피하려고 파멸의 일격을 쓰면 300의 데미지가 정통으로 꽂힌다. 그러므로 판옵티콘 타이밍에는 사리는 편이 좋다.",
    },
    {
      "target": "ramattra",
      "rating": "good",
      "note":
        "둠피스트의 공격을 막는용으로 애매한지라. 아예 둠피스트의 등뒤에 방벽을깔아서, 둠피스트에게로 오는 투사체 힐을 차단하는 용도로 더 많이 쓰인다.",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
      "note": "현재 지뢰 지속시간이 너프먹어서 강화 펀치 세 번은 힘들다.",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
      "note":
        "로드호그는 느리기는 해도 이동기나 이동 보조기가 하나씩 있는 다른 탱커와 달리 호그는 그러한 보조기 하나 없는 완전 뚜벅이중에서도 진짜 뚜벅이로, 그렇기 때문에 둠피스트가 작정하고 무시한다면 호그도 할 게 없어진다. 하지만 로드호그도 바보가 아닌 이상 둠피스트가 자신을 무시하는 걸 안다면 다른 지원가나 딜러를 노릴 것이 분명하기에 철권포로 피를 깎아서 암살 플레이를 어느 정도 저지하는 것이 핵심이다. 또한 호그는 피격판정이 넓어서 로켓 펀치도 잘맞기에, 로켓 펀치를 수시로 맞춰서 진입을 늦추는 것도 하나의 방법이다.",
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
      "target": "mei",
      "rating": "neutral",
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
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
      "note":
        "로드호그, 아나, 오리사 그 어떤 카운터보다 더욱 상대하기 힘들고 이들은 파훼법이 있지만 솜브라는 그 파훼법마저 힘들고 까다롭다.\n에임판정이 거의 자동이다 시피한 윈스턴은 솜브라가 주변에서 서성거리기만 해도 좌클릭으로 주변에 대충 쏴주면 알아서 맞기 때문에 찾기도 쉬운 편이고 라마트라나 라인하르트는 솜브라가 어차피 해킹을 한다 해도 무식하게 단단한 내구도가 존재함과 더불어 스킬비중이 그렇게 크지 않기 때문에 솜브라가 해킹한다 한들 별 효과가 없다. 또한 앞서 서술한 셋은 방벽을 이용해서 솜브라가 해킹시도를 하면 차단시킬 수 있는 건 덤.\n로드호그의 사슬 갈고리, 시그마의 강착, 오리사의 방어 강화, 자리야의 입자 방벽 등\n찾아내는 경우도 있지만 이는 솜브라의 파일럿의 실력이 떨어지는 경우가 대다수. 정말 운 좋게 찾아내더라도 위치변환기 하나에 다시 숨바꼭질을 해야 해서 복층맵에선 솜브라를 찾아도 의미가 없는 경우도 자주 생긴다.",
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
      "note":
        "둘이 궁극기가 비슷한 편이지만 거의 즉발에다 4초 동안 무적&체력 회복 옵션도 붙은 파멸의 일격이, 데미지만 좀 쎄고 그외에는 무적도 없고 리스크가 하나가득인 봉황승천보다 더 밸류는 높다고 볼 수 있다.",
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
      "note":
        "캐서디의 섬광탄, 애쉬의 충격 샷건, 이 외에도 다른 딜러들은 둠피스트에게 저항할 수 있는 생존기나 이동기 또는 CC기가 있지만 위도우는 그런 게 하나도 없다.\n그 약해빠진 메르시마저 수호천사로 도망다닐 수 있지만 위도우는 갈고리를 한번 빼면 도망칠 곳이 없다.",
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
      "note":
        "트레이서는 어지간해선 점멸을 쓰고 한탄창을 다 쓰기 전까지는 빼는 경우는 잘 없기 때문에 트레이서가 한탄창을 다 쓰는 그 찰나를 캐치하느냐에 따라서 달렸다. 보통은 재장전 타이밍에 점멸이나 시간 역행을 쓰기 때문.",
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
      "target": "d-va",
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
      "target": "winston",
      "rating": "good",
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
      "note": "대신 가까우면 로켓 맞기 쉬워진다.",
    },
    {
      "target": "sombra",
      "rating": "bad",
      "note":
        "EMP는 체력에 비례한 피해를 입히는데 적응형 보호막을 뺀 수치에서 계산한다. 보통 보호막을 쓰기 전에 두들겨 맞았을 확률이 높고 몸빵과 스킬로 버티는 레킹볼에게 EMP는 완전 쥐약이다.",
    },
    {
      "target": "symmetra",
      "rating": "bad",
      "note":
        "안부수면 감시 포탑의 감속 효과 때문에 도망도 못 간다. 그런데 역할 고정이면 다른 탱커도 없으니 레킹볼이 감시 포탑을 부수거나 위치를 알려줘서 딜러가 부숴줘야 한다.",
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
      "note":
        "위도우메이커가 저격하기는 쉬워도 구르기 상태에선 헤드 판정이 나오지 않기 때문에, 단독으로 원거리에서 입힐 수 있는 최대 피해는 120뿐이다. 적은 피해는 아니지만 물러오면서 300의 치명타 피해량을 고스란히 받는데 체력도 더 낮은 디바, 윈스턴보다는 낫다.",
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
      "target": "ana",
      "rating": "neutral",
      "note": "추가 생명력 생성은 힐이 아니라서 힐밴에 막히지 않는다.",
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
      "note":
        "처음부터 윈스턴이었다면 모를까 다른 탱커에서 윈스턴으로 바꾼 건 사실상 겐지만 마크하겠다는 의미와 다름없다.",
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
      "note":
        "풀충 우클 두 방이면 포탑은 체력이 70 밖에 안 남은 채 너덜너덜해지며 아군의 호응이 조금이라도 있다면 그대로 터진다.",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
      "note":
        "역할 고정 기준 탱커는 한 명이라서 1인궁 박고 죽어도 이득이기 때문에 이런 시도를 자주 한다. 리워크 및 특전 패치 이후로 기습적인 포화 변수는 최우선 고려사항이다.",
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
      "note":
        "순간 기동성은 해저드가 더 빠르지만, 부스터의 지속시간이 더 기므로 금방 쫓아온다.",
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
      "note":
        "미리 설치된 순동기를 타고 해저드의 진입을 피해, 되레 감시 포탑의 슬로우로 해저드가 역포커싱 당할 수 있기 때문이다. 본체는 몹시 약하지만 운용 능력이 받혀주면 고지대에서 감시 포탑과 우클릭만 던지다 아군 후방에 순간이동하며 성질을 긁는 등 얼굴보기도 힘들 수가 있는데, 원래 시메트라는 지역 장악과 탈취에 특화된 캐릭터라서 그렇다.",
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
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryBad",
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
      "rating": "bad",
      "note":
        "비슷한 근접 브루저인 둠피스트의 경우, '일반 스킬 CC기'를 즉시 충전할 수 있는 '파워 블락'이라는 두 가지 복합적 요인으로 정크랫에게 불리한 싸움이 강요되지만 해저드는 그런 요소들이 없기 때문에 정크랫이 유리한 것.",
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
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
      "note":
        "하지만 덤벼들기 -할퀴기는 브리기테의 방벽을 무시하고 피해가 들어가는지라 브리기테도 함부로 접근할 수 없다.",
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
      "note":
        "225로 브리기테의 방벽보다도 내구도가 낮으며, 자리야의 입자 방벽과 같은 수준이다. 내구도가 가장 낮은 방벽은 레킹볼의 특전으로 생기는 150의 방벽임을 고려하면 오버워치 내부에서 기본 스킬인 방벽중 가장 내구도가 낮은 셈이다.",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
      "note":
        "또한 둠피스트는 다이브 조합에 채용될 경우 젠야타&브리기테+아나로 힐러진을 조합하는 경우가 많아서 주의해야 한다.",
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
      "note":
        "특히 일리오스 같이 로드호그가 맹활약할 수 있는 낙사맵에서도 낙사포인트에 붙어있는 로드호그의 특성상 레킹볼이 역으로 낙사시키는 일이 비일비재하다.",
    },
    {
      "target": "mauga",
      "rating": "neutral",
      "note":
        "하지만 해제하면 방벽이 사라져서 아군들이 죽을 확률이 높아서 함부로 해제할 수도 없다.\n다만 다른 변수없이 1:1 상황에선 심장키고 맞딜하면 받는 피해 감소에 흡혈능력까지 있는 마우가가 이기니 주의하자.\n거점에 올만한 곳에 자리잡고 갈고리로 잡아서 낙사 지형으로 끌어당기는 짓을 반복하면 열뻗친 마우가에게 전챗으로 극찬을 받는 건 시간문제일 것이다.",
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
      "note":
        "흡혈 피해가 있기는 하지만 피해량이 낮아서 빈사 상태가 아닌 이상 크게 유효타를 줄 수 없다.\n1대1은 크게 문제될 게 없는 게 살육의 피해 자체는 그리 높지 않다. (4.5초간 총 100) 빈사 상태가 아닌 이상 4.5초 정도 버티다가 숨돌리기로 회복하면 그만이다. 물론 체력이 절반 이하인 상태에서 살육을 맞고 당황하다가 진짜로 도축당할 수 있으니 방심은 금물이다.",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
      "note":
        "그마저도 로드호그가 숨돌리기 하면 나노 없이는 무려 12번이나 베어야 되는데 용검은 기본적으로는 최대 8번만 벨 수 있다.",
    },
    {
      "target": "reaper",
      "rating": "neutral",
      "note":
        "다만, 갈고리가 없는데 근거리에서 리퍼가 나를 때리는 상황이라 해도 정신을 다잡자. 숨돌리기 없이도 썩어도 탱커인지라 딸피가 아니라면 최소 두~세 발은 버텨낸다. 침착하게 조준만 잘 하면 의외로 그냥 좌클릭 샷건으로도 리퍼를 찢는 게 가능은 하다. 다만 그렇다고 해서 고철총만 믿지 말고 평소에 에임법을 숙달한 상태에서 환경까지 가능한 만큼 이용해 엄폐해가며 상황 봐가면서 숨돌리기도 섞어 버티며 목과 윗가슴을 쏴 줄 것.\n죽음의 꽃의 총 피해량이 555다. 호그의 최대 체력이 역할 고정에서 750, 자유 모드에선 600이다.",
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
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
      "note": "125x5=625.",
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
      "note":
        "다만 루시우가 치유를 켜고 있었다면 운좋게 살아갈 가능성도 있다. 볼륨이 높여져 있다면 추가타가 확정적으로 필요하다.",
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
      "note":
        "정작 힐이 차단되는 탓에 도울 수 있는 지원가는 키리코, 바티스트, 궁을 쓴 루시우, 우양 정도이다.\n생체 수류탄을 맞힌다 한들 로드호그의 기본 체력은 750으로, 아나의 3배이기 때문에 1대1에선 의미가 없다.",
    },
    {
      "target": "wuyang",
      "rating": "good",
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
      "note":
        "초월이 무적이어도 넉백은 못 막으니 갈고리, 돼재앙으로 추락사를 내면 카운터 칠 수 있다.",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
      "note":
        "오히려 귀한 방울을 낭비시키면 이득이다. 또한 갈고리에 끌려가는 적은 구원의 손길과 다르게 방울로는 풀어 줄 수 없다.",
    },
  ],
  "mauga": [
    {
      "target": "d-va",
      "rating": "bad",
      "note":
        "이점을 역이용해 디바가 심장 턴에 매트릭스를 쓰려고 아껴둔다면, 마우가는 그냥 심장을 안 쓰고 쏴갈겨서 디바를 그 자리에서 갈아버리거나 매트릭스를 강제로 뺄 수 있다. 즉, 디바는 그냥 마우가한테 터지냐 매트릭스로 평타를 무력화 시키냐하는 죽음의 이지선다를 해야 한다. 이땐 디바보다는 디바의 아군의 역할이 더 중요하다.\n불사 장치나 구원의 손길, 나노 강화제 또는 정확한 타이밍에 쓰인 정화의 방울",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
      "note":
        "원래는 둠피스트가 강화 펀치를 채우든 말든 펀치를 맞는 건 뒷라인 딜러나 힐러지 나는 알 바 아니라는 탱장연 밈의 일환이였다. 그런데 몇몇 유저들이 댓글로 저게 마우가가 둠피 상대로 해야 할 플레이가 맞다며, 마우가가 압도적인 딜량으로 둠피를 갈아버리면 강화 펀치를 채워도 후퇴용으로 쓸 수밖에 없다는 의견을 내놓았고, 이후 탱장연에 합류하여 마우가를 써 본 유저들의 경험이 쌓이며, 둠피스트를 같이 공격해 줄 아군 팀원이 있다면 블락 상태에서도 둠피를 때리는 게 상황에 따라서는 맞는 플레이가 될 수 있다. 한 마디로 막는건 니 팔 아니냐는 식의 가불기.\n받는 피해를 줄일 수 있으나 로켓 펀치를 쓸 수 없다보니 강화되더라도 쓰지도 못하고 맞아죽어야 한다. 사실상 평타말고는 할 수 있는 게 아무것도 없어서 걸리는 순간 끝이다.\n쉬워보이지만, 프로 경기도 아니고 경쟁전 환경에서 다른 아군과 항상 함께 다니는 것은 불가능하다. 웬만하면 돌파한 번 정도에 닿을 수 있는 거리를 유지하는 것이 좋다.",
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
      "note": "다만 돼재앙의 공격력 너프로 심장 켜고 맞딜하면 마우가가 이긴다.",
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
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
      "note":
        "다르게 보자면, 자리야를 상대하는 마우가는 그 픽 자체로 아군의 집중적인 케어를 요구하게 되며, 이는 아군 힐러나 딜러의 운영에도 큰 영향을 끼친다.",
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
      "note":
        "화상과 조합했을 때의 DPS는 강하지만 겐지쪽에서 활용하기는 어렵다.",
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
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
      "note":
        "마우가 DPS의 상당 부분은 화염 지속 피해와 그로 인한 강제 치명타 피해로, 방벽 상대로는 지속 피해와 치명타가 터지지 않기 때문에 피해량이 급감하게 된다.",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
      "note":
        "쓴다해도 터지기 직전에 케이지를 해제하고 돌파로 도망가면 그만이다. 맞았다고 해도 근접에선 위력이 급감하는 우양이라 금방 일어나 갈아버리면 된다.",
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
      "rating": "bad",
      "note":
        "순보로 케이지 안에 들어오는 건 보통 자살행위에 가까우며, 좌클, 우클, E는 방벽에 막힌다.",
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
      "note": "보통 앵커 조합은 거리를 벌리는 포킹 조합에 약하다.",
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
      "note":
        "자리야 > D.Va > 윈스턴 > 자리야. 다만 상위 티어로 갈수록 이 셋은 각각의 카운터를 상대로 패싱해 버리거나 팀파이트 구도를 적극적으로 활용할 수 있어져서, 마냥 불리하지만은 않다는 의견이 주류다.",
    },
    {
      "target": "domina",
      "rating": "bad",
      "note":
        "수정 발사의 폭발은 방벽을 무시하지만 자리야의 방벽은 영웅에 직접 붙어서 내내 보호하는 별개의 판정이다. 단 도미나도 임의로 수정을 터트릴 수 있어서, 자리야 쪽에서 방벽을 살짝 늦게 써야 한다.",
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
      "note":
        "자리야의 방벽은 거의 모든 CC기를 막아내지만 하필 넉백은 못 막는다.",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
      "note":
        "던지는 갈고리를 방벽으로 튕겨내는 운용도 가능하지만 반응 속도로 막아내기에는 너무 까다로우므로, 사실상 심리전의 영역. 끌려간 아군을 보호하는 운용을 하겠다면 조준선을 호그(에게 끌려간 아군)에게 바로 가져가면 된다. 전자는 위협을 조기에 차단하지만 에너지 기대값도 낮은 방식이고, 후자는 리스크를 짊어지되 에너지를 크게 채울 수 있는 일장일단.",
    },
    {
      "target": "mauga",
      "rating": "bad",
      "note":
        "실제로 마우가는 출시 시절부터 자리야의 새로운 카운터로 주목을 받은 적이 있었다. 케이지 혈투에서 이전부터 자리야를 카운터치는 대표적인 탱커인 라인하르트와 윈스턴은 기본적으로 팀원 의존도가 높고, 자리야가 리퍼, 바스티온, 토르비욘같은 안티탱커 영웅들이랑 뭉쳐있으면 되레 역전당하는 경우도 있지만, 마우가는 자리야를 케이지 혈투로 고립시키면 자리야가 팀원들을 보조하지 못해서 자리야 본인과 아군이 모두 전선이 붕괴 당할 가능성을 높여주기 때문.",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
      "note":
        "다만 오리사의 궁극기로 기동력이 부족한 힐러가 잘릴 확률이 높기 때문에 힐러를 우선적으로 케어해 줘야 한다. 특히 아나와 같은 이동기가 부족한 힐러일수록 더욱. 잘하는 오리사는 힐러를 끌어오도록 궁극기 위치를 조정해서 사용하기 때문.",
    },
    {
      "target": "winston",
      "rating": "veryBad",
      "note":
        "구 오버워치 때 윈스턴이 압도적 열세였던 이유가 힘싸움에서도 밀리지만 무엇보다도 자리야와 조합된 영웅들이 라인하르트를 제외하고는 윈스턴의 운용마저 일방적으로 카운터쳤기 때문이다. 자리야의 가장 큰 최전성기는 뭐니 뭐니 해도 바로 3탱 3힐조합인 소위 고츠 조합일 때로 이 조합엔 자리야가 반드시 들어갔었고 돌진형 영웅 중에선 디바는 투입해도 윈스턴을 투입하는 일은 거의 없었다. 그러나 오버워치 2로 와서는 탱커가 1명으로 고정되어 그때와는 정 반대의 상황이 되어버렸으니 자리야 혼자서는 고기동성 영웅들을 잘 잡기는커녕 오히려 운영에 농락 당하는 신세가 되어버린 것이다. 자유 모드에서 예전처럼 로드호그 조합으로 하면 윈스턴은 자리야에게 여전히 열세이며 조합되는 탱커들도 라인하르트가 아닌 이상 윈스턴을 묶거나 추월이 가능한 영웅들이다.",
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
      "note":
        "정확히는 자리야의 입자 방벽의 남은 내구도보다 갈라내는 칼날의 피해량이 높으면 입자 방벽을 파괴하고 최대 피해를 준다. 이미 방벽의 내구도가 닳아 있는 상태가 아니라면 최대 충전에다가 직격 피해량인 400을 받아야 하므로 2단 충전까지는 상쇄할 수 있다.",
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
      "note":
        "생체 구슬이 일정범위내 적에게 오토에임으로 공격하는 구조인데, 방벽을 씌운 대상은 이 오토에임에 2초간 안들어가버린다. 방벽 씌운적은 못때려도 모이라 쪽에선 다른적이라도 갉아먹으니 크게 손해는 안 본다.",
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
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
      "note":
        "큰 덩치+뚜벅이인 탓에 납치를 잘 당해주기기 때문에 낙사지역에 던져주면 자리야는 그대로 죽어야 하며, 적군 진영 한복판에 낙오되면 적팀의 집중포화를 맞고 그대로 킬캠으로 사출된다.",
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
  "domina": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
      "note":
        "실질 도미나의 방벽에서 방어하기 좋은 자리는 몇 군데 없는지라, 데미지가 은근 쎈 철권포로 방벽의 가장 방어하기 좋은 자리에 철권포 세발 정도는 투자해서 뚫어놓기도 한다. 어차피 철권포는 자동장전이고, 미리 뚫어주면 적측 메인딜러의 화력낭비가 줄어든다.\n파멸의 일격이 빠진 걸 확인한 다음 궁을 맞췄다면 네 발뿐인 철권포로는 절대 판옵티콘을 못 깨기는 한다.",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
      "note": "동시 발동이라면 대지분쇄의 발동속도가 더 빠르다.",
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
      "note":
        "허나 테슬라 캐논은 방벽이나 구조물에 1.5배 데미지가 들어가는 특전이 현재 기본 패시브가 돼 버린지라 은근히 방벽을 잘깬다.",
    },
    {
      "target": "zarya",
      "rating": "good",
      "note":
        "특히 수정폭발은 느려터진 데 비해 데미지는 강해서 자리야가 에너지 벌기엔 최적의 공격이다.",
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
      "note":
        "사실 게임 내 방벽 중에 시메트라의 광자방벽 제외 나머지 방벽들은 강습모드의 무식한 딜량 앞에 몇 초면 뚫린다.",
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
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
      "note":
        "물론 딜러의 궁극기를 킬내는 용이 아닌 방벽 깨는 용으로 쓰는 경우는 거의 없지만.",
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
      "note":
        "아나의 저격총은 방어구 무시라는 사기옵션이 붙어 있으나 도미나는 방어구가 아닌 보호막 체력위주 탱커인지라 이득을 못본다.\n특히 수많은 궁을 수면총 하나로 차단시키는 걸로 악명높은 아나이지만 판업티콘은 명중만 하면 수면총도 차단한다.",
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
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
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
      "note":
        "살육의 힐밴은 힐을 많이 먹는 라마트라에게 특히 쥐약이고 방벽도 무시하고 지나간다.",
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
      "note": "둠피스트와 달리 화력을 쏟아붓는 것에 리스크도 없다.",
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
      "note":
        "시메트라의 탄창은 100에 초당 10발을 소모하기 때문에 네메시스 폼보다 무조건 오래 지속된다.",
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
      "note":
        "에코는 역전 변수를 낼 수 있는 지원가(아나나 키리코)를 복제하는 것이 가장 이득인지라 라마트라 복제는 차선책 정도이기는 하다. 하지만 복제 라마트라가 방벽과 소용돌이를 던지고 주먹질을 해대며 상대 탱커와 전세를 밀기 시작하면 순식간에 승기를 뺏길 위험이 크다.",
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
      "note":
        "다만 방벽이 1000이나 되기 때문에 방벽을 부수고 적에게 타격을 주려면 상당히 오랫동안 조준하고 있어야 하기 때문에 그전에 보통 석양을 끊는다. 웬만큼 불리하거나 저티어가 아닌 이상 석양으로 방벽을 부술만큼 오랫동안 조준하고 있는 경우는 없다.",
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
      "note":
        "파라 리메이크 후 공중에서 연료 재충전이 안 되는지라 땅에 자주 내려오게 되었는데 이때 맞출 수는 있다.",
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
      "note":
        "평타는 말할 것도 없고 화염 강타, 돌진은 둠피스트가 지진 강타를 쓰면 그만이다.",
    },
    {
      "target": "ramattra",
      "rating": "bad",
      "note":
        "1800과 2300으로, 서로 딜량이 엇비슷하다 가정하면 100초나 차이난다.",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
      "note":
        "방벽을 희생해야 해서 그렇지 방벽켜주고 화면 한바퀴돌면 제법 넓은 범위를 순식간에 빨리치울 수 있어서 탱커가 더있는 자유전이나 지뢰가 조금남았을 때 써주는 것도 나쁘지 않다. 그래도 방벽으로 치울 경우 폭발하므로 본의아닌 팀킬을 할 수 있으니 주의하도록 하자.",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
      "note":
        "아이러니하게도, 이건 라인하르트가 나왔을 때 오리사가 해야 할 일과 똑같다.",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
      "note":
        "단, 이 부분은 조심해야 할 것이, 능숙한 시그마라면 라인하르트의 궁 타이밍을 의식하며 정면이 아닌 후방에 방벽을 배치해 아군으로부터 갈라놓는 경우가 종종 보인다. 이걸 의식하지 않고 나대면 시그마만 신나게 패다가 고스란히 적 힐러 궁게이지 쌓아주고 본인이 먼저 죽는 수가 있다.\n만약 라인하르트가 정상적인 1인분을 하는데도 시그마에게 유리한 환경이 조성되었다면 심각한 운영 차이로 인해서 이미 게임이 성립되기 어려운 상태가 되었다는 뜻이다. 아군 딜러의 기량이 상대 딜러들보다 떨어져 사이드 자체가 방치되고 있거나, 아군 힐러들이 지나치게 무능해 딜러 케어가 원활히 이루어지지 않고 있다는 뜻이다. 어느 쪽이건 팀차이가 심각한 상태로, 라인하르트가 아니라 윈스턴을 들어도 이기기 어려운 상황일 가능성이 높다.",
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
      "target": "genji",
      "rating": "veryGood",
      "note":
        "자체 딜량은 낮아서 라인하르트 본인을 위협하기는 힘드나 겐지는 다양한 각도로 방벽 뒤를 노릴 수 있으므로 방벽이 있다고 안심하다가 뒷라인이 짤리기 십상이고, 아예 방벽을 무시하고 우회하여 순간적으로 지원가를 암살하고 유유히 도망가는 등 정말로 성가시다.\n이게 반피 밑으로 남은 아군 공격/지원 영웅들에게 맞으면 사망 확정이다. 가끔 상대 라인하르트와 아군 라인하르트의 화강을 동시에 쓰는 경우가 있다. 이때 적군 겐지가 아군 화강을 반사하면 상대 화강이 두 개가 동시에 들어오게 된다. 화염 강타 피해가 120이다 보니 안 피하는 경우도 많은데, 이런 경우 240짜리 화강을 맞고 끔살되는 경우가 종종 있다.\n유효 교전거리가 용검 겐지 5m, 라인하르트 4m로 거의 같다. 겐지 입장에선 표창만 쓸 때는 라인하르트에게 교전거리로 우위를 점할 수 있었는데 용검을 들면 그 이점이 사실상 사라진다.\n물론 이때도 정면을 수시로 체크하면서 다른 상대가 위협적인 공격을 하는지 지켜봐야 한다. 특히 맞라인인데 상대가 대지분쇄를 채운 것 같다면 더 경계해야 한다.",
    },
    {
      "target": "reaper",
      "rating": "bad",
      "note":
        "패시브는 딜량 30%만큼 회복, 라인하르트의 체력은 700(550)으로 약 200까지 자가 치유가 되며 힐을 받을 경우 그 이상이다.",
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
      "note":
        "불가능하진 않으니 워크샵에 들어가서 연습을 해두면 좋다. 끊어주면 영웅 확정이다.",
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
      "note":
        "시메트라 좌클릭 12m, 라인하르트 망치 5m.\n다만 시전 시간은 대지분쇄가 0.2초나 빠르기 때문에, 타이밍이 기가 막히게 떨어져야 가능하다. 따라서 사운드 플레이로 시메트라 궁이 라인하르트 궁을 막는 건 불가능하고, 눈치 싸움으로 시메트라가 먼저 방벽을 올리는 것에 성공하면 막히는 것.",
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
      "note":
        "풀차징으로 13대를 맞혀야 깨진다(120*13=1560, 라인하르트 방벽 내구도 1500). 풀차징에 약 1.5초의 시간이 걸리니. 약 20초가 걸리며 재장전까지 고려하면 더 넘게 걸린다.",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
      "note":
        "로드호그 역시 자기가 안 맞고 정크랫을 갈고리 걸고 단번에 죽이지 못하면 웬만해서 바꾸는 게 이롭고, 라마트라와 자리야는 방벽이 제한적이며, 기동성도 없고 체력도 라마트라는 500(350), 자리야는 550(400)으로 낮아서 상대 정크랫이 네메시스 방벽 그런 거 다 무시하고 이들을 포격해서 죽이는 순간 모든 게 헛수고가 되니 상대하기 어렵다. 시그마와 오리사는 각자만의 방벽이나 투사체 제거 스킬을 포함해서 장점을 적극 활용할 생각부터 해야 하며 여전히 뚜벅이라서 정크랫이 작정하면 잡기 쉽고 특히 오리사는 다른 딜러에게도 카운터당하며 D.Va, 둠피스트, 윈스턴, 해저드는 기동성을 갖췄지만 이들의 기동성은 정크랫을 능가하지 못하며 오히려 고립된 지역에 달려들었다 강철 덫에라도 걸리면 궁게이지나 조공하거나 최악의 경우 리스폰으로 강제 사출. 정커퀸은 돌격군 중 체력이 낮은데 사거리도 짧고 기동성도 빠른 편이 아니라서 정크랫에게는 가장 쉬운 먹잇감 신세. 라인하르트는 뭐 여기 쓰여진 대로. 그나마 라인하르트 방벽이 1500으로 가장 많기에 팀원이 집결해서 공격할 시간이라도 벌어 줄 수 있는 거지, 탱들이 할 거라고는 하나, 방벽 탱들을 꺼내서 시간벌이나 하며 그 사이 기회를 노려서 스킬들을 집중시켜서 잡든가, 딜러들이 정크랫을 잡거나 적어도 포격을 중지하게 만들기를 빌어야 한다.\n타이어의 속도가 늘어난 이후로 부수기 꽤 어려워졌다. 사운드 플레이로 어느 정도 예측하여 날리는 샷이 중요하다.",
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
      "note":
        "반대로 트레이서가 정신없이 움직이다 못봐서 뜬금없이 맞기도한다.\n팁으로, 만약 아군들이 라인하르트 뒤에 옹기종기 모여있는 상황에서 펄스 폭탄에 부착당한다면, 폭탄이 터지기 전에 빠르게 방벽을 아군 쪽으로 돌려서 들면 방벽에 폭발 피해가 흡수되기 때문에 라인하르트 본인은 피해를 입을지 언정 아군이 한꺼번에 폭사하는 최악의 상황은 피할 수 있다. 부착이 아니라 방벽에 붙는다면 방벽 해제 시 펄스는 바닥에 떨어진다. 그리고 다시 방벽으로 펄스를 방어해 줄 수 있다.",
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
      "note":
        "단, 이때 바닥에 떨어지는 음파 화살에도 피격판정이 있기 때문에 아군이 눈 먼 헤드샷을 맞고 죽을 수 있으니 조심하자.",
    },
    {
      "target": "lifeweaver",
      "rating": "veryBad",
      "note":
        "이벤트 마왕사냥에서 라인하르트가 마왕 역인데 라이프위버가 작정하고 라인하르트가 절대 못 오는 지역에다 아군 모두를 데려오면 대지분쇄의 기절판정과 화강 외에는 상대를 건드리지도 못했었다.",
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
      "note":
        "이미 제압된 적은 정화를 써도 풀리지 않지만 벽에 박을 때의 피해는 상쇄된다.",
    },
  ],
  "sigma": [
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
      "note":
        "대치 상황에서 다른 적의 공격까지 감안하면 방벽이 3초를 못 버틴다.",
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
      "note":
        "물론 질풍참으로 강착을 피할 수 있지만 이러면 튕겨내기 질풍참 전부 빠져서 쿨이 돌아올 때까지 전장에서 빠져있어야 한다.",
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
      "note":
        "라인하르트는 해킹 소리를 듣는 즉시 방벽을 솜브라 쪽으로 돌려 막을 수 있으며, 라마트라는 공허 가속기로 탄막을 뿌려 끊을 수 있으며 로드호그는 갈고리, 자리야는 자방과 주방, 디바는 산탄도 높은 기본 공격, 윈스턴은 방벽과 범위 딜인 기본 공격으로 솜브라의 해킹에 대처할 수 있다. 오리사 역시 투창을 던져서 끊을 수 있고, 방어 강화를 일단 발동시켜 놓으면 해킹으로 중단되지 않기 때문에 해킹을 끊지 못해도 피해를 최소화할 수 있다. 마우가는 기관포로 탄막을 뿌려 해킹을 끊거나 저지불가가 되는 돌파로 달아날 수 있다. 즉, 돌격군 중에서 솜브라의 해킹에 적극적으로 대응할 수 없는 돌격군은 레킹볼과 시그마 단 둘뿐. 그나마 레킹볼은 운이 좋다면 갈고리를 이용해서 해킹 사거리 밖으로 빠질 수 있지만 시그마는 그런 것도 없어서 돌격군 중에선 가장 만만한 먹잇감이다.",
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
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "good",
      "note":
        "엠레가 에어샷을 잘 쏘면 맞아 죽는 건 둘째치더라도, 엠레는 탱이 빈 뒷라인에 딜을 들이 부어버리면 그만이므로 지상에서 방벽으로 가른 뒤 흘려내기에 좋은 상황을 굳이 궁으로 응전할 이유가 없다. 그럼에도 쓴다면 맞고 죽겠다 싶을 때 도주용으로 쓰는 정도지만, 시그마가 맞아죽겠다고 빼야 할 상황이면 이미 뒷라인은 뭘 해도 안 될 공산이 크다.",
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
      "note": "2발 다 맞으면 체력이 65밖에 안 남아서 역행을 써야 한다.",
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
      "note":
        "그나마 2024년 5월 패치로 이루어진 중력 붕괴 상향으로 라이프위버의 연꽃 단상과 생명의 나무를 중력붕괴 기점으로 삼을 수 있게 되었지만 이 마저 밸런스 붕괴를 초래할 위험이 있다는 이유로 취소되면서 없는 일이 되었다.",
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
      "note":
        "하지만 눈치 빠른 모이라는 키네틱 빠지는 거 보고난 이후에 구슬던진다. 정 안되면 구슬을 자힐용으로 쓰니 사실상 구슬 먹자고 쿨타임 긴 키네틱을 쓰면 시그마가 낚시질에 걸림&모이라 체력 벌을 시간 주는 것밖에 안 된다.",
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
      "rating": "good",
      "note":
        "일리아리 출시초기에는 아예 방벽을 무시하고 날아왔으나 탱커유저들의 반발로 방벽을 못 뚫게 너프되었다.",
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
      "note":
        "여우길 쓰면 상대 딜러들도 높은 확률로 궁극기를 쓰는데 캐서디나 솔저이면 중력붕괴로 띄우다 재수없으면 한타 망할 수도 있다.",
    },
  ],
  "junker-queen": [
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
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "good",
      "note":
        "애초에 정커퀸 뿐만 아니라 정면 싸움에 압도적인 체급을 가진 오리사와 시그마도 벽을 끼고 전투를 해야 하는 게 FPS의 기본 중의 기본이다.",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
      "note": "단 도륙의 쿨타임 2초 감소는 적용된다.",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
      "note":
        "사실 자리야에 대한 대부분의 상성이 다 이렇다. 자리야의 운영상 카운터에 가까운 윈스턴조차 팀합이 맞지 않으면 그대로 무너져내린다.",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
      "note":
        "용검의 피해는 110, 질풍참의 피해는 50. 검/질풍참/검의 순서로 때려도 270이라 30이 남고 질풍참이 없으므로 용검을 휘두르는 딜레이를 줄일 방법이 없다.\n165+75=240. 10을 남기고 산다. 질풍참/검의 순서로 때리면 용검을 휘두르는 딜레이가 남는다. 10이라 유의미하진 않지만, 어차피 정커퀸은 뽕검을 켠 겐지를 때려 죽이는 것 외에는 막을 방법이 없으므로 아군이 죽을 것 같더라도 쓰는 게 낫다.",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
      "note":
        "급속 냉각 중인 메이의 얼음 위에 톱니칼을 꽂아두면, 냉각이 풀리자마자 칼이 떨어져 꽂히므로 메이 입장에서는 대처하기 난해하다.",
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
      "note":
        "메이의 주력기 고드름은 투사체라 자리야에게 에너지를 괜히 갖다 바칠 확률도 높다.\n무엇보다, 자리야의 경우 장기전으로 갈수록 화력이 강해지기 때문에 시간을 끌면 끌수록 상당히 위험해진다.\n눈보라에 완전히 얼은 적도 방벽 씌우면 즉시 풀린다. 설구를 던져 땅에 떨어지고 나서야 발동되는 메이의 눈보라는 감속 스택을 최대로 맞혀야 빙결되는 예전 냉각수의 원리를 그대로 갖고 있어서, 스턴 판정을 지닌 광역 궁극기 치고는 대응하기도 참 간단한 편이다.",
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
      "note":
        "급속 빙결을 제외해도 메이의 체력은 300으로 겐지가 죽이기 위해서는 필연적으로 용검으로 세 번 썰어야 하고 급속 빙결의 무적 시간과 회복까지 고려하면 사실상 겐지에게 나노강화제와 같은 지원이 있는 것이 아니라면 메이를 죽이기는 매우 힘들다.",
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
      "target": "vendetta",
      "rating": "neutral",
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
      "note":
        "초월의 힐은 초당 300이고, 모이라의 좌클릭+회복 구슬+융화는 좌클릭의 지속 시간인 3초가량까지 이보다는 낮은 240 정도의 힐을 유지할 수 있다. 물론 제멋대로 통통튀는 구슬과 짜디 짠 좌클릭의 지속 시간, 최대 생명력을 초과하는 치유를 줄 수 없는 시스템 때문에 실질 효율은 그리 높지 않지만, 모이라의 융화도 허접한 인식과 달리 죽음의 꽃 정도까지는 혼자 커버가 가능할 만큼 보기보다 고힐량의 궁극기인 것을 명심하자.",
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
      "note":
        "만약 궁을 부숴줘야 하는 상황이 생긴다면 탱커보다는 힐러를 먼저 부숴주는 게 좋다. 보통의 탱커들은 방벽 상태를 무시하고 버틸 수 있는 수단이 있는 반면 힐러들은 자력으로 방벽을 부수거나 보호하기 어렵다. 거기에 변수를 낼 수 있는 방울이나 수면 등의 투사체도 방벽이 깨져야 제대로 활용할 수 있는 동시에, 힐러를 물러 올 적군에 대응하기 위해 힐러진을 먼저 보호해 주는 게 합리적이다. 물론 힐러 깨주면 바로 탱커 방벽도 깨주자.\n방벽 배열은 수직으로 직격시켜도 폭격이 통과된다. 마우가의 방벽과 동일한 판정.",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
      "note":
        "아군이 도와주면 더빨리 깰 수 있으나 보통 공허 방벽에는 화력을 낭비하지 않는 게 낫다.",
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
      "note":
        "그래도 넉백이 있는 전술 수류탄과 딜러치고 높은 체력으로 윈스턴에게 조금은 길게 저항할 수 있다.",
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
      "note":
        "산탄 범위 2로 고정\n강습모드의 화력은 20미터 이내에서 강력하고 그 이상 멀어지면 파괴력이 뚝 떨어진다.",
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
      "note":
        "위치를 잘 보고 한 두 발로 위치 이동을 강요하다가, 위도우가 훅을 쏘자마자 도착위치에 한 발 쏘면 그대로 죽는다. 훅이 빠진 걸 봤다면 경로상으로 질러줘도 무관.",
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
      "note":
        "하지만 나무도 등급 낮은 궁인지라 바스티온의 킬각을 가려서 아군을 세이브한 것이라면 반대로 이쪽이 속쓰리다. 그렇다고 그냥 무시하고 킬각을 잡긴 어려운게, 이놈의 나무가 추가생 명력을 주는지라 안 그래도 킬 결정력이 낮은 포격의 성공률을 더 깎아먹기에 더더욱 부수고 싶어진다.",
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
      "note": "수류탄에 넉백이 있으니 불사장치 밖으로 끄집어낼 수 있다.",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "veryBad",
      "note":
        "물론 린드홀름 폭발물 특전이라면 초장거리여도 2발 직격으로 보낼 수 있다.",
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
      "note":
        "초월의 HPS 400 * ( 1 - 치유감소 30%) = HPS 280 < 강습 DPS 360 + 수류탄 폭발 피해 100. 단순계산 DPS 80이면 겐지 수리검보다 좀 못한 정도다.",
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
      "target": "d-va",
      "rating": "good",
      "note":
        "메인 딜러들을 전부 씹어먹는 디바 상대로 솔저가 그나마 반반가는 중립 상성이다.",
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
      "note":
        "겐지의 체력은 250(비돌격군의 평균 체력)으로, 전술 조준경을 쓰면 죽일 때까지 약 1.46초가 걸린다. 겐지가 튕겨내기를 쓴다면 2초간 다른 적을 공격하다가 겐지를 사살하면 된다.",
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
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
      "note":
        "복제 효율이 나쁘지만 다루기 쉽다는 장점과 생체장의 궁 수급&생존력 때문에 정 복제할 대상이 없으면 복제되기도 한다.",
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
      "target": "pharah",
      "rating": "good",
      "note":
        "넉백 당하는 건 차라리 도망갈 기회라도 되지, 생체장으로 회복하는 걸 티내면 파라는 눈에 잘 보이는 생체장 가운데에다 로켓 몇 발 쏴주면 솔저가 녹는다.",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
      "note":
        "미숙한 한조나 피하기 쉽게 날리지 고수 한조는 음파 화살로 위치 파악 다 해놓고 반드시 오게 되는 좁은 길에 쏘거나 소리 듣고 대응 못하도록 꽤 가까이서 쏜다.",
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
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
      "note":
        "단 방벽을 제대로 들었다면 전술 조준경의 오토록온에 안걸리는지라 수동으로 맞춰야된다. 그런데 시야에 다른적이 있으면 그쪽으로 록온이 된다.",
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
      "note":
        "서로 아군이 도와줄 수 있다는 가정 아래, 디바의 부스터는 윈스턴의 점프 팩과는 정반대로 범용성은 높지만 폭발력이 부족하여 디바가 도망치더라도 시메트라는 디바이상의 유효 사거리 + 감시 포탑의 확정 슬로우/치감 + 순간이동기의 급습을 통해서 디바를 쫓아가서 끝장을 낼 수 있다. 반대로 시메트라가 순간이동기를 깔고 도망친다면, 디바는 순간이동기를 깰 지 안깰지의 이지선다를 강요받게 되는데, 순간이동기를 깬다면 순동기에 공격하는 시간 동안 시메트라가 체력을 회복하고 돌아올 수 있고, 깨지 않고 곧바로 부스터로 추격해온다면 시메트라는 다시 순간이동기를 타서 이전 위치로 도망쳐버리면 되기 때문에 닭 쫓던 개 신세가 되어버린다.",
    },
    {
      "target": "domina",
      "rating": "veryGood",
      "note":
        "판옵티콘은 450의 내구도를 갖고 있으며 시메트라의 광자발사기 DPS는 60→120→180이므로, 1단계부터 충전해야 한다고 가정할 때 탈출에 450 - {60 × 0.9초 소요(1단계, 54) + 120 × 0.9초 소요(2단계, 108) + 180 × 1.6초 소요(3단계, 288)} = 3.4초라는 짧지 않은 시간이 걸린다. 여기에 순간이동기 설치 시간인 1초까지 추가로 소모해야 하면, 짤딜만 맞아도 실질 사망을 피하기 어려우니 광선의 강화 단계를 미리 보존해두는 게 좋다. 3단계 광선 기준으로는 2.5초면 충분하다.",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
      "note":
        "응징의 최대 사거리는 11m로 시메트라의 광자 발사기의 기본 발사 12m와 차이가 1m밖에 나지 않는다. 다만 라마트라의 경우 네메시스 형태까지 사용한다면 히트박스가 매우 커지기 때문에 실질적인 사거리는 시메트라가 1m보다 더 많이 길다.",
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
      "note":
        "시메트라를 사용하다 보면 생각보다 자주 나오는 상황으로, 오리사가 대지의 창을 충전할 때 바로 반응하면 탈출하기 어렵지 않다. 다만 팀원들이 순간이동기를 탈 생각을 하지 않는 경우가 많으므로 실력에 자신이 있다면 미리 브리핑을 하자.",
    },
    {
      "target": "winston",
      "rating": "bad",
      "note":
        "2차 리메이크 이후 전체적으로 돌진 메타 멤버들과 상성이 많이 완화된 편이다. 트레이서, 윈스턴, 디바에게는 상대적으로 더 강해진 대신 절대상성급이었던 겐지와의 상성은 안 좋은 쪽으로 악화됐다.",
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
      "note":
        "물리적으로 방벽을 넘어서 공격한다는 아주 쉬운 돌파법을 눈에 보이게 알려주는 꼴이라서 가로 설치는 보통 효율이 나쁘기 때문이다.",
    },
    {
      "target": "genji",
      "rating": "veryGood",
      "note":
        "파라나 에코도 있지만 이들은 몸이 너무 약하고 상대팀의 집중 견제를 받아서 안정성이 낮다.\n이런 순간이동기를 이용한 카운터 및 러쉬는 일반적인 경쟁전에서는 일어나기 매우 힘들지만 프로 대회와 같은 팀게임에서는 이런 점들이 매우 두드러져서 특히나 시메트라가 겐지의 극 카운터로서 있을 수 있도록 해준다.",
    },
    {
      "target": "reaper",
      "rating": "bad",
      "note": "발당 115, 초당 2회 공격으로 DPS 230",
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
      "note":
        "소전은 기본 무기의 투사체 전자포와 히트스캔 레일건으로 인한 지속적인 트래킹 에임과 순간적인 에임 수정이 심하게 요구되며 궁극기도 전적으로 플레이어의 에임에 의존하기 때문에 어느 정도 저점이 보장되는 타 히트스캔 딜러들보다 훨씬 낮은 저점을 갖고 있다.",
    },
    {
      "target": "soldier-76",
      "rating": "good",
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
      "note":
        "순간이동기는 시전 시간도 꽤나 길어서 캐서디의 섬광탄에 맞기 전에 미리 도망치는 것이 좋다. 또 캐서디의 섬광탄은 광역 공격이어서 캐서디가 있는 곳에 함부로 순간이동기를 사용하면 무조건 섬광탄에 맞게 된다.\n물론 좌클릭으로 지질 수 있다면 지지는 것이 좋겠지만, 아무리 지지면서 무빙을 해도 상대 캐서디가 헤드를 연달아서 까서 이기기 힘들 때에는 우클릭을 날리는 편이 좋을 수 있다.",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
      "note":
        "트레이서의 체력이 종잇장 수준인 걸 감안했을 때, 그 감시 포탑에게 맞는 1초가 안 되는 찰나의 슬로우와 위치 노출도 트레이서에게는 상당히 크게 다가온다. 순간이동기도 운영적으로 시메트라가 우위에 있게 해주는 스킬로, 이를 트레이서가 제 손으로 파괴하기는 부적합하다. 순간이동기를 통해서 고지대를 점하거나 더 나아가서 시메트라의 팀들이 순간이동기를 타는 것에 대해 트레이서는 주도권을 쥘 수 있는 능력이 없다. 이런 점은 소통이 활발히 이루어져 팀 단위로 트레이서를 패싱하고 러쉬로 진입, 후퇴하는 경우에 매우 두드러진다.",
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
      "note":
        "물론 전투화로 높이 뛸 수는 있다. 자동 조준 감시 포탑이 뛰거나 말거나 하고 공격하는 게 문제일 뿐.",
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
      "rating": "good",
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
      "note":
        "둘 다 공격하면 체력이 차는 스킬구조인데, 히트 싱크 너프 전에는 전탄을 맞추면 지속시간이 사실상 무한이라 마우가와 정면 맞다이를 뜨면 장탄 제한이 있는 마우가가 밀렸지만 너프 후에는 정면으로는 못이기므로 사이펀 블라스터의 이속업으로 덜 맞아주면서 이득을 봐야 한다.",
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
      "note":
        "캐서디의 섬광탄, 애쉬의 다이너마이트와 충격 샷건, 소전의 분열 사격 등\n엠레의 권총과 솔저의 생체장은 근접전에서 일장일단이 있다. 엠레는 치유와 회피기동이 모두 가능하지만 튕겨내기나 매트릭스 등 투사체 무력화 스킬에 취약하다. 솔저의 생체장은 제거 불가 투사체라 튕겨내기나 매트릭스를 걱정할 필요는 없지만, 치유 범위가 제한적이라 치유를 받으려면 회피기동을 제대로 하기 어렵다.\n사실 비행 속도도 느려서 에코나 파라에 비해서 공중 질우근을 시도하기도 쉽다.",
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
      "note":
        "솔저 중수만 돼도 느려터진 오버라이드 프로토콜의 비행 정도는 궁 안 쓰고도 전탄 맞춘다.",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
      "note":
        "단 오버라이드 프로토콜의 비행이 느리고 선딜도 길어서 어설프게 쓰면 사거리가 짧은 시메트라로도 얼마든지 격추한다. 고지대에서 쓰거나 수류탄 점프 후 써줄 것.",
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
      "note":
        "다만 에코 쪽에서도 엠레를 복제하면 궁극기를 한 번밖에 못 쓰는 강력한 단점이 존재해, 엠레는 복제 타겟으로 잘 선택되지 않는 편이다.",
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
      "note":
        "정크랫은 특히나 둠피스트에게 근접에서 죽는 걸 조심해야 하는 게 정크랫의 패시브 폭탄의 피해는 300으로 죽으면서까지 둠피스트에게 블락을 꽁으로 채워주는 꼴이라서 정크랫을 죽이고 떨어진 폭탄으로 블락을 다시 리필해서 바로 아군 뒷라인을 치러갈 수도 있어서 자칫 잘못하면 뒷라인이 바로 터지게 된다. 게다가 정크랫의 패시브로 채운 블락펀치로 비록 킬을 못 내더라도 이미 정크랫이 죽은 걸로 4:5의 불리한 싸움이 되니 이미 둠피스트에게 놀아난 것이나 다름없는 것.\n둠피스트와 정크랫의 공통점이 꽤 존재하는데, 콤보와 구석진 장소의 제왕이라는 것이다. 덫+충격 지뢰+유탄 등의 콤보로 적을 한방에 보내는 것과, 지진 강타+로켓 펀치+철권포 등의 콤보로 적을 한방에 보내는 것이 비슷하다. 궁극기 역시 장소와 사용을 자기가 고를 수 있다는 점, 구석진 장소에서 강력하다는 점 등등이 있다.\n충격 지뢰는 시선을 최대로 내려서 깔고 터트려도 완전한 수직 점프가 되지 않는다. 즉, 어디로 튈 지 모르는 셈.",
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
      "note":
        "덫을 밟는다고 해도 보호막을 쓰고 에임 싸움을 건다면 질 수도 있다.",
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
      "note":
        "근데 상대 윈스턴이 빡고수인 경우 약간의 지짐이와 함께 윈풍참으로 바로 타이어를 없애기도 한다. 물론 초근접에선 윈스턴이 죽을 수밖에 없다. 맞궁으로 살아남든가.",
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
      "note":
        "단, 덫이 발동하는 순간 적이든 아군이든 상관없이 빙벽으로 덫이 걸린 영웅을 들어 올리면 덫을 해제할 수 있다는 건 기억해두자.",
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
      "note": "펄스 소총은 연사력이 뛰어나기 때문에 6발은 순식간이다.",
    },
    {
      "target": "sombra",
      "rating": "good",
      "note":
        "솜브라의 해킹은 죽이는 타이어나 강철 덫에는 전혀 효과를 발휘하지 못한다. 일단 던져만 놓으면 정크랫과 별개의 오브젝트로 취급되기 때문.\n충격 지뢰 투척이 불가능해지는 것은 물론이고 미리 설치해둔 충격 지뢰도 우클릭 기폭 버튼이 잠깐 봉인되어버리기 때문에 사용이 불가능해진다. 참고로 죽이는 타이어도 시동거는 그 약간의 선딜 때 해킹 당하면 게이지만 날아가고 뻘궁된다.",
    },
    {
      "target": "symmetra",
      "rating": "good",
      "note": "감시 포탑은 정크랫의 설치물도 감지해서 공격한다.",
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
      "note":
        "현재는 영웅들의 체력 상향평준화 패치로 인해 모든 영웅들이 덫+지뢰 콤보에도 죽지 않게 되었지만, 유일하게 트레이서(175)는 덫(100)+지뢰(120)로 잡을 수 있다.",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
      "note":
        "파라가 생각이 있다면 정크랫 궁 소리 듣고 기둥 근처에서 날지 않을 것이다. 게다가 최근에 타이어 속도가 너프됐기 때문에 파라가 눈치 채고 타이어를 파괴하지 못하게 하도록 주의해야 한다.",
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
      "note":
        "컨트롤이 받쳐주면 재빠르게 180도 돌고 아래쪽으로 지뢰 던지자마자 터트리면 날아온 방향으로 다시가니 살아남을 수도 있다.",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
      "note": "단 소멸 무적시간은 생각보다 짧은지라 덫에도 잘걸린다.",
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
      "note":
        "단 스패밍이 아닌 정조준으로 다맞출수있다면(물론 어렵지만 정크랫에게는 덫이 있기 때문에 충분히 가능하다.) 정크의 공격력이 워낙 높아서 힐량 1위인 아나의 HPS로도 감당이 안 된다. 시즌9이후 공격군 패시브 치유감소가 생긴 이후로는 더 감당이 안 된다.\n정크랫의 특성 상 킬 결정을 확실하게 할 수 있는 메인딜러가 절대 아닌, 태생이 명확한 서브딜러이다.",
    },
    {
      "target": "wuyang",
      "rating": "bad",
      "note":
        "실제로도 미국 등에서 두더지가 여기저기 땅파놓는 거에 이골나서 땅에 물을 대량 흘려넣어서 잡기도한다.",
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
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
      "note": "도미나의 성능 좋은 넉백기도 한몫한다.",
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
      "target": "junker-queen",
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
      "note":
        "포탑의 DPS는 52로 2초 이상만 맞아도 리퍼의 체력 중 3분의 1이 사라진다. 궁극기와 기본 공격 이외에 교전 수단이 전무한 리퍼라서, 포탑 따위에게 탄창을 낭비하는 것도 아주 속이 쓰리다.",
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
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
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
      "note":
        "특히 에코가 비행으로 높은 명당 자리 올라가서 토르비욘 복제 후 포탑을 깔아놓으면 진짜 속터진다. 그나마 특전이 생긴 이후로는 고지대 설치를 본인이 흉내낼 수 있게 되었지만.",
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
      "target": "hanzo",
      "rating": "veryBad",
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
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
      "note": "애초에 솜브라 혼자 대인전으로 이길 수 있는 탱커는 거의 없다.",
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
      "target": "winston",
      "rating": "veryBad",
      "note":
        "아나, 젠야타와의 합을 맞추는 것이 가장 좋다. 아나가 수면총만 맞춘다면 기다렸다 부조화+해킹+바이러스 콤보로 점프팩으로 도망가기도 전에 척살 가능하다.",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
      "note":
        "특히 도륙은 선딜레이가 길기 때문에 상대해 보면 도륙을 끊어내는 상황이 정말 자주 생긴다.",
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
      "rating": "neutral",
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
      "note":
        "한조가 해킹당하기 전에 솜브라에게 피해를 주어서 해킹 자체를 취소하는 것은 거의 불가능하더라도, 해킹 소리가 들리면 곧바로 폭풍 화살부터 누를 것이 뻔하므로 사실상 폭풍 화살을 해킹으로 막는 건 불가능하다.",
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
      "rating": "veryBad",
      "note":
        "소리 방벽은 EMP가 터진 후에 쓸 수만 있다면 좋은 카운터지만 집결이나 초월과는 달리 먼저 쓰면 EMP에 지워져버리는데 상대 공격군이 선궁을 켠다면 어쩔 수 없이 찍어야 한다.",
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
      "note":
        "오버워치 2에서 압도적인 실력차가 아니면 결코 극복할 수 없는 극카운터 관계가 몇 있다. 라마트라와 브리기테, 레킹볼과 위도우메이커, 로드호그와 윈스턴, 자리야와 제트팩 캣 등.\n이는 윈스턴이 키리코를 아주 잘잡는 탱커이기 때문이다.\n지울 수 있는 건 아니고 버프받은 적군을 짧게 침묵시키고 솜브라가 몇 명 갈아버리면서 잉여로 만들 수가 있다.\n때문에 운이 없다면 해킹을 맞고 스킬이 캔슬될 일이 없다는 걸 확인하고 스킬을 썼는데, 키리코가 정화한 바람에 다시 해킹이 가능해지면서 스킬이 취소되어버리는 경우도 생길 수 있다.",
    },
  ],
  "sierra": [
    {
      "target": "d-va",
      "rating": "veryBad",
      "note":
        "운없으면 이런 경우도 있다. 보통 디바는 부스트 쓰고 돌진해오면 시에라는 무조건 디바 반대 방향으로 드론 타고 튈려할 것인데 이때 디바쪽이 드론 설치방향과 정확히 일치하거나 했으면 마이크로 미사일에 드론 타기도 전에 시에라가 녹거나, 드론이 먼저터지기도 한다. 사실상 디바 진입 전에 드론을 미리깔아둬야 생존 가능.",
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
      "note":
        "윈스턴 우클릭 출차징 대미지는 60이지만, 구조물 한정으로 대미지가 50% 증가해 시에라의 드론 생명력인 80을 상회한다.",
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
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
      "note":
        "파라나 발키리 메르시, 제트팩 캣. 파라는 히트박스가 넓고 수직 방향 위주로 움직이기 때문에 초구체가 의외로 잘 맞아서 시그마라고 무조건 불리하지는 않다. 그러나 에코와 메르시는 몸도 얇고 수평 방향으로 자유롭게 날아다니기에 상대하기 매우 까다롭다.",
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
      "note":
        "참고로 광선 집중의 사거리가 질풍참의 최대 사거리와 거의 같아서 마무리하려고 광선 쏘다가 운 나쁘면 어차피 죽을 거 꼬라박아보자는 겐지에게 공중에서 질우근 원콤을 당하는 굴욕을 맛볼 수 있다.",
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
      "note":
        "질풍참과 달리 즉발 이동기가 아니고 칼이 먼저 날아간 다음 벤데타가 그 자리로 이동하는 매커니즘이라서 비행 중이라면 칼을 보고 피할 수 있다. 단, 적을 관통하는 공격이라 공중의 적을 질우근으로 노리려면 최대 사거리를 정확하게 맞춰야 하는 질풍참과는 달리 치솟는 베기는 칼이 적에게 닿으면 그 자리에서 멈추고 바로 내려찍기를 쓸 수 있으므로 에코가 공중이라도 벤데타의 E스킬 사거리 15m 이내에 있다면 경계해야 한다.",
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
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "sierra",
      "rating": "neutral",
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
      "target": "pharah",
      "rating": "good",
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
      "note":
        "단순 쿨타임만 보면 점착 폭탄과 정화 방울을 교환하면 괜찮은 거 아닌가 싶을 수 있지만, 정화 방울 하나로 점착 폭탄만이 아니라 후속 플레이가 전부 막혀버린다는 게 문제다. 점착 폭탄의 주된 용도는 중근거리에서 적에게 맞춰서 체력을 절반 이하로 만들어 광선 집중의 피해 증폭 조건을 만족시키는 것이다. 그런데 점착 폭탄을 정화 방울로 카운터치면 점착 폭탄만이 아니라 광선 집중까지 막히는 것이나 다름없다. 점착 폭탄을 잘 맞출려고 비행으로 날아왔다면 정화 방울 하나에 스킬 셋을 날리는 셈이다.",
    },
  ],
  "pharah": [
    {
      "target": "d-va",
      "rating": "veryBad",
      "note":
        "공중에 있는 상황을 가정하면 대략 미사일 쓰면서 날아온 디바가 부스터 시간이 끝날 때쯤 도륙난다.\n겐지의 튕겨내기 역시 상당히 위험하기는 해도 튕겨낼 수 있는 범위가 드라마틱하지는 않아서 겐지를 노리지 않고 조준하면 되지만, 디바는 '하' 소리가 들리자마자 범위가 넓은 방어 매트릭스키고 갑툭튀한다. 무엇보다 쿨타임이 긴 편인 튕겨내기와 토글 식인 방어 매트릭스는 애초에 비교가 불가능하다. 튕겨내기가 차라리 훨씬 대응하기 쉽다.\n다만 파라에게 정면으로 날아오는 걸 충격탄으로 쏴봤자 이게 밀리기는 하는 건가 싶을 정도로 티가 안난다. 애초에 오버워치의 충격탄 류(로켓 점프라든가) 스킬의 적용 방식은 물체 자체의 속도 + 충격탄이 밀어내는 속도이므로 충격탄이 밀어내는 방향으로 물체가 이동 중이면 정말 멀리 날아가지만, 충격탄이 밀어내는 반대 방향으로 이동 중인 물체는 얼마 안밀려나간다. (로켓 점프가 애초에 왜 로켓+점프인지를 생각해 보라. 백터 값의 합산 개념을 생각하면 편하다.) 고로 이때는 디바를 밀쳐내는 개념으로 쓰지 말고, 디바가 부스터로 코 앞에 접근했을 때 디바를 벽 삼아서 파라 본인을 뒤로 밀쳐 내는 느낌으로 써야 한다.\n물론 아예 시도하지 말라는 소리는 아니다. 궁극기 위치에 따라 지붕에 가리거나 파라가 정말로 높이 기동할 수 있는 경우에는 충분히 살 확률도 있다. 아래 서술할 글은 어디까지나 궁극기가 파라 근처에서 발동했을 경우를 가정한 것이다.\n파라가 점프 추진기 고도에서 활동하는 중이라도 정말로 아슬아슬하게 피하는 시간이 나온다. '이것도' 소리가 들리자마자 즉각 호버 추진기에서 손을 떼고 후진하며 발이 땅에 닿을까 말까 할 때 충격탄을 써줘야 제 시간에 충분한 거리를 벌릴 수 있다.",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
      "note":
        "딜둠시절에는 고지대에서 미리 대기하고 있다가 로켓 펀치로 달라붙어서 어퍼컷-평타 3발 콤보로 파라를 따는 경우가 종종 있었지만 어퍼컷이 사라진 지금은 둠피스트가 파라를 따는 게 사실상 불가능해졌다.",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
      "note":
        "메이의 빙벽과 연계해서 라인만 잘라먹기도 한다.\n방벽에 충격탄이 박히면 넉백이 되지 않으니 주의.",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
      "note":
        "1. 포화 상태에선 넉백이 먹히지 않으므로 돼재앙 넉백으로 인해 에임이 흐트러지지 않는다. 2. 대개 호그는 정면의 아군들을 밀쳐내는데 바쁘지 공중에 떠 있는 파라 잡겠다고 돼재앙을 쓰지는 않으니 파라가 시야에 안들어와 있을 확률이 높다. 3. 포화는 돼재앙보다 DPS와 집탄율이 월등히 높으므로 호그가 돼재앙을 파라에게 향하기 전에 호그를 처치하거나, 돼재앙 몇 발 맞고 조금 다치는 수준으로 끝난다. 그리고 숨돌리기를 쓰더라도 호그의 회복력을 능가하는 DPS로 호그를 갈아버릴 수 있다. (단 중근거리 한정. 원거리에선 오히려 포화의 집탄률이 떨어지며, 탄속도 훨씬 느리므로 그냥 쓰지 말자. 초보 파라 유저들이 많이 착각하는 부분인데 포화는 원거리 공격 스킬이 절대로 아니다.)",
    },
    {
      "target": "mauga",
      "rating": "bad",
      "note":
        "게다가 터질 듯한 심장이 지속 시간이 줄어든 대신 받는 피해 감소와 흡혈량이 상향되어 이전보다 승산이 더더욱 줄어들었다. 심장이 빠진 게 아니라면 절대로 마우가 앞에서 궁을 쓰면 안 된다.",
    },
    {
      "target": "sigma",
      "rating": "good",
      "note":
        "초창기 시그마 한정. 지금은 시그마의 방벽 내구도가 700으로 하향되어서 파라의 궁극기를 다 막기도 전에 방벽이 깨진다. 보통 이런 상황은 시그마한테 면상궁을 쓰려고 했는데 시그마가 딱 맞춰 그쪽으로 방벽을 깔면 생긴다. 시그마 면상궁을 삼가야 하는 이유다.",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
      "note":
        "유도 무기를 가진 윈스턴의 특성 상 정신 없이 무빙하면서 방벽깔고 테슬라 캐논으로 지지는 윈스턴을 공중에서 맞히기는 정말 힘들다. 특히 궁 켠 윈스턴을 잡기에는 파라의 로켓 탄속이 절망적으로 느리다.\n쟁탈전 한정으로 정 귀찮다면 낙사지점 근처에서 놀자. 점프팩 거리 조절이 은근 까다로워서 심심찮게 낙사하기도 하고 충격탄으로 점프팩을 생존용으로 쓰게 할 수도 있다.",
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
      "note":
        "이건 정크랫도 마찬가지다.\n단 점령-화물 복합 맵의 2거점(특히 파라이수, 왕의 길 등)처럼 개활지가 적고, 겐지가 벽 타고 올라갈 고지대가 많은 곳이라면 역으로 겐지가 파라를 덮칠 수도 있으니 주의.\n꿀팁이라 하기는 뭐하지만 포화를 쓰려는데 적 겐지가 튕겨내기를 써서 본인 혹은 아군들을 죽이려 할 때, 한 번 겐지 쪽으로 쏴주고 0.1초 만에 바로 겐지와 떨어져 있는 다른 적으로 타깃을 바꾸거나 공중으로 에임을 돌려 튕겨내기를 무력화시킬 수 있다. 체력이 많이 남아 있다면 포화의 지속시간이 긴 점을 이용하여 역관광도 할 수 있지만 포화가 먼저 발동하기 때문에 0.5초 정도 차이뿐이라서 쉽지는 않다.\n패치로 인해서 용검 피해가 너프되었지만 질풍참-용검(질풍참 쿨타임 초기화)-질풍참 콤보에 맞아 죽는다. 여기에 튕겨내기까지 포함되면 생각보다 힘들다.\n겐지의 용검이 근접 공격이라는 특성 상 공중에 떠 있는 파라에게 우선 순위를 두지는 않는 편이다. 허나 용검의 사거리가 의외로 길어서(체감상 7m 정도) 겐지가 작정하고 이동기를 한계까지 소모하며 접근해오면 어지간히 떨어져 있지 않은 이상 사거리 안으로 들어오게 되어 있으니 주의하자. 거점 쟁탈 맵이나 후루 암살코스로 유명한 왕의 길 2구간 같은데서 특히 겐지에게 용검 사거리를 내주는 경우가 잦다.\n랭크가 높은 겐지는 아군의 파라 카운터 수단이 무력화된 상황에선 지원가조차 무시하고 용검으로 파라를 처치하고 한타를 승리로 이끄는 경우가 있다. 그런데도 겐지의 프로급들은 그걸 그냥 썰러 날아오신다(...). 고로 본인이 공중에 있다고 마냥 안심하지 말고 회피 기동을 잊지 말자.",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
      "note":
        "15m만 되어도 피해량이 25를 넘을까 말까 하다.\n가끔 정말 픽도 안바꾸고 기습에만 올인하는 골수 리퍼가 보이는데, 이때 파라가 전방에서 킬 욕심내다 죽는 순간, 전선에 공백을 남기는 것은 물론이거니와 리퍼의 기습으로 지원가도 덩달아 사망하는 바람에 정말 어이 없게 무너지는 경우가 많다. 차라리 아군 진영 후방의 절대적으로 안전한 곳에서 전선에는 원거리 지원 사격을 하는 틈틈이 후방 기습만 예의주시하면 기여는 기여대로 하고 기습은 기습대로 원천 봉쇄하는 필승 전략이 될 수 있다. 꼴픽이 얼마나 한심한 전략인지 몸소 깨우쳐주자.",
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
      "note":
        "최소 피해만 가정해도 드릴+근접+평타가 135라서 반피 이상이 날아가며, 드릴이나 근접을 더 오래 맞을 경우 풀피여도 순식간에 죽을 수 있다.",
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
      "note":
        "내가 먼저 파라를 꺼냈고 상대 딜러가 둠피스트 억제 등 모종의 이유로 솜브라를 꺼냈다면 파라가 솜브라의 카운터 역할을 할 수 있지만, 이미 솜브라가 활개치고 있는데 파라를 꺼내는 건 좋은 선택이 아니고 오히려 역카운터당한다.",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
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
      "note":
        "다만 간과해선 안 되는 게, 지형지물 응용능력이 상당한 정크랫 유저들의 경우 킬 결정력을 올리기 위해서 아군과 협동, 브리핑 등 제대로 소통을 하여 유리한 위치를 선점하러 우회한 후 미리 지뢰를 깔아서 게이지를 채운 후 점프, 파라를 공중 지뢰 2방이나 유탄 직격-지뢰 직격샷 콤보나 지뢰 직격-유탄 직격샷 or 유탄 직격-근접 공격 등의 다양한 콤보를 응용하여 따버리므로 무빙을 어줍짢게치다가는 그대로 정크랫의 궁게이지 채워주고 주변 지원가랑 같이 골로 가니 주의하자.\n다만 어줍짢게 시도할 경우 어지간한 장인들보다 제대로 숙련된 정크랫 유저, 혹은 센스가 태생적으로 좋은 정크랫 유저의 경우 타이어 무빙이 장난 아니게 좋으므로 타이어 요격을 시도하다 메르시나 주변 힐러, 윈스턴이랑 같이 사이좋게 전광판으로 그대로 사출되니 조심하자.",
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
      "note":
        "이는 겐지도 마찬가지기는 한데, 겐지의 표창은 투사체에 기본 성능이 워낙 저열해서 튕겨내기로 로켓을 반격당한 게 아니라면 저고도 상태에서도 파라가 유리하다. 트레이서는 히트스캔에 산탄치고는 꽤 집탄률이 준수한 편이라서 내려오면 위험하다.\n단 전제가 '파라가 공중에 떠서 트레이서를 감지한다'인 만큼 전선 앞에서 대놓고 이렇게 트레이서를 견제하면 파라가 먼저 떨어진다. 트레이서는 어차피 아군 진영으로 접근해야 하므로 아군 전열 뒤쪽에서(혹은 적의 시야가 닿지 않는 건물 옥상에서) 트레이서 견제&원거리 화력 투사만 해줘도 1인분 이상은 충분히 할 수 있다. 적 팀에 위도우메이커가 보인다면 특히 기동 경로에 주의하자. 위도우메이커는 적 진영 뒤에서 저격을 하는 만큼 반드시 엄폐물에 가려서 저격을 못하는 공간이 나오기 마련이다.",
    },
    {
      "target": "pharah",
      "rating": "good",
      "note":
        "위로 올라가는 게 유리한 점은 게임 밖, 현실에서도 나온다. 상대방이 위로 올라가게 되면 자신도 에임을 높여야 하는데, 에임을 조작하는 컨트롤러는 마우스이다. 보통은 어느 정도 팔을 펴고 게임을 할 것인데, 이 경우 마우스를 몸 쪽으로 당기는(에임을 아래로 내리는) 것이 편할지, 마우스를 몸 쪽에서 밀어내는(에임을 위로 올리는) 것이 편할지는 자명하다. 이는 파라끼리 거리가 가까울 때 극심하게 드러난다. 무엇보다 파라가 적 파라와만 싸우는 것도 아니고 적들은 대부분 지상에 머물러 있어 보통 에임이 어느 정도 아래로 내려가 있다. 이 상태에서 지상의 적들을 외면하고 에임을 위로 올리는 건 꽤 귀찮은 일이다.",
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
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
      "note":
        "발키리를 킨 메르시의 비행 상태 기동성은 오버워치 내에서 따라올 캐릭터가 없다.\n메르시의 권총인 카두세우스 블라스터는 탄속이 초당 50m이지만, 발키리를 키면 탄속이 초당 100m로 두 배 늘어난다.",
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
      "note":
        "우스갯소리로 빠른 대전에서 이런 아나가 보인다면 십중팔구 핵이거나 양학이다만, 이는 경쟁전 기준이니 어디까지나 빠대로만 판단할 것은 아니다. 당장 은퇴한 전프로인데도 폼 안 죽는 류제홍 같은 사람도 있는 판이기에, 핵이 아닌 이상 상대를 뭐라하기는 어렵다.\n인사 찍은 아나는 수치상 치명타 DPS가 위도우보다 높다.",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "bad",
      "note": "물론 눈에 잘 안 띄는 곳에 숨겨둔다면 골치 아파진다...",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
      "note":
        "부조화의 구슬은 유틸리티 유도기이기 때문에 공중에 떠 있는 파라에게 정말 붙이기가 쉽다.\n가장 이상적인 건, 구슬이 떨어지는 동안 우회로를 이용하여 다른 영웅의 빈틈을 노리는 것인데, 부조화의 구슬은 젠야타에게만 위치를 노출하므로 젠야타가 센스있게 팀보이스로 파라의 위치를 자세히 설명하지 않는 이상 상당히 유효한 전략이 될 수 있다.",
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
      "note":
        "파라나 저격수는 즉발 공격이라 자리야가 방벽 쓰고 있는 게 보이면 그냥 안 쏘면 되지만, 프레야는 직격 후 잠시 후에 터지는 폭발 피해가 주력인지라 방벽을 안 쓸 때 적중시키더라도 자리야가 방벽을 켜버리면 피해가 바로 흡수되고 에너지가 차므로 방벽을 능동적으로 흘리기 어렵다. 때문에 본의 아니게 빨간 자리야를 만드는 일이 잦은 편.",
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
      "note":
        "심리전으로 튕겨내기를 빼려면 좌클부터 퍼부어서 겐지 체력을 어느 정도 깎거나, 정조준 모션만 취하고 겐지가 튕겨내기를 쓰면 그때 모션을 풀면 된다. 정조준의 피해량이 워낙 무섭고 반대로 튕겨내면 역관광이 가능하기에 꽤 많은 겐지들이 프레야가 자신을 조준한다 싶으면 튕겨내기를 쓰는 편이다. 이때 쏘지 않고 모션만 풀면 쿨타임이 돌지 않으므로 바로 재사격이 가능하며 프레야가 큰 이득을 본다. 물론 심리전에 능한 겐지는 프레야가 정조준으로 멈추는 그 타이밍에 바로 질우근을 박아 죽일 수도 있다.",
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
      "rating": "neutral",
    },
    {
      "target": "ashe",
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
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
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
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "veryBad",
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
      "rating": "good",
    },
  ],
  "genji": [
    {
      "target": "d-va",
      "rating": "veryGood",
      "note":
        "Z축까지 뛰어난 전방위 순간 기동성 때문에 때로는 시메트라보다 더 효율적일 수 있다.",
    },
    {
      "target": "domina",
      "rating": "veryBad",
    },
    {
      "target": "doomfist",
      "rating": "bad",
      "note":
        "오르내릴 고지대가 많다면 둠피스트를 죽이기는 어려워도 어느 정도 농락할 수는 있다.\n체력이 좀 까인 상태에서 파워 블락으로 강화된 펀치를 맞았다면 즉사할 수도 있다.\n참고로 질풍참과 로켓 펀치가 충돌하면 둠피스트는 아무 피해가 없고 겐지가 튕겨져 날아간다. (패치로 수정되었다. 물론 죽는 건 다름 없지만...) 단 둠피스트가 주먹을 충전 중일 때 질풍참을 쓰는 건 아무 문제가 없다.",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
      "note":
        '그렇지만, 이걸 다르게 얘기하면 라인하르트에게 뭐라도 맞았다? "도망 말고는 선택권이 없다"는 말이 된다.\n다만 뽕검은 참격질풍으로 체력 250 이하 영웅을 순살하고 질풍참을 초기화하며 엄청나게 빠르게 움직이기에 라인하르트 입장에서도 대지분쇄를 맞히기 쉬운 게 아니다.\n때문에 용검은 라인하르트를 보좌하는 공격/지원군들을 안정적으로 빠르게 제거할 수 있는 수단이지만, 역으로 겐지가 라인하르트에게 가장 취약해지는 순간이기도 하다.\n아니면, 용검의 제1표적이 뚜벅이 힐러(아나, 젠야타)라는 점을 이용해서 용검 켠 적군 겐지를 보면 "아군 힐러쪽으로 돌진을 써서" 제압해버리는 라인하르트도 있다. 이거 생각보다 많이 일어나는 상황이다. 겐지 입장에서도 용검 사용 전에 라인하르트의 위치 정도는 확인할 수 있지만, 돌진해오는 라인하르트를 볼 정도의 시야가 나오기 어렵다. 제대로 잡히면 뽕 안맞았다면 그냥 다 끝이고 뽕을 맞고 달려들어도 후속타에 확정 사망, 제압은 안 당하고 넉백만 당하더라도 질풍참은 날려 먹었을 테니 궁각이 크게 망가진다.\n3검 이상 안 해도 상대의 탱커 전담 폭힐러(특히 아나)만 자르고 살아돌아와줘도 그 턴에서 상대 탱커는 바로 고깃덩어리가 되고 겐지는 용검으로 충분히 할 일을 한 거다. 메르시까지 끊어주면 그 턴은 캐리했다고 봐도 무방.\n같은 근접계열인 디바나 리퍼, 트레이서는 먼거리의 적에게도 딜을 미약하게나마 넣을 수 있지만, 라인하르트의 망치 길이는 4m로 겐지의 표창 유효사거리(10~15m)나 용검 사거리(5m)보다 짧고, 망치 길이보다 먼 적에게는 피해를 아예줄 수 없다. 화염 강타가 있지만 맞히기 쉽지 않으며 이 마저도 튕겨질 수 있다.',
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
      "note":
        "갈고리 6초 호그워치 시절에는 끌렸다면 무조건 죽었고, 갈고리를 한번 막아도 튕겨내기 쿨 돌기 전에 또 날아와서 윈스턴과 동급 또는 그 이상의 하드카운터였다.\n고철총이 너프된 지금은 살아나갈 여지가 그나마 있기는 하지만 다른 적들이 가만히둘 리가 없기에 여전히 위험하다. 설사 호그와 겐지만 독대하는 1:1 상황이더라도 일단 갈고리+평타 콤보를 맞은 데다가 깊숙이 끌려온 이상 호그의 유효사거리내에 있는 것은 마찬가지라서 재수없으면 벗어나려다가 평타 한 대 정통으로 더맞고 사망하는 경우도 있으므로 주의해야 한다.",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
      "note":
        "물론 용검으로 탱커부터 노리는 경우는 거의 없겠지만.\n숙련된 시그마 플레이어는 용검겐지의 질풍참이 빠진 걸 보고 들어올리기 때문에 본인이 질풍참으로 접근했는데 어디서 시그마 궁소리가 들린다면 그 용검은 뻘궁 확정. 아군이 CC기나 집중공격으로 궁을 캔슬시켰더라도 이미 겐지를 띄워버린 상태라면 용검 지속시간의 대부분이 쌩으로 날라간다.\n중력 붕괴는 사용 시 어그로도 심한 편이고 실패 리스크도 커서 낙사 위기가 아닌 한 생존기로는 잘 쓰지 않는다.",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "veryBad",
      "note":
        "로드호그-윈스턴, 레킹볼-위도우와 동급 또는 그 이상의 극상성이다.\n애초에 윈스턴과 겐지는 적으로는 극상성이면서도 아군으로는 시너지가 좋기 때문에 윈스턴의 픽률이 오르면 겐지의 픽률도 같이 올라간다.",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
      "note":
        "옵1 때는 자방과 주방을 각각 1번씩만 쓸 수 있어서 주방 쓴 거 보고 진입하면 됐지만, 옵2에서 방벽이 리메이크되고 자방과 주방 중 한쪽을 2번 사용할 수도 있어서 상대입장에서 방벽 계산이 더 까다로워졌다.",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
      "note":
        "이전에는 가시를 튕겨내서 역으로 해저드를 묶는 것도 가능했지만 잠수함 패치로 불가능하게 바뀌었다.",
    },
    {
      "target": "reaper",
      "rating": "neutral",
      "note":
        "많은 겐지 플레이어들이 근접에서 자신을 순살할 수 있는 캐서디나 리퍼같은 상대를 마주치면 일단 튕겨내기부터 켜는 경우가 잦은데. 이 심리를 이용해서 처음부터 스킬, 공격 등의 행동을 안취하고, 튕겨내기만 빼버리고 망령화는 아끼는 전략을 쓰는 리퍼 플레이어도 있다.\n단, 애매하게 거리가 좀 벌어진 상태에서 어설프게 튕겨내면 리퍼의 지속적인 피흡 때문에 오히려 겐지가 역관광당하므로 초근거리에서 튕겨내자.\n또한, 겐지가 궁극기를 시전하고 칼을 뽑는 잠깐 동안은 무방비 상태가 되는데, 그 사이에 바로 벌집이 될 수 있으니 주의.",
    },
    {
      "target": "mei",
      "rating": "bad",
      "note":
        "정확하게는 메이의 시야에 들어가면 안 된다. 최대한 피해야 하는 메이지만, 어쩔 수 없이 상대할 때는 수적우위나 사각에서의 견제를 이용해야 한다.",
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
      "note":
        '이전에는 겐지의 화력으로 생체장을 뚫기 힘들었지만 치감과 투사체 판정버프 이후 생체장이 있어도 겐지가 이길 확률이 크게 올라갔다.\n용검을 잘쓴다는 소리는 질풍참 쿨 초기화로 적들이 자신을 못맞히게 하는 것을 잘한다는 것인데, 100% 명중 전술 조준경이 켜지면 그런 플레이 다 필요없다. 튕겨내기를 써도 그 사이에 겐지는 360 가량의 딜로스를 유발할 수밖에 없기 때문에 전술 조준경 타겟에 들어간 겐지는 "죽게 되어 있다."\n궁극기충전량 자체는 솔저가 훨씬 높지만 광역 치유기가 있고 펄스 소총이 표창보다 딜을 누적하기 쉽기 때문에 비슷한 실력이라면 겐지보다 솔저의 누적 딜량이 훨씬 더 높다. 이 때문에 용검 타이밍이라면 상대 솔저도 이미 전술 조준경을 들고 있을 가능성이 높다.\n애초에 전술 조준경은 석양과 같은 순간화력이 아니라 지속화력인 데다가 발동시간도 꽤 길다보니 튕겨내기로 카운터할 수 없다.\n용검 사거리에 있다면 썰기-질풍참-썰기 국민콤보를 쓰면 된다. 만일 솔저의 발 앞에 멈췄다면 솔저가 화면을 틀 필요가 없으므로 전술 조준경 범위 밖으로 벗어날 수도 없고 그대로 죽는다.\n용검 겐지의 이동속도는 7.8, 솔저의 질주 시 이동속도는 8.25.',
    },
    {
      "target": "sombra",
      "rating": "good",
      "note":
        "트레이서는 역행의 쿨타임이 질풍참이나 튕겨내기보다 길어서 서로 스킬만 교환하고 살아돌아간 경우 겐지 쪽이 이득을 본다.",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
      "note":
        "그러나 순동기 체력이 350이라 우클릭 전탄을 5방이나 박아야 깨진다. 3.4초가량을 손해보고 시작하는 격.\n단, 광자 방벽을 넘어갈 경우 겐지와 자주 조합되는 힐러인 아나의 치유를 받을 수 없다. 사실 이것도 꽤 치명적인데 아무런 치유나 지원 사격 못 받는 솔로 용검은 팀합만 맞는다면 쉽게 흘리거나 잡는다. 튕겨내기로 한 명이 억까로 죽는 게 변수인데 시메트라는 광선과 포탑으로 이 변수까지 차단해버릴 수 있다.",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "veryBad",
      "note":
        "안란이 답도 없는 구데기였던 출시 초에도 겐지 표적등판으로는 종종 나왔다. 시메는 탱커를 지지면서 예열이 필요하고, 예열이 안 된 시메라면 겐지가 치명상까진 입혀볼 수도 있다. 에코는 광선 집중을 제대로 쓰기 위해 튕겨내기를 피해서 평타와 점착폭탄을 겐지에게 적중시키는 것이 어렵다. 숙련도가 낮거나 방심한 에코라면 겐지가 잡아낼 수도 있다. 하지만 안란은 체급도 낮지 않고, 판정 좋은 Shift-E 넣고 부채질 좀 해주면 겐지를 바로 녹인다.\n딜둠은 일단 겐지가 2층으로 도망가면 생존률이 많이 올라간다. 라이징 어퍼컷으로 쫒아올 수는 있지만, 겐지로 치면 질풍참과 같은 중요한 결정기이자 이동기인 라이징 어퍼컷을 2층의 겐지 쫒아가겠다고 쓰기에는 꽤나 아깝다.",
    },
    {
      "target": "ashe",
      "rating": "veryGood",
      "note":
        "대략 45미터 내외까지 250 영웅 헤드 투탭이 난다.\n다이너마이트 최대 피해 150중, 애쉬의 자가 피해는 50%만 적용된다.\n겐지는 겐트벤 3대 섭딜 중에서 유일하게 다이너마이트의 화상 피해를 자력으로 제거할 수 없다. 힐러가 구해주더라도, 겐지의 스킬에 방울 등 힐자원까지 빠질 가능성이 높아 스킬 교환비에서 큰 손해를 본다.\n단 튕겨낸 다이너마이트를 겐지가 표창으로 즉시 격발시키는 건 불가능하다. 겐지 또한 자신이 튕겨낸 다이너마이트의 폭발 범위에 있다면 자가 피해를 입으므로 다이너마이트를 튕겼으면 잠깐 빠지는 것이 좋다.",
    },
    {
      "target": "echo",
      "rating": "veryBad",
      "note":
        "파라와는 겐지를 상대하는 방법부터가 다른데, 파라는 사거리와 공중 기동력으로 끊임없이 압박한다면 에코는 그냥 날아와서 단숨에 죽여버린다. 물론 그런 만큼 에코 쪽의 리스크도 높다.\n파라는 스킬 3개와 지속 능력이 전부 이동기라서 겐지가 붙어도 쉽게 거리를 벌릴 수 있지만 에코는 비행이 쿨타임일 때 겐지와 근접한다면 벗어나기 어렵다.",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
      "note":
        "부득이하게 2단점프를 해야 한다면 2단 점프 후에 좌우로 움직이면서 조준을 방해하거나(머리를 숙이고 있어서 헤드샷을 잘맞는다는 게 장점이 되는 부분으로 머리를 숙이고 있기 때문에 마우스를 좌우좌우 하면 헤드샷 피하기가 쉽다. 선회전 하면서 점프하는 것도 헤드샷 맞는 것을 상당히 낮출수 있다.) , 벽을 타자. 웬만한 위도우메이커라도 그 정도 무빙까지는 잡아내지 못한다. 단, 벽타기의 경우 벽타는 경로를 마우스로 조정할 수 없으므로(...) 한 벽을 너무 오래 타면 얻어맞을 수도 있다.\n이건 초보 위도우메이커가 상대라도 운이 많이 따른다. 초보 위도우메이커들은 겐지가 은밀히 접근하면 인지하지 못하는 경우가 다수이므로, 그냥 좌클릭 헤드샷+질풍참 콤보로 순살하자. 굳이 튕겨내기를 쓰려다가 돌격소총 맞고 역관광탈 수가 있다.\n저격에 거리비례 피해 감소가 없던 시절에는 말도 안 되는 거리에 자리잡고 있으면 겐지도 뭘 어떻게 할 수 없는 경우가 많아서 헤드 잘 쏘는 위도우는 사실상 무상성 캐릭터였다. 피해 감소가 생긴 지금은 어지간하면 겐지가 금방 찾아올 수 있는 위치에 자리잡을 수밖에 없다.\n이런 경우는 역저격이 아니면 겐지 혼자서 위도우를 처리할 가능성이 적다. 오히려 무리해서 들어갔다가 처치에 실패하면 적진에 너무 깊게 빨린 겐지가 죽는다. 아군 탱커가 윈스턴 디바 레킹볼 중 하나라면 이들과 함께 움직이고, 같이갈 파트너가 없다면 팀원들에게 난전을 유도하는 등의 방식으로 겐지에게 끌릴 어그로를 줄여달라고 하자.",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
      "note":
        "덫에 걸리면 상대 팀이 어지간히 멍청하지 않은 이상 뻘궁 확정인 데다 지뢰로 날려버리면 최대 120딜+질풍참 쿨타임 초기화 실패+공중에서 1~2초를 허비하게 되고 점사당하기 딱 좋은 상태가 된다. 타이어로 용검을 카운터치는 상황은 자주 일어나지는 않지만 주의할 것. 체력 500 뽕검이어도 최대 600의 피해를 주는 타이어 앞에선 장사없다. 칼질 한 방이면 타이어가 터지지만, 칼질 두 번 한 사이에 생기는 딜레이 동안 붙어서 터뜨리거나 겐지의 시야 밖에서 굴러온다.",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
      "note":
        "캐서디도 모든 섭딜을 잡아먹지만 겐지만큼은 어렵다.\n겐지가 튕겨내기를 쓰는 도중에 머리 위에다가 섬광탄을 투척하면 섬광탄의 스플래시로 인해서 방해 효과가 들어온다. 이걸 맞으면 겐지의 질풍참이 막히는 데다 점사당하기 좋은 먹잇감이 되어버린다.\n의외로 위도우는 맹독 지뢰와 앏은 피격판정, 따발총은 튕겨내도 별 피해를 못주는 점 때문에 꽤 까다롭다.",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
      "note":
        "용광로의 피해량의 초당 190이고 겐지의 체력은 250으로 풀피일 때 약 1.315초 이상 밟으면 겐지는 죽는다.\n다만 리메이크 이후로 포탑의 체력이 줄어들어서, 포탑 자체는 처리하기가 전보다는 쉬워졌다.",
    },
    {
      "target": "tracer",
      "rating": "neutral",
      "note":
        "수직 기동성은 겐지, 수평 기동성은 트레이서가 더 뛰어나다.\n다만, 좁은 곳이나 코너에서 갑자기 마주쳤을 때 튕겨내기를 켜면 자기가 쏜 거 다 쳐맞고 죽거나 딸피가 되어 시간 역행으로 연명하는 트레이서를 볼 수 있다. 펄스 쌍권총은 강습모드 바스티온과 마찬가지로 연사 제어가 힘들기 때문에 탄창 욕심이 많은 트레이서 유저들은 튕겨내기에 종종 죽기도 한다.",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
      "note":
        "핑 키로 거리 재고 머리 조준해서 질우근 원콤을 내볼 수는 있지만 줌 켜고 가만히 있는 애쉬나 위도우한테 하기도 리스크가 높은 행동을 날아다니는 파라에게 성공할 가능성은....그나마 뒷라인 잡으러 혼자온 파라라면 팀원이 지원해 준다는 조건 하에 견제용으로 할 만하지만 포킹 중인 파라한테 달려들었는 데 실패한다면 그대로 적의 딜각에 노출되고 사망 확정이다.\n디바 + 에임이 뛰어난 위도우나 애쉬 등\n용검으로 파라나 에코 썰기는 프로나 고수 스트리머들에게도 어려운 플레이라 자주 등장하는 장면이 아니다.",
    },
    {
      "target": "freja",
      "rating": "neutral",
      "note":
        "공중에서 시야가 고정이 되지 않는 파라, 에코와는 달리, 정조준 사용 시 발생하는 슬로우 효과가 전황 파악에 큰 이점으로 작용한다.",
    },
    {
      "target": "hanzo",
      "rating": "good",
      "note":
        "그래도 한조 유저의 입장에서 겐지를 맞출 수 있는 순간이 몇 있는데, 대표적으로 착지와 2단점프 체공이다. 질풍도 안 닿는 거리에서 한조랑 눈 마주친 채로 이단 점프하는 건 자살 행위다.\n아니면 한조도 겐지 따라서 미친 듯이 벽 타고 이단점프 쓰면서 화살을 갈겨대든가. 서로 정신없이 위아래로 움직이는 상황에서 튕겨내기로 화살을 맞출 가능성은 거의 천운에 가깝다.\n의외로 겐지의 히트박스는 작지 않으며 정면에선 구부정한 자세 때문에 머리를 맞기 쉽다.",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
      "note": "땅에서 올려다보면 단상 위에 있는 영웅의 몸이 잘 보이지 않는다.",
    },
    {
      "target": "lucio",
      "rating": "neutral",
      "note":
        "평타: 루시우 DPS 80, 겐지 우클릭 DPS 약 119. 스킬 피해: 루시우 밀쳐내기 25 겐지 질풍참 50. 근데 쿨타임 감안하면 스킬로 주는 피해는 똑같다. 질풍참 쿨타임 8초에 1회당 피해 50. 밀쳐내기 쿨타임 4초에 1회당 피해 25. 8초 동안 넣을 수 있는 스킬 피해는 50으로 같다. 현재 소리 파동이 버프먹어서 피해가 45가 된지라 두 번 맞추면 90뎀이다..\n덤으로 보보봉은 겐지의 수리검 보다도 느린지라 더 맞추기 힘들다.",
    },
    {
      "target": "mercy",
      "rating": "veryGood",
      "note":
        "잘하는 메르시는 질풍참을 자신에게 긋게 낚시하고 멀리 있는 아군에게 수호천사 가속도로 빠르게 도망간다. 질풍 쿨 초기화를 잘 이용하지 못하는 용검 겐지는 이동속도 조금 빠른 라인하르트와 다름없다.",
    },
    {
      "target": "moira",
      "rating": "bad",
      "note":
        "건물의 높이가 높은 지브롤터나 골목이 많아 시야에서 사라지기 용이한 도라도에서는 모이라를 떨쳐내기 좋지만, 건물 높이가 낮은 쓰레기촌에서는 2층으로 벽 타고 올라가도 흡혈을 끊기 어렵다.\n질풍참은 15m이지만, 모이라의 소멸은 18m에, 기본 공격은 20m다. 수직 구조물이 없는 개활지에서 모이라가 작정하고 흡혈하면 못 도망간다.\n여담으로 모이라의 생체 구슬은 튕겨내기로 아군의 것으로 만드는 일이 가능하지만 튕겨내기를 이리저리 튀어다니는 모이라 구슬에 맞춰가며 쓰는 건 힘들 것이니 큰 의미는 없다. 일직선으로 날아오는 구슬이라도 흡혈 효과가 시작되는 범위가 튕겨내기 범위보다 넓고, 효과가 발동되면 투사체 속도가 느려져 제자리에서 구슬 튕기겠다고 뻐기다가 반피 가까이 빨린다. 물론 초근접에서 모이라가 구슬을 날려버렸거나 해서 우연히 튕겨내는 데 성공했다면 이득이겠지만 애당초 제정신인 모이라는 겐지랑 초근접에서 싸워주지도 않고, 자기 구슬이 튕겨지면 소멸을 사용해 적진으로 물러나 적군에게 범위힐을 넣거나 용검각이 보이는 순간 융화를 날려 킬각을 전부 박살내버릴 것이 자명하다.\n대략 윈스턴이 자리야를 카운터치는 구도와 비슷하다. 자체체급으로는 절대 이길 수 없지만 본대와 갈라먹거나 스킬을 무의미하게 소모시키는 쪽으로 고립을 유도하는 방법. 팀합이 안 맞는다면 윈스턴도 자리야를 어떻게 할 수가 없다.",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
      "note": "부조화, 부패 구슬, 방패 밀쳐내기, 생체 수류탄, 수면총.",
    },
    {
      "target": "brigitte",
      "rating": "bad",
      "note":
        "거기다 모이라는 주류픽 자리에 있던 적이 많이 없었지만 브리기테는 주류가 아니었던 때를 찾기 힘들다.",
    },
    {
      "target": "ana",
      "rating": "good",
      "note":
        "아나를 상대할 때 생체 수류탄은 거의 무조건 맞는다고 봐도 무방하다. 총 한 발과 힐밴을 맞았다면 총합 150 피해로 체력이 100밖에 남지 않아 후속타에 사망 확정이다.\n방울이나 주방 등 힐밴을 지울 수 있는 스킬 지원이 들어올 수 있거나, 아나를 함께 공격해 줄 아군이 있어 질풍참을 그어도 확정킬이 가능한 경우\n특히 용검 뽑다가 맞았다면 눈치없는 적이 깨워주지 않는 이상 용검 지속시간 중 5초가 생으로 날아가버리며, 남는 1초라고 해봐야 깨어나는 순간 적들에게 집단구타맞고 죽을 게 뻔하니 사실상 뻘궁 확정이다.\n보통 용검의 최우선 타겟이 아나지만, 위협적인 히트스캔 영웅이나 다른 지원 영웅을 최우선으로 지정할 때도 있는데 이들을 상대할 때 수류탄이 날아오고 적에게 아나의 치유가 들어오면 HPS가 용검을 상회하기 때문에 아무리 썰어도 죽지 않고 겐지만 나가떨어지게 된다(...) 만일 아나가 용검에 썰리는 팀원에게 수류탄에 나노까지 주고 풀케어를 먹이면 뽕검이어도 못 잡는다. 때문에 반드시 아나를 첫 목표로 노려야 하며 어쩔 수 없이 다른 적을 노리는데 아나의 케어가 들어온다면 재빨리 아나를 찾아 죽여야 한다.\n1대1 상황이라면 수면총을 튕겨내는 것이 좋지만 팀파이트 또는 1대 다 상황이라면 생체 수류탄을 튕겨내는 것이 이득이다. 다수를 상대하는 상황에서 아나에게 수면총을 맞히고 머리를 조준할 만한 여유가 없다. 물론 둘 다 만만히 튕겨낼 수 있는 스킬이 아니고 수류탄은 보통 바닥에 까므로 튕기는 건 불가능에 가깝다.\n아나를 포함한 2지원 체제를 심해 양민 조합인 1지원 1공격으로 바꿔 버리는 이치이다.",
    },
    {
      "target": "wuyang",
      "rating": "good",
      "note":
        "개활지가 아닌 겐지가 벽을 탈 만한 구조물이 있는 곳이나 좁은 실내라면 조금 얘기가 달라지지만, 그런 지형에선 사실 대부분의 힐러들이 겐지의 밥이다.\n굳이 비교하자면 스킬이 빠지기 전까지는 루시우 못지않게 잡기 힘들지만 스킬이 빠진 우양은 송하나만큼 잡기 쉽다. 아나의 경우는 스킬이 빠지기 전엔 겐지로서 까다로운 상대이지만 잡아볼만은 하다. 다만 역관광에 주의. 우양의 경우는 역관광 당할 일은 적지만 스킬이 빠지기 전에는 잡을 엄두조차 내지 못한다.",
    },
    {
      "target": "illari",
      "rating": "neutral",
      "note":
        "투사체 크기가 큰 편이라 일리아리가 바닥에 쐈어도 튕겨내기 판정 범위에 들어와 반사되는 경우가 종종 있다.\n태양석의 쿨타임이 길지만, 순간 케어용 자원인 생체 수류탄이나 정화의 방울과는 달리 토르비욘 포탑과 같이 상시 사용하는 오브젝트여서 오히려 겐지의 딜로스를 유발한다.",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
      "note":
        "부조화 붙은 발차기가 뽕 받은 질풍참과 피해량이 같다(75)....\n부조화가 붙으면 250 영웅은 200의 피해량이 들어오면 사망이다. 역행 없는 트레이서가 되어버리는 꼴.",
    },
    {
      "target": "juno",
      "rating": "good",
      "note":
        "최대 유도 거리가 무려 225m인데 이 정도면 사실상 무한대라 딸피일 때 질풍참으로 도망가도 주노의 시야에 있다면 맞고 죽게 된다.",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "reaper": [
    {
      "target": "d-va",
      "rating": "neutral",
      "note":
        "망령화가 없다 한들 그림자 밟기로도 피할 수 있다. 자폭 사거리 밖이나 엄폐물로 가는 것도 좋지만, 실력이 되면 제자리 이동으로 피하고 공격을 이어갈 수도 있다.",
    },
    {
      "target": "domina",
      "rating": "veryGood",
      "note":
        "방벽 배열과 판옵티콘은 말할 것도 없고, 리펄서로 기절당하면 아예 궁이 끊긴다. 수정조차 이속이 느려진 리퍼는 지속딜을 다 맞아 줘야 하고 도미나는 그 피흡을 그대로 받아먹으며 조금이라도 숨이 트이기 때문에 어떤 방법으로든 그냥 죽기 딱 좋다.",
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
      "note":
        "현재는 궁극기 범위 내에 모든 적이 있어야 피해를 무시할 정도의 자가 치유가 된다. 28×4-100=12%",
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
      "rating": "neutral",
      "note":
        "리퍼의 사거리는 5~10m, 솔저는 최대 피해가 유지되는 사거리만 30m로, 솔저의 유효 사거리는 리퍼의 약 4~5배나 된다.",
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
      "note":
        "물론 가뜩이나 팔이 짧은 리퍼가 밥 때려잡겠다고 매달리는 것부터가 화력 낭비다.",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
      "note":
        "하지만 사이펀 블라스터의 자가 회복량은 발당 15인데 치유감소 때문에 실제로는 10.5니 초당 7발을 다맞춰도 73.5 회복으론 죽음의 꽃 딜량을 못 버틴다.",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
      "note":
        "단, 타이밍이 안 맞으면 위도우의 헤드에 그대로 날아갈 위험성은 여전하다.\n그나마 위도우의 거리별 피해 감소가 심해져서 체력 300인 리퍼는 헤드맞아도 살 확률이 조금 생겼다.",
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
      "note":
        "다만 토르비욘의 우클릭도 산탄인지라 접근에 성공해도 운없으면 역으로 따인다.",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
      "note":
        "똑같이 파라에게 취약한 정크랫, 겐지, 벤처는 어느 정도 체공이 가능하기 때문에 한번쯤 눈은 맞춰보거나 거리와 타이밍이 정확히 맞는다면 치명적인 피해를 꽂을 수 있다. 그러나 리퍼는 체공 자체가 불가능해서 파라는 고도가 내려가는데 리퍼가 그밟으로 파라보다 더 높은 지형에 올라가는 상황 말고는 방법이 없다. 이마저도 긴박한 방아쇠 특전이 없다면 유효타가 안 나는 경우가 많다.",
    },
    {
      "target": "freja",
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
      "note":
        "물론 루시우가 같이 휘말린다면 소리 방벽을 쓰더라도 뛰어오르는 모션이 나오는 동안 200의 피해가 박히므로 허무하게 갈려 나간다.",
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
      "note":
        "아니면 교환한 셈 쳐도 되긴 하다. 리퍼의 궁극기와 젠야타의 궁극기의 밸류를 비교하면 서로 교환했을 때 기분이 나쁜 쪽은 당연히 젠야타이다. 물론 리퍼가 죽을 가능성이 높다는 게 문제긴 하지만...",
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
      "note":
        "단 벤데타가 풀피여야 한다. 수호 태세의 피해 감소율 75%로 자폭(1000)의 피해를 크게 감량해도, 결과적으로 250이라는 피해는 결코 작지 않다.",
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
      "note":
        "벤데타의 궁극기는 자리야의 방벽도 관통가능하지만 방벽의 내구도만큼은 상쇄된다.",
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
      "note": "DPS로 계산하면 용검(157)보다 벤데타의 기본 공격(176)이 더 높다.",
    },
    {
      "target": "reaper",
      "rating": "bad",
      "note":
        "벤데타와 다르게 리퍼는 태생이 안티탱커로 태어난 캐릭터였고 극단적으로 짧은 사거리를 막강한 DPS로 보완하는 캐릭터다. 덕분에 벤데타와 다르게 대다수의 돌격군을 상대로 반 이상 먹고 들어가는 캐릭터고 심지어 자신의 사거리 안에서 정직하게 싸워주면 어떤 캐릭터를 상대로도 이길 수 있는 캐릭터다. 이는 벤데타 역시 예외가 아니며 따라서 유일하게 리퍼보다 나은 부분인 기동성과 범위 공격 능력으로 치고 빠지는 전투를 해야 한다. 당연하지만 리퍼가 보고 있지 않은 쪽으로 치고 빠져야 리퍼랑 비벼볼 수 있다.",
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
      "note":
        "맹공은 지속 시간 안에 공격을 못 넣으면 레벨0이 되어버리는 탓에 순동기로 적이 전원 도망가버리면 거슬린다.\n(기본 위력 400 + 광자 방벽 내구도 4000 × 추가 피해 0.5만큼) × (나노 1.5 + 공버프 1.3) = 4320.",
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
      "note":
        "오버워치 내부에선 영웅의 근본적인 세팅으로 인해 숙련도가 극단적으로 차이 나지 않는 이상 질 수가 없는 상성이 존재한다. 대표적으로 로드호그와 윈스턴, 레킹볼과 위도우메이커의 상성이 있다.",
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
      "note":
        "벤데타가 워낙 공격력이 높은지라 아군을 끌고와도 되레 2대1이 아닌, 반대로 원 플러스 원(&맹공 패시브 추가)가 돼 버리기도 한다. 이러면 위버 유저는 끌고 온 아군에게 욕을 한바가지 먹게 된다.",
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
      "note":
        "DPS가 65로 윈스턴의 테슬라 캐논 기본 발사의 70보다 낮지만 생체 구슬과 함께 사용하면 둘이 더해 115가 된다. 그리고 자동 에임 보정이 있기 때문에 체력이 많지 않은 벤테타가 아무리 무빙을 뛰어도 쪽쪽 빨리며, 모이라의 생체 손아귀의 자가 치유량도 초당 30이기에 상황에 따라 불리해지기도 한다.\n심지어 모이라의 주요 특전중 반전이 별 효율이 안 나오기에 거의 모든 모이라가 환영 걸음을 채용하는데, 이 특전이 열린 순간 소멸의 지속시간이 0.5초 늘어나고 점프 높이가 50% 상승하기에 모이라의 기동력은 벤데타가 따라잡기도 힘들만큼 수직으로 상승한다. 게다가 모이라의 숙련도가 높다면 소멸을 쓸 때 지형지물을 이용한 슈퍼점프도 가능하기에 벤데타는 닭 쫒던 개가 되는 수밖에 없다.",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
      "note":
        "바티스트 유저가 숙련도가 높으면 건물의 입구쪽으로 불사장치 던져서, 갈래내는 칼날이 벽은 못뚫는 점을 이용해서 살아남을 수도 있다.",
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
      "note":
        "아니면 교환한 셈 치면 된다. 궁극기를 일반 스킬로 막는 건 손해이긴 하지만 갈라내는 칼날 자체가 좋은 궁은 아니라서 더 좋은 궁극기를 가진 팀원이 있을 경우 그 아군을 위해서 대신 방울을 빼줄 수도 있기 때문.",
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
      "note":
        "잠복은 벤처의 몸이 완전히 땅속으로 잠기기 직전까진 히트박스 판정이 지상에 있기에 발 한짝이라도 지상에 보인다면 무조건 얻어맞는다.",
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
      "note":
        "자탄에 묶이면 지면에서 살짝 떠오르게 되는데, 이러면 궁극기를 사용해도 자탄 때문에 지면을 칠 수 없어서 공격이 안나간다.\n정커퀸은 살육 돌진 중에 자탄에 묶여서 날릴 수는 있다.",
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
      "note":
        "사실 순간이동기만 빠지면 벤처가 간단히 이기지만, 이미 설치된 순동기로 무빙하며 벤처의 기술을 회피하고 감시 포탑의 경보로 역포커싱을 가할 위험도 있다. 약 20m를 이동하는 벤처의 기술 두 개는 순간이동기의 무제한 30m 이동을 쫓기 버겁지만 내구도가 있는 설치물이라서 때려부수면 그만이기도 하다.",
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
      "rating": "neutral",
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
      "note":
        "물론 벤처의 궁극기는 4번을 원할 때마다 쓸 수 있으니 비트가 좀 빠진 뒤 쓸 수도 있지만, 상당히 짧은 벤처의 궁 지속 시간을 갉아 먹혀 킬 결정력이 떨어진다. 다만 지각 충격은 맞으면 공중에 뜨는데, 땅에 찍어야 발동되는 소리 방벽 특성상 벤처가 소리 방벽을 쓰느라 점프한 루시우를 먼저 맞추어 뻘궁으로 만드는 것도 가능하다.",
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
      "note":
        "현재 초월의 회복량이 대폭 상승해서 공버프를 받아도 뚫을 수 없다.",
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
      "target": "ana",
      "rating": "good",
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
      "note":
        "그나마 다행히 키리코 유저들 상당수는 더치명적인 힐밴과 수면, 동결을 주로 정화하고 화상은 되도록 힐로 때운다.",
    },
  ],
  "tracer": [
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
      "note":
        "보통 지원가 암살을 갔다가 근처에 있던 윈스턴과 대치하는 상황이 많으므로, 제 3자인 지원가가 윈스턴에게 지원을 퍼붓는 경우가 많아서 교전시간을 길게 끌면 끌수록 의외로 종종보이는 상황이다. 전투시간이 길어진다 싶으면 깔끔하게 포기하는 게 좋다.",
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
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
      "note":
        "근거리에서 헤드샷 단 한 발만 맞거나 골목에서 잘못 마주치거나 죽음의 꽃에 휘말리면 어느 경우든 순식간에 킬캠으로 사출당한다. 특히나 에임 좋은 리퍼는 마주치는 순간 헬파이어 샷건으로 머리에 정중한 인사를 날리기 때문에 점멸이나 시간 역행을 통해서 최대한 빨리 거리를 벌려 멀리서 갉아먹으면서 상대해야 한다. 또한 리퍼가 작정하고 높은 체력과 장탄수가 많은 산탄총을 앞세워서 싸움을 걸게 되면 트레이서의 체력도 많이 깎이거나 죽게 되니, 웬만하면 망령화를 빼는 선에서 만족하자.\n굳이 리퍼를 잡아내야겠다면 체력이 많이 깎인 리퍼가 망령화를 쓰고 회복 키트를 먹으러 달려가는 타이밍에 점멸로 앞질러가서 회복 키트를 뺏어먹은 뒤 마무리 지어야 하지만 리퍼 근처에 서브힐러가 있다면 궁극기 채운 걸로 만족하는 게 좋다. 게다가 리퍼 패시브의 버프로 1:1에서 싸워도 리퍼의 체력은 사실상 405, 트레이서는 350으로 리퍼가 체력, 화력면에서 우위를 가지지만, 얇고 재빠른 트레이서가 그 정도 피해를 피하는 것은 어렵지 않으므로 최대한 중거리에서 싸워야 하는 것만 잊지 말자.",
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
      "note":
        "하지만 실제론 땅파는데 0.7초 걸리는 탓에 펄스 붙은 걸 0.3초 안에 반응하거나 미리 예상한 거 아닌 이상 맞는다.",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
      "note":
        "하지만 직격시키기도 힘들은 로켓인지라 견제용으로 쏘기도 한다. 운좋아서 스치기라도 하면 트레이서는 역행 쓸 수밖에 없으니.",
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
      "note":
        "반대로 역행 빠진 상태에서 애쉬에게 다이너마이트 맞은 이후 정말 약한 공격 제외 단 한발(25피해 이상)이라도 맞고 힐팩 못 먹으면 사망확정이다.",
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
      "note":
        "폭파 범위가 넓어서 십중팔구 역행이 빠진다고 봐도 좋고, 2방이나 있다.",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
      "note":
        "첫발은 즉발이므로\n1초 동안 220피해, 1초 동안 장전, 남은 55HP는 0.25초이니 도합 2.25초동안 맞춰야 한다. 에임실력이 비등하다면 명백하게 트레가 더 힘들다. 전탄명중시키려고 접근한다? 캐서디 입장에서도 트레머리가 더크게보인다라는 거 잊지 말자. 재수없으면 헤-근으로 짤린다. (동실력대 매칭이라면 트레이서가 풀피상태에서 캐서디를 마주하는 경우가 의외로 적다. 어느 정도 티어 이상이라면 힐러들도 발악할 테니까. 그 이하면 뒤통수를 못잡아서 멀리서 후추만 뿌리거나 아니면 정면에 대놓고 들이대서 짤릴 거고.)",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
      "note":
        "날개까지 판정에 들어간다.\n단 겐지는 그놈의 무기 성능 때문에 파라와 고도가 맞아도 유효타를 넣기 어렵다.",
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
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
      "note":
        "무기로 아군을 치유하면 치유량의 40%만큼 스스로를 치유하는 패시브이다.",
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
      "target": "wuyang",
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
      "note":
        "그렇다고 키리코에게 펄스 폭탄 붙이면 스킬 두개중 하나만 남아있어도 피할 수 있어서 뻘궁이 되고, 트레이서가 자꾸 귀찮게 하면 벽타기로 2층으로 도망가버리니 사실상 키리코가 살아있으면 펄스 폭탄이 반쯤 봉인된다.",
    },
  ],
  "sojourn": [
    {
      "target": "d-va",
      "rating": "bad",
      "note": "지속 시간도 합치면 디바는 5.5초, 소전은 8초다.",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
      "note":
        "파워 블락을 켜고 1초 남짓만 비벼줘도 살벌한 찰칵 소리를 들을 수 있다.",
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
      "target": "freja",
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
      "target": "illari",
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
      "rating": "neutral",
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
      "note":
        "일단 기본적으로 라인하르트의 방벽의 내구도는 1500으로 시그마의 실험용 방벽의 내구도 700의 두 배가 넘는 수치이다. 내구도 회복 속도도 라인하르트가 방벽을 회수하고 2초 후, 초당 160으로 시그마의 방벽을 회수하고 2초 후, 초당 85의 두 배에 살짝 못미치는 수준이다. 게다가 세로 길이는 시그마의 실험용 방벽이 아주 조금 더 길지만 가로 너비는 라인하르트의 방벽이 꽤나 더 크다. 이것들은 어림잡아서 이야기하는 것이 아니라 수많은 워크샵 실험들과 공개된 공식적 수치를 가지고 이야기 하는 것이다.",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
      "note":
        "전탄 헤드 기준 4발만에 제거가 가능하다. 전탄 헤드 3발에 근접 공격으로도 잡는다.\nB.O.B.은 재장전을 하지 않지만 앞서 말했듯 적이 죽거나 시야에서 사라지면 다른 쪽 팔의 총구로 공격한다.",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
      "note": "충격 샷건이 발사는 되지만 애쉬 본인이 넉백되지는 않는다.",
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
      "note":
        "망령화 시 이동속도가 증가하기는 하지만 망령화는 이속 증가와 동시에 피격 무효화 판정까지 가진 리퍼의 유일한 생존기인 만큼 이동기로 막 써선 안된다.",
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
      "note":
        "시즌 9에서 추가된 딜러 패시브 치유감소는 다이너마이트에도 적용되니 생체장의 초당 40힐*5초로 완전 상쇄는 안 되고 쿨타임도 더 기니 추가 지원이 없으면 솔저가 손해다.\n정말로 엄청나게 준수하다. 줌인이 없다면 저격수 포지션인 위도우랑도 비벼볼 만한 수준이다.",
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
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
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
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
      "note":
        "만약 애쉬에게 가장 이상적인 캐서디의 공격력 감소가 최대치이면서 애쉬의 공격력 감소는 전혀 없는 35m에서 교전이 벌어진다고 가정하면 캐서디의 피스키퍼 단발은 21, 애쉬의 바이퍼 정조준은 75의 피해이다. 때문에 캐서디가 애쉬를 세 대 쏴도 애쉬가 한발을 맞추는 것이 더 이득이다.\n둘 다 높은 히트스캔 단발 피해량을 갖춘 공격군이기 때문에 둘 중 하나를 잘할 경우 처음에 감만 익히고 나면 나머지 하나를 잘할 수밖에 없다. 한 영웅을 고집하기 보다 유동적으로 둘 다 할 수 있는 것이 좋다.\n정확히는 4.8333333.... 초. 처음 2초간 초당 150 + 이후 초당 300. 2*150 + 300*2.8333333.... = 1150\n때문에 캐서디 팀에 방벽과 같은 보호수단 혹은 나노 강화제와 같은 강화 수단이 있으면 캐서디의 궁극기가 유리해지기도 하지만 사실상 이런 상황이 나오기 쉽지 않으므로 애쉬의 궁극기가 조금 더 여러면으로 유용하다.",
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
      "target": "freja",
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
      "note":
        "다만 메르시가 빈사 상태가 아니라면 크게 의미가 없는 피해다. 메르시는 아군을 치유하면 '연민의 치유' 패시브를 통해서 메르시가 제공하는 치유의 40%를 본인의 체력으로 회복할 수 있는데, 지원가와 돌격군이 준 피해를 치유할 때는 초당 22의 체력을, 공격 영웅이 준 피해를 치유할 때는 초당 16의 치유를 받기 때문에 다이너마이트를 맞고도 좀비처럼 체력을 유지할 수 있다.",
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
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
      "note":
        "새롭게 생긴 특전 시스템으로 인하여 아나가 인간사냥꾼을 찍을 때에는 조심해야 한다. 150이라는 피가 확 닳기 때문에 예상치 못하게 의문사당하는 경우가 꽤나 많다.\n거의 모든 경우 40m 이내에서 교전이 발생하지만 그 이상의 초장거리 교전이 발생할 때에는 위도우메이커를 주로 사용한다.",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
      "note":
        "추후 패치를 통해서 바뀔 수 있지만 일리아리의 태양석의 체력은 125로 대부분의 경우 애쉬의 다이너마이트 하나만으로 파괴할 수가 있다. 만약 다이너마이트가 끝에 걸쳐서 터져서 최소 폭발 피해를 가했다고 하더라도 태양석의 체력은 5밖에 남지 않으며, 일리아리는 아군에게 맞춰서 끊임 없이 태양석을 옮겨야 하는데 이에 크게 제약이 가해지기 때문에 큰 문제가 되지는 않는다.",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
      "note":
        "젠야타의 머리 부분은 생각보다 그렇게 큰 편은 아니지만 몸통 부분이 너무나 큰 편이어서 몸만 노려도 젠야타는 아파하며 어차피 이동기가 단 하나도 없기 때문에 머리를 조준하는 것도 어렵지 않다.\n다른 힐러들의 경우 모이라의 소멸 키리코의 순보와 방울 등이 있고 이렇게 뛰어난 생존 관련 유틸리티를 가진 힐러가 아니더라도 다들 하나씩 스스로 치유하는 기술이 하나씩은 있다. 물론 젠야타는 체력의 상당 부분이 보호막이기 때문에 자가 치유가 빠른 편이지만 애쉬의 다이너마이트는 지속피해이기 때문에 이 점을 완벽하게 카운터한다.",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
      "note":
        "사실 키리코를 픽하는 이유는 러쉬 또는 다이브 조합에서의 뛰어난 생존기인 순보를 통해서 다른 힐러들은 따라가기 힘든 상황에서도 아군을 지원할 수 있다는 점과 강력한 궁극기인 여우길의 밸류 때문에 쓰는 것도 있지만, 가장 큰 이유는 상대 메이, 아나, 정커퀸, 솜브라와 같은 치명적인 상태이상 또는 펄스 폭탄 부착과 같은 죽는 것이 확정된 상황에서도 방울로 구할 수 있다는 점이다.",
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
      "note":
        "딜둠 시절에는 체력이 250이라 헤드샷을 맞추면 한방이었지만, 죽창은 주먹 한방 맞추면 위도우도 한방이었으며 저티어에서는 둠피스트를 못죽여 대놓고 들어가도 죽고, 고티어에서는 다양한 이동기 덕분에 헤드를 흔들어재끼며 기상천외한 루트로 날아와 암살하고 가는 등 상성상 열세였다.\n머리 맞추면 한번에 다채워줘버린다. 파워블락 중인 둠피를 헤드샷 넣기 어려우니 망정이지... 거꾸로 생각하면 파워블락 중에 느려지니 느긋하게 저격 풀충전 해서, 블락 해제되는 순간에 딱 맞추는 방법도 있다.",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
      "note":
        "하지만 라마트라의 방벽은 겨우 4초에다 지상에만 설치되지라 고지대에 자리잡은 위도우론 딜각이 제법 나온다.",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
      "note": "체력 200이니 망치질 두방에 녹는다.",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
      "note":
        "다른 영웅들은 위도우를 물러 오더라도 그만한 어그로로 반사이익을 볼 수라도 있지, 레킹볼은 이하의 내용처럼 오히려 손해가 막심하다.\n오히려 레킹볼 입장에선 위도우가 궁을 켜던 말던 아무런 상관이 없다. 켜든 말든 어차피 못잡으니까 위도우의 궁으로 레킹볼이 보는 유일한 디메리트는 위도우가 좀 더 잘 도망칠 뿐이지만 이마저도 압도적인 기동성 차이로 충분히 커버가 가능하며 혹시나 궁을 킨 위도우가 레킹볼을 무시하고 다른 적을 노린다면 그거야말로 레킹볼이 더 빠르게 위도우를 잡아버리면 그만이다.\n만약 아군에게 합류한다 쳐도 CC기에 당하지 않는 이상 적응형 보호막을 키고 살아나가는 것 만으로도 진형 붕괴 및 딜각 창출 효과가 있어 레킹볼 쪽의 이득이다.\n구 오버워치 때의 일이긴 하지만, 이 점이 극대화된 경기가 2020 오버워치 리그 플레이오프 서울 vs 광저우 경기였는데, Happy가 위도우를 드는 것을 확인하자마자 귀신같이 Marve1이 레킹볼을 꺼내서 집중마크, 존재감을 지워버리는 패턴을 반복하면서 Happy는 위도우를 내릴 수밖에 없었다.# 그것도 상대가 파르시를 쓰는 것을 눈 뻔히 뜨고 보면서도. 탱커가 1명으로 줄면서 이런 극단적인 경기는 줄어들었지만, 그만큼 아군이 위도우를 보호하기도 어려워졌기 때문에 위도우에게 여전히 까다로운 상대다.",
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
      "note":
        "투창 자체의 판정이 좋은 편이고 직격 피해도 높을 뿐더러, cc기의 경직 동안 헤드샷을 얻어맞아 순식간에 킬캠을 보게 된다.",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "good",
      "note":
        "사실 중력자탄이 날아와도 위도우메이커는 그다지 무서워할 것이 없다. 어차피 중력자탄의 피해는 없는 거나 다름없으니 잘 조준해서 여유있게 뚝배기를 날려주면 자리야 쪽이 중력자탄 낭비+리스폰으로 결과적으로 손해를 보기 때문.",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "bad",
      "note":
        "같은 딜타임이라면 질우근이 171인데 해저드의 덤벼들기+평타+근접 콤보는 최소 185다. 즉 체력 225 위도우는 해저드가 콤보시전하면 순삭이다.",
    },
    {
      "target": "genji",
      "rating": "veryBad",
      "note":
        "위도우가 갈고리로 도망갈 수 있는 범위가 질풍참에 비해서 매우 넓을 뿐더러, 설령 멀리 도망가지 못하더라도 눈을 마주친 상태에서 도망가는 위도우를 질풍참으로 쫓는 건 위험하다. 에임이 형편없다면 모르겠거니와 조금이라도 센스 있는 위도우는 도망가면서도 자신을 쫓는 상대의 빈틈을 노리기 때문이며, 그게 아니더라도 상대 팀원들이 쉽게 겐지를 쫓을 것이다.\n사실 그럼에도 겐지는 근거리에서 위도우를 암살할 수 있는 카운터 중에선 가장 상대하기 수월한 편이다. 윈스턴은 케어를 방해하는 구형 방벽을 사용하고 레킹볼은 공 상태에서는 헤드 자체가 사라지는 데다 트레이서는 점멸/역행에 몸도 작고 빨라 떨쳐내기가 쉽지 않지만 겐지는 이동기인 질풍참을 마무리나 도주용으로 남겨둬야 하고 튕겨내기도 크게 효용이 없다. 하지만 위도우는 딸피가 돼서 튕겨내기를 써버린 겐지한테 그대로 2초 동안 돌격소총을 갈겨대도 웬만해선 별다른 피해가 없다. 그리고 이게 의외로 중요한데, 공격 암살자 중에서는 유일하게 맹독 지뢰를 밟은 경우의 피해를 혼자서 수습할 수 없다. 겐지로 혼자 있는 위도우를 암살할 거라면 진입할 때 조금 주의는 해야 한다.\n이동기를 진입기로 쓰는 리스크가 너무 높은 겐지 특성상 위도우를 잡으러오는 데 걸리는 시간이 다른 카운터 영웅들에 비해서 제법 긴 편이다.",
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
      "note":
        "솜브라를 떨쳐내더라도 그동안 상대 팀에 저격을 못하니 잡으면 개이득, 죽지 않고 살아돌아오기만 해도 웬만해서는 위도우 혼자 두지 않고 팀원이 더 와서 솜브라를 견제했을 테니 이 부분에서 솜브라팀이 불리해지지는 않는다. 1대1로 물렸는데 돌격소총이 정말 잘박힌 경우가 아니고서야 위도우가 노려진 상황 자체가 답이 없다.",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
      "note":
        "풀차징 34발을 맞춰야 한다. 시메트라의 광자 방벽은 파라의 포화로도 일격에 지우지 못하니, 수치상 그렇다고 이해만 해두자. 정확히는 저격 34발은커녕 10몇방 쓸때즘이면 방벽이 퇴근한다.",
    },
    {
      "target": "ashe",
      "rating": "neutral",
      "note":
        "하지만 애쉬는 줌 풀으면 평타가 빠르게 나가기 때문에 줌 헤드샷 맞추자 마자 일반샷 날려서 이게 헤드샷이 날 경우이면 이 두방에 위도우를 잡을 수 있다.",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
      "note":
        "그러나 반대로 정크랫이 위도우의 포지션을 예상하고 고지대에 덫을 놓는 경우도 많으니 고지대에 갈 때는 조심하도록 하자.",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
      "note":
        "다만 포탑 사정거리 40m는 의외로 긴거리인지라 멀리서 저격하는 위도우도 타겟이 되긴 한다. 위치 들키는 걸 각오하고 팀원을 위해 풀충전 저격 두방으로 포탑을 부수는가, 포탑 무시하고 상대 머리를 따는가의 선택에 놓이게 된다. 둘 중 하나도 못하면 트롤이 되고.",
    },
    {
      "target": "tracer",
      "rating": "neutral",
      "note":
        "특히 근접 몸샷이었다면 바로 개머리판이 꽂히므로 죽느냐 사느냐는 아예 반응속도 싸움.",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
      "note":
        "상대가 파르시를 쓸 경우 캐서디나 솔저도 이를 상대하기 버거워지는데 반해 위도우메이커는 상대적으로 그런 것이 덜하다.",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "bad",
      "note":
        "위도우의 궁극기는 한조의 음파 화살보단 넒은 맵 전체 범위지만 궁극기라서 다시 쓰기에 많은 시간이 걸리고, 한조의 음파 화살은 스킬이어서 자주 쓸 수 있지만 범위가 좁다. 어느 쪽이 더 좋다고 하기엔 애매하나, 한조의 화살은 위도우를 상대로 한다면 위도우 딜각 밖에서 위도우 쪽으로 멀리 날려주면 되니 이건 되레 부분 상위호환이다.",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
      "note":
        "이선생의 방송 중에 나온 장면으로, 위의 무빙은 좌측 45도+d 와 우측 45도 a 를 번갈아 빠르게 하면 되는 무빙이다. 이런 변칙성 플레이가 그렇듯 꾸준한 연습이 필요하다.",
    },
    {
      "target": "mercy",
      "rating": "good",
      "note":
        "상대 메르시가 딱총을 즐겨(?) 뽑고 방벽등으로 엄호를 받고 있다면 원거리 대치상태에서 딱총 헤드에 위도우가 의문사하는 일도 종종 있다. 메르시 입장에서 아군에 위도우 대응 수단이 없고 잠깐 딱총을 들어도 아군이 안전하다면 실제로 이런 짓을 할 수도 있으니 유의.",
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
      "note":
        "일단 물방울 자체의 느린 탄속 덕분에 애초에 먼 거리에서는 멀리서부터 날아오는 물방울을 보고 대응하기 쉬워지며, 벽을 끼며 하는 일방적인 딜교환도 적의 위치를 어느 정도 예측하고 날리는 것이기 때문에 아예 먼거리에 있는 적을 날카롭게 포격하는 것은 매우 힘들다. 때문에 사실상 우양이 위도우메이커에게 유효한 견제를 하기 위해서는 우양도 위도우메이커의 사거리 내로 들어갈 수밖에 없다.",
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
      "note":
        "황야의 무법자, 섬광탄, 피스키퍼 모든 공격기가 디바의 방어 매트릭스에 카운터당한다.",
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
      "note":
        "마우가가 한 쪽 기관총만 쓰면 사거리가 30~40m지만 캐서디의 좌클릭은 20~30m이다.\n오리사의 공격은 속도가 느린 투사체라서 캐서디가 어느 정도 무빙을 하면 비교적 덜 얻어맞지만 마우가는 캐서디처럼 히트스캔인지라 아무리 캐서디가 무빙을 잘해도 히트박스가 크기에 다 얻어맞는다.",
    },
    {
      "target": "sigma",
      "rating": "bad",
      "note":
        "실험용 방벽과 키네틱 손아귀로 석양을 쉽게 차단할 수 있고, 느려진 캐서디에게 강착을 맞춰서 궁극기를 취소시켜버릴 수도 있다.",
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
      "note":
        "둘 다 전탄 명중을 한다는 가정하에 캐서디가 바이러스를 맞아도 솜브라가 먼저 죽는다.",
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
      "rating": "neutral",
    },
    {
      "target": "ashe",
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
      "note": "1초 동안 220피해, 1초 동안 장전, 남은 55HP는 0.25초",
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
      "note":
        "기본적으로 라이프위버의 DPS는 132인데 주요 특전 초월 개화를 찍으면 비록 투사체라는 한계가 있지만 DPS가 184.9가 된다. 캐서디의 기본 공격은 140이다.",
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
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
      "note":
        "섬난을 시도하면 우선 빠르게 불사 장치를 던져서 살아남고, 치유 파동으로 순식간에 딸피에서 풀피로 회복할 수 있다.",
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
      "rating": "bad",
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
      "rating": "good",
    },
  ],
  "hanzo": [
    {
      "target": "d-va",
      "rating": "bad",
      "note": "단, 궁극기는 용으로 변하기 전 한정.",
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
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
      "note":
        "폭풍 화살을 6발 모두 맞히면 헤드샷이 섞일 경우 2초간 500 이상의 피해를 넣는 게 가능한데, 그동안 라인하르트는 망치로 2대 때리는 게 고작이라 풀체력 한조를 잡을 수 없다.",
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
      "note":
        "보통 겐지는 기습한 상대가 본인을 인지하고 사격 자세를 취할 때 튕겨내기를 켜므로, 나를 덮친 겐지를 발견했을 때 바로 사격하지 않고 이단뛰기로 거리를 벌려주면 튕겨내기를 흘릴 가능성이 높다.",
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
      "note": "해킹당하기 전에 미리 발동해놨다면 해킹으로 해제되지 않는다.",
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
      "rating": "bad",
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
      "rating": "veryGood",
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
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
      "note":
        "이전에는 불사 장치에 용의 일격에 뻘궁이 되었지만, 이제는 구조물도 부술 수 있게 되어 용의 일격이 이기게 되었다.",
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
      "rating": "neutral",
      "note":
        "지금은 오히려 캐서디가 거리별 피해 감소를 더 먹어서 25m 이내 DPS만 더 높고, 실질 일리아리가 중거리 사수 취급이다.",
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
      "note":
        "그러나 우클릭을 먹인다고 해서 돌진이 취소되는 건 아니라서 넉백으로 제압당한 팀원을 구할 수는 없고, 오히려 막밀어대다가 옆의 아군이 제압당하는 상황도 종종 나오니 돌진을 보면 넉백부터 먹이지 말고 방향을 잘보고 넉백을 선물해서 관광을 보내주자.",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
      "note":
        "루시우의 특성상 아군들도 모여야 버프받으니 모일 수밖에 없고 이는 레킹볼에게 더 많은 보호막을 제공해버린다.\n지뢰밭 한 가운데 빠졌다면 연쇄 폭발로 인해서 초월쓰는 젠야타와 급속빙결 쓴 메이 제외 전부 순살당하니 이 경우에는 소리 방벽 써줘도 사망이니 그냥 쓰지 말자.",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
      "note":
        "이렇게 안 쓰면 케이지 방벽에 소리 방벽이 막혀서 케이지 혈투에 묶인 아군은 높은 확률로 죽는다. 문제는 케이지가 8초 지속인지라 소리 방벽 써줘도 최소 1명의 사상자가 나올 것이다.",
    },
    {
      "target": "sigma",
      "rating": "good",
      "note":
        "바로 써주면 궁이 깎이면서 생존 확률이 적이지기 때문에 처음에는 볼륨 업으로 버티다가 내려찍기 전에 비트를 찍어서 카운터를 치거나, 만약 모든 팀원들이 풀피나 체력이 반 이상이면 내려찍은 뒤에 비트를 써서 반격을 할 수 있게 하는 방법도 있다.\n원래 소리 방벽은 땅에 찍어야 발동되는지라 상대를 강제로 띄워버리는 중력 붕괴 맞는 중에는 궁써도 게이지만 날렸으나 지금은 중력 붕괴 맞는 중에도 소리 방벽이 발동한다.",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
      "note":
        "단 바짝 붙어 있으면 윈스턴의 공격은 광역이라서 여러 명이 맞는다.",
    },
    {
      "target": "zarya",
      "rating": "bad",
      "note":
        "다만 적팀에 아나가 있을 경우 아군이 중력자탄에 묶여있을 때 높은 확률로 생체 수류탄으로 힐밴을 던져서 초월의 회복을 무효화시키는 경우도 있다. 이럴 때는 초월을 쓰지 말라고 오더하고 소리 방벽을 쓰는 것이 최선.",
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
      "note":
        "겐지: 헤드 우클릭+질풍참, 루시우: 헤드 소리 파동+근접+밀쳐내기\n탈 수 있는 벽의 범위가 좁아서 루시우의 회피기동이 크게 제한된다.",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
      "note":
        "앞쪽으로 밀어냈다가는 메이의 에임이 별로 흐트러지지 않아서 냉각수를 계속 얻어맞는 수가 있으니 꼭 옆으로 밀어주는 것이 중요하다. 영 각도가 안 나온다 싶으면 아예 메이와 아군 사이에 점프하며 끼어들어가 고드름을 몸으로 대신 맞아주는 방법도 고려해 볼 만하다.",
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
      "note":
        "소거법으로 보자면 위도우 1 / 루시우 1을 뺄 경우 위도우 쪽은 탱1+딜1+힐2, 루시우 쪽은 탱1+딜2+힐1, 루시우 쪽의 딜2가 먼저 상대의 탱1이나 딜1을 잘라준다면야 서로 1:1하게 놔두고 밀어버리면 되는 거지만, 상대 힐2도 최선을 다해서 탱1이나 딜1을 살리려 할 텐데 그게 마냥 쉽지는 않다.",
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
      "target": "lucio",
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
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
      "note":
        "외골격 전투화도 훌륭한 이동기지만 수직 판정이 널널한 호그의 갈고리에서 벗어나기에는 부족한 감이 있다.",
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
      "note":
        "메르시의 증폭의 물결, 아나의 나노 강화제는 물론 바티스트 본인에게 붙은 젠야타의 부조화의 구슬도 포함된다.",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
      "note":
        "불사 장치를 빙벽으로 막아버리면 불사 장치 효과가 무효화된다. 궁을 써도 빙벽으로 막아버릴 수 있다.",
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
      "note":
        "물론 하이퍼 링에 공중에서 와리가리 하는 게 기본 생존법인 주노에게 3점사를 다 박는 건 쉽지 않다.",
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
      "note":
        "라인이 돌진으로 추락사 지점으로 날려버리면 방벽이건 방울이건 소용없다.",
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
      "rating": "bad",
      "note":
        "둠피스트, 네메시스 라마트라, 레킹볼, 로드호그, 마우가, 정커퀸, 해저드, D.Va\n120(공중에서 평타)+175(250 영웅 중력붕괴 피해)+120(낙하 후 강착)+120(강착 후 평타)=535로 나노의 50% 경감을 받아도 267.5라 사실상 죽는다고 봐야 하며 중력 붕괴로 붙잡히면 적군의 점사까지 당하니 깔끔하게 죽는다.",
    },
    {
      "target": "orisa",
      "rating": "bad",
      "note":
        "대지의 창은 2층에도 닿을 정도이고 수면총도 무시하니 궁극기 나올 땐 근처도 가지 말자.",
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
      "note":
        "시메트라의 순간이동기 혹은 루시우의 이동속도 증가 버프를 받고 그대로 들어오는 등",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
      "note":
        "물론 겐지도 아나 머리 위 질풍 + 이단 점프로 수면을 피하거나, 아나 뒤에서 용검을 켠 다음 돌아봤을 때 튕겨내기를 켜거나, 케어용 나노가 없는 게 확인되면 다른 물몸부터 썰고 아나한테 날아온다.",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
      "note":
        "메이의 냉각수는 dps 110으로 아나의 생체 소총 dps 93.75보다 강력하다",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
      "note":
        "딜러의 경우 솔저, 애쉬, 솜브라 등, 탱커의 경우 디바.\n단, 라인하르트는 수류탄이 날아오는 걸보고 방벽 방향을 바꿔서 막을 수 있고 시그마 또한 키네틱으로 먹을 수 있어서 까다롭다.",
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
      "note":
        "이러면 솜브라가 탱커 위주로 노리기 시작하는데, 이 경우 키리코와 달리 아나는 직접적으로 막기는 힘들다. 아나는 생체 수류탄으로 시간을 좀 더 벌어 줄 수 있는 정도.",
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
      "note":
        "물론 그 실상은 위도우메이커의 정체를 파악해 버린 탓에 아나가 순간적으로 동요한 것이 컸지만...",
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
      "target": "ana",
      "rating": "good",
      "note": "특히 나노를 받고 들어온 겐지, 라인하르트, 윈스턴이 주요 대상.",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
      "note":
        "해일 폭발은 CC기를 못 막으니 수면총, 생체수류탄 둘 다 먹히나, 해일 폭발의 엄청난 추가 생명력 지급은 힐밴으로 차단할 수 없다.",
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
      "note":
        "힐리코가 기용되는 가장 대표적인 조합은 루키. 맵과 운영만 잘 받쳐주면 루키는 아나 하나 뽑는 건 일도 아니다.",
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
      "note":
        "순수 뚜벅이인 도미나 특성상 궁극기 납치도 잘 당해주고 낙사 구간에 떨어지면 그냥 죽을 수밖에 없기 때문.",
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
      "note":
        "사는 방법은 딱 하나로 납치당하자 마자 1인궁. 자탄 맞은 고양이가 공중에서 멈추니 추락사는 면한다.",
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
      "rating": "neutral",
    },
    {
      "target": "anran",
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
      "note":
        "하지만 이는 반대로 궁극기 각을 재거나 엄폐를 위해서 지상, 특히나 골목이나 방 등으로 향했다가 정크랫을 만날 시에는 매우 위험하다는 말이 되며, 낮은 체력 탓에 평타나 충격 지뢰에 한 대 얻어걸리기만 해도 반피가 날아간다. 무엇보다 평+쉬프트 콤보만으로도 격추당하기 때문에 주의해야 한다.\n궁극기 상성 또한 나쁜 편으로, 만일 납치를 위해서 지면으로 돌진 시 바닥에 깔린 강철 덫을 밟으면 꼼짝도 못하며, 애매한 곳에 떨굴 경우 충격 지뢰로 살아나올 가능성도 배제할 수 없다. 정크랫 유저의 실력에 따라서는 아예 납치각을 잴 때 맞궁으로 죽이는 타이어를 시전해서 일절 접근하지 못하게 하거나 팀원을 끌고 날아가는 제트팩 캣을 니트로 부스트로 추적해서 터뜨려버리는 경우도 있고, 생명줄 사용 중에는 지붕 타이어로 대기를 타다가 연결된 아군과 함께 2인 공중분해를 시켜버리는 경우도 있으니 포지션을 안전하게 잡고 각을 내어주지 않는 것이 중요하다.",
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
      "note":
        "산들 걸음의 치유량 45, 주요특전으로 연꽃단상 위에 있을 시 HPS 20.",
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
      "note":
        "당연하지만 아무리 부조화의 상쇄량만큼 파워 블락의 피해량 충전이 방해받더라도 확실하게 둠피스트를 잡을 상황이 아니라면 파워 블락을 때리는 것은 조심해야 한다.",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
      "note":
        "따라서 팀합과 부조화 콜이 제대로 되지 않는 하위권으로 갈수록 라인하르트와 젠야타는 상성을 따질 만큼 서로 영향을 많이 주고받지는 못하지만, 상위권으로 갈수록 젠야타는 알게 모르게 안티탱커 수준으로 라인하르트를 압박하게 된다.",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
      "note":
        "간단히 생각하면 근거리라면 레킹볼이 아무리 무빙을 쳐도 젠야타로선 명중률이 100%에 가까워지고 헤드를 노리기도 쉬워서, 몸샷이 전부 적중하면, 방어막까지 포함하여 최대 4초 안팎으로, 실력이 뛰어난 젠야타라면 헤드를 쏘거나, 차징해두었던 우클릭을 맞추고 시작하는 등 3초, 심지어는 2초만에 레킹볼을 녹여버리지만, 레킹볼은 젠야타가 무빙을 치는 경우 40%를 넘기 어렵고, 재장전까지 고려한다면 한 탄창만에 레킹볼이 젠야타를 잡기 위해선 몸샷 명중률 43% 이상에(35발) 근접 공격 한 방을 쳐야 하는데, 이게 실패해서 재장전을 하는 동안 젠야타의 프리딜 구도를 만드는 순간 질 수밖에 없다.",
    },
    {
      "target": "roadhog",
      "rating": "good",
      "note":
        "궁극기가 있어도 죽을 수 있다. 초월은 데미지만 안 입는 거지 CC기나 넉백기를 맞기는 맞는 데다가 추락사에는 얄짤없는데 넉백 추락사는 등뒤가 추락사지점이 안오게만 하면 되지만, 로드호그의 갈고리는 로드호그 근처의 추락사 지점으로 끌고올 수 있는지라 사실상 힐밴보다 더 무서운 초월의 천적이다.",
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
      "note":
        '용검의 DPS는 157이기에 초월의 HPS 400(치유 감소 적용 시 280~340)을 혼자서는 절대 뚫지 못한다. 상대 팀이 작정하고 아나의 나노 강화제(+50%)는 물론, 공격력 증폭이나 받는 피해량 증가 등의 추가 자원을 30% (157 × 1.8 = 282.6) 이상의 수치로 겐지에게 꼭 지원해 주어야만 용검 단독으로 초월의 힐을 뚫고 처치할 수가 있다.\n의외로 모르는 사람들이 많은데, 부조화를 포함한 젠야타의 화력은 높으며, 겐지는 "특유의 구부정한 자세 때문에" 헤드샷이 쉽다. 결정적으로 젠야타의 부조화를 박아두면 "위치가 보이기 때문에" 철저한 예측샷으로 견제해야 한다. 초근접 상태에선 겐트솜둠 중 가장 쉬운 상대.',
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
      "note":
        "그런데 위도우가 거리별 뎀감이 생기고 전체 영웅 체력이 늘어나며 위도우가 한방을 못 내는 거리라면 오히려 뎀감 없는 젠야타가 유리해질 수도 있다.\n다른 지원가나 공격/수비 영웅들은 대체적으로 몸이 얇아서 피격판정이 좁은데 젠야타는 몸은 얇지만 그놈의 앉은자세 때문에 옆으로 피격판정이 넓다. 그래서 토르비욘처럼 의문사를 당하는 경우가 자주 있다.\n체력 300이 넘어가는 탱커 제외.\n보통 젠야타는 위도우보다는 부조화를 통해서 탱커나 암살자를 견제하느라 바쁘다. 이 때문에 위도우 입장에선 젠야타가 자신을 인지하지 못할 거라 생각하다가 갑자기 구슬이 자기한테 날아오면 생명의 위협을 느끼게 된다.",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "bad",
      "note": "덜 불리하다는 거지 원거리에서도 캐서디가 유리하다.",
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
      "note":
        "궤적이 반투명한 한조의 화살과 달리 젠야타의 구슬은 선명한 하늘빛 궤적이 상당히 잘보여서 피하기 쉽다.",
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
      "rating": "neutral",
      "note":
        "젠야타가 부조화 걸고 적을 때리면 초당 156.25의 피해를 주는데 아나는 생체 수류탄이 적용된 아군에게 힐을 줘도 초당 140.625, 거기다 아나는 15발 쏘면 장전해야 하는데 젠야타는 25발이나 돼서 그사이에 더 때릴 수 있고, 결정적으로 젠야타의 공격은 치명타 판정이 있고, 부조화의 받는 피해 증가는 젠야타 아군 전체에게 적용된다. 그래서 상대가 메르시 & 아나 조합이 아닌 이상 젠야타가 아나 힐을 받는 적을 자르기에는 편한 편이다.",
    },
    {
      "target": "wuyang",
      "rating": "bad",
      "note":
        "젠야타 초월의 궁극기 충전량 2507포인트, 우양의 파도 폭발의 궁극기 충전량 2800포인트. 물론 우양은 화력은 젠야타에게 밀리지만 포킹 능력자체는 젠야타를 상회할 정도이며 회복의 물결의 경우 조화의 구슬보다 기본 치유량은 낮지만 강화할 경우 젠야타의 조화의 구슬 힐량의 두 배를 넘음은 물론 수호의 파도 치유 증폭까지 갖추고 있어 궁극기가 금방 도는 편이다.",
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
      "note":
        "라이프위버는 메르시, 브리기테, 루시우와 달리 디바에게 힐이 먹히는 유일한 메인 힐러다.",
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
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
      "note": "구원의 손길 1번 쓸 때 갈고리는 무려 3번이나 쓸 수 있다.",
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
      "note":
        "주의할 점으로, 이 때문에 숙련도가 높은 자리야는 라이프위버의 스킬이 모두 빠진 뒤 중력자탄을 쓰거나, 아예 중력자탄을 벽이나 장애물에 쏴서 카운터를 불가능하게 만들기도 한다. 자리야의 궁이 있는 것 같으면 스킬을 아껴두는 것이 좋다.",
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
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
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
      "rating": "neutral",
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
      "note": "프레야 역시 망토 일부가 피격판정이다.",
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
      "note":
        "보통 발키리 상태에선 최대한 높게 날아다니지만 부활하러 땅으로 내려왔을 때 걸린다면....재수없으면 부활시킨 영웅까지 같이 딸려올라갈 수도 있다.",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
      "note":
        "지원가 영웅의 기술 중 적의 방벽을 뚫고 아군을 치유할 수 있는 것은 모이라의 융화, 메르시의 카두세우스 외에는 없다. 아나나 바티스트의 치유탄은 물론이고, 루시우나 브리기테, 바티스트 혹은 젠야타의 초월같은 장판형 힐도 가로 막히며 브리기테와 젠야타의 타게팅형 치유도 적 방벽 안의 아군은 조준할 수 없다. 모이라의 생체 구슬 역시 허공을 돌아다니는 매커니즘 상 방벽을 물리적으로 통과할 수 있을 뿐, 적대적 방벽 너머의 아군에게 힐 스프레이가 닿지는 않는다.",
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
      "note":
        "메르시에게 질풍참을 먼저 긋고 용검-질풍참-베기 콤보를 이어나가면 깔끔하게 원콤이 난다. 또한 잠입했다가 메르시 바로 앞에서 용검을 사용하면 수호천사로 도망쳐봤자 질풍참으로 쫓아와서 다시 베어버리기 때문에 사망 확정. 발키리가 있다면 용검 선딜레이 때 수호천사(류진노)-발키리(켄오)-수호천사(쿠라에)-승천 콤보로 용검을 피할 수 있으나 (바로 승천하려면 시간이 걸려서 질풍참-베기-베기 콤보에 죽을 수도 있다.) 발키리 없이 용검을 피하려면 겐지가 첫 질풍참을 헛질해야 되고, 수호천사 최대 사거리 30m에 아군이 있어야 하는 극악의 조건이 필요하다.",
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
      "target": "brigitte",
      "rating": "good",
      "note": "호그의 갈고리와 똑같은 20m다.",
    },
    {
      "target": "ana",
      "rating": "bad",
      "note":
        "게다가 실력 좋은 아나라면 대놓고 지원가를 노릴 수도 있으며, 상대 팀이 영민하다면 잠든 메르시를 굳이 안깨우고 지원가 없는 팀원부터 갉아먹을 수도 있다.\n숨어있다가 죽은 팀원을 부활하겠다는 생각은 하면 안 된다. 적군 아나가 나노 강화제를 사용했다는 것은 곧 한타 이니시에이팅을 의미하며, 아군이 두 명 이상 죽게 된다. 이렇게 되면 숨어있다가 죽은 팀원 하나를 부활시킨다고 하더라도 그 한타를 뒤집을 가능성은 낮다.",
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
      "rating": "good",
      "note":
        "모이라의 궁극기인 융화는 광선 기술이라서 키네틱 손아귀로 흡수가 불가능하며, 융화의 광선은 모든 방벽과 적대적 대상을 관통해서 공격할 수 있기 때문에 실험용 방벽도 무용지물이다.\n그런데 보통 융화는 탱커들이 소 싸움 할 때 둘 다 맞게 쏘는 것이 베스트인 기술이라, 시그마가 강착을 쏴도 앞에 탱이 방어 스킬로 막거나 아니면 탱이 몸으로 맞을 확률이 훨씬 높다. 다만 반대로 아군 탱에 가려서 강착을 못 봤는데 앞에 탱이 피해버려 맞는 경우도 나온다.",
    },
    {
      "target": "orisa",
      "rating": "good",
      "note":
        "대지의 창을 가장 확실하게 방어하는 기술은 루시우의 소리 방벽과 바티스트의 불사 장치, 솜브라의 해킹, 키리코의 정화의 방울이다. 혹은 라이프위버나 시메트라 등의 이동 지원으로 사정거리 자체를 아예 벗어나는 방법도 있다.",
    },
    {
      "target": "winston",
      "rating": "bad",
      "note":
        "점프 팩으로 건물 안으로 쫓아오는 건 충분히 가능하지만 윈스턴 자신이 나중에 도망칠 때에 동선이 거슬리는 고로, 보통은 굳이 건물 내부까지는 잘 안 쫓아온다.",
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
      "note":
        "튕겨내기를 쓴다면 곤란한데, 부패 구슬이 튕겨지면 자신 피가 쭉쭉 떨어지고, 생체 구슬이면 적 체력이 쭉쭉 올라간다. 다만 생체 구슬을 튕겨내는 것 자체가 겐지 유저의 운에 달렸다는 것이 위안점. 애당초 모이라 숙련도가 쌓인 유저들은 겐지가 있는 쪽으로 생체구슬을 안 던지고 자힐용으로 쓴다.",
    },
    {
      "target": "reaper",
      "rating": "neutral",
      "note":
        "거리별 피해 감소는 그렇다 치더라도 탄퍼짐이 너무 심해서 몸이 가는 모이라에게 모기딜만도 못한 딜이 들어온다.",
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
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
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
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
      "note":
        "과거 체력 175던 시절에는 생체 구슬 딜로 잡을 확률이 있었지만 지금은 225니 어림도 없다.",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
      "note":
        "딜러들이 덫 철거를 안 하면 결국 모이라가 부숴야 하고, 안부쉈다가 아군이 밟으면 순삭당하는데 모이라의 모기딜로는 부수는 데 2초나 걸린다. 힐러에게 2초 낭비는 무시 못 할 손해이다.",
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
      "target": "mercy",
      "rating": "good",
      "note":
        "30미터면 메르시 수호천사 사정거리와 맞먹는다. 단 발키리를 킨 메르시는 광선의 범위 역시 30미터로 늘어나서 더욱 몸을 잘 사릴 수 있게 된다.",
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
      "rating": "good",
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
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
      "note":
        "굳이 난전이 아니어도 높은 기동성과 생존력, 강력한 공격력의 공통점으로 둘 다 적군의 뒤에서 암살하는 플레이스타일이 상당히 자주 보이는 지원가이기도 하다.",
    },
  ],
  "kiriko": [
    {
      "target": "d-va",
      "rating": "neutral",
      "note":
        "키리코 본인은 자폭이 날아올 때 순보를 쓰는 선택지도 있기 때문에, 이왕이면 피하지 못한 아군을 방울로 함께 지켜주는 게 좋아서 궁극기가 있는 것 같은 디바를 상대로는 방울을 아끼는 것도 팁이다.",
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
      "note":
        "키리코의 정화의 방울은 아군 전체의 피격판정이 없어지는 것이므로 방울의 무적 상태에선 지뢰와 상호작용하지 않는다.",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
      "note":
        "여타 방벽처럼 마우가의 케이지 방벽 역시 부적/쿠나이/방울 투사체/여우길 돌진을 전부 막으며, 케이지 혈투 범위 안에선 이동 기술이 묶이므로 순보로 도망치지도 못한다. 완벽하게 마우가를 조질 수 있다는 확신이 없다면 섣불리 케이지 방벽 영역에 순보를 밟는 일은 없어야 한다.",
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
      "note":
        "눈보라의 가장 큰 위협인 광역 감속과 빙결을 비슷한 규모의 정화로 즉시 해제할 수 있다.",
    },
    {
      "target": "bastion",
      "rating": "bad",
      "note":
        "대부분의 탱커는 자기 보호기가 있고, 대부분의 딜러는 회피기가 있기에 그 둘이 가장 부족한 힐러 라인을 우선적으로 노리는 경우가 많다.",
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
      "note":
        "오버워치 2의 리메이크에서 솜브라는 탱커 견제에 중점을 두게 된다.\n오히려 근접전을 거는 솜브라가 키리코의 헤드샷에 즉사할 가능성도 있다. 그럼에도 탄퍼짐 때문에 솜브라는 히트박스가 작은 키리코를 잡으려면 근접전을 걸어야 된다.",
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
      "note":
        "다이너마이트를 키리코 혼자 맞았을 경우, 쿨타임이 훨씬 길고 잠재력이 큰 정화의 방울보다 가까운 아군에게 순보를 타서 화상을 제거하는 것이 훨씬 이득이다.",
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
      "note":
        "예를 들어, 트레이서는 좌우로 움직일 때 상하체 전체가 대각선으로 기운다. 키리코는 이에 비해서 상체가 수직으로 곧게 서있어서 저격에 맞기 쉽다.\n키리코의 기본 자세 자체가 오른손에 부적을, 왼손에 쿠나이를 쥐고 양팔을 가슴께까지 올린 자세다 보니 팔이 머리를 가려버린다.\n지원 영웅 중에 위도우를 역저격으로 즉시 처치할 수 있는 영웅은 젠야타가 유일하기는 한데(부조화 없이 평타 헤드 2발 또는 몸샷 4발에 즉사), 넓은 히트박스 때문에 젠야타 본인이 위도우에 대단히 취약해서 위도우와 직접 대치할 수가 없다.",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
      "note":
        "좌클릭 피해가 떨어지기 시작할 뿐 원거리에서도 캐서디가 유리하다.",
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
      "note":
        "키리코는 보통 상하 수직 기동이 뛰어난 영웅에게 약하다. 단발로 끊어 쏘는 쿠나이는 수평 기동보다 수직 기동이 맞히기 더 까다로운 편이며, 수평 기동 영웅은 벽을 타서 카운터칠 수 있기 때문. 수직 기동이 뛰어난 영웅은 루시우 외에 겐지, 에코, 파라 등이 대표적. 반대로 키리코를 상대할 때는 수직 기동이 약해도 앉기 무빙만 열심히 하면 키리코 입장에서 쿠나이 헤드샷을 맞히기 꽤 어려워진다.",
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
      "note":
        "눈치가 있는 아나라면 수면총부터 맞춰서 방울을 빼게 유도한 뒤 힐밴을 날려서 겜 터트려버린다.",
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
      "rating": "neutral",
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
      "note":
        "하지만 둠피스트와 달리 방어가 토글식인 해저드여서 게이지만 남아있으면 속박으로 묶어도 큰 이득을 못 본다. 둠피스트와 유사하기는 해도 이쪽은 탄환이 넉넉하고 원거리 견제력도 더 좋으니 좀 더 귀찮은 상대.",
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
      "rating": "neutral",
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
      "note":
        "제트팩 캣의 궁 대사가 들리자마자 분신술을 사용하고, 자신을 낙사시키려는 제트팩 캣에게 사슬을 맞히는 장면이다. 방해 관련 CC기를 맞은 제트팩 캣은 납치한다냥의 지속 속박 판정이 끊기므로, 납치 당하던 미즈키 본인도 분신술의 재사용이 가능해진다. 한편 영구 비행도 사슬의 방해&속박으로 인해 중단되어, 캣은 어떠한 저항도 하지 못하고 그대로 낙사한다. 미즈키가 제트팩 캣을 어떻게 카운터할 수 있는지 모두 보여주는 장면.",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
      "note":
        "미즈키의 기본 공격 피해는 60으로 젠야타의 기본 공격보다 10이 더 높지만, 미즈키의 기본 공격은 30의 즉발 피해+30의 지속 피해인 반면 젠야타의 파괴의 구슬은 50피해를 즉발로 꽂아 넣는다. 게다가 젠야타는 부조화라는 강력한 디버프 스킬도 있기에 순수 포킹 싸움으로 밀고 가면 미즈키가 밀린다.",
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
      "note": "집결 여부와 무관하다.",
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
      "note":
        "많이 가까운 상태에선 보고 막기 힘들지만 도리깨를 휘두르면서 방벽을 수시로 들어주면 생각보다 막히는 경우가 있다. 근데 그 정도로 가까울 때에는 칼날 투영으로 마무리 하는 것이 아니라면 딜로스가 더 심하기 때문에 팔라틴 팽 기본 공격으로만 공격할 가능성이 더 높다.",
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
      "note": "풀차징 기준으로도 3발이나 쏴야 겨우 부순다.",
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
      "note":
        "그나마 다행히도 방어 매트릭스에 힐이 막히지 않는다. 힐러 12명중 매트릭스에 힐이 안 먹히는 힐러는 루시우, 젠야타, 메르시, 브리기테, 우양 정도이다. 모이라도 안 막히지만 제일 중요한 힐구슬이 먹히는지라 여기에선 제외.",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
      "note":
        "우양의 물 구슬 차징샷은 힐러의 기본기 치고는 딜이 꽤 좋은 편이라서 2발로 파워 블락을 채워주며 파워 매트릭스 특전을 찍는다면 단 1발로 펀치가 강화된다.",
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
      "note":
        "이건 우양이 근접전에 약해서보다 벤데타를 이길 수 있는 영웅이 거의 없다고 보는 것이 맞다.",
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
      "note":
        "사실상 우양으로 솜브라에게 대처할 방법은 쏟아지는 비 특전으로 공격력을 올려서 솜브라에게 죽기 전에 먼저 2방을 맞춰서 이기는 것뿐이다.",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
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
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "good",
      "note":
        "단 니트로 부스터를 안 쓴 타이어의 초근접딜은 600이나 되는지라 보통 체력이 약간 깍인 비돌격군에게 해일 폭발을 씌우기 때문에 딜량이 초과해서 죽는 경우가 가끔 나온다. 이렇게 맞추는 게 힘들어서 다행이지.",
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
      "note":
        "딜러들에게 치유 감소가 생겨서 HPS 30인 태양석으론 커버가 안 된다. 이후 HPS 40으로 버프된 대신 자힐은 반만 차게 되어 버려서 이제 화상 입으면 힐팩 먹으러 도망가야 한다.",
    },
    {
      "target": "echo",
      "rating": "bad",
      "note":
        "복제 후 태양석만 잘 깔아놨다면 에코는 어디 숨어있어도 궁이 알아서 찬다.",
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
      "note":
        "헤드샷 두방 뎀이 정확히 225이지만 루시우도 첫헤드샷을 맞으면 바로 힐음악으로 전환할터이니 실제론 헤드 두방컷은 힘들다.",
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
      "note":
        "향후 패치를 통해서 언제든지 바뀔 수 있지만 20시즌 기준으로 일리아리의 태양소총의 피해량 감소 사거리는 30~50m이고 바티스트는 25~40m이다.\n일리아리 혼자서 진입하는 경우에는 공격군들처럼 치유 감소 능력을 갖춘 것도 아니여서 확실히 쉽게 카운터를 당하겠지만 애초에 오버워치는 팀게임이고 일리아리의 궁극기를 통해서 진영 붕괴 및 적군에게 치명상을 입힌 것만으로도 이미 제 역할을 다한 것이다.",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "bad",
      "note":
        "일단 아나의 경우 기본 공격이 히트스캔으로 발사하기 위해서는 행동에 제약이 심한 줌을 당겨야 하며 줌을 당길 경우 투사체 크기가 줄어들게 되어서 맞추기가 쉽지 않다. 거기에다가 새로 생긴 특전 시스템으로 인하여 인간사냥꾼으로 치명타 피해를 게임 후반에는 입힐 수 있지만 기본적으로는 치명타 판정이 없으며 단발 피해가 아닌 지속 피해이기 때문에 얻는 패널티가 상당하다.",
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
      "rating": "neutral",
      "note":
        "궤도 광선은 주로 아군이 모두 모인 상태에서 한타 시작하려고 할 때 쓰다보니 궤도 광선의 범위로 모여있게 되는데 이러면 절멸의 지속 시간만 더 늘어나게 되고, 네메시스의 막기까지 추가하면 잘 죽지도 않는다. 이를 끊고 싶어도 주노는 CC기는커녕 억제 수단도 전무한 데다가 달아나자니 궤도 광선을 갖다 버리는 꼴이 되어서 여러모로 진퇴양난의 상황이 만들어진다.",
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
      "note":
        "탱커도 조건부로 확킬을 내는 죽이는 타이어를 전방의 아군 진영에 안 박고, 날아다니는 주노 떨어뜨리는 데 쓰는 것마저도 정크랫에게는 어마어마한 손해다. 그나마도 주노의 평타 전발 피해가 90이어서 다른 아군이 한두 발만 거들어 쏴주면 타이어는 그냥 터지니 주노 하나 잡는 것도 마냥 쉬운 게 아니다.",
    },
    {
      "target": "cassidy",
      "rating": "bad",
      "note":
        "해당 영상은 주노의 글라이드 부스터 너프 전 시점이며, 아군 루시우의 지원이 있었기 때문에 주노가 최대 이동 속도인 +75% 가속 유지 상태인 것도 고려해야 한다.",
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
