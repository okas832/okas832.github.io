const { createApp } = Vue;

createApp({
  data() {
    return {
      profile: {
        name: "Minyeop Choi",
        role: "Security Researcher & Reverse Engineer",
        summary:
          "I am a security researcher specializing in binary analysis. My core interests are binary analysis, low-level system behavior, and computer architecture. I am also interested in game-related problems, including research published at top venues. Outside of research, I actively participate in CTF competitions.",
        interests: ["Binary Analysis", "Computer Architecture", "Game Security"],
      },
      work: [
        {
          company: "S2W",
          companyUrl: "https://s2w.inc",
          team: "Threat Analysis Team (BLKSMTH)",
          level: "Professional",
          period: "2023.04 ~ Present",
          focus: "Threat Intelligence, focusing on malware analysis",
          highlights: [
            {
              title:
                "Detailed Analysis of DarkGate; Investigating new top-trend backdoor malware",
              url: "https://medium.com/s2wblog/detailed-analysis-of-darkgate-investigating-new-top-trend-backdoor-malware-0545ecf5f606",
            },
            {
              title:
                "RustDoor and GateDoor: A New Pair of Weapons Disguised as Legitimate Software by Suspected Cybercriminal",
              url: "https://medium.com/s2wblog/rustdoor-and-gatedoor-a-new-pair-of-weapons-disguised-as-legitimate-software-by-suspected-34c94e558b40",
            },
          ],
        },
      ],
      education: [
        {
          school: "KAIST",
          program: "M.S. Graduate School of Information Security",
          degreeType: "M.S.",
          lab: "SoftSec Lab",
          labUrl: "https://softsec.kaist.ac.kr/",
          advisor: "Sang Kil Cha",
          period: "2021.03 ~ 2023.02",
          leadershipTitle: "Student Leader, SoftSec Lab",
          leadershipPeriod: "2021.03 ~ 2023.02",
        },
        {
          school: "KAIST",
          program: "B.S. Advanced major on Computer Science",
          degreeType: "B.S.",
          period: "2016.03 ~ 2020.08",
        },
        {
          school: "Jeonbuk Science High School",
          period: "2014.03 ~ 2016.02",
        },
      ],
      experiences: [
        {
          title: "Member of KAIST GoN",
          period: "2016.03 ~ Present",
          noteTag: "Leader",
          notePeriod: "2018.03 ~ 2019.02",
        },
        {
          titlePrefix: "Member of ",
          titleLinkText: "Super Guesser",
          url: "https://guesser.team/",
          period: "2021.07 ~ Present",
        },
        { title: "KITRI BoB 5th - 취약점분석 트랙", period: "2016.07 ~ 2016.12" },
        {
          title: "Student Senior, KAIST Computer Emergency Response Team (CERT)",
          period: "2017.07 ~ 2020.01",
        },
      ],
      publications: [
        {
          title: "BotScreen: Trust Everybody, but Cut the Aimbots Yourself",
          url: "https://www.usenix.org/conference/usenixsecurity23/presentation/choi",
          authors: "Minyeop Choi, Gihyuk Ko, and Sang Kil Cha",
          venue: "USENIX Security '23",
          award: "Distinguished Paper Award",
          highlight: true,
          extraLabel: "KAIST Breakthroughs Spring 2024 Vol. 22",
          extraUrl: "https://breakthroughs.kaist.ac.kr/sub02/view/id/499",
        },
        {
          title:
            "Secrets of Gosu: Understanding Physical Combat Skills of Professional Players in First-Person Shooters",
          url: "https://dl.acm.org/doi/abs/10.1145/3411764.3445217",
          authors:
            "Eunji Park, Sangyoon Lee, Auejin Ham, Minyeop Choi, Sunjun Kim, and Byungjoo Lee",
          venue: "ACM CHI 2021",
          award: "Honorable Mention Award",
        },
      ],
      ctfParticipated: [
        { name: "DEFCON 32 CTF", rank: "Finalist", team: "Hypeboy" },
        { name: "DEFCON 27 CTF", rank: "Finalist", team: "KaisHack GoN" },
        { name: "DEFCON 26 CTF", rank: "Finalist", team: "KaisHack PLUS GoN" },
        { name: "Plaid CTF 2024", rank: "1st", team: "Hypeboy" },
        { name: "Plaid CTF 2018", rank: "4th", team: "KaisHack+PLUS+GoN" },
        { name: "SECCON CTF 13 International Finals", rank: "2nd", team: "Super Guesser" },
        { name: "SECCON CTF 2023 International Finals", rank: "5th", team: "Super Guesser" },
        { name: "SECCON CTF 2022 International Finals", rank: "5th", team: "Super Guesser" },
        { name: "SECCON 2020 OnlineCTF", rank: "1st", team: "HangulSarang" },
        { name: "SECCON CTF 2016", rank: "Finalist", team: "KAIST GoN" },
        { name: "CODEGATE CTF 2022 General Division", rank: "3rd", team: "본선 온라인 기원" },
        { name: "CODEGATE CTF 2019 University Division", rank: "3rd", team: "KAIST GoN" },
        { name: "CODEGATE CTF 2018 University Division", rank: "1st", team: "KAIST GoN" },
        { name: "zer0pts CTF 2021", rank: "2nd", team: "K-Students" },
        { name: "TokyoWesterns CTF 6th 2020", rank: "1st", team: "D0G$" },
        { name: "LINE CTF 2022", rank: "2nd", team: "Super HexaGoN" },
        { name: "BLACKHAT MEA CTF 2025 Final", rank: "4nd", team: "Guper Suesser" },
        { name: "BLACKHAT MEA CTF 2024 Final", rank: "4nd", team: "Guper Suesser" },
        { name: "BLACKHAT MEA CTF 2022 Final", rank: "2nd", team: "{{7*7}}" },
        { name: "Midnight Sun CTF 2020", rank: "Finalist", team: "GoN x zer0pts" },
      ],
      ctfOrganized: [
        "WACON 2023",
        "WACON 2022",
        "Cyber Operation Contest 2020",
        "CODEGATE CTF 2020",
        "Cyber Operation Contest 2019",
        "Samsung CTF 2018",
      ],
      contributions: ["ICSE 2020 - Committee Member in Live! Team Korea (Virtualization-track)"],
      etc: ['Operating private game clan "백병원" (Joined 2018.10, Clan leader since 2020.06)'],
      year: new Date().getFullYear(),
    };
  },
  methods: {
    boldMyName(authors) {
      return authors.replace("Minyeop Choi", "<strong>Minyeop Choi</strong>");
    },
  },
  template: `
    <main class="page">
      <header class="hero reveal">
        <p class="eyebrow">INTRODUCTION</p>
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="summary">{{ profile.summary }}</p>
        <div class="chips">
          <span v-for="interest in profile.interests" :key="interest" class="chip">{{ interest }}</span>
        </div>
      </header>

      <section class="card reveal">
        <h2>Work Experience</h2>
        <article v-for="item in work" :key="item.company + item.period" class="item">
          <h3><a :href="item.companyUrl" target="_blank" rel="noreferrer">{{ item.company }}</a></h3>
          <p class="meta">{{ item.team }} · {{ item.level }} · {{ item.period }}</p>
          <p>{{ item.focus }}</p>
          <ul>
            <li v-for="h in item.highlights" :key="h.url">
              <a :href="h.url" target="_blank" rel="noreferrer">{{ h.title }}</a>
            </li>
          </ul>
        </article>
      </section>

      <section class="grid">
        <section class="card reveal">
          <h2>Education</h2>
          <article v-for="item in education" :key="item.school + item.program + item.period" class="item edu-item">
            <div class="edu-head">
              <h3>{{ item.school }}</h3>
              <span v-if="item.degreeType" class="edu-badge">{{ item.degreeType }}</span>
            </div>
            <p v-if="item.program" class="edu-program">{{ item.program }}</p>
            <p class="meta">{{ item.period }}</p>
            <div v-if="item.lab" class="edu-subblock">
              <p class="edu-line">
                Lab:
                <a :href="item.labUrl" target="_blank" rel="noreferrer">{{ item.lab }}</a>
              </p>
              <p class="edu-line">Advisor: {{ item.advisor }}</p>
            </div>
            <div v-if="item.leadershipTitle" class="edu-subblock">
              <p class="edu-line"><strong>{{ item.leadershipTitle }}</strong></p>
              <p class="edu-line">{{ item.leadershipPeriod }}</p>
            </div>
          </article>
        </section>

        <section class="card reveal">
          <h2>Experiences</h2>
          <div class="exp-list">
            <article v-for="item in experiences" :key="item.title + item.period" class="exp-item">
              <h3 class="exp-title">
                <template v-if="item.titleLinkText">
                  {{ item.titlePrefix }}<a :href="item.url" target="_blank" rel="noreferrer">{{ item.titleLinkText }}</a>
                </template>
                <template v-else-if="item.url">
                  <a :href="item.url" target="_blank" rel="noreferrer">{{ item.title }}</a>
                </template>
                <template v-else>{{ item.title }}</template>
              </h3>
              <div class="exp-meta-row">
                <span class="tag tag-period">{{ item.period }}</span>
                <span v-if="item.noteTag" class="tag">
                  {{ item.noteTag }}<template v-if="item.notePeriod"> ({{ item.notePeriod }})</template>
                </span>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section class="card reveal">
        <h2>Publications</h2>
        <article v-for="pub in publications" :key="pub.url" class="item pub-item" :class="{ 'pub-highlight': pub.highlight }">
          <h3><a :href="pub.url" target="_blank" rel="noreferrer">{{ pub.title }}</a></h3>
          <p class="pub-authors" v-html="boldMyName(pub.authors)"></p>
          <div class="pub-meta-row">
            <span class="tag tag-period">{{ pub.venue }}</span>
            <span class="tag tag-award">{{ pub.award }}</span>
          </div>
          <p v-if="pub.extraUrl" class="pub-extra">
            Featured:
            <a :href="pub.extraUrl" target="_blank" rel="noreferrer">{{ pub.extraLabel }}</a>
          </p>
        </article>
      </section>

      <section class="card reveal">
        <h2>CTF Participated</h2>
        <div class="ctf-list">
          <article v-for="entry in ctfParticipated" :key="entry.name + entry.rank + entry.team" class="ctf-row">
            <p class="ctf-name">{{ entry.name }}</p>
            <p class="ctf-meta"><strong>{{ entry.rank }}</strong> · {{ entry.team }}</p>
          </article>
        </div>
      </section>

      <section class="card reveal">
        <h2>CTF Organized</h2>
        <ul class="tight">
          <li v-for="entry in ctfOrganized" :key="entry">{{ entry }}</li>
        </ul>
      </section>

      <section class="card reveal">
        <h2>Contributions</h2>
        <ul class="tight">
          <li v-for="entry in contributions" :key="entry">{{ entry }}</li>
        </ul>
      </section>

      <section class="card reveal">
        <h2>Etc</h2>
        <ul class="tight">
          <li v-for="entry in etc" :key="entry">{{ entry }}</li>
        </ul>
      </section>

      <footer class="reveal">
        <p>© {{ year }} Minyeop Choi</p>
      </footer>
    </main>
  `,
}).mount("#app");
