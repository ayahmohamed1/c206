export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
  favoritePhotos?: string[];
  videoUrl?: string;
}

const defaultThings: string[] = [
  "Get engaged & build a beautiful life together 💍",
  "Sit on the beach in winter and hug each other tightly 🌊",
  "Travel together to all our dream destinations ✈️",
  "Walk in the rain holding hands and never let go 🌧️",
  "Grow old together, loving you more every single day 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
 ` You are my safe place and the only person i can be truly myself with love your hair your eyes, adore all things about you 
And the way you say “OMAAR” to me🤣`,
];

const ahmedGift: GiftData = {
  senderName: "omar",
  receiverName: "renad",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, renad! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "Special day for us, I hope we come back for a minute from this day",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 19th Birthday, renad! 🎂✨",
  birthdayWishesMessage:
    `Hi reno, you know what’s between us no one in world know how much we love us even if we didnt talk or we have distance between us that never means we lost our feelings i don't wanna to hide my love for you again i really cant live without you, you have a special place in my heart,my mind and my eyes.
Happy birthday to my number one love my number one girl my number one in everything, have no words to say how much i love you, i really think god so much to give me you in my life i see what you made in my mind and my heart every single time i talk to you at night and we starting hide our feelings🫪 I want to live the rest of my life with you spending all my money and my time to drawing your smile on your face everyday.
Happy birthday to MY RENAD❤️`,
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My renad, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
  favoritePhotos: [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
  ],
  videoUrl: "/images/video.mp4",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;