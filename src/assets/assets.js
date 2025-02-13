import cart_icon from "./cart_icon.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.png";
import close_icon from "./close_icon.png";
import hero_img1 from "./hero_img1.jpg";
import exchange_icon from "./exchange_icon.png";
import return_icon from "./return_icon.png";
import support_icon from "./support_icon.png";
import email_icon from "./email_icon.png";
import about_img1 from "./about_img1.png";
import about_img2 from "./about_img2.png";
import delete_icon from "./delete_icon.png";
import emptycart_img from "./emptycart_img.png";
import p_img1_1 from "./p_img1_1.jpg";
import p_img1_2 from "./p_img1_2.jpg";
import p_img2_2 from "./p_img2_2.jpg";
import p_img1_3 from "./p_img1_3.jpg";
import p_img2_3 from "./p_img2_3.jpg";
import p_img3_3 from "./p_img3_3.jpg";
import p_img1_4 from "./p_img1_4.jpg";
import p_img2_4 from "./p_img2_4.jpg";
import p_img1_5 from "./p_img1_5.jpg";
import p_img1_6 from "./p_img1_6.jpg";
import p_img2_6 from "./p_img2_6.jpg";
import p_img3_6 from "./p_img3_6.jpg";
import p_img4_6 from "./p_img4_6.jpg";
import p_img1_7 from "./p_img1_7.jpg";
import p_img1_8 from "./p_img1_8.jpg";
import p_img2_8 from "./p_img2_8.jpg";
import p_img3_8 from "./p_img3_8.jpg";
import p_img1_9 from "./p_img1_9.jpg";
import p_img2_9 from "./p_img2_9.jpg";
import p_img1_10 from "./p_img1_10.jpg";
import p_img2_10 from "./p_img2_10.jpg";
import p_img1_11 from "./p_img1_11.jpg";
import p_img1_12 from "./p_img1_12.jpg";
import p_img1_13 from "./p_img1_13.jpg";
import p_img1_14 from "./p_img1_14.jpg";
import p_img2_14 from "./p_img2_14.jpg";
import p_img1_15 from "./p_img1_15.jpg";
import p_img2_15 from "./p_img2_15.jpg";
import p_img3_15 from "./p_img3_15.jpg";
import p_img1_16 from "./p_img1_16.jpg";
import p_img2_16 from "./p_img2_16.jpg";

export const assets = {
  cart_icon,
  profile_icon,
  menu_icon,
  close_icon,
  hero_img1,
  exchange_icon,
  support_icon,
  return_icon,
  email_icon,
  about_img1,
  about_img2,
  delete_icon,
  emptycart_img,
};

const products = [
  {
    _id: 1,
    name: "Women's Winter Hoodies",
    description:
      "Women's Plain Hoodies, Sweatshirt, Winter Sweater Hoodie for Women & Girls, Fleece",
    price: 200,
    image: [p_img1_1],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 2,
    name: "Printed Causal Shirt for Men",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img1_2, p_img2_2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 3,
    name: "Summer Short Dresses for Women.",
    description:
      "This fancy attractive western dress you wear for homes, vacations, shopping, college, together, holidays, special days, hangouts, clubs also regular wear. Western dresses are the perfect gifts for a birthday, Christmas, Valentine, anniversary, or unexpected surprise.",
    price: 900,
    image: [p_img1_3, p_img2_3, p_img3_3],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: new Date(),
    bestseller: true,
  },

  {
    _id: 4,
    name: "Korean Trousers",
    description:
      "Wear these solid high rise pant with top and heels depending on your preference.kindly ensure the size chart before buying.",
    price: 650,
    image: [p_img1_4, p_img2_4],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 5,
    name: "Sporty Technical Trousers",
    description:
      "Technical sporty trousers with elasticated waistband and adjustable front drawstring. Lined interior.",
    price: 6,
    image: [p_img1_5],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 6,
    name: "Men Stylish Chinos",
    description:
      "Comfortable Breathable Sweat-wicking Joggers Training Gym Running Fitness Casual Stretch Elastic Track Pant For Men",
    price: 50,
    image: [p_img1_6, p_img2_6, p_img3_6, p_img4_6],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M"],
    date: new Date(),
    bestseller: true,
  },

  {
    _id: 7,
    name: "Faux Fur Jacket",
    description:
      "Hooded, long-sleeved jacket. Concealed zip-up front hidden by a placket with snap buttons.",
    price: 8,
    image: [p_img1_7],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 8,
    name: "Fine-knit turtleneck jumper",
    description:
      "Short jumper in a soft, fine knit with a ribbed turtle neck, dropped shoulders and long sleeves. Ribbing at the cuffs and hem. Slit at each side of the hem.",
    price: 10,
    image: [p_img1_8, p_img2_8, p_img3_8],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 9,
    name: "Half Zipper Solid Sweatshirt for Men",
    description:
      "Combines the casual comfort of a sweatshirt with the functional style of a half-zip.",
    price: 9,
    image: [p_img1_9, p_img2_9],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 10,
    name: "Water-Repellent Technical Hooded Jacket",
    description:
      "Jacket in a special water-repellent fabric. With a hood, high neck with stoppers and long sleeves with adjustable cuffs. Zip-up front. Front pockets and a zipped chest pocket.",
    price: 20,
    image: [p_img1_10, p_img2_10],
    category: "Kids",
    subCategory: "Winterweasr",
    sizes: ["M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 11,
    name: "2-pack Regular Fit sweatshorts",
    description:
      "Shorts in lightweight sweatshirt fabric with a soft brushed inside. Covered elastication and a drawstring at the waist, diagonal welt side pockets and an open back pocket.",
    price: 11,
    image: [p_img1_11],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L"],
    date: new Date(),
    bestseller: true,
  },

  {
    _id: 12,
    name: "Sweatshirt dress",
    description:
      "Long-sleeved dress in sweatshirt fabric with a soft brushed inside. Round, rib-trimmed neckline, ribbed cuffs and a gently flared skirt with a gathered seam above the hem.",
    price: 15,
    image: [p_img1_12],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 13,
    name: "2-piece top and leggings set",
    description:
      "Set with a top and pair of leggings in supersoft jersey. Long-sleeved top with a ribbed trim around the neckline and a press-stud on one shoulder (except in sizes 2-4Y). Leggings with covered elastication at the waist.",
    price: 20,
    image: [p_img1_13],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 14,
    name: "Gathered off-the-shoulder top",
    description:
      "Fitted off-the-shoulder top in soft jersey with long sleeves. Wide, foldover top edge with gathers at the sides to create a gently draped effect.",
    price: 10,
    image: [p_img1_14, p_img2_14],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M"],
    date: new Date(),
    bestseller: false,
  },

  {
    _id: 15,
    name: "Linen-blend blouse",
    description:
      "Blouse in an airy weave made from a linen blend. Round neckline, buttons down the front and elbow-length balloon sleeves with covered elastication at the cuffs.",
    price: 7,
    image: [p_img1_15, p_img2_15, p_img3_15],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M"],
    date: new Date(),
    bestseller: true,
  },

  {
    _id: 16,
    name: "Regular Fit Waffled polo shirt",
    description:
      "Short-sleeved polo shirt in waffled jersey made from a cotton blend with a collar, a button placket and a straight-cut hem with a small slit at each side. Regular fit for comfortable wear and a classic silhouette.",
    price: 6,
    image: [p_img1_16, p_img2_16],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: new Date(),
    bestseller: true,
  },
];

export default products;
