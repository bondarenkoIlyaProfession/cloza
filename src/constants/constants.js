import favouriteBorderIcon from "../assets/images/icons/favoriteBorder.svg";
import userIcon from "../assets/images/icons/user.svg";

export const navigation = [
  {
    id: 0,
    name: "Мужское",
    url: "male",
  },
  {
    id: 1,
    name: "Женское",
    url: "female",
  },
  {
    id: 2,
    name: "Унисекс",
    url: "unisex",
  },
  {
    id: 3,
    name: "Скидка",
    url: "sale",
    className: "highlighted",
  },
  {
    id: 4,
    name: "FAQ",
    url: "faq",
  },
  {
    id: 5,
    name: "Безопасная сделка",
    url: "safe",
  },
  {
    id: 6,
    name: "Правила пользования",
    url: "terms",
  },
];

export const actions = [
  {
    id: 0,
    src: favouriteBorderIcon,
    alt: "Heart icon",
    url: "liked",
    className: "header__actions-icon",
  },
  {
    id: 1,
    src: userIcon,
    alt: "User icon",
    url: "personal-account",
    className: "header__actions-icon",
  },
  {
    id: 2,
    name: "Продать",
    url: "personal-account",
    className: "header__actions-button",
  },
];
