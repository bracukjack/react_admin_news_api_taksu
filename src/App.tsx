import { Admin, Resource } from "react-admin";
import Reports from "./Pages/Reports";
import { ArticleRounded, Assessment, Newspaper } from "@mui/icons-material";
import { ArticlesCreate } from "./Pages/Articles/ArticlesCreate";
import { ArticlesEdit } from "./Pages/Articles/ArticlesEdit";
import { BlogsCreate } from "./Pages/Blogs/BlogsCreate";
import { BlogsEdit } from "./Pages/Blogs/BlogsEdit";
import ArticlesList from "./Pages/Articles/ArticlesList";
import ArticlesShow from "./Pages/Articles/ArticlesShow";
import BlogsList from "./Pages/Blogs/BlogsList";
import BlogsShow from "./Pages/Blogs/BlogsShow";
import dataProvider from "./Components/DataProviders";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      icon={ArticleRounded}
      list={ArticlesList}
      create={ArticlesCreate}
      edit={ArticlesEdit}
      show={ArticlesShow}
      name={"Articles"}
    />
    <Resource
      icon={Newspaper}
      list={BlogsList}
      create={BlogsCreate}
      edit={BlogsEdit}
      show={BlogsShow}
      name={"Blogs"}
    />
    <Resource icon={Assessment} {...Reports} />
  </Admin>
);

export default App;
