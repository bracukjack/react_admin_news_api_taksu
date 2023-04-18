import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Article from "./Pages/Articles/Index";
import Blog from "./Pages/Blogs/Index";
import Reports from "./Pages/Reports";
import {
  ArticleRounded,
  Assessment,
  Home,
  Newspaper,
} from "@mui/icons-material";
import BlogsList from "./Pages/Blogs/BlogsList";
import { ArticleCreate } from "./Pages/Articles/ArticleCreate";
import { ArticleEdit } from "./Pages/Articles/ArticleEdit";
import { BlogsCreate } from "./Pages/Blogs/BlogsCreate";
import { BlogsEdit } from "./Pages/Blogs/BlogsEdit";

const dataProvider = jsonServerProvider(
  "https://api.spaceflightnewsapi.net/v4"
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      icon={ArticleRounded}
      {...Article}
      create={ArticleCreate}
      edit={ArticleEdit}
    />
    <Resource
      icon={Newspaper}
      {...Blog}
      create={BlogsCreate}
      edit={BlogsEdit}
    />
    <Resource icon={Assessment} {...Reports} />
  </Admin>
);

export default App;
