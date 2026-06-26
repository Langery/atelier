<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LetterCard from '../components/mail/LetterCard.vue'

const route = useRoute()

// 每封来信的展开/收起
const expanded = ref({ 1: true, 2: true, 3: true, 4: true })
const toggle = (id) => { expanded.value[id] = !expanded.value[id] }

const letters = [
  {
    id: 1,
    from: '读者 A',
    loc: '上海',
    date: '2026.04.18',
    to: '本卷的体例',
    status: '已公开',
    body: [
      '您好，',
      '刚读完"住吉的长屋"那一篇。有一处想确认——安藤忠雄本人是否真的在雨里站过三十分钟？',
      '我去年秋天也去过一次。上午十点开始下，到中午就停了。我没看到连下三天的雨季。',
      '但文中描述的"雨是建筑的一部分"这一句很对，雨天的住吉长屋的确比晴天更让人待得住。',
      '祝好。'
    ],
    reply: [
      '来信收到。',
      '三十分钟是编者自己的时间，不是安藤的。原稿在这里造成了一点歧义，下次修订会改成"我曾在大雨里站了半小时"。',
      '雨季连下三天是神户的实际情况，但不是那次。安藤在自传里写的是"他在那个院子里站了不知道多久"——这是引用，混淆到正文里了，编辑失误。',
      '谢谢指出。'
    ]
  },
  {
    id: 2,
    from: '读者 B',
    loc: '北京',
    date: '2026.01.18',
    to: '第 VIII 期 · 江南民居',
    status: '已公开',
    body: [
      '读到江南水乡那篇，勾起一些回忆。',
      '我在同里长大的。小时候白墙是白墙，黑瓦是黑瓦，没人觉得这是"灰度美学"。',
      '但您写"这组记录后来成了我理解中国建筑色彩观的起点"——我突然意识到，原来住在里面的人和站在外面的人，看到的是同一座建筑吗？',
      '这是我第一次意识到"观察"这件事是有立场的。',
      '谢谢。'
    ],
    reply: [
      '来信收到。',
      '"住在里面的人"和"站在外面的人"看到的不是同一座建筑——这是对的，但不全对。',
      '住在里面的人看的是建筑的"使用"，站在外面的人看的是建筑的"形状"。两者都是建筑，但两者都只是一半。',
      '做了 20 年观察之后，编者慢慢相信——只有承认自己只能看到一半，观察才能开始。',
      '谢谢您的提醒。'
    ]
  },
  {
    id: 3,
    from: '读者 C',
    loc: '京都',
    date: '2026.03.22',
    to: '图版配图',
    status: '已删节',
    body: [
      '关于本卷的配图。',
      '我注意到了您没有用现场照片，改用了一种风格化的、像水彩又像胶片的图。',
      '请问这是用 AI 生成的吗？',
      '我问这个问题没有偏见。我只是想了解——您不选择现场照的理由是什么？',
      '祝好。'
    ],
    reply: [
      '来信收到。',
      '是的，配图由编者用 AI 工具生成。',
      '不选择现场照的理由是：现场照是"那栋建筑是什么样子"，AI 配图是"我看到它时它在我脑子里变成了什么样子"。',
      '我倾向于后者。建筑被观察之后的样子，比它物理上的样子更值得记录。',
      '——这是一个尚未结论的选择。如果下一卷我换了方法，可能是另一种结论。',
      '谢谢您的直白。'
    ]
  },
  {
    id: 4,
    from: '某位读者',
    loc: '重庆',
    date: '2026.05.09',
    to: '（没写主题）',
    status: '已公开',
    body: [
      '老师你好。',
      '我是在朋友圈看到你那个推文的，写关于日本安藤那篇。',
      '我就想问一下，你说的那个什么中庭，那个雨水从天上下下来的东西，我想去看一下，但是不知道在哪里，你能告诉我吗。',
      '还有就是，我看你写的是 2024 年的事情，怎么现在才发出来啊。',
      '我也很喜欢建筑，但是不知道怎么开始学，你可以教教我吗',
      '谢谢'
    ],
    reply: [
      '来信收到。',
      '中庭是"住吉的长屋"——大阪市住吉区，阪堺电车"住吉鸟居前"站下，步行五分钟。门口很小，排队的人不多。',
      '2024 年观察的，2026 年才写出来——慢是我自己的问题，不是您的问题。',
      '入门的话，从一本您能看完的书开始。看完一本再开下一本，比同时看十本有用。',
      '具体哪一本，看您住在哪里。城里人从《城记》看起，村里人从《村庄的力气》看起。',
      '——"你能教教我吗"这句我没法回。原因您可以想。'
    ]
  }
]
</script>

<template>
  <section class="mail">
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>读者来信</h2>

    <div class="mail-intro">
      <p>
        本期收到几封值得公开的回信。原文略作删节，
        个别细节为保护来信者做了模糊处理。
        如希望继续给编者写信，请至
        <a href="mailto:hello@example.com">hello@example.com</a>，
        但请明白——来信不必回复。
      </p>
    </div>

    <LetterCard
      v-for="(l, idx) in letters"
      :key="l.id"
      :letter="l"
      :index="idx"
      :expanded="expanded[l.id]"
      @toggle="toggle"
    />
  </section>
</template>

<style scoped>
.mail-intro {
  margin: 2.5rem 0 4.5rem 0;
  max-width: 62ch;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--ink);
  border-left: 2px solid var(--ink);
  padding-left: 1.5rem;
}
.mail-intro a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
</style>
