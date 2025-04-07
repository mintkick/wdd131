// list of all song entries
const songs = [
  {
    link: "https://www.beepbox.co/player/#song=9n32s1k4l00e0dt1Qa7g0dj0er2i132300o545T5v1u05f0q9x10p72352d13HXzzrrrqiii9998h0E3ba121fT1v1ud0f10t5q011d23A0F3B7Q0201Pf431E26327jT1v1ub0f10m8q011d23A0F0B9Q0000Pe850E262479T1v1ua9f0qo1321d23A0F0B2Q2010Pf770E261278T1v1u97f0q0z10t231d4aA9F3B6Q5428Paa74E3ba63975T1v1u01f10m8q0332d38A9F3B5Q5428P9973E263978T1v1u01f0q0z10t231d1aA9F3B6Q5428Paa74E3ba63975T1v1ub1f10k8q011d23A0F1B7Q0000Pe800E179T1v1ub4f20o72laq011d23A5F4B3Q0001Pfca8E362963479T1v1u01f0q0x10o52d23A5F4B6Q0001PecaaE4b262963979T1v0u31f0qwx10r511d08AbF6B2Q069eP7b72E3b76367iT4v1uf0f0q011z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00E0T4v1uf0f0q011z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00E0b4zhqpUA0018QlDyF7d4id5pUCHPu4h4i8yd2gN008g0P4igp2eXar7U9DMo1cn6ii9HZbb7FSBdhPGgbQPYMlNmcvzQvfw2nclkAZZljc_B3TUP5_HdpXFvRL6PrVjo_HGHaiuOKHp6Mnc6pH_cbZC2wyRNZZnY1HaHF9V6GFHPVWvUl00vdKj5YFDVR846EmlBcf9cLePlkfiCPJfGaqEa0FFFFFFFFFFFFFFjo794Ce0i70M1eDj5TpjjjjjjjjjjjjjiAzpcdAuTyOWYA3hALVhGhpIKN5d7SCLFinMhsT7E702dAfKqZwtv9vJtMdjOYID7G8gzTwGXAdtpvHRvO04nBifj256utw00InjURCrFWpehrahejr9CVcCr7Ejp9X0kSLpmq-gYePfvdJIQXC3RSePteQHmCequ59CL_mA5mCLRZqHj6GZ7mCel-Xmq_TlalysxL5YnJsqzPYrmrnXAPnZrvC8pAsnTbYqXCRYj0jnHdHWtznN04gRONr_YytADQd7sTjMig1sCLlyaBbG4Mpc44Ljnwgg0Q6C28Zc-PJ5uC_mzwM5pJvrlxuPnYGpl5-3I5NdgnVdpKB-rtOH5-jSlhvCnmrjRa1IQv56nyagutN7IaTy161Fi22rn_kXXf_4XdVu6chCqvh7pDX7XCLr169HQj50KAe4sR_EmF9XNQkZhzYUZdvWPnYz98U9d7pNpuPnkR-tsEtc_2CUZjN6AuhqjnoddvDm8w7pDV7V67Gr7ZtwM59eCL_VLNWHpH-YcvwxwrM07OqGiuiEGM0v9GjmsAm9lnE1ARkAYBlkCR-i_6OhAaPq-4Cb-VHaELMlqDvKrnO8ggLIPD1ytcVR56j9fA4Z8YwPjyaapOKbXycGswv9GeCD9ESa4AV6NAp56Ngyvx8V74shf5QNJ938h6hhhhhAk9z8EUzTbHqaxWqNWqx_arELoSGNWtHIzaDb7G01juzZ9QWrnUEGpVPV1ife78jnItwsvA00",
    title: "Battlefield",
    description:
      "This song is probably one of my best. It spawned unintentionally while I was trying to generate a sound mimicking a tin whistle. I wrote 5 bars of music and set it down as done. ...Then I thought of another section. ...Then I thought of another section. And now it is able to stand on its own, featuring some of my proudest work.",
  },
  {
    link: "https://www.beepbox.co/player/#song=9n31sbk9l02e0vt2Qa7g0yj0er1i13210o332T5v1u05f30ta2g92b6q8x10w422d22HYJai1hh0001889h8E1bjT7v2u32f10p5q011d08HU7000U0006000Eh0I9E0T0v1u00f10t5q105hd04w2h0E0T0v2u00f10p5q011d04w2h0E0T1v2ue0f0q023d08A1F4B3Q217cPe433E361a6287bT0v1u00f0qh5164h1d04w2h3E0T0v1u00f10p7q9123h1d03w2h0E3060b02T0v3u00f10l7q85231d35w1h0E109T1v1u93f10l7q8121d35A8F4B0Qd007P5aa3E1639T2v4u15f10w4qw02d03w0E0bY04z94018OiqKIGWNmu5pUTw4w0i1jgQcwk00000pUBDyhg14z4Qgh8Nd4000z54hmt5ohsh4h9g4h4i040Sdx8h4h4i4gp2gOGqfFnakGq_su9BWqf1GGLnnZt6Iaq_suqs7txp8QVpvCllCzIkkOhIRZ4IAsxeNjd7EiqXCn0QcFEB8F-oA8W98Wp8Spup5EAlPh_kChSPh7ld4rCLQqHYjEzEAzFAzUChq95M14zFAzEAzpH_a-hgzFAzFAzSp5FAnCY18WqEzSG8-9DUBwzEAzEAzUyhqp5PI8_aif8AzOsi--0Sap8_a9YA9SaUgAOQOY2R2M8I0b0yRcG25G5I5J5jbmbmbmbmbwMJEJoIAbByRyRyRyTe2T2RyMMK82S2OgIybwwIybmbmbB2R2R2OoJPgIAb8yR2VMJ8JUJgKkbobobqbC2TyTyRyRFRTB9auy-Jf7L8MnwhuidEo_u4q001UKOZCzrIzAkyehJ579pyp7pdipvvaidkp6CzqHJFFFGSs8WV8WI8X98SnIOI-kREBdRyYFpypjp8JipyTObOEOdcHgJoLmV8J8J8JgL4UkZn97lx7CikL1akOOhIGd978SGpEWwWHsQtkECKWpkKFlAtsQhJd7EznjhSp2pvaIgdvsOdgIuqdvoOaBdvJsJdvOTPnWYDcjfCLQplprCzWlNjnWcULkQuz1AQvbpHZ71vhxuPbQAbj9yQkbh9yQzQihFKFAGkSLYnFH-qFRRfw1cKxsCUfUWuGufn-wZgGjsvYsvidd7Pvjtjtj8QOtdlczjr4z9QRkRkSkOtdldldIglllkDkPhZiWttBWvm0b3ak2aGqDbgkRelz0sz05cKlxjoKmkkRelgldjBIp6pApyCnaNNv4L09jkVicz8kRfmx1jbBaoILHmi_-RjnVq0J0Lsn5Z5PAyCwld7hC5d1iM0FE5kOVqcEFA1kQvbmJKx8aCGLDi-yjldjImVlnoO2hIASR1QQw1jhy0zpEM40zjhyh7BkhVp7BkCLb8YGyfJyfaEzOOfaEzOOfaHr8SiDGxqpiNiOhBkhVpjBkhVpjBlBF58E5hagbNl4thWdYt09gkKKlgYnZqamicOyfdasGyfbasGyZ96nBkhQyIb3bpltjgYr8YgjLb8SdmYgOOf4uIFoRaN0Qg0",
    title: "Castlevein",
    description:
      "I had gotten to celebrate Halloween in Europe and had just returned when I wrote this. Its sound is inspired by the classic vampire-slaying game of the 80's, Castlevania. My jet lag was crazy--I was completely nocturnal, not seeing the sun for almost a week. In days of total darkness, I wrote this song as a tribute to my experience. When I listen to this one, the vibes of that week come flooding back.",
  },
  {
    link: "https://www.beepbox.co/player/#song=9n31sbk7l01e0ot38a7g0rj0fr1i13010o541T5v1u05f30ta2g92b6q8x10w422d22HYJai1hh0001889h8E1bjT7v2u32f10p5q011d08HU7000U0006000Eh0I9E0T0v1u00f10t5q105hd04w2h0E0T0v2u00f10p5q011d04w2h0E0T0v3u00f0qh5162h2d04w2h3E0T0v2u00f10l7q85231d05w1h0E109T1v1u93f10l7q8121d35A8F4B0Qd007P5aa3E1639T2v5u15f10w4qw02d03w0E0bu4gM14k2l9m4gM4ct13cq1Q0128ggz6BiS128hiBakFzEgw0gy448NA8gEgy40000001z6c00000000064gh584hi14000p2aRGhi1jgkFHZJiaikUR5WqDg5jaOaCnAmY8Krd7cduMLI4fb-qY8hF8WcghhIXbjbd7j1HdvQEfb-QT1OfJ4QSLb__qrbAvSt9HY6rnEJAR-sOkKWO_q-XYiH58Qqxmn2EB775A1n9HyavKrn5q2PaOVSmia8RmM6wmywLhA2Oa9g3Ba_0yCZ8Gx78FkzO212Oa84unx9UjWrgsjBNmLFdvmcSLgyOq_aeizSILSnEOkzmq-OZBylsXZEdSkKJpm0HFtZLPcjmqxNadg0F8VCbP5VTXgs6ERO70FE_h79At97ihQAt97ihQAu295kxsH95ihJ95p5UHyhsH95UHyhuaUAnyK95F8YghYQhQAt97N17A4uihV97IkIQv5FEZaIzH8WieAzF8Wif0yeAzI8WieEzF8WyeAzT2eAzG8WieEzF8WyeAzRyeAzG8Xieg8Wyf8MzI1wHAr97nttAr96TttAr56ntlDdR1QYWs9SgmwWute92bUeDDjylwS1kRelxgt_gOiwXZd7wGpsHiQRel5Bj9TXjbBFRFBOIOWxaCjLU9dAMRcDvQODjEuDAMg002Cze4qCztVo2qchH8QR921u4OA2Q2IQo3DeM97I4vlEpRp7R17RfkyMgL788_ieunEb-aClukA5cEFUGWeYSKf0paplihefqNv7K3aXNk2I8B85Pcwk00",
    title: "Sewersly?",
    description:
      "Still in the spooky mood from Castlevein, I plunked a few notes on the piano and this came out. Every retro game needs an underground sewer section! The goal for this one was to sound dark and hopelessly lost in a maze of canals. I committed myself to make Castlevein a series of songs at this point.",
  },
  {
    link: "https://www.beepbox.co/player/#song=9n32s0k0l04e0ht30a7g0nj0kr1i102100o543T0v1u00f0qo002d04w2h8E0T1v2u01f10n7q8121d23A5F4B5Q290dPa883E176T1v2u94f10n7q8121d23A9F5B5Q290dPa883E176T3v1uf3f12rcq2x10x5f1d08SU0M51pr2qiqqrrrE2b686T3v3ud9f0q0x10l51d03SM005050wwpbaaihE1b2T3v1uf3f12rcq2x10x5f1d08SU0M51pr2qiqqrrrE2b686T3v3uf9f0qwx10l511d08SW86bmhkrrzrkrrrE1b6T3v1ug5f0q0x10v31d4aS9irsAABJJJJJJJIE1bbbDiJgy6hznf0k1UEiFs00004wy2c8wzmNFk90w3z70000y2c8wz8kxzE28ag06cowx248gx44gg000gw0248xz6coNz6coNz6coM0p2gVFEZwknFK3VdtdvN0leKzWEaCzVF8WifxgRWqfFhlACLP5vCG9BUWCAzwltB-fq-60nPzQQvJyq_D98V9dB_kTjV6eDDyWhhCwmhiWJK0O2O0O0OVB099CBzAkKOgnyqSIGxu8AC5siBklEB27yHMDOG5UyiPifqJcElciARMgYjgLx4AuB2ifq4Qu10QD1UwzM5cLdaqDUnpkOPtWFK3UD7FEXifMzDrvdydd7UhMttiCzCLTpEZBJjczPdMvtCKPnYP04dFRQvKW5pE-GGQzHIzUk83nIQugWFCHcGQOwIznprjl1glRlCHX045HRQvlhTqsNlmAs3V6RR_zSLxzw5ZAzEh5Xd6Pbd7mypu_mP96VEWpIzsRZlShSpjc2Khip8hmhiqia56lm4L4QaUB9AD5UCxqp5S9UaZCxq9MBoB9F4EhYjgKNeASPm5fcQbhnDABUB09HMaKKK0FBa2S4sM5Yi2OxjohMhv14sN2N6hX0Iba2YG34u3yMwJ8Iwbub2i9jagF7z3UK4kEbAMI99yKphj0hs8thQm2oxsK2Axpf0Rc2AqNpm0Mryeo1Y7wFm1rd7JEMVK15e3jbCd1gs0YsQgsT0y7dKKNPrdBU0xBIQv4QOjzQQuji2q_D98VddBU9jtfBgWsFJvpkd8B_2d9MdPe877JCzHQnIQrcUC4pszuh97AihIRZtArPb5-Pekyps3mj96VEWpIzsRZlShBdvx4QuxoPhWLkPBielt4VQ1BTmBCSBcK45ObOfyINjHE-H5jhYkAttxukTjUgWsFRXMaCLUjhYVCrRlyZhihRSBVqtt7HO25pE-GGMzHIzpK3R20RM1klUEinyA4CL0GWWU00bCzW2g5ZkQnFE-qsBaPnFCyZFKxvld5-1kVmohIQvcBZl5WPs7RoOTdMuG82pqCRY8qYwqX8zwR37JvQ0LmCRZHB33FRjq-RNsnFEMEbQAp1uYj8VlMkVcwzDyWqDoxkO-Qkk0000kQpOy1FEjnCp5d5ld2uc1IzOewyZ5uknFbO2_8U-yAzaph784s1B5Z17B4tmkhw00kTE-5FLhWd5WeN000",
    title: "It's a Jungle Outside",
    description:
      "I wanted to make song for a rainy outdoor stage for Castlevein, so I played around with instruments to try to make raindrop sounds through notes. I like the juxtaposition of implied musical modes in some parts, leaving the ear confused as to whether it sounds happy or sad to be outside. From here, there is a departure from the retro sound from earlier.",
  },
  {
    link: "https://www.beepbox.co/player/#song=9n52s0k8l00e0wt3Ea7g0wj0mr1i13200001o42312T5v1u05f10m8q153351d13HVxh90000000000h2E0T0v2u12f10s4q00d03w2h2E0T7v1u07f51562jb0s22nb2l3q0x20p41400d08H_SRJ5JIBxAAAAkh8IcE3c01c16c16T5v1u05f10m8q1532b0d13HVxh90000000000h2E0T1v3u01f0q0B10p731d23A5F4B9Q0001Pffa7E4b862363379T1v1u01f0q0B10o521d23A5F4B6Q0001PecaaE4b262963979T5v1u05f10o5q0521d03HS6060006000000h0E0T1v1u01f0q0B10o561d23A5F4B6Q0001PecaaE4b262963979T5v1u05f0qwB10w4151d03H__RyjsIisArsJJh0E1b6T1v2ufbf0q00d02A0F0B0Q9000Pf000E250617T4v1u04f0q010z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00E0T3v0u03f0qwB10n5160d08S1jsSrAOqik1yjJJE1b6T4v1u04f0q0520z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00E0b28p2y6sM00zataODqU00gBiS9qVU138khzEiRr138khzEiF8nfx6kWl000000000000000000000VY8ODiEh38kgP7qVHx38kgP7gBiTMzas8Q2000000wNz400x248gN38c8N248gh248gx54chh38gx254chh38gh2400000000gx200036c0gx200136c0p2oS9UKFRSzAE1jtfOiqZ1HDoh9duz8X8aDnsTNN9yQ9EZ8zwieEzarnZ9duzdJaq_h5Z16CzWFFIN2AzaDnoK248QBZ1uyLojhWx704tx7PO-SgWrnY6KCNub4SnVZggdhH-h7vFE-Wvy0RTxQZo8gvjq_O-QLjhYkZdVvwcAzWrQvxCubISLH9dCWvgicCLj9HLqjpcJ57IL2FARWprdN_qpCO-l6ieCkQvGiez0szbO7U_jNCsXHXvgeydALFALoHSppE_QCadCsPIys2P9BIR-4CpbS9O4CidCukfHWLaISAqXpUSpGBX96x2Cn2QhOD4tyHib5kkOen4Hlw4OPbBiozFCyhq95EBAFpD9AFwQhqp5ECyqpp5k0c0QFFAmyhiPsvrGI5CRW_eP8myhqpFCChq9pam9N9f9DbEmCqpFAmChqpaqpaiQT4Nt19nrjqcn1MIT7YEElhCRZfOPhZu8-EAmymiBCsCiCZ4FFAmCiDoMzOpajw2qCqQV5a2GCrKKW-GpFCCieWmCzYrkERFBOHe68W9bWpbVg8zEALFCyieFES1BQ6KFBOEQ319BgF2GyIld6Vl8IlZhkhYkhQp979Rls0SQyYlniZCljEQq53hFk5IIFLl5XJm0jJn2eyi-Ci-Q8zEALqqDkIVjLSiea4yeCmi-1h8Wt-AzH8V99vghQX_ys8WpUP2eIOUe1q0xqGamqePaXHJcmMM451eAUcps4BJjpuwipsyALGFefFNX9vq2OqZmcCnvx7kBYybW2ZALENAzKPbIzIKIBdJz5HANszdPkBZhBIVJcnc1nqCzMq2ewzAqE000aq_79EZ39f2Zr4cAUd97qhIAs9b9v90AvzDfVf8dGi-QVKsSCbo822wASnwQFHY2prAOV4c4LsBZkQnFbX4AsxpjpvV9BOv69duLr8-Ey-wLpbWap8XbOX8XbIBdlz5FANkBZ2ieNinOYAz9UKEBuyO3jnZyewzEibkbkaCzW8XcAn88-Eyezr5Oid8HeNN972QV1jN8nYhG8KOpt17rjB2QyYYnQ4qAmHi0CzWbW2e-Rf7x89bWeSbQR_7u2X9BQ4s7jB2QyYgk5Y1gnTQkGq_NYHBZjbBo4t97khSQBZ5h7l89ER3yEOW2fC2D8E8W2dcH0J0L07vkn4tV7hihTRlq30kyXlvv6nghX9jAQ4t97rlvjhTG2eyGwzEFE8Waq84zGptjkEbWaG2-ziEbWaq4QrGpqhtKCLMx6CzUL8WjnAaiewzV8zOaCqfDAQvA1ngAl25jb02Xl1vI4t62BeHp6QhQkapsG4hFE-qcQzB-96nAkpN7ihRpeghQR-28Yy4wqy-CGSLCNsAzTyen8-8Oaif9EFARdvX-q59uqbW2-wU-CL85Z1vgnQ5-wsvgsviag5E5E5E5ihAkkk9B8EEEEEEEjhAkkk000aicUpt1BQ7dSqYKihg0FjhAAqhiiD98YYFOif9aqqYAAza8-98YAzpEOgyfb8ZEzOifNbCODCt8-G5WXrQzTiDaQzOyDTncUFOGOyDaHbasGIEF000kRVELEbW2-wLPFQSKThCKAROjniqX00000000",
    title: "Bunker Beach",
    description:
      "This track sounds like fun summer sporty vibes, and I intended for it to be a song in a golf game. So where does that leave us? Imagine a golf course on a beach... Yes, the whole thing is a sand bunker.",
  },

  // {
  //   link: "",
  //   title: "",
  //   description:
  //     "",
  // },
];

export default songs;
