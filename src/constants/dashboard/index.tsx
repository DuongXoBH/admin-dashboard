import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookIcon from '@mui/icons-material/Book';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import BorderAllIcon from '@mui/icons-material/BorderAll';

export const DASHBOARD = [{
    text: "Dashboard",
    href: "/dashboard",
    icon: HistoryToggleOffIcon
},{
    text:"Products",
    href: "/products",
    icon: GridViewIcon
},{
    text: "Favorites",
    href: "/favorites",
    icon : FavoriteIcon
},{
    text:"Inbox",
    href: "/mail",
    icon: QuestionAnswerIcon
},{
    text:"Order Lists",
    href: "/order",
    icon: ChecklistIcon
},{
    text:"Product Stocks",
    href: "/stocks",
    icon: Inventory2Icon
}];

export const PAGE_DASHBOARD = [{
    text: "Pricing",
    href: "",
    icon: CardGiftcardIcon
},{
    text:"Calender",
    href: "",
    icon: CalendarMonthIcon
},{
    text: "To-Do",
    href: "",
    icon : BookIcon
},{
    text:"Contact",
    href: "",
    icon: PeopleAltIcon
},{
    text:"Invoice",
    href: "",
    icon: LocalAtmIcon
},{
    text:"UI Elements",
    href: "",
    icon: BarChartIcon
},{
    text:"Team",
    href: "",
    icon: PersonIcon
},{
    text:"Table",
    href: "",
    icon: BorderAllIcon
}];
