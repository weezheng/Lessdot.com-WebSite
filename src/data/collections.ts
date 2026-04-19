import { 
  TrendingUp, 
  Database, 
  Brain, 
  Home, 
  Heart, 
  Coins, 
  BookOpen, 
  Lightbulb,
  Compass,
  Link as LinkIcon
} from "lucide-react";

export type CollectionItem = {
  title: string;
  url: string;
  description: string;
};

export type CollectionCategory = {
  id: string;
  name: string;
  icon: any;
  items: CollectionItem[];
};

export const collections: CollectionCategory[] = [
  {
    id: "trading",
    name: "Trading",
    icon: TrendingUp,
    items: [
      { title: "Forex Factory", url: "https://www.forexfactory.com/", description: "Economic calendar and market sentiment." },
      { title: "TradingView", url: "https://www.tradingview.com/", description: "Advanced charting and social trading platform." }
    ]
  },
  {
    id: "data-ai",
    name: "Data & AI",
    icon: Brain,
    items: [
      { title: "Hugging Face", url: "https://huggingface.co/", description: "The AI community building the future." },
      { title: "Kaggle", url: "https://www.kaggle.com/", description: "Data science competitions and datasets." }
    ]
  },
  {
    id: "home-automation",
    name: "Home Automation",
    icon: Home,
    items: [
      { title: "Home Assistant", url: "https://www.home-assistant.io/", description: "Open source home automation that puts local control first." }
    ]
  },
  {
    id: "fire-life",
    name: "FIRE & Life",
    icon: Coins,
    items: [
      { title: "Mr. Money Mustache", url: "https://www.mrmoneymustache.com/", description: "Financial freedom through badassity." }
    ]
  },
  {
    id: "philosophy",
    name: "Philosophy & Buddhism",
    icon: Lightbulb,
    items: [
      { title: "Access to Insight", url: "https://www.accesstoinsight.org/", description: "Readings in Theravada Buddhism." }
    ]
  },
  {
    id: "books",
    name: "Book List",
    icon: BookOpen,
    items: [
      { title: "Goodreads", url: "https://www.goodreads.com/", description: "Track your reading list and discover new books." }
    ]
  }
];
