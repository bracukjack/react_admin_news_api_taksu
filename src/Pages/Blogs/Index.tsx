import { BlogsCreate } from "./BlogsCreate";
import BlogsList from "./BlogsList";
import BlogsShow from "./BlogsShow";

export default {
  name: "blogs",
  list: BlogsList,
  show: BlogsShow,
  create: BlogsCreate,
};
