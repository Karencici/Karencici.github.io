const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://cdn.yiwu.com.tw/wp-content/uploads/unnamed.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["Hi", "I am huaid x", "17 years old"];

const about = [
    "My name is huaid x. I am 17 years old now!",
    "I am studing at HCCVS in Hsinchu.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

const projects = [
    {
        name: "My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp.",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/292868616_349710960671046_2640006171558040163_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=X_m48uSbnyMAX8hGrKr&_nc_ht=scontent.xx&oh=03_AVLgmaHOjIYvDnGQ5lgyQbhM-nTUXzTDIdtdtOQB52kRtA&oe=62F7CF24",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "AI Gomoku Gaming Agent",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/289895010_582776049917879_4581916470363167646_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=jpOZUAb0EKMAX8Rawfk&_nc_ht=scontent.xx&oh=03_AVJ3_ZO2MKk8L_Gcun8ptsbS2VfCBKMpwRFYhZ1afPuD5w&oe=62F6128D",
        skills: ["Python", "Algorithm", "Gomoku"],
        url: "https://github.com/anya-forger",
    },
    {
        name: "My Team",
        description: "My team members and I overcome difficulties time and time again in teamwork.",
        image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/293049535_517391196809019_7964367161406414752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=5tBT9DDniE0AX9tQ5ct&_nc_ht=scontent.xx&oh=03_AVIuIKtb3o4TBnhA7OZaauNBWQ4uk0wZshCcUcIogGWD8g&oe=62F92927",
        skills: ["Performings"],
        url: "https://spy-family.net",
    },
];

export { pic, titles, about, projects };
