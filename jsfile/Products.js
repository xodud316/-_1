/* 상품 목록 데이터 배열 */
const products = [  // 순서대로 항목 Id, Img, 제목, 저자, 출판사, 장르, 별점, 가격, 미리보기 이미지를 지정하도록
    {
        id: 'book_1', image: 'book/book_1.jpg', title: '나는 얼마짜리입니까', author: '6411의 목소리', publisher: '창비',
        style: '인권문제', star: '★☆☆☆☆', price: '18000', Category: '시사',
        previewPages: ['book/book_1_1.PNG', 'book/book_1_2.PNG', 'book/book_1_3.PNG', 'book/book_1_4.PNG', 'book/book_1_5.PNG'],
        summary: '어떤 소설보다 리얼하고, 어떤 시집보다 감동적인 문장들 사회를 바꾸는 우리들의 일터 이야기입니다.',
        description: '웹툰 작가, 물류센터 직원, 도축 검사원, 번역가, 대리운전 기사, 사회복지사, 전업주부, 예능작가, 헤어디자이너, 농부, 건설노동자 등 각자의 노동헌장에서 묵묵히 일하는 수많은 이들. 전국 방방곡곡 다양한 현장에서 땀 흘리는 일흔다섯 명의 노동자가 자신에게 익숙한 도구를 잠시 놓고 펜을 들었다. 그리고 각자가 일하며 겪은 이야기를 써 내려가기 시작했다.',
        relatedArticles: [
            { title: '[신간] 나는 얼마짜리입니까', link: 'https://www.newsis.com/view/NISX20240716_0002813595' }
        ]
    },

    {
        id: 'book_2', image: 'book/book_2.jpg', title: '개미 제1부 개미 -', author: '베르나르베르베르', publisher: '열린책들',
        style: '프랑스소설', star: '★★☆☆☆', price: '15800', Category: '장편소설',
        previewPages: ['book/book_2_1.PNG', 'book/book_2_2.PNG', 'book/book_2_3.PNG', 'book/book_2_4.PNG', 'book/book_2_5.PNG'],
        summary: '<개미>는 프랑스 작가 베르나르 베르베르가 쓴 소설로, 인간과 개미의 세계를 병행하여 그려낸 작품이다. 이 책은 인간의 시각에서 개미의 세계를 탐구하며, 개미의 사회 구조와 행동을 상세히 묘사한다. 주인공은 파리의 한 아파트를 상속받은 가족으로, 그 아파트의 지하실에서 벌어지는 신비로운 사건들을 조사하게 된다. 동시에 개미의 세계에서는 한 개미가 자신의 군락을 지키기 위해 다양한 도전을 겪게 된다. 이 두 이야기는 서로 얽히며 흥미진진한 전개를 이룬다.',
        description: '에드몽 웰스의 죽음으로 이사 온 조나탕은 삼촌의 유언에도 불구하고 금기된 지하실로의 탐험을 시작한다. 거기에서 그는 개미 왕국 [벨로캉]을 발견하게 되는데, 이곳에서 개미 사회의 체계적인 구조와 규칙, 역할에 따른 움직임이 드러난다. 그러나 어떤 사건을 계기로 벨로캉에서 균열이 발생하며 사회는 분열된다. 종이 다른 인간과 개미가 대화하는 설정 속에서 베르나르 베르베르의 작품처럼 대상에 대한 깊은 조사와 철학적 사유가 담긴 이야기는 흥미로움을 자아낸다.',
        relatedArticles: [
            { title: '베르나르 베르베르 인기 소설 [개미], 게임으로 만난다', link: 'https://www.dailygame.co.kr/view.php?ud=202310181239159207da2c546b3a_26' }
        ]
    },

    {
        id: 'book_3', image: 'book/book_3.jpg', title: '해리포터 -마법사의 돌-', author: 'J·K·롤링', publisher: '문학수첩',
        style: '외국판타지소설', star: '★★★★☆', price: '9000', Category: '판타지',
        previewPages: ['book/book_3_1.PNG', 'book/book_3_2.PNG', 'book/book_3_3.PNG', 'book/book_3_4.PNG', 'book/book_3_5.PNG'],
        summary: '<해리 포터와 마법사의 돌>은 어린이와 어른 모두에게 사랑받는 작품으로, 마법의 세계와 친구들, 용기와 모험의 이야기를 통해 독자들에게 깊은 감동을 주는 소설이다.',
        description: '어둠의 마왕 볼드모트에게 부모를 잃고 홀로 살아남은 아이, 해리는 안전을 위해 마법사가 아닌 사람인 ‘머글’ 페투니아 이모와 버논 이모부 손에 길러지며 불우한 어린 시절을 보낸다. 열한 번째 생일날, 해그리드를 통해 자신이 마법사라는 사실을 알게 된 해리는 호그와트 마법학교에 입학해 헤르미온느 그레인저, 론 위즐리라는 친구들과 함께 영생을 주는 마법사의 돌을 찾는 엄청난 모험을 시작하게 된다.',
        relatedArticles: [
            { title: '‘해리포터와 마법사의 돌’ 초판 표지, 경매서 ‘26억’ 낙찰', link: 'https://m.jnilbo.com/74054191768#google_vignette' }
        ]
    },

    {
        id: 'book_4', image: 'book/book_4.jpg', title: '갈매기의 꿈', author: '리처드바크', publisher: '나무옆의자',
        style: '영미소설', star: '★★★★☆', price: '15800', Category: '장편소설',
        previewPages: ['book/book_4_1.PNG', 'book/book_4_2.PNG', 'book/book_4_3.PNG', 'book/book_4_4.PNG', 'book/book_4_5.PNG'],
        summary: '<갈매기의 꿈>은 자신만의 꿈을 추구하며 자아를 실현해 나가는 과정을 그린 감동적인 이야기로, 깊은 교훈과 영감을 제공하는 책이다.',
        description: '<갈매기의 꿈>은 갈매기인 조나단 리빙스턴의 이야기를 중심으로 전개된다. 조나단은 다른 갈매기들과는 다른 꿈을 가진 갈매기다. 그는 단순히 먹이를 찾기 위해 날아다니는 것이 아니라, 비행을 예술과 자유의 표현으로 보고, 더 높은 비행 기술을 익히기 위해 끊임없이 노력한다. 조나단은 자신이 꿈꾸는 비행의 한계를 넘어서기 위해 끊임없이 연습하고 도전한다. 그러나 그의 동료 갈매기들은 그의 꿈과 목표를 이해하지 못하고, 그의 비행 방식과 열정을 비웃는다. 결국 조나단은 자신이 원하는 비행을 계속할 수 없는 사회에서 쫓겨나게 되지만, 그는 포기하지 않고 자신의 꿈을 추구하며 새로운 동료들과 함께 자신만의 비행을 계속한다. 이야기는 조나단이 비행의 경지를 넘어서서 자기 자신의 본질을 이해하고, 자유롭고 완벽한 비행을 이루어가는 과정을 그린다. 그는 결국 비행의 스승이 되어 다른 갈매기들에게도 자신의 비전을 나누며, 새로운 가능성을 제시한다.',
        relatedArticles: [
            { title: '[명작에게 길을 묻다]`리처드 바크의 `갈매기의 꿈’', link: 'https://www.gjdream.com/news/articleView.html?idxno=459918' }
        ]
    },

    {
        id: 'book_5', image: 'book/book_5.jpg', title: '죽음을 보는 눈', author: '마이클 로리타', publisher: 'RHK',
        style: '액션/스릴러소설', star: '★★★☆☆', price: '14000', Category: '액션/스릴러',
        previewPages: ['book/book_5_1.PNG', 'book/book_5_2.PNG', 'book/book_5_3.PNG', 'book/book_5_4.PNG', 'book/book_5_5.PNG'],
        summary: '마이클 코리타(Michael Corita)의 책 <죽음을 보는 눈>("Seeing Death")은 인간의 죽음을 이해하고 받아들이는 다양한 관점을 탐구하는 철학적이고 사색적인 작품이다.',
        description: '다양한 문화와 종교에서 죽음을 어떻게 바라보는지, 그리고 이러한 시각들이 개인의 삶에 어떤 영향을 미치는지를 분석한다. 죽음이라는 궁극적인 현실을 마주했을 때, 인간이 어떻게 자기 사진을 성찰하고 삶의 의미를 찾는지를 살펴본다. 또한, 죽음이 삶에 어떤 의미를 부여하는지, 죽음을 이해하는 것이 어떻게 더 나은 삶을 이끄는지를 탐구한다.',
        relatedArticles: [

        ]
    },

    {
        id: 'book_6', image: 'book/book_6.jpg', title: '크리피', author: '마에가와 유타카', publisher: '창해',
        style: '추리/미스테리소설', star: '★★★★★', price: '13500', Category: '추리/미스테리',
        previewPages: ['book/book_6_1.PNG', 'book/book_6_2.PNG', 'book/book_6_3.PNG', 'book/book_6_4.PNG', 'book/book_6_5.PNG'],
        summary: '<크리피>는 심리 스릴러 장르의 소설로, 복잡한 인간 심리와 충격적인 사전들이 얽힌 이야기를 담고 있다.',
        description: '주인공은 평범한 일상 속에서 특이한 사건에 휘말리게 된다. 일상의 안정을 깨고 갑작스러운 위협이 다가오면서 이야기가 전개된다. 주인공은 미스터리한 사건들을 조사하면서 자신의 심리적 갈등과 내면의 어둠을 직면하게 된다. 이러한 심리적 갈등은 독자가 주인공의 감정을 깊이 이해하게 만든다. 등장인물의 간의 복잡한 관계와 감정이 얽힘이 이야기의 핵심 요소를 작용하며, 이들은 각자의 비밀과 동기를 가지고 있어, 독자는 이들의 진짜 의도를 추리하게 된다.',
        relatedArticles: [
            { title: '[신간] 탁월한 범죄심리 묘사와 섬뜩한 전개…일본 범죄스릴러 [크리피]', link: 'https://www.newspim.com/news/view/20160330000089' }
        ]
    },

    {
        id: 'book_7', image: 'book/book_7.jpg', title: '절대 잃지 않는 주식투자', author: '곽병열', publisher: '터닝페이지',
        style: '주식/펀드', star: '★★★★★', price: '19000', Category: '주식/펀드',
        previewPages: ['book/book_7_1.PNG', 'book/book_7_2.PNG', 'book/book_7_3.PNG', 'book/book_7_4.PNG', 'book/book_7_5.PNG'],
        summary: '이 책은 주식 투자를 통해 안정적이고 지속적인 수익을 얻는 방법에 대해 설명하는 투자 가이드다.',
        description: '주식 투자에 대한 기본적인 개념과 원칙을 소개하며, 주식 시장의 구조, 투자 방법, 그리고 기본적인 투자 용어에 대한 설명이 포함되어 있다. 또한, 투자자의 심리와 감정이 투자 성과에 미치는 영향을 다루며, 안정적이고 감정적으로 안정된 투자를 위한 심리적 준비와 조언을 제공한다',
        relatedArticles: [

        ]
    },

    {
        id: 'book_8', image: 'book/book_8.jpg', title: '마녀와의 7일', author: '히가시노 게이고', publisher: '현대문학',
        style: '추리/미스테리소설', star: '★★★★☆', price: '18800', Category: '추리/미스테리',
        previewPages: ['book/book_8_1.PNG', 'book/book_8_2.PNG', 'book/book_8_3.PNG', 'book/book_8_4.PNG', 'book/book_8_5.PNG'],
        summary: '이 책은 일본의 인기 미스터리 작가가 쓴 작품으로, 독특한 설정과 매력적인 캐릭터로 구성된 흥미로운 스토리를 제공한다. ',
        description: '이 이야기는 한적한 일본의 마을에서 시작된다. 마을에는 ‘마녀’라는 별명이 붙은 신비로운 인물이 살고 있다. 이 마녀는 사람들의 소문과 호기심의 대상이 되어 왔다. 그리고 주인공은 어느 날 마을에서 발생한 미스터리한 사건을 조사하기 위해 이 마을을 방문하게 된다. 사전의 진상과 배경을 파헤치는 과정에서, 그는 마녀와 관련된 의심스러운 요소들과 마주하게 된다.',
        relatedArticles: [
            { title: '미래엔그룹, 올여름 무더위 날릴 대형 신간 『포스 윙』 뉴스레터, 『마녀와의 7일』 굿즈로 신간 홍보 박차', link: 'https://www.m-i.kr/news/articleView.html?idxno=1141685' }
        ]
    },

    {
        id: 'book_9', image: 'book/book_9.jpg', title: '죽은자의 결혼식', author: '제이미 린 핸드릭스', publisher: '그늘',
        style: '액션/스릴러소설', star: '★★★☆☆', price: '18800', Category: '액션/스릴러',
        previewPages: ['book/book_9_1.PNG', 'book/book_9_2.PNG', 'book/book_9_3.PNG', 'book/book_9_4.PNG', 'book/book_9_5.PNG'],
        summary: '친구 모두를 협박해 원하는 바를 이루고자 했던 소시오패스 신랑과 그에 맞서는 친구들의 민낯을 섬세한 시선으로 그린 범죄 스릴러물, 〈죽은 자의 결혼식〉이 출간되었다. 이미 서스펜스 매거진을 통해 전미 지역에서 실력을 인정받은 ‘제이미 린 헨드릭스’의 장편 소설이다.',
        description: '소시오패스 성향의 트레버는 ‘피오나’와 결혼하기 위해 그의 여섯 친구와 긴밀한 관계를 맺는다. 그리고 그들이 죽을 때까지 숨기고자 했던 비밀을 캐내어 친구 모두에게 폭로하겠다고 협박한다. 그러니 자신과 피오나가 결혼할 수 있도록 협조하라고 말이다. 그렇게 두 사람은 친구들의 응원에 힘입어 마이애미에 신혼집을 얻고, 그곳에서 결혼식을 올리게 된다. 그러나 모두가 모인 한 낮의 웨딩홀에서 트레버는 갑자기 죽고 마는데…. ',
        relatedArticles: [

        ]
    },

    {
        id: 'book_10', image: 'book/book_10.jpg', title: '멜라닌', author: '하승민', publisher: '한겨래출판',
        style: '한국소설', star: '★★★★☆', price: '16800', Category: '장편소설',
        previewPages: ['book/book_10_1.PNG', 'book/book_10_2.PNG', 'book/book_10_3.PNG', 'book/book_10_4.PNG', 'book/book_10_5.PNG'],
        summary: '<멜라닌>은 파란 피부로 태어난 한국 베트남 혼혈 소년이며, 미국 이민을 통해 디아스포라적 상황을 겪는 성장소설이다. ',
        description: '피부색과 인종으로 인해 사회에서 가장 낮은 계급으로 취급되는 존재가 학교 친구와 선생님, 이웃들에게 일상적으로 차별과 멸시를 받는 과정이 9·11테러, 총기 난사 사건, 한국 대통령 탄핵 등의 역사적 사건들과 촘촘하게 맞물리며 펼쳐진다. ',
        relatedArticles: [
            { title: '내 피부는 파랗고 엄마는 베트남 사람이다…나는 ‘당신’이다 [책&생각]', link: 'https://www.hani.co.kr/arti/culture/book/1149770.html' }
        ]
    },

    {
        id: 'book_11', image: 'book/book_11.jpg', title: '감정의 이해', author: '엠마 헵번', publisher: '포레스트북스',
        style: '교양 심리학', star: '★★★☆☆', price: '16800', Category: '교양',
        previewPages: ['book/book_11_1.PNG', 'book/book_11_2.PNG', 'book/book_11_3.PNG', 'book/book_11_4.PNG', 'book/book_11_5.PNG'],
        summary: '제대로 일이 끝났을 때 느꼈던 완벽한 성취감, 내일 떠날 여행을 기대하며 느끼는 전날 밤의 기대와 흥분, 자기 전 맥주 한 잔을 마시며 느끼는 시원함, 애청하던 드라마가 끝났을 때 느끼는 아쉬움, 갑작스러운 팀장님의 호출에 엄습하는 불안감, 과한 배려를 받을 때 느끼는 불편함…. 롤러코스터를 타듯 우리는 하루하루 수많은 감정을 느끼며 살아간다. 왜 감정은 매일 제멋대로 요동치는 걸까? 이 감정들을 어떻게 다스릴 수 있을까? 『감정의 이해』는 누구나 한 번쯤 해봤을 이런 고민에 대해 해답을 제시한다.',
        description: '감정 없이는 각자의 이야기를 할 수 없습니다. 감정은 우리의 삶과 함께하며 우리를 이끌고, 방향을 바꾸고, 기쁘게 하고, 우울하게 합니다. 감정은 헤드라인 밑에 달리는 설명이나 하나의 줄거리가 아니라 우리 이야기의 주인공입니다. 감정은 기억, 반응, 미래 계획, 행동, 관계 그리고 궁극적으로는 생존에 내재되어 있습니다. 감정을 어떻게 이해하고 반응하는지는 매우 중요한 일입니다. 평생에 걸쳐 건강과 삶에 영향을 미칠 수 있기 때문이지요. 감정을 이해하면 내가 중요하게 생각하는 것을 위해 결정을 내릴 수 있고, 살면서 받는 스트레스에 대처할 수 있고, 궁극적으로는 삶을 이해하는 데 도움이 될 수 있습니다.「머리말 : 감정이라는 세계」 중에서',
        relatedArticles: [
            { title: '[새로 나온 책] 다정하지만 만만하지 않습니다 外', link: 'https://www.hangyo.com/news/article.html?no=101817' }
        ]
    },

    {
        id: 'book_12', image: 'book/book_12.jpg', title: '신화의 숲', author: '김헌', publisher: '포레스트북스',
        style: '청소년 인문/사회', star: '★★★★☆', price: '18000', Category: '판타지',
        previewPages: ['book/book_12_1.PNG', 'book/book_12_2.PNG', 'book/book_12_3.PNG', 'book/book_12_4.PNG', 'book/book_12_5.PNG'],
        summary: '철학과 고전은 어렵고 고루하다는 기존 인식을 보기 좋게 깨트린 『철학의 숲』, 『고전의 숲』 시리즈의 세 번째 책 『신화의 숲』이 출간되어 화제다. 그리스 로마 신화를 다룬 이 책은 출간 되기 전부터 맘카페에서 빠르게 입소문이 퍼졌다. JTBC 「벌거벗은 세계사」, tvN 「차이나는 클라스」 등 여러 방송 매체 및 강연에서 그리스 로마 신화 이야기와 그 가치를 누구나 이해하기 쉽고 재밌게 설명해 서양 고전 열풍을 이끈 고전학자, 서울대 김헌 교수는 특별히 애정을 가지고 이 책을 집필했다고 밝혔다. 그 또한 실제로 삶이 괴롭고 힘들 때 고대 그리스의 서사시를 읽으며 나아갈 힘과 답을 찾았기 때문이다. 그렇기에 저자는 자라나는 청소년이 신화 이야기를 꼭꼭 씹어 먹어 잘 소화하기를 권한다.',
        description: '많은 사람들이 그리스 로마 신화에 나오는 신들은 너무 못돼 먹었다고 불만을 토로하곤 합니다. 신이란 존재는 전지전능할뿐만 아니라 도덕적으로 완벽하고 정의와 선을 지켜야 한다고 생각하기 때문이지요. 사실 세상에 부정부패가 만연하고 악한 사람들이 잘 먹고 잘 사는 걸 보면 ‘세상에 신은 없어. 신이 있다면 어떻게 이런 일이 생기겠어?’라고 불평하곤 하잖아요. 그렇다면 그리스 로마인들은 신들이 이 이야기에 나오는 제우스나 헤라처럼 우리 인간과 별로 다르지 않은 모습을 가진 것이라고 상상했던 게 아닐까요? 그들이 선과 정의를 구현하는 윤리적으로 완벽한 존재가 아니라, 제 욕망과 격정에 따라 제멋대로 행동하기 때문에 인간이 사는 이 세상도 부조리하고 불합리하게 돌아가는 거라고 생각했던 겁니다. 우리가 사는 이 세상을 설명하기에는 선하고 완벽한 신보다는 제우스나 헤라 같은 결함이 있는 신이 더 어울릴 것 같았기 때문이 아닐까요',
        relatedArticles: [
            { title: '[책마을] 청소년 위한 그리스·로마 신화 <신화의 숲> "톱10" 진입 성공', link: 'https://www.hankyung.com/article/2024060720271' }
        ]
    },

    {
        id: 'book_13', image: 'book/book_13.jpg', title: '국어 잘하는 아이가 이깁니다', author: '나민애', publisher: '김영사',
        style: '독서/작문 교육', star: '★★★★★', price: '17500', Category: '교양',
        previewPages: ['book/book_13_1.PNG', 'book/book_13_2.PNG', 'book/book_13_3.PNG', 'book/book_13_4.PNG', 'book/book_13_5.PNG'],
        summary: '초등 국어, 무엇부터 시작해야 할까? 좋다는 책, 비싼 학원 붙이기 전에 독서의 기초부터 다시 점검해보자! 12년째 서울대학교 학생들의 글쓰기를 책임지고 있는 나민애 교수가 《국어 잘하는 아이가 이깁니다》에서 부모들의 국어 공부 고민을 친절하고 명쾌하게 해결해준다. 입시를 이기는 독서 전략, 서울대학교 학생들의 국어 공부 방법, 학령별 가이드까지 한 권에 꾹꾹 눌러담았다. 우리 아이를 더 즐겁고 쉽게 국어 달인으로 만들어보자.',
        description: '무려 69%의 서울대학교 신입생이 초등학교 때 책을 많이 읽었다고 답변했다. 책을 많이 읽으면 공부 잘한다는 말이 열에 일곱에게는 적용된다는 것이다. 입시 제도가 아무리 변해도 책, 책, 책을 놓지 말아야 하는 이유가 바로 여기에 있다. 특히 초등 엄마들은 옆집 ‘카더라 통신’에 귀 닫고, 변화하는 입시 제도에 눈 감고, 우선 책부터 손에 들어야 한다',
        relatedArticles: [
            { title: '국어 잘하려면?…“중1까지 책 읽기가 우선입니다”', link: 'https://www.hani.co.kr/arti/society/schooling/1132747.html' },
            { title: '[베스트셀러] 국어 잘하는 아이가 이깁니다·생각 중독·cis의 주식 투자 법칙(5월 12일)', link: 'https://m.news.nate.com/view/20240513n04012' },
            { title: '“갓민애 교수의 초등 국어 달인 만들기” 나민애의 『국어 잘하는 아이가 이깁니다』 출간', link: 'https://www.lecturernews.com/news/articleView.html?idxno=149868' },
            { title: '[책] 아이의 문해력을 높여주는 책 4선', link: 'https://edu.chosun.com/m/edu_article.html?contid=2024031980039' }
        ]
    },

    {
        id: 'book_14', image: 'book/book_14.png', title: '당신이 누군가를 죽였다', author: '히가시노 게이고', publisher: '현대문학',
        style: '추리/미스터리 ', star: '★★☆☆☆', price: '17800', Category: '추리/미스테리',
        previewPages: ['book/book_14_1.PNG', 'book/book_14_2.PNG', 'book/book_14_3.PNG', 'book/book_14_4.PNG', 'book/book_14_5.PNG'],
        summary: '히가시노 게이고의 장편소설 『당신이 누군가를 죽였다』가 북다에서 출간되었다. 작품은 장르문학계의 거장인 작가가 101번째 작품을 맞아 추리소설의 원점으로 돌아가 ‘황금시대 미스터리’의 매력을 유감없이 발휘한 걸작으로 평단과 독자의 호평을 받고 있다. 1986년 발표된 『졸업』을 시작으로 장장 38년째 이어진 히가시노 게이고 미스터리의 정수인 〈가가 형사 시리즈〉 열두 번째 작품이기도 한 신작은, 2023년 출간 즉시 일본 서점 미스터리 판매 전체 1위를 석권하며 세월이 지나도 변치 않는 시리즈의 인기를 증명했다.',
        description: '『당신이 누군가를 죽였다』는 호화 별장지에 여름 휴가를 온 다섯 가족의 파티로 시작한다. 하지만 그날 밤, 다섯 명이 살해당하고 한 명이 다치는 사건이 벌어지고, 살아남은 사람들은 참극의 진상을 밝히기 위해 검증회를 연다. 그 자리에 장기 휴가 중이던 형사 ‘가가 교이치로’가 참석하고, 그는 사람들이 저마다 감추고 있던 비밀을 파헤치기 시작한다.',
        relatedArticles: [
            { title: '[신간] 히가시노 게이고의 당신이 누군가를 죽였다', link: 'https://www.yna.co.kr/view/AKR20240726108100005' },
            { title: '장마철 즐기기 좋은 시원하고 짜릿한 ‘추리소설’…‘당신이 누군가를 죽였다’ 外', link: 'https://www.kyeonggi.com/article/20240724580131' },
            { title: '[위클리 핫북]101번째 책 낸 `히가시노 게이고`의 힘', link: 'https://www.edaily.co.kr/News/Read?newsId=01230006638959440&mediaCodeNo=257' }
        ]
    },

    {
        id: 'book_15', image: 'book/book_15.png', title: '챔피언처럼 생각하고 거래하라', author: '마크 미너비니', publisher: '이레미디어',
        style: '주식/펀드', star: '★★★★☆', price: '22500', Category: '주식/펀드',
        previewPages: ['book/book_15_1.PNG', 'book/book_15_2.PNG', 'book/book_15_3.PNG', 'book/book_15_4.PNG', 'book/book_15_5.PNG'],
        summary: '장기적인 수익을 위해 단기적으로 이익을 내고 있는 주식들을 얼마나 오래 보유할지, 주가가 스톱 가격에 이르기 전이라도 손절해야 할 때는 언제인지, 최적의 포지션 규모를 구축하는 방법은 무엇인지, 어떻게 또 언제 사고팔아야 하는지 그리고 트레이딩에서 성공하기 위해 약점을 보완하고 기초를 다지려면 매매 후 분석에서는 정확히 무엇을 검토해야 하는지 등이다. 추가로 저자가 말하는 ‘초고수익의 문을 열 8가지 열쇠’와 베스트셀러 저자인 재렉 로빈스와의 인터뷰도 실려 있다.철저하게 규칙에 대한 책이라고 할 수 있다. 저자는 ‘그가 산 주식이 그가 원하는 대로 움직이지 않으면’ 어떻게 대응해야 할지 시나리오별 대응법을 마련해 놓고 있다. 이것이 저자가 꾸준히 수익을 올리는 비결이며, 우리가 책에서 배워야 할 규칙이자 기술이다.이 책을 읽고 나면 여러분도 그럴 수 있다. ‘내가 산 주식이 내가 원하는 대로 움직이지 않을 때’ 어떻게 해야 하는지를 몸소 깨닫고 이를 실전에 적용할 수 있게 되면 여러분의 포트폴리오는 분명 수직 상승할 것이다.',
        description: '어떻게 매년 꾸준히 수익을 내고 있는 것일까?’ 그 비결은 바로 규칙에 있다. 그러나 앞서 언급했듯이 대다수 주식투자자들의 각자의 규칙은 존재한다. 그렇다면 대체 어디서 차이가 있는 것일까? 대체로 투자자들의 규칙은 매수할 때로 한정된다. 반대로 언제 팔아야겠다는 생각은 잘 하지 않는다. ‘기다리면 오를 거야’라는 막연한 기대감 그리고 설사 오른다 하더라도 어떤 원칙 없이 적은 이익에 급히 팔거나 적기에 팔지 못해 커다란 이익을 손실로 맞이하는 상황에 맞닥뜨리는 경우가 많다.이 책에는 성공 투자를 위한 포지션 규모 세팅만이 아니라 정교한 매수법과 더불어 미너비니 자신이 실전에서 적용해 온 매도 플랜 노하우를 담고 있다. 이 부분만으로도 혹자에게는 엄청난 기회가 될 것이다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_16', image: 'book/book_16.jpg', title: '시민교육은 무엇을 가르쳐야 하는가', author: '키쓰 바튼, 리칭 호 ', publisher: '역사비평사',
        style: '인권교육', star: '★★★★★', price: '22500', Category: '시사',
        previewPages: ['book/book_16_1.PNG', 'book/book_16_2.PNG', 'book/book_16_3.PNG', 'book/book_16_4.PNG', 'book/book_16_5.PNG'],
        summary: '이 책은 다양한 사회에서의 공적 삶을 위해 어린 시민들을 어떻게 준비시켜야 하는지에 대한 근본적인 청사진을 제공한다. 만약 당신이 지식, 영감, 희망을 제공하는 책을 찾고 있다면, 이 책이 바로 당신이 필요로 하는 책이다.',
        description: '사회나 도덕, 역사를 가르치고 연구하는 이들을 위한 지침서가 되는 내용을 필두로 교육의 목표가 구체적으로 무엇을 의미하는지, 목표 달성을 위한 교육 과정 및 수업 구성의 아이디어는 어떠해야 하는지를 제시하고, 이를 향해 가는 과정으로서 숙의의 중요성을 강조한다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_17', image: 'book/book_17.jpg', title: '15소년 표류기', author: '쥘 베른', publisher: '팡세미니',
        style: '모험/프랑스소설', star: '★★★☆☆', price: '13500', Category: '판타지',
        previewPages: ['book/book_17_1.PNG', 'book/book_17_2.PNG', 'book/book_17_3.PNG', 'book/book_17_4.PNG', 'book/book_17_5.PNG'],
        summary: '시공을 초월한 인기를 꾸준히 얻어, 이제는 모험소설의 클래식이라고 할 수 있는 『15소년 표류기』가 쉽게 다듬어진 글과 콤팩트한 사이즈로 재탄생했다. ',
        description: '이 작품에서 열다섯 명 소년의 모험과 생존, 그리고 성장 이야기를 그려냈다. 이렇게 흥미진진하게 흘러가는 서사 속에 묵직한 주제도 여럿 담겼다. 바로 인간 본성에 관한 것으로, 작품 속 아이들은 자신들만의 사회를 만들고 법과 규칙을 제정하며 지도자를 선출하는 등 고도화된 사회적 동물로 그려진다. 또한 어른들과 마찬가지로 자신과 생각이 다른 사람을 적대시하고 권력을 가지려 애쓰며 위험에서 벗어나기 위해서 다른 이에게 피해를 주는 것도 서슴지 않는다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_18', image: 'book/book_18.jpg', title: '너에게 들려주는 단단한 말', author: '김종원', publisher: '퍼스트펭귄',
        style: '한국에세이', star: '★★★★☆', price: '18000', Category: '교양',
        previewPages: ['book/book_18_1.PNG', 'book/book_18_2.PNG', 'book/book_18_3.PNG', 'book/book_18_4.PNG', 'book/book_18_5.PNG'],
        summary: '"김종원 작가의 10대들을 위한 문장" 김종원 작가가 처음으로 쓴 청소년을 위한 인생철학 에세이다. ‘나’라는 존재와 친구와의 관계, 공부와 성적, 꿈과 진로 등에 관한 고민이 커지는 청소년기는 인생이란 여정에서 어둡고 막막한 터널을 처음으로 마주하는 시기다. 어떤 생각을 키우고, 어떤 마음을 갖느냐에 따라 앞으로 펼쳐질 삶의 모양이 달라질 수도 있기에 저자는 단어 하나, 문장 하나에도 온 마음을 담았다.“그 하룻밤, 그 책 한 권, 그 한 줄이 인생을 바꿀지도 모른다”라고 했던 니체의 말처럼, 지금 각자의 고민을 안고 힘들어하는 청소년들의 삶이 긍정으로 바뀔 순간을 떠올리며 책을 완성했다고 한다. 여기에는 자존감, 관계, 꿈, 가치관, 지성에 관한 70가지의 빛나는 문장들이 가득 담겨 있다. 혼란스럽고 불확실한 것들이 가득한 세상에서 10대들의 마음을 단단하게 잡아줄 이 문장들을 읽고, 따라 쓰다 보면 지금의 많은 고민과 문제들을 해결해 나갈 내면의 힘을 키울 수 있을 것이다.',
        description: '인생의 가치는 비판받지 않는 것이 아니라 ‘그럼에도 불구하고’ 깨달음을 얻겠다는 의지에 있으니 전혀 신경 쓰지 마세요. 그저 여러분은 스스로 생각한 것을 자신 있게 세상에 보여주면 됩니다. 결과는 내가 결정할 수 없지만, 시작과 과정은 늘 내가 주도할 수 있으며 그 안에 가치를 담을 수 있으니까요. +++ 뜻이 분명하고 진실한 사람은 어떤 비판의 소리도 이겨냅니다. 그들이 아무리 뒤에서 화살을 쏴도나는 늘 전진하기 때문에 화살이 떨어진 자리에 나는 없습니다',        
        relatedArticles: [
            { title: '[책마을] 여름방학 맞아 청소년 책 인기, 인생철학 에세이 [너에게…] 2위', link: 'https://www.hankyung.com/article/2024071961101' },
            { title: '[7월 4주 베스트셀러] <너에게 들려주는 단단한 말> 종합 1위, 휴가철 맞아 소설·에세이 인기', link: 'http://sisa-n.com/View.aspx?No=3316541' }
        ]
    },

    {
        id: 'book_19', image: 'book/book_19.jpg', title: '하루 한 장 나의 어휘력을 위한 필사 노트', author: '유선경', publisher: '위즈덤하우스',
        style: '교양/인문학', star: '★★★☆☆', price: '23800', Category: '교양',
        previewPages: ['book/book_19_1.PNG', 'book/book_19_2.PNG', 'book/book_19_3.PNG', 'book/book_19_4.PNG', 'book/book_19_5.PNG'],
        summary: '‘어른의 어휘력‘으로 대중에게 어휘력과 문해력이라는 화두를 던진 유선경 작가의 첫 번째 필사한 책이다. 전작에서 ‘어휘력으로 세상을 인식하는 통찰을 제공’했다면 이 책에서는 어휘력과 문장력, 문해력을 끌어올리는 구체적인 방법 ‘필사’를 소개한다. 특히, 어휘력은 책 읽기만으로 향상되기 힘들다고 지적하며, 어휘력을 기르는 구체적인 방법과 그에 따른 필사 가이드를 단계별로 세세하게 공유한다.',
        description: '필사할 문장에 등장하는 중요한 어휘와 표현에 대한 해설이 제공되며, 이를 통해 독자는 단순히 베껴 쓰는 것이 아니라, 단어의 의미와 사용 방법을 깊이 이해할 수 있다. 또한, 필사한 내용을 기반으로 자신만의 문장을 만들어 보거나, 일상에서 어떻게 응용할 수 있을지 생각해 보는 연습을 권장한다. 이는 배운 어휘와 표현을 더욱 확실히 나의 것으로 만드는 데 도움 준다.',
        relatedArticles: [
            { title: '[베스트셀러]하루 한 장 나의 어휘력을 위한 필사 노트 1위', link: 'https://www.newsis.com/view/NISX20240711_0002808004' },
            { title: '설현도 푹 빠졌다…`읽는 책` 인기 넘은 `쓰는 책`의 매력[위클리 핫북]', link: 'https://m.edaily.co.kr/News/Read?newsId=01108646638954848&mediaCodeNo=257' },
            { title: '30대 남녀 읽는 책 달라…최근 판매로 알아보는 책 소비 경향', link: 'https://m.news.nate.com/view/20240715n02045' },
            { title: '금일이 금요일? 중식은 중국음식? 문해력 키우는 책 쏟아진다', link: 'https://www.msn.com/ko-kr/news/other/%EA%B8%88%EC%9D%BC%EC%9D%B4-%EA%B8%88%EC%9A%94%EC%9D%BC-%EC%A4%91%EC%8B%9D%EC%9D%80-%EC%A4%91%EA%B5%AD%EC%9D%8C%EC%8B%9D-%EB%AC%B8%ED%95%B4%EB%A0%A5-%ED%82%A4%EC%9A%B0%EB%8A%94-%EC%B1%85-%EC%8F%9F%EC%95%84%EC%A7%84%EB%8B%A4/ar-BB1q61D4?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1' },
            { title: '[책마을] 방학에 서점가 청소년 특수…아이들용 에세이·소설 인기', link: 'https://www.hankyung.com/article/2024072623341' }
        ]
    },

    {
        id: 'book_20', image: 'book/book_20.jpg', title: '적산가옥의 유령', author: '조예은', publisher: '현대문학',
        style: '공포소설', star: '★★★★☆', price: '15000', Category: '액션/스릴러',
        previewPages: ['book/book_20_1.PNG', 'book/book_20_2.PNG', 'book/book_20_3.PNG', 'book/book_20_4.PNG', 'book/book_20_5.PNG'],
        summary: '이 소설은 일제 식민지 시대를 배경으로 한 적산가옥에 얽힌 비밀과 유령 이야기를 중심으로 전개된다. 저자 조예은은 한국 공포 문학의 새로운 지평을 열며 독자들에게 강렬한 인상을 남겨왔다.',
        description: '이 이야기는 10월의 어느 새벽, 강풍이 휘몰아치는 가운데 외증조모의 기이한 죽음으로 시작된다. 외증조모는 바닥에 귀를 대고 마치 저 밑에서 들려오는 쇠를 들으려는 듯한 자세로 50년 이상 살아온 적산가옥 별채에서 쓰러져 다시 일어나지 못한다. 유연에 따라 적산가옥에 살게 된 주인공 현운주는 그곳에서 가엽고 끔찍한 망령 가네모토 유카타를 마주한다. 그는 오랜 시간 피와 비명을 머금고 살아온 적산가온 별채에 숨겨진 비밀을 하나씩 밝혀나가게 된다. 집은 자신의 벽에 깃든 모든 역사를 기억하며, 안에 살던 사람은 죽어도 집은 남아 역사를 간직한다.',
        relatedArticles: [
            { title: '"죽은 사람이 물컵이라도 떨어뜨리잖아요"...조예은이 다정한 호러소설 쓰는 이유', link: 'https://www.hankookilbo.com/News/Read/A2024072912450004003' },
            { title: '장마철 즐기기 좋은 시원하고 짜릿한 ‘추리소설’…‘당신이 누군가를 죽였다’ 外', link: 'https://www.kyeonggi.com/article/20240724580131' },
            { title: '다정한 이웃 外', link: 'https://www.khan.co.kr/culture/book/article/202407182016045' }
        ]
    },

    {
        id: 'book_21', image: 'book/book_21.jpg', title: '(20% 할인가)<br>빨간 머리 앤 이야기 세트 - 전3권', author: '루시 모드 몽고메리', publisher: '시공주니어',
        style: '동화', star: '★★★★★', price: '28800', Category: ['할인','동화'],
        previewPages: ['book/book_21_1.PNG', 'book/book_21_2.PNG', 'book/book_21_3.PNG', 'book/book_21_4.PNG', 'book/book_21_5.PNG'],
        summary: '동화로 뿐 아니라, 애니메이션이나 TV 드라마로도 많은 인기를 얻었던 바로 그 이야기, <빨간 머리 앤>과 <에이번리의 앤>, <레드먼드의 앤>이 새로운 옷을 갈아입고 나왔다. 400페이지 전후의 두툼한 무게감을 지니고, 편안한 미색 종이에 인쇄된 책은 언뜻 보기에도 무척이나 고급스러워 기쁨을 더한다',
        description: '앤은 그 신문이 무엇인지 바로 알아차리고 벌떡 일어섰다. 합격자 명단이 나왔다! 머리가 빙빙 돌고 심장이 아프도록 쿵쾅거렸다. 앤은 한 발짝도 움직일 수 없었다. 다이내나가 복도를지나 너무 흥분해서 노크도 하지 않고 방으로 뛰어들어오기까지 한 시간이나 걸린 것처럼 느껴졌다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_22', image: 'book/book_22.jpg', title: '(37% 할인가)<br>내 아버지로부터의 꿈', author: '버락 H. 오바마', publisher: '랜덤하우스코리아',
        style: '정치인', star: '★★★☆☆', price: '12000', Category: ['할인','시사'],
        previewPages: ['book/book_22_1.PNG', 'book/book_22_2.PNG', 'book/book_22_3.PNG', 'book/book_22_4.PNG', 'book/book_22_5.PNG'],
        summary: '아프리카계 혼혈미국인으로 태어나 세상의 편견과 차별을 딛고, 전세계가 주목하는 정치인이자 존경받는 리더가 된 검은 케네디 버락 오바마가 뜨겁게 써내려간 위대한 자기발견과 삶을 향한 끝없는 도전! 2007년 최고의 이슈이자 미국 최초의 강력한 흑인 대통령 후보, 오프라 윈프리,조지 소로스, 워렌 버핏 등 각계 명사들이 공개 지지하는 동시에, 가는 곳마다 록 스타를 방불케 하는 대중의 열광적 환호와 지지를 불러일으키는 인물인 버락 오바마의 자서전이다.',
        description: '이 책의 저자이자 주인공인 버락 오바마는 뉴욕에서 자기 아버지가 교통사고로 사망했다는 슬픈 소식을 듣는다. 저자에게 아버지는 단순히 한 사람의 남자가 아니라 신화 속의 주인공과 같은 존재였다. 아버지의 갑작스런 죽음이 계기가 되어서 저자는 유별난 가족사를 거슬러 올라가며 파란만장한 여행을 떠난다.1960년대 초반 순수하고 열정적인 젊은이였던 백인 어머니와 인종차별 폐지론자이자 유망한 케냐 흑인 유학생이었던 아버지의 사랑, 의붓아버지와 함께 인도네시아에서 보낸 유년기, 세상의 모진 냉대와 차별 속에서 방황하던 청소년기를 지나, 시카고 빈민 지역에서 공동체 조직 활동을 하던 일들이 펼쳐진다.이처럼 특이한 출생 배경과 성장환경으로 인해 버락 오바마는 아메리카와 아프리카, 아시아계 인종의 가족과 다양한 문화적 체험을 자산으로 갖게 되는데, 오프라 윈프리는 자신의 토크쇼에서 오바마의 가족을 일컬어 ‘미니 UN’이라 표현하기도 했다.진정한 변화를 위해서는 지역 환경뿐만 아니라 국가의 법과 정치 체계를 바꿔야 한다는 사실을 깨닫고 뒤늦게 하버드 대학원에 진학하기로 결심한 오바마는 가슴속에 오래 간직한 질문, 즉 ‘나는 누구인가, 어떻게 살 것인가’에 대한 해답을 찾아 아버지의 고향 케냐에 도착한다. 그곳에서 그는 자기 가족의 아프리카 계보를 접하고, 잔인한 빈곤과 부족간 갈등으로 점철되어 있는 나라에서 아버지가 인내와 희망의 정신으로 더 나은 미래를 향해 힘겹게 나아가며 살고 부대껴야 했던 아픈 진실을 깨닫는다. 그리고 마침내, 분열된 선대의 유산과 감동적으로 화해한다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_23', image: 'book/book_23.jpg', title: '(56% 할인가)<br>인간 실격', author: '다자이 오사무', publisher: '코너스톤',
        style: '고전소설', star: '☆☆☆☆☆', price: '3300', Category: ['할인','일본문학'],
        previewPages: ['book/nopreview.png'],
        summary: '누구보다 세상과 인간을 동경했으나 나약함과 순수함으로 인해 세상에서 버려지고 인간으로서의 자격마저 잃은 채 파멸되어가는 인물을 그려내며, 전 세계 독자들에게 많은 사랑을 받았던 다자이 오사무의 대표작 《인간 실격》. 인간의 내면 가장 깊숙한 곳의 존재 그 자체를 풀어낸 희유의 작품이라 평가받으며 오랫동안 세대와 국적을 뛰어넘으며 사랑받아온 이 책을, 코너스톤에서 1948년 오리지널 초판본 표지로 출간했다.',
        description: '《인간 실격》은 주인공 오바 요조가 자신의 삶에 대해 이야기하는 수기 형식으로 되어 있다. 주인공은 부유한 집안에서 태어났지만 부모의 무관심 속에 방치되어 아무도 믿지 못하고 세상과 인간에 대한 두려움을 간직한 채 살아간다. 누구보다 순수했던 그는 그 순수함 때문에 세상에 적응하지 못한다. 특히나 아무렇지도 않게 다른 이를 속이면서도 어떤 상처도 받지 않고 살아가는 인간이라는 존재에 대해 그리고 그런 인간의 삶에 대해 두려움을 느낀다. 하지만 그는 세상을 외면하지 못한다. 오히려 끊임없이 인간의 삶에 구애하며, 세상에 적응하려고 발버둥 치다가 결국 세상에 배신당하고 인간으로서의 자격조차 박탈당한 채 파멸해 가고 만다',
        relatedArticles: [
        ]
    },

    {
        id: 'book_24', image: 'book/book_24.jpg', title: '(66% 할인가)<br>전기밥솥 레시피', author: '호시노 나나코', publisher: '참돌',
        style: '생활요리', star: '★★★★★', price: '4400', Category: ['할인','요리'],
        previewPages: ['book/nopreview.png'],
        summary: '밥 짓기는 물론, 다양한 집밥 메뉴와 일품요리, 디저트까지 척척! 바쁠 때나 요리하기 귀찮을 때 전기밥솥에 맡겨만 주자. 재료를 넣고 취사 버튼만 꾹 누르면 놀라울 정도로 맛있고 다채로운 요리가 완성된다.《전기밥솥 레시피》는 누구에게나 사랑받는 레시피 20가지를 시작으로, 고기와 해산물 등 매일의 식사 준비에 유용한 재료별 레시피와 진공 저온 조리로 만드는 고급 요리와 건강식, 오래 두고 즐길 수 있는 보관 음식 레시피, 케이크와 푸딩 등 인기 디저트와 빵까지 71가지의 다양한 레시피를 소개하고 있어 여러분의 훌륭한 요리 가이드가 되어줄 것이다.',
        description: '전기밥솥으로 만들 수 있는 메뉴는 정말 무궁무진합니다. 생활 속 다양한 식재료를 활용한 집밥 메뉴는 물론이고, 전문 셰프가 요리한 것 같은 멋진 일품요리에 다양한 디저트까지 실패 없이 손쉽게 만들 수 있습니다.야들야들한 삼겹살 조림, 도톰한 토마토소스 햄버그스테이크 등 친숙한 일상 요리에서부터 카오만까이, 루로우판, 해산물스튜, 파에야 등 일품요리에 치즈케이크, 요거트, 푸딩 등 인기 디저트까지, 잔손이 많이 가거나 불 조절이 까다로운 요리도 손쉽게 조리가 가능해집니다.특별히 이번 《전기밥솥 레시피》에는 식재료 본연의 맛과 풍미가 담겨 있어 사랑받는 조리법인 ‘진공 저온 조리’ 레시피도 수록되어 있습니다. 전문 기술이 필요한 홈메이드 로스햄, 닭고기 콩피, 연어 케이퍼 허브마리네, 연어 레몬 화이트와인찜, 감주, 요거트 등도 버튼만 누르면 실패 없이 손쉽게 완성됩니다.전기밥솥 요리가 생소하다고요? 이 책의 레시피대로 차근차근 따라 하다 보면 간편함에 맛까지 보장되는 전기밥솥 요리만의 매력에 푹 빠지게 될 것입니다',
        relatedArticles: [
        ]
    },

    {
        id: 'book_25', image: 'book/book_25.jpg', title: '(62% 할인가)<br>365일 소박한 레시피와 일상', author: '와타나베 유코', publisher: '디자인이음',
        style: '생활요리', star: '★★★★★', price: '5000', Category: ['할인','요리'],
        previewPages: ['book/book_25_1.PNG', 'book/book_25_2.PNG', 'book/book_25_3.PNG', 'book/book_25_4.PNG', 'book/book_25_5.PNG'],
        summary: '일본 여성들의 대표 살림 선생님이자 요리 연구가인 와타나베 유코의 소박하고 따뜻한 일상이 담긴 요리 에세이다. 와타나베 유코는 무인양품에 칼럼을 기고하는 등 정갈하고 미니멀한 스타일링으로 일본에서 주목받고 있다. 일본에서 정월에 만들어 먹는 오세치 요리부터 한 해의 마지막 날에 먹는 메밀국수까지, 365일 동안의 소박한 레시피와 일상을 담았다. 시간의 흐름에 따라 책장을 넘기다보면, 그녀의 편안하고 소담한 일상을 오롯하게 경험할 수 있다. 와타나베 유코의 일상과 음식은 고즈넉하고 정갈하다. 음식과 사물, 인물에 대해 자연스럽고 다정한 글과 사진은 따뜻한 감동을 자아낸다.',
        description: '회의에 참석할 때마다 고베의 유명 빵집 프로인드리브 Freundich의 쿠키를 선물로 가져오는 여성 스태프가 있다. 항상 변함없는 것을 마주하면 안도감이 느껴진다. 상대에게 변화를 원하거나 자신이 변하기를 바라거나 변화해야 좋다고 생각되는 일도 많지만, 변하지 않는 일도 마찬가지로 중요하다는 생각이 들었다. 뭐, 그건 그렇고, 맛있는 쿠키에 맞춰 아삼티를 끓여서 우선은티 타임을….. ',
        relatedArticles: [
        ]
    },

    {
        id: 'book_26', image: 'book/book_26.jpg', title: '(70% 할인가)<br>그래도 괜찮아', author: '사노 요코', publisher: '북로드',
        style: '에세이', star: '★★☆☆☆', price: '3900', Category: ['할인','교양'],
        previewPages: ['book/book_26_1.PNG', 'book/book_26_2.PNG', 'book/book_26_3.PNG', 'book/book_26_4.PNG', 'book/book_26_5.PNG'],
        summary: '거침없고 솔직한 입담으로 수많은 한국 팬들의 마음을 사로잡은 에세이스트이자 그림책 작가 사노 요코의 초기 걸작 에세이집. 자기 자신에겐 시니컬하지만 타인은 속수무책으로 믿는 재치 넘치고 시원시원한 입담의 작가 사노 요코가 있기까지 그가 만났던 혹은 마주쳤던 사람들과의 다양한 추억담을 담고 있는 이 책은, 일상에서 쉽게 접할 수 있는 인물이나 사건임에도 그것을 특별하게 만드는 작가의 따뜻한 시선과 매력적인 화법이 인상적인 작품이다.',
        description: '“이혼한 무렵에 너무 혼란스러워서 매일 집에 늦게 들어갔어. 할머니한테 맡겨뒀는데 그게 원인이라네. 아이는 내가 필요했던 거래. 정말이지 미안해서.”어쩔 수 없지 않은가. 인생의 일대사인데 미동조차 하지 말라는 건가. 십 년도 더 지난 일을 어떻게 만회하라는 건가. 누군들 좋아서 이혼을 할까.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_27', image: 'book/book_27.jpg', title: '(50% 할인가)<br>피너츠 포스터 북', author: '찰스 M. 슐츠', publisher: '영진닷컴',
        style: '애니메이션', star: '★★★☆☆', price: '9000', Category: ['할인','애니메이션'],
        previewPages: ['book/book_27_1.PNG', 'book/book_27_2.PNG', 'book/book_27_3.PNG', 'book/book_27_4.PNG', 'book/book_27_5.PNG'],
        summary: 'M. 슐츠의 작품을 기념하기 위해 만든 특별한 20개의 포스터 모음집이다. 바로 뜯어서 전시할 수 있는 피너츠 캐릭터가 담겨 있다. 스누피의 주인인 찰리 브라운, 심술궂고 뽐내기 좋아하는 루시 반 펠트, 찰리 브라운의 강아지이자 동네에서 가장 사랑받는 비글! 스누피, 스누피의 단짝 우드스탁, 항상 답을 찾아 헤매는 고민 많은 소녀 샐리 브라운, 루시의 동생이자 찰리 브라운의 가장 친한 친구 라이너스 반 펠트 등 11명의 피너츠 친구들이 모두 모두 모였다.',
        description: '찰스 M. 슐츠의 인생이 담긴 피너츠와 친구들을 소개합니다! 스누피의 주인인 찰리 브라운, 심술궂고 뽐내기 좋아하는 루시 반 펠트, 찰리 브라운의 강아지이자 동네에서 가장 사랑받는 비글! 스누피, 스누피의 단짝 우드스탁, 항상 답을 찾아 헤매는 고민 많은 소녀 샐리 브라운, 루시의 동생이자 찰리 브라운의 가장 친한 친구 라이너스 반 펠트 등 11명의 피너츠 친구들이 모두 모두 모였어요. 이 책은 찰스 M. 슐츠의 작품을 기념하기 위해 만든 특별한 20개의 포스터 모음집입니다. 바로 뜯어서 전시할 수 있는 피너츠 캐릭터가 담겨 있습니다. 어디에서도 볼 수 없는 귀엽고 특별한 스누피 친구들을 나만의 소중한 공간에 전시해 보세요.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_28', image: 'book/book_28.jpg', title: '(58% 할인가)<br>목격자의 증언, 복음서', author: '리처드 보쿰', publisher: '성서유니온선교회',
        style: '신학', star: '★☆☆☆☆', price: '2500', Category: ['할인','신학'],
        previewPages: ['book/book_28_1.PNG', 'book/book_28_2.PNG', 'book/book_28_3.PNG', 'book/book_28_4.PNG', 'book/book_28_5.PNG'],
        summary: 'SU 신학총서 시리즈의 세 번째 책으로 선보이는 『목격자의 증언, 복음서』는 보컴이 『예수와 그 목격자들』에서 방대하고 치밀하게 전개하고 있는 주장을 집약적으로 담아냈다. 얇지만, 보컴이 어떻게 복음서의 역사성과 신뢰성을 회복하고 복음서 연구의 방향을 바꿔놓았다는 평을 듣게 됐는지 충분히 보여 주는 책이다.',
        description: '‘증언을 통한 예수’라는 용어를 통해 내가 의미하고자 하는 바는 예수와 가장 가까이 있었을 뿐 아니라 후에 자신들이 증언한 사건에 직접 참여했던 이들이 받아들인 인물로서의 예수다. 내가 주장해 온 대로, 복음서들 가운데 하나(요한복음)는 바로 그런 목격자에 의해 기록되었다. 다른 복음서들이 목격자들의 증언에 근거하여 그에 맞게 본문을 기록한 것과 달리 말이다. 한마디로 우리는 사복음서를 통해 목격자들이 전한 예수 이야기를 실질적으로 가지고 있는 셈이다._1. 서론 중에서',
        relatedArticles: [
        ]
    },

    {
        id: 'book_29', image: 'book/book_29.jpg', title: '(44% 할인가)<br>하바리움 이야기', author: '권미라', publisher: '영진닷컴',
        style: '공예', star: '★★☆☆☆', price: '9000', Category: ['할인','공예'],
        previewPages: ['book/book_29_1.PNG', 'book/book_29_2.PNG', 'book/book_29_3.PNG', 'book/book_29_4.PNG', 'book/book_29_5.PNG'],
        summary: '프리저브드 플라워를 구입하고 손질하는 방법부터 하버리움에 필요한 재료 준비 방법을 포함한 다양한 DIY 과정을 수록했다. 감성 가득한 생활 소품과 인테리어 용품을 하바리움으로 이용해서 만들 수 있다. 계절에 어울리는 소품과 기념일에 어울리는 소품 만들기도 담고 있으며, 소중한 사람에게 특별한 마음을 담아 선물할 수 있게 하바리움을 더 돋보이게 포장하는 방법도 포함하고 있다.',
        description: '하바리움(Herbarium)이란 보존 기능이 있는 식물표본 오일에 프리저브드 플라워나 드라이 플라워를 넣은 인테리어 소품입니다. 플라워 소재 외에 건조한 과일, 구슬, 모래 등을 넣으면 더 특별한 분위기를 연출할 수 있습니다. 병을 움직일 때마다 꽃들이 흔들리면서 마치 살아 움직이는 듯한 느낌을 줍니다. 《하바리움 이야기》는 프리저브드 플라워를 구입하고 손질하는 방법부터 하버리움에 필요한 재료 준비 방법을 포함한 다양한 DIY 과정을 수록했습니다. 감성 가득한 생활 소품과 인테리어 용품을 하바리움으로 이용해서 만들 수 있습니다. 계절에 어울리는 소품과 기념일에 어울리는 소품 만들기도 담고 있습니다. 또한, 소중한 사람에게 특별한 마음을 담아 선물할 수 있게 하바리움을 더 돋보이게 포장하는 방법도 포함하고 있습니다.',
        relatedArticles: [
        ]
    },

    {
        id: 'book_30', image: 'book/book_30.jpg', title: '(20% 할인가)<br>하이큐!! 1~45 세트 - 전45권', author: '후루다테 하루이치', publisher: '대원씨아이',
        style: '만화', star: '★★★★★', price: '198000', Category: ['할인','애니메이션'],
        previewPages: ['book/nopreview.png'],
        summary: '동료들과의 특별한 만남과 흘러내리는 소중한 땀, 그리고 정상을 향한 목표! 모두가 기다려왔던 [점프]식 왕도 스포츠만화, 전격 발매!!',
        description: '오늘도 내일도 마지막의 그 전날까지도, 무엇을 할래? 새창으로 보기 "그저 오늘도 내일도 마지막의 그 전날도 주의 깊게 최선을 다하고 운 좋게 [언제 끝나도 괜찮다]라고 늘 그렇게 생각하고 싶다."배구를 계속하든 그렇지 않든 지금 있는 그 자리에서, 날마다 배구하듯이, 착실히 하루를 쌓아 올리는 등장인물들. 그리고 나 역시, 이들처럼 오늘을 살고 내일을 기다리고 마지막의 전날을 맞이할 테지. 언제 끝나도 괜찮을 만큼 신중하게 하루를 쌓아가고 있는가? 최선의 끝에 따라오는 운을 내 것으로 만들고 있나?작은 종이 한 장에 빼곡히 그려진 배구 경기를 뚫어져라 바라보는 것만으로 모자라 그 한 켠에 몰래 숨어들고 싶어지는 그런 작품',
        relatedArticles: [
        ]
    },

    {
        id: 'book_31', image: 'book/book_31.jpg', title: 'Wonka', author: '로알드 달, 시빌 파운더', publisher: 'Viking Books for Young Readers',
        style: '영미소설', star: '★★★☆☆', price: '12300', Category: ['국외도서','영미'],
        previewPages: ['book/nopreview.png'],
        summary: '<Wonka>는 로알드 달 작가의 특유한 유머와 상상력으로 많은 사람들의 마음을 오랜 기간 사로잡은 <찰리와 초콜릿 공장>의 속편 소설이다.',
        description: '세상에서 가장 달콤한 여정과 좋은 일은 모두 꿈에서 시작된다. 마법사이자 초콜릿 메이커 [윌리 웡카]의 꿈은 디저트의 성지, [달콤 백화점]에서 자신만의 초콜릿 가게를 여는 것이다. 가진 것이고는 낡은 모자와 단돈 12소버린 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에서 머물게 된 "웡카"는 "스크러빗 부인"과 "블리처"의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 도둑 [움파 룸파]의 등장과 [달콤 백화점]을 독점한 초콜릿 카르텔의 강력한 견제까지 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데...',
        relatedArticles: [
        ]
    },

    {
        id: 'book_32', image: 'book/book_32.jpg', title: 'How to Steal a Dog', author: 'Barbara O\'Connor', publisher: 'Square Fish',
        style: '영미소설', star: '★★★★☆', price: '10200', Category: ['국외도서','영미'],
        previewPages: ['book/nopreview.png'],
        summary: '작가는 주인공이 처한 현실적 고통을 과하지 않은 유머러스함으로 포장했다. 덕분에 소설은 즐겁고, 따뜻하다. 소설 전면에 녹아 있는 현실성, 유머러스함, 열한 살 소녀의 천진난만함을 통해 "가족이란 무엇인가" "시련이 닥칠 때 가장 중요하게 붙들어야 하는 것은 무엇인가" 질문을 곱씹게 하는 작품이다. 영미권에서 새롭게 떠오르는 청소년 작가로 주목받고 있는 바바라 오코너의 장편소설로 작가는 이 소설 한 권으로 열네 개 문학부분 선정작이라는 타이틀을 거머쥐었다. 열한 살 소녀의 눈을 통해 가족과 인생의 소중함을 재발견하는 유쾌한 성장소설이다.',
        description: '조지나는 최근 자신에게 일어난 일을 믿을 수가 없다. 어느 날 학교에서 돌아와 보니, 아빠는 감쪽같이 사라져버렸고, 25센트 동전 꾸러미 세 개와 1달러짜리 지폐만 들어 있는 마요네즈 한 통뿐이다. 게다가 집주인은 집세를 내지 않았다고 즉각 방을 빼라고 한다. 그 때부터 조지나와 엄마, 동생은 자동차에서 자고 맥도널드 화장실에서 씻는 생활을 반복한다. 하루하루 평범한 생활을 동경하던 조지나의 눈에 돈 많은 집의 강아지 윌리가 들어왔다. 가족을 위한 기상천외한 "세상에서 가장 재기발랄한 집구하기 프로젝트"를 계획하는데…',
        relatedArticles: [
        ]
    },

    {
        id: 'book_33', image: 'book/book_33.jpg', title: 'Wonder', author: 'R. J. Palacio', publisher: 'Random House USA Inc',
        style: '영미소설', star: '★★★★★', price: '11900', Category: ['국외도서','영미'],
        previewPages: ['book/nopreview.png'],
        summary: '<Wonder>는 선천적 안면 기형을 가지고 태어난 열 살 소년 \'어기 풀먼(Auggie Pullman)\'의 이야기를 다루는 소설이다.이 소설은 어기의 첫 번재 학교 생활을 중심으로 전개되며, 그가 겪는 도전과 변화, 그리고 주변의 사람들과의 관계를 탐구한다.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_34', image: 'book/book_34.jpg', title: 'The Little Prince', author: '앙투안 드 생텍쥐페리', publisher: 'Harcourt',
        style: '영미소설', star: '★★★★★', price: '12600', Category: ['국외도서','영미'],
        previewPages: ['book/nopreview.png'],
        summary: '이 책은 어린 왕자와 조종사의 만남을 중심으로 한 철학적이고도 상징적인 이야기를 담고 있다. 단순한 어린이 동화처럼 보이지만, 삶, 사랑, 관계, 그리고 인간 본성에 대한 깊은 메시지를 전달한다.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_35', image: 'book/book_35.jpg', title: '容疑者Xの献身', author: '東野圭吾', publisher: '文春文庫',
        style: '일본소설', star: '★★★★★', price: '8900', Category: ['국외도서','일본'],
        previewPages: ['book/nopreview.png'],
        summary: '<백야행>, <비밀>, <게임의 이름은 유괴>의 작가 히가시노 게이고의 장편소설. 한 여자가 한 남자를 살해한다. 그녀를 너무도 사랑한 천재 수학자는 자신의 모든 인생을 걸고 완전범죄를 보장하고 나선다. 한편, 천재 물리학자가 이 정교한 살인 수식을 집요하게 파헤치기 시작하는데... 2006년 제134회 나오키 상 수상작이며, 2005년 말 \'이 미스터리가 최고\', \'본격 미스터리 베스트 10\', \'주간문춘 미스터리 베스트 10\'에서 1위를 휩쓴 수작이다.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_36', image: 'book/book_36.jpg', title: '成瀨は天下を取りにいく', author: '宮島未奈', publisher: '新潮社',
        style: '일본소설', star: '★★★★☆', price: '18290', Category: ['국외도서','일본'],
        previewPages: ['book/nopreview.png'],
        summary: '<成瀨は天下を取りにいく>는 일본의 작가인 宮島未奈(미야지마 미나)에 의해 쓰인 작품으로, 주로 역사적인 배경과 함께 정치적 야망, 그리고 개인의 성장 이야기를 다루고 있다.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_37', image: 'book/book_37.jpg', title: 'ランチの時間', author: '益田ミリ', publisher: '講談社',
        style: '에세이', star: '★★★★☆', price: '15520', Category: ['국외도서','일본'],
        previewPages: ['book/nopreview.png'],
        summary: '수많은 여성들의 공감을 얻으며 베스트셀러가 된 「수짱」 시리즈, 고령화 사회의 일상을 마스다 미리 특유의 시선으로 따뜻하게 그려낸 「평균 연령 60세 사와무라 씨 댁」 시리즈, 야무진 누나와 성실한 남동생의 공감 가득 힐링 대화를 담은 「우리누나」 시리즈 등을 펴내며, 다양한 독자층으로부터 열렬한 지지를 받고 있는 공감 만화가 마스다 미리가 최신간으로 한국 독자들을 찾아왔다. 전 세계가 펜데믹에 휩쓸릴 즈음, 잡지에 연재를 시작하면서 그렸던 만화를 한 권에 모았다. 언제 끝날지 모르는 상황이 계속되던 시기, 먼 나라의 요리가 그리워서 스웨덴 요리를 만들어보고, 화상 영어 회화 수업에서는 선생님에게 필리핀 요리를 배우며 집에서 먹는 런치의 시간이 이어진다. 시간이 흘러 책 후반부에는 차츰차츰 외출할 수 있게 되어 그동안 가고 싶었던 ‘마이센 본점’에서 따끈따끈한 안심 돈가스 샌드위치를 먹고, 나고야에서 철판 나폴리판을, 교토에서 타누키 우동을 먹는 에피소드가 담겨 있다.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_38', image: 'book/book_38.jpg', title: 'Learn German With Stories: Caf?in Berlin - 10 Short Stories For Beginners', author: 'Andre Klein', publisher: 'Createspace Independent Pub',
        style: '단편소설', star: '★★★☆☆', price: '15730', Category: ['국외도서','독일'],
        previewPages: ['book/nopreview.png'],
        summary: 'Your German Learning Journey Starts HereTake your German to the next level and boost your vocabulary, reading comprehension and grammar sense with the Dino lernt Deutsch German short story series for beginners Newly arrived in Berlin, a young man from Sicily is thrown headlong into an unfamiliar urban lifestyle of unkempt bachelor pads, evanescent romances and cosmopolitan encounters of the strangest kind. How does he manage the new language? Will he find work?Experience daily life in the German capital through the eyes of a newcomer, learn about the city and its people, and improve your German effortlessly and instantly.Learning German Doesn\'t Have To Be A ChoreJust got started learning the language of poets and thinkers? Memorized a few words but struggle with longer texts? This book is designed to help beginners make the leap from studying isolated words and phrases to reading (and enjoying ) German fiction.Using simplified sentence structures and a very basic vocabulary you can build upon, this German reader of 10 short stories for beginners is carefully crafted to allow even novice learners to fully immerse themselves in an authentic German learning experience.Each chapter comes with a complete German-English dictionary with special emphasis on collocative phrases (high frequency word combinations), short sentences and expressions designed for improved memorization.By working with these building blocks instead of just single words, learners can boost their active usage of new material instantly and make the language learning process more fluid and fun.',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_39', image: 'book/book_39.jpg', title: 'Ubungsgrammatik fur die Mittelstufe. Losungsheft', author: 'Friedrich Clamer,Roller, Helmut,Heilmann, Erhard G', publisher: 'Liebaug-Dartmann, Verlag',
        style: '교육', star: '★★★★☆', price: '10940', Category: ['국외도서','독일'],
        previewPages: ['book/nopreview.png'],
        summary: 'Zu der Ubungsgrammtik ist inzwischen eine erweiterte Fassung erschienen. Sinnvolle Erganzung: Kurz und bundig, Ubungsgrammatik fur die Grundstufe, Ubungen zum Wortschatz der deutschen SchriftspracheFur den Lehrer: Uber Grammatik',
        description: '',
        relatedArticles: [
        ]
    },

    {
        id: 'book_40', image: 'book/book_40.jpg', title: 'Mit Farbigen Transparenten Durch Das Jah', author: 'Michaela Kronshage', publisher: 'Freies Geistesleben Gmbh',
        style: '동화', star: '★★☆☆☆', price: '29640', Category: ['국외도서','독일'],
        previewPages: ['book/nopreview.png'],
        summary: 'Farben haben fur Kinder etwas Faszinierendes, besonders wenn durch das Schichten unterschiedlicher Farbtone und durch den Einfall des Lichtes neue, ganz andersartige Farbklange entstehen. Das Transparentpapier bietet sich fur solche Farbspiele als ideales Material an. Michaela Kronshage und Sylvia Schwartz zeigen in ihrem Buch, wie sich fur jede Jahreszeit Transparente gestalten lassen, die den Alltag im Kindergarten und zu Hause farbenfroh begleiten.',
        description: '',
        relatedArticles: [
        ]
    }

];