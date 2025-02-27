import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import ModeIcon from '@mui/icons-material/Mode';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TryIcon from '@mui/icons-material/Try';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const EMAILPAGES = [{
    text: "Inbox",
    href: "#inbox",
    icon: MailIcon,
},{
    text:"Starred",
    href: "#starred ",
    icon: StarIcon,
},{
    text: "Sent",
    href: "#sent",
    icon : SendIcon,
},{
    text:"Draft",
    href: "#draft ",
    icon: ModeIcon,
},{
    text:"Spam",
    href: "#spam",
    icon: WarningAmberIcon,
},{
    text:"Important",
    href: "#important",
    icon: TryIcon,
},{
    text:"Bin",
    href: "#bin",
    icon: DeleteForeverIcon,
}];

// create fake inbox data
export const INBOXLIST = [
  {
    id: 1,
    starred: false,
    userFrom: "Jullu Jalal",
    label: "Primary",
    title: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
  },
  {
    id: 2,
    starred: false,
    userFrom: "Minerva Barnett",
    label: "Work",
    title: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
  },
  {
    id: 3,
    starred: false,
    userFrom: "Peter Lewis",
    label: "Friends",
    title: "Vacation Home Rental Success",
    time: "7:52 PM",
  },
  {
    id: 4,
    starred: true,
    userFrom: "Anthony Briggs",
    label: "",
    title: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
  },
  {
    id: 5,
    starred: false,
    userFrom: "Clifford Morgan",
    label: "Social",
    title: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
  },
  {
    id: 6,
    starred: false,
    userFrom: "Cecilia Webster",
    label: "Friends",
    title: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
  },
  {
    id: 7,
    starred: false,
    userFrom: "Harvey Manning",
    label: "",
    title: "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
  },
  {
    id: 8,
    starred: false,
    userFrom: "Willie Blake",
    label: "Primary",
    title: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
  },
  {
    id: 9,
    starred: false,
    userFrom: "Minerva Barnett",
    label: "Work",
    title: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
  },
  {
    id: 10,
    starred: true,
    userFrom: "Fanny Weaver",
    label: "",
    title: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
  },
  {
    id: 11,
    starred: false,
    userFrom: "Olga Hogan",
    label: "Social",
    title: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
  },
  {
    id: 12,
    starred: false,
    userFrom: "Lora Houston",
    label: "Friends",
    title: "Vacation Home Rental Success",
    time: "7:52 PM",
  },
];
