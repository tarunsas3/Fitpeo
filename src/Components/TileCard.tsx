import {
  IconCoin,
  IconNotes,
  IconWallet,
  IconShoppingBag,
  IconArrowNarrowDown,
  IconArrowNarrowUp,
} from "@tabler/icons-react";

export const TileCard = [
  {
    icon: <IconCoin size={70} />,
    title: "Earning",
    value: "$198k",
    percentage: "37.8% ",
    text: " this month",
    changeIcon: <IconArrowNarrowUp color="green" size={15} />,
  },
  {
    icon: <IconNotes size={70} />,
    title: "Orders",
    value: "$2.4k",
    percentage: "2%",
    text: " this month",
    changeIcon: <IconArrowNarrowDown color="red" size={15} />,
  },
  {
    icon: <IconWallet size={70} />,
    title: "Balance",
    value: "$2.4k",
    percentage: "2%",
    text: " this month",
    changeIcon: <IconArrowNarrowDown color="red" size={15} />,
  },
  {
    icon: <IconShoppingBag size={70} />,
    title: "Total Sales",
    value: "$89k",
    percentage: "11%",
    text: " this month",
    changeIcon: <IconArrowNarrowUp color="green" size={15} />,
  },
];
